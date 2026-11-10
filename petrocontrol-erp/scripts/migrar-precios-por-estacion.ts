/**
 * Migración: los precios dejan de ser globales y pasan a ser por estación.
 *
 * Cada precio sin estación (`estacionId` NULL) se copia a TODAS las estaciones con el mismo
 * valor y fecha de vigencia; el registro original se asigna a la primera estación.
 * Es idempotente: si no quedan precios sin estación, no hace nada.
 * Usa SQL directo para la columna nula, así funciona con el schema del paso 1 o del paso 3.
 *
 * Orden para aplicarla en una base (local o Neon):
 *   1. Desplegar el schema con `estacionId Int?` (opcional)  → pnpm db:push
 *   2. Ejecutar este script                                   → pnpm db:migrar-precios
 *   3. Desplegar el schema con `estacionId Int` (obligatorio) → pnpm db:push
 *
 * Contra Neon, antepón la cadena directa:  DATABASE_URL='postgresql://...' pnpm db:migrar-precios
 */
import 'dotenv/config';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  const estaciones = await prisma.estacion.findMany({ select: { id: true, nombre: true }, orderBy: { id: 'asc' } });
  const sinEstacion = await prisma.$queryRaw<
    { id: number; combustibleId: number; precio: string; vigenteDesde: Date }[]
  >`SELECT "id", "combustibleId", "precio"::text AS "precio", "vigenteDesde"
    FROM "HistorialPrecio" WHERE "estacionId" IS NULL ORDER BY "id"`;

  if (sinEstacion.length === 0) {
    console.log('No hay precios sin estación: nada que migrar.');
    return;
  }
  if (estaciones.length === 0) {
    throw new Error(`Hay ${sinEstacion.length} precio(s) sin estación pero no hay estaciones a las que asignarlos.`);
  }

  const [primera, ...resto] = estaciones;
  await prisma.$transaction(async (tx) => {
    for (const precio of sinEstacion) {
      await tx.$executeRaw`UPDATE "HistorialPrecio" SET "estacionId" = ${primera.id} WHERE "id" = ${precio.id}`;
      if (resto.length > 0) {
        await tx.historialPrecio.createMany({
          data: resto.map((estacion) => ({
            estacionId: estacion.id,
            combustibleId: precio.combustibleId,
            precio: precio.precio,
            vigenteDesde: precio.vigenteDesde,
          })),
        });
      }
    }
  });

  console.log(
    `Migrados ${sinEstacion.length} precio(s) a ${estaciones.length} estación(es) ` +
      `(${estaciones.map((e) => e.nombre).join(', ')}): ${sinEstacion.length * estaciones.length} precio(s) en total.`
  );
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
