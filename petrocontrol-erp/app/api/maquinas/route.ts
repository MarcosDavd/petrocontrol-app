import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { maquinaSchema } from '@/lib/validation/maestros';

export async function GET() {
  const maquinas = await db.maquina.findMany({
    include: { estacion: true },
    orderBy: [{ estacionId: 'asc' }, { nombre: 'asc' }],
  });

  return NextResponse.json({ maquinas });
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') ?? '';
    const rawData = contentType.includes('application/json')
      ? await request.json()
      : Object.fromEntries((await request.formData()).entries());

    const parsed = maquinaSchema.safeParse(rawData);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? 'Datos inválidos.' },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const maquina = await db.maquina.create({
      data: {
        estacionId: data.estacionId,
        nombre: data.nombre,
        activa: data.activa ?? true,
      },
    });

    if (!contentType.includes('application/json')) {
      return NextResponse.redirect(new URL('/maestros', request.url));
    }

    return NextResponse.json({ ok: true, maquina }, { status: 201 });
  } catch (error) {
    console.error('MAQUINA_CREATE_ERROR', error);
    return NextResponse.json({ error: 'No se pudo crear la máquina.' }, { status: 500 });
  }
}
