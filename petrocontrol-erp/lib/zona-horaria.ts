/**
 * Hora oficial del negocio: Perú (America/Lima).
 * Todas las fechas se interpretan y muestran en esta zona, sin depender de la zona
 * horaria del servidor (en Netlify/Vercel el servidor está en UTC).
 * Perú no usa horario de verano, por eso el desfase es fijo.
 */
export const ZONA_HORARIA = 'America/Lima';
const DESFASE = '-05:00';
const UN_DIA_MS = 24 * 60 * 60 * 1000;

const FECHA = /^\d{4}-\d{2}-\d{2}$/;
const HORA = /^\d{2}:\d{2}$/;

/** "2026-06-20" + "08:00" (hora de Perú) → instante exacto. */
export function fechaHoraLima(fecha: string, hora = '00:00'): Date {
  if (!FECHA.test(fecha) || !HORA.test(hora)) throw new Error(`Fecha u hora inválida: ${fecha} ${hora}`);
  return new Date(`${fecha}T${hora}:00${DESFASE}`);
}

/** Último milisegundo del día indicado en hora de Perú. */
export function finDelDiaLima(fecha: string): Date {
  return new Date(fechaHoraLima(fecha).getTime() + UN_DIA_MS - 1);
}

const formateador = new Intl.DateTimeFormat('en-CA', {
  timeZone: ZONA_HORARIA,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
});

/** Fecha ("YYYY-MM-DD") y hora ("HH:MM") de un instante, vistas en Perú. */
export function partesLima(instante: Date) {
  const partes = Object.fromEntries(formateador.formatToParts(instante).map((p) => [p.type, p.value]));
  return {
    fecha: `${partes.year}-${partes.month}-${partes.day}`,
    hora: `${partes.hour}:${partes.minute}`,
    anio: partes.year,
    mes: partes.month,
    dia: partes.day,
  };
}

/** Fecha de hoy en Perú ("YYYY-MM-DD"). */
export function hoyLima(ahora = new Date()) {
  return partesLima(ahora).fecha;
}

/** Suma (o resta) días a una fecha "YYYY-MM-DD". */
export function sumarDias(fecha: string, dias: number) {
  return new Date(new Date(`${fecha}T00:00:00Z`).getTime() + dias * UN_DIA_MS).toISOString().slice(0, 10);
}

/** Inicio (00:00 en Perú) del mes en curso. */
export function inicioMesLima(ahora = new Date()) {
  const { anio, mes } = partesLima(ahora);
  return fechaHoraLima(`${anio}-${mes}-01`);
}
