import { NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '@/lib/db';
import { estacionSchema } from '@/lib/validation/maestros';

export async function GET() {
  const estaciones = await db.estacion.findMany({
    orderBy: { nombre: 'asc' },
  });

  return NextResponse.json({ estaciones });
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') ?? '';
    const rawData = contentType.includes('application/json')
      ? await request.json()
      : Object.fromEntries((await request.formData()).entries());

    const parsed = estacionSchema.safeParse(rawData);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? 'Datos inválidos.' },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const estacion = await db.estacion.create({
      data: {
        nombre: data.nombre,
        direccion: data.direccion || null,
        activa: data.activa ?? true,
      },
    });

    if (!contentType.includes('application/json')) {
      return NextResponse.redirect(new URL('/maestros', request.url));
    }

    return NextResponse.json({ ok: true, estacion }, { status: 201 });
  } catch (error) {
    console.error('ESTACION_CREATE_ERROR', error);
    return NextResponse.json({ error: 'No se pudo crear la estación.' }, { status: 500 });
  }
}
