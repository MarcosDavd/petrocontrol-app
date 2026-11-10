import { Prisma } from '@/generated/prisma';
import { db } from '@/lib/db';
import { tanqueSchema } from '@/lib/validation/inventario';
import { NextResponse } from 'next/server';
import { responderError } from '@/lib/respuesta-formulario';

export async function GET() {
  const tanques = await db.tanque.findMany({
    include: {
      estacion: true,
      combustible: true,
      movimientos: {
        orderBy: { fecha: 'desc' },
        take: 5,
      },
    },
    orderBy: [{ estacionId: 'asc' }, { combustibleId: 'asc' }],
  });

  return NextResponse.json({ tanques });
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') ?? '';
    const rawData = contentType.includes('application/json')
      ? await request.json()
      : Object.fromEntries((await request.formData()).entries());

    const parsed = tanqueSchema.safeParse(rawData);

    if (!parsed.success) {
      return responderError(request, parsed.error.issues[0]?.message ?? 'Datos inválidos.', 400);
    }

    const exists = await db.tanque.findUnique({
      where: {
        estacionId_combustibleId: {
          estacionId: parsed.data.estacionId,
          combustibleId: parsed.data.combustibleId,
        },
      },
    });

    if (exists) {
      return responderError(request, 'Ya existe un tanque para esta estación y combustible.', 409);
    }

    const tanque = await db.tanque.create({
      data: {
        estacionId: parsed.data.estacionId,
        combustibleId: parsed.data.combustibleId,
        capacidad: new Prisma.Decimal(parsed.data.capacidad.toString()),
        minimo: new Prisma.Decimal(parsed.data.minimo.toString()),
      },
    });

    if (!contentType.includes('application/json')) {
      return NextResponse.redirect(new URL('/estaciones', request.url), 303);
    }

    return NextResponse.json({ ok: true, tanque }, { status: 201 });
  } catch (error) {
    console.error('TANQUE_CREATE_ERROR', error);
    return responderError(request, 'No se pudo crear el tanque.', 500);
  }
}
