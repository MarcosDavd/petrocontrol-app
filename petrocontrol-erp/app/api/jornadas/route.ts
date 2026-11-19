import { db } from '@/lib/db';
import { NextResponse } from 'next/server';
import { exigirAdminApi } from '@/lib/sesion';

export async function GET() {
  const denegado = await exigirAdminApi();
  if (denegado) return denegado;

  const jornadas = await db.jornada.findMany({
    include: {
      empleado: true,
      maquina: { include: { estacion: true } },
      estacion: true,
      pagos: true,
      lecturas: { include: { combustible: true } },
      movimientos: true,
    },
    orderBy: [{ inicio: 'desc' }],
    take: 30,
  });

  return NextResponse.json({ jornadas });
}

// La apertura y el cierre de jornadas se hacen con las Server Actions de app/(panel)/jornadas/actions.ts,
// que calculan galones, importes y stock en el servidor.
