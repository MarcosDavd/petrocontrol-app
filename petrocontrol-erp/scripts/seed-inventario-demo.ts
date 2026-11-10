/**
 * Datos de DEMOSTRACIÓN para el inventario: 90 días de recargas, ventas y mermas por tanque,
 * para ver funcionar los gráficos de /inventario. Solo se ejecuta contra una base de datos local.
 *
 *   pnpm db:seed:demo            → (re)genera los movimientos de demostración
 *   pnpm db:seed:demo --limpiar  → borra los movimientos de demostración y no crea nada
 *
 * Requiere haber corrido antes `pnpm db:seed` (crea estaciones, combustibles y tanques).
 * Todos los movimientos llevan la nota "[demo] ..." y son los únicos que se borran al re-ejecutar.
 */
import 'dotenv/config';
import { Prisma, PrismaClient, TipoMovimiento } from '../generated/prisma';
import { fechaHoraLima, hoyLima, sumarDias } from '../lib/zona-horaria';

const prisma = new PrismaClient();

const DIAS = 90;
const MARCA = '[demo]';

// Venta diaria promedio (galones) por producto en la estación principal
const VENTA_DIARIA: Record<string, number> = { Diesel: 950, Regular: 620, Premium: 310, GLP: 420 };
const FACTOR_ESTACION: Record<string, number> = { Pachas: 1, Tunan: 0.7 };

// Stock con el que termina cada tanque, elegido para mostrar todos los estados del gráfico
const STOCK_FINAL: Record<string, number> = {
  'Pachas/Diesel': 17800, // normal
  'Pachas/Regular': -350, // revisar: se vendió más de lo registrado
  'Pachas/Premium': 9000, // normal
  'Pachas/GLP': 5200, // bajo 30 %
  'Tunan/Diesel': 14500, // normal
  'Tunan/Regular': 11000, // normal
  'Tunan/Premium': 4200, // bajo 30 %
  'Tunan/GLP': 1100, // bajo mínimo
};

/** Generador pseudoaleatorio determinista: cada ejecución produce los mismos datos. */
function aleatorio(semilla: number) {
  let estado = semilla;
  return (min: number, max: number) => {
    estado = (estado * 1664525 + 1013904223) % 2 ** 32;
    return min + (estado / 2 ** 32) * (max - min);
  };
}

const redondear = (n: number) => Math.round(n * 100) / 100;

type Movimiento = { tipo: TipoMovimiento; galones: number; fecha: Date; nota: string };

/**
 * Se construye hacia atrás desde el stock final: cada día se "devuelve" la venta y, cuando el
 * tanque superaría su capacidad, se registra la recarga que lo explica.
 */
function simularTanque(capacidad: number, minimo: number, stockFinal: number, ventaDiaria: number, semilla: number) {
  const azar = aleatorio(semilla);
  const hoy = hoyLima();
  const movimientos: Movimiento[] = [];
  let stock = stockFinal; // stock al cierre del día que se está procesando

  // Días -1 (ayer) a -DIAS; hoy queda sin movimientos para no crear registros en el futuro
  for (let d = 1; d <= DIAS; d += 1) {
    const dia = sumarDias(hoy, -d);
    const finDeSemana = [0, 6].includes(new Date(`${dia}T12:00:00Z`).getUTCDay());
    const venta = redondear(ventaDiaria * azar(0.75, 1.25) * (finDeSemana ? 1.15 : 1));
    const merma = d % 15 === 7 ? redondear(azar(4, 18)) : 0;

    movimientos.push({ tipo: 'VENTA', galones: -venta, fecha: fechaHoraLima(dia, '22:00'), nota: `${MARCA} venta del día` });
    if (merma) movimientos.push({ tipo: 'MERMA', galones: -merma, fecha: fechaHoraLima(dia, '18:00'), nota: `${MARCA} evaporación` });

    // Stock al abrir el día (antes de recargas) si no hubo recarga
    let apertura = stock + venta + merma;
    const umbral = capacidad * azar(0.82, 0.95);
    if (apertura > umbral) {
      // El tanque estaba bajo y esa mañana llegó la cisterna
      const antesDeRecarga = Math.max(minimo * 1.2, azar(2200, 4200));
      const recarga = redondear(apertura - antesDeRecarga);
      movimientos.push({ tipo: 'RECARGA', galones: recarga, fecha: fechaHoraLima(dia, '10:00'), nota: `${MARCA} cisterna` });
      apertura -= recarga;
    }
    stock = redondear(apertura);
  }

  // Lo que quedó al inicio del período se registra como stock inicial
  movimientos.push({
    tipo: 'AJUSTE',
    galones: stock,
    fecha: fechaHoraLima(sumarDias(hoy, -(DIAS + 1)), '08:00'),
    nota: `${MARCA} stock inicial`,
  });
  return movimientos;
}

async function main() {
  const url = process.env.DATABASE_URL ?? '';
  if (!/@(localhost|127\.0\.0\.1)[:/]/.test(url)) {
    throw new Error('Este seed de demostración solo se ejecuta contra una base de datos local (localhost).');
  }

  const borrados = await prisma.movimientoStock.deleteMany({ where: { nota: { startsWith: MARCA } } });
  console.log(`Movimientos de demostración anteriores borrados: ${borrados.count}`);
  if (process.argv.includes('--limpiar')) return;

  const tanques = await prisma.tanque.findMany({ include: { estacion: true, combustible: true }, orderBy: { id: 'asc' } });
  if (tanques.length === 0) throw new Error('No hay tanques. Corre primero `pnpm db:seed`.');

  const reales = await prisma.movimientoStock.count();
  if (reales > 0) {
    console.warn(`Aviso: hay ${reales} movimientos que no son de demostración; el stock final no coincidirá exactamente.`);
  }

  for (const tanque of tanques) {
    const clave = `${tanque.estacion.nombre}/${tanque.combustible.nombre}`;
    const capacidad = Number(tanque.capacidad);
    const minimo = Number(tanque.minimo);
    const stockFinal = STOCK_FINAL[clave] ?? capacidad * 0.6;
    const ventaDiaria = (VENTA_DIARIA[tanque.combustible.nombre] ?? 500) * (FACTOR_ESTACION[tanque.estacion.nombre] ?? 1);

    const movimientos = simularTanque(capacidad, minimo, stockFinal, ventaDiaria, tanque.id * 7919);
    await prisma.movimientoStock.createMany({
      data: movimientos.map((m) => ({ ...m, tanqueId: tanque.id, galones: new Prisma.Decimal(m.galones.toFixed(2)) })),
    });

    const recargas = movimientos.filter((m) => m.tipo === 'RECARGA').length;
    console.log(`${clave.padEnd(16)} ${String(movimientos.length).padStart(4)} movimientos, ${recargas} recargas, stock final ${stockFinal} gal`);
  }

  console.log('Seed de demostración completado.');
}

main()
  .catch((error) => {
    console.error('Error en el seed de demostración:', error.message ?? error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
