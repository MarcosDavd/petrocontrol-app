import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

/** Activa o desactiva una máquina. Body: activa=true|false */
export async function POST(request: Request, { params }: { params: Promise<{ maquinaId: string }> }) {
  const { maquinaId } = await params;
  const id = Number(maquinaId);
  if (!Number.isInteger(id) || id <= 0) {
    return NextResponse.json({ error: 'Máquina inválida.' }, { status: 400 });
  }

  const contentType = request.headers.get('content-type') ?? '';
  const valor = contentType.includes('application/json')
    ? (await request.json()).activa
    : (await request.formData()).get('activa');
  const activa = valor === true || valor === 'true';

  if (!activa) {
    const abierta = await db.jornada.findFirst({ where: { maquinaId: id, estado: 'ABIERTA' } });
    if (abierta) {
      return NextResponse.json({ error: 'La máquina tiene una jornada abierta. Ciérrala antes de desactivarla.' }, { status: 409 });
    }
  }

  await db.maquina.update({ where: { id }, data: { activa } });

  if (!contentType.includes('application/json')) {
    return NextResponse.redirect(new URL('/estaciones', request.url), 303);
  }
  return NextResponse.json({ ok: true, activa });
}
