import { NextResponse } from 'next/server';
import { responderError } from '@/lib/respuesta-formulario';
import { db } from '@/lib/db';
import { combustibleSchema } from '@/lib/validation/maestros';
import { leerPreciosNuevoProducto } from '@/lib/precios';
import { fechaHoraLima, hoyLima } from '@/lib/zona-horaria';
import { Prisma } from '@/generated/prisma';

export async function GET() {
  const combustibles = await db.combustible.findMany({
    orderBy: { nombre: 'asc' },
    include: {
      precios: {
        orderBy: { vigenteDesde: 'desc' },
        take: 1,
      },
    },
  });

  return NextResponse.json({ combustibles });
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') ?? '';
    const rawData = contentType.includes('application/json')
      ? await request.json()
      : Object.fromEntries((await request.formData()).entries());

    const parsed = combustibleSchema.safeParse(rawData);

    if (!parsed.success) {
      return responderError(request, parsed.error.issues[0]?.message ?? 'Datos inválidos.', 400);
    }

    const existe = await db.combustible.findUnique({ where: { nombre: parsed.data.nombre } });
    if (existe) {
      return responderError(request, `Ya existe un producto llamado ${parsed.data.nombre}.`, 409);
    }

    // Un producto nuevo nace con precio en todas las estaciones: sin él no se podrían cerrar jornadas
    const estaciones = await db.estacion.findMany({ select: { id: true, nombre: true }, orderBy: { nombre: 'asc' } });
    const precios = leerPreciosNuevoProducto(rawData, estaciones);
    if (!precios.ok) {
      return responderError(request, precios.error, 400);
    }

    const vigenteDesde = fechaHoraLima(hoyLima());
    const combustible = await db.combustible.create({
      data: {
        nombre: parsed.data.nombre,
        precios: {
          create: precios.precios.map(({ estacionId, precio }) => ({
            estacionId,
            precio: new Prisma.Decimal(precio),
            vigenteDesde,
          })),
        },
      },
    });

    if (!contentType.includes('application/json')) {
      return NextResponse.redirect(new URL('/productos', request.url), 303);
    }

    return NextResponse.json({ ok: true, combustible }, { status: 201 });
  } catch (error) {
    console.error('COMBUSTIBLE_CREATE_ERROR', error);
    return responderError(request, 'No se pudo crear el combustible.', 500);
  }
}
