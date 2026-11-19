import { db } from './db';

/**
 * Límite de intentos de inicio de sesión, guardado en Postgres: en Netlify cada petición puede
 * caer en una función distinta, así que un contador en memoria no serviría.
 *
 * Cada intento se "reserva" ANTES de comprobar la contraseña, con un incremento atómico:
 * así ni siquiera muchas peticiones en paralelo pasan del máximo.
 * Un ingreso correcto borra el contador de la cuenta y devuelve el intento a la IP.
 */

const MINUTO = 60 * 1000;

export type Limite = { maximo: number; ventanaMs: number; bloqueoMs: number };

export const LIMITES = {
  /** 5 intentos por cuenta cada 15 minutos; al pasarse, 15 minutos de espera. */
  cuenta: { maximo: 5, ventanaMs: 15 * MINUTO, bloqueoMs: 15 * MINUTO },
  /**
   * 30 por IP cada 15 minutos (frena a quien prueba muchas cuentas distintas).
   * Es más alto porque los empleados de un grifo suelen compartir la misma conexión.
   */
  ip: { maximo: 30, ventanaMs: 15 * MINUTO, bloqueoMs: 15 * MINUTO },
} satisfies Record<string, Limite>;

export const claveCuenta = (identificador: string) => `cuenta:${identificador}`;
export const claveIp = (ip: string) => `ip:${ip}`;

/**
 * IP del cliente. En Netlify, `x-nf-client-connection-ip` la pone la propia plataforma y no se
 * puede falsificar; `x-forwarded-for` queda como respaldo (desarrollo u otro hosting).
 */
export function ipDeLaPeticion(headers: Headers): string | null {
  const ip =
    headers.get('x-nf-client-connection-ip') ??
    headers.get('x-forwarded-for')?.split(',')[0] ??
    headers.get('x-real-ip');
  const limpia = ip?.trim();
  return limpia ? limpia.slice(0, 64) : null;
}

/** Segundos que faltan para que termine un bloqueo (0 si no hay bloqueo vigente). */
export function segundosDeBloqueo(bloqueadoHasta: Date | null, ahora: Date) {
  if (!bloqueadoHasta) return 0;
  return Math.max(0, Math.ceil((bloqueadoHasta.getTime() - ahora.getTime()) / 1000));
}

/** "Espera 15 minutos" / "Espera 1 minuto". */
export function mensajeDeEspera(segundos: number) {
  const minutos = Math.max(1, Math.ceil(segundos / 60));
  return `Demasiados intentos fallidos. Espera ${minutos} ${minutos === 1 ? 'minuto' : 'minutos'} e inténtalo de nuevo.`;
}

/**
 * Cuenta un intento para `clave`. Devuelve 0 si puede seguir, o los segundos que debe esperar.
 */
export async function reservarIntento(clave: string, limite: Limite, ahora = new Date()): Promise<number> {
  const actual = await db.intentoLogin.findUnique({ where: { clave } });
  const espera = segundosDeBloqueo(actual?.bloqueadoHasta ?? null, ahora);
  if (espera > 0) return espera;

  // Ventana vencida: el contador vuelve a empezar
  if (actual && ahora.getTime() - actual.ventanaInicio.getTime() >= limite.ventanaMs) {
    await db.intentoLogin.updateMany({
      where: { clave, ventanaInicio: actual.ventanaInicio },
      data: { intentos: 0, ventanaInicio: ahora, bloqueadoHasta: null },
    });
  }

  const registro = await db.intentoLogin.upsert({
    where: { clave },
    create: { clave, intentos: 1, ventanaInicio: ahora },
    update: { intentos: { increment: 1 } },
  });

  if (registro.intentos <= limite.maximo) return 0;

  // Se pasó del máximo: bloqueo. Al terminar, empieza una ventana nueva desde cero.
  const hasta = new Date(ahora.getTime() + limite.bloqueoMs);
  await db.intentoLogin.update({
    where: { clave },
    data: { bloqueadoHasta: hasta, intentos: 0, ventanaInicio: hasta },
  });
  return segundosDeBloqueo(hasta, ahora);
}

/** Ingreso correcto: se olvidan los fallos de la cuenta y el intento no cuenta para la IP. */
export async function liberarIntentos(identificador: string, ip: string | null) {
  await db.intentoLogin.deleteMany({ where: { clave: claveCuenta(identificador) } });
  if (ip) {
    await db.intentoLogin.updateMany({
      where: { clave: claveIp(ip), intentos: { gt: 0 } },
      data: { intentos: { decrement: 1 } },
    });
  }
  // Limpieza de registros viejos (de paso, para no dejar crecer la tabla)
  const ayer = new Date(Date.now() - 24 * 60 * MINUTO);
  await db.intentoLogin.deleteMany({
    where: { ventanaInicio: { lt: ayer }, OR: [{ bloqueadoHasta: null }, { bloqueadoHasta: { lt: ayer } }] },
  });
}
