import { NextResponse } from 'next/server';
import { responderError } from '@/lib/respuesta-formulario';
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
      return responderError(request, parsed.error.issues[0]?.message ?? 'Datos inválidos.', 400);
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
      return NextResponse.redirect(new URL('/estaciones', request.url), 303);
    }

    return NextResponse.json({ ok: true, estacion }, { status: 201 });
  } catch (error) {
    console.error('ESTACION_CREATE_ERROR', error);
    return responderError(request, 'No se pudo crear la estación.', 500);
  }
}
