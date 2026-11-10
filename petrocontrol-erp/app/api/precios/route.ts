import { NextResponse } from 'next/server';
import { responderError } from '@/lib/respuesta-formulario';
import { Prisma } from '@/generated/prisma';
import { db } from '@/lib/db';
import { precioSchema } from '@/lib/validation/maestros';
import { fechaVigencia } from '@/lib/precios';

export async function GET() {
  const precios = await db.historialPrecio.findMany({
    include: { combustible: true, estacion: true },
    orderBy: [{ estacionId: 'asc' }, { combustibleId: 'asc' }, { vigenteDesde: 'desc' }],
  });

  return NextResponse.json({ precios });
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') ?? '';
    const rawData = contentType.includes('application/json')
      ? await request.json()
      : Object.fromEntries((await request.formData()).entries());

    const parsed = precioSchema.safeParse(rawData);

    if (!parsed.success) {
      return responderError(request, parsed.error.issues[0]?.message ?? 'Datos inválidos.', 400);
    }

    const { estacionId, combustibleId } = parsed.data;
    if (parsed.data.precio <= 0) {
      return responderError(request, 'El precio debe ser mayor que 0.', 400);
    }

    const [estaciones, combustible] = await Promise.all([
      db.estacion.findMany({
        where: estacionId === 'todas' ? {} : { id: estacionId },
        select: { id: true },
      }),
      db.combustible.findUnique({ where: { id: combustibleId }, select: { id: true } }),
    ]);
    if (estaciones.length === 0) return responderError(request, 'La estación no existe.', 404);
    if (!combustible) return responderError(request, 'El producto no existe.', 404);

    const precio = new Prisma.Decimal(parsed.data.precio.toString());
    const vigenteDesde = fechaVigencia(parsed.data.vigenteDesde);
    const creados = await db.historialPrecio.createMany({
      data: estaciones.map((estacion) => ({ estacionId: estacion.id, combustibleId, precio, vigenteDesde })),
    });

    if (!contentType.includes('application/json')) {
      return NextResponse.redirect(new URL('/productos', request.url), 303);
    }

    return NextResponse.json({ ok: true, creados: creados.count }, { status: 201 });
  } catch (error) {
    console.error('PRECIO_CREATE_ERROR', error);
    return responderError(request, 'No se pudo registrar el precio.', 500);
  }
}
