import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

/** Activa o desactiva una estación. Body: activa=true|false */
export async function POST(request: Request, { params }: { params: Promise<{ estacionId: string }> }) {
  const { estacionId } = await params;
  const id = Number(estacionId);
  if (!Number.isInteger(id) || id <= 0) {
    return NextResponse.json({ error: 'Estación inválida.' }, { status: 400 });
  }

  const contentType = request.headers.get('content-type') ?? '';
  const valor = contentType.includes('application/json')
    ? (await request.json()).activa
    : (await request.formData()).get('activa');
  const activa = valor === true || valor === 'true';

  if (!activa) {
    const abierta = await db.jornada.findFirst({ where: { estacionId: id, estado: 'ABIERTA' } });
    if (abierta) {
      return NextResponse.json({ error: 'La estación tiene jornadas abiertas. Ciérralas antes de desactivarla.' }, { status: 409 });
    }
  }

  await db.estacion.update({ where: { id }, data: { activa } });

  if (!contentType.includes('application/json')) {
    return NextResponse.redirect(new URL('/estaciones', request.url), 303);
  }
  return NextResponse.json({ ok: true, activa });
}
