import { Prisma } from '@/generated/prisma';
import { db } from '@/lib/db';
import { movimientoStockSchema } from '@/lib/validation/inventario';
import { NextResponse } from 'next/server';

export async function GET() {
  const movimientos = await db.movimientoStock.findMany({
    include: {
      tanque: {
        include: {
          combustible: true,
          estacion: true,
        },
      },
    },
    orderBy: { fecha: 'desc' },
    take: 30,
  });

  return NextResponse.json({ movimientos });
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') ?? '';
    const rawData = contentType.includes('application/json')
      ? await request.json()
      : Object.fromEntries((await request.formData()).entries());

    const parsed = movimientoStockSchema.safeParse(rawData);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? 'Datos inválidos.' },
        { status: 400 }
      );
    }

    const galonesRaw = parsed.data.galones;
    let galones = galonesRaw;

    if (parsed.data.tipo === 'RECARGA') {
      galones = Math.abs(galonesRaw);
    }

    if (parsed.data.tipo === 'VENTA' || parsed.data.tipo === 'MERMA') {
      galones = -Math.abs(galonesRaw);
    }

    const movimiento = await db.movimientoStock.create({
      data: {
        tanqueId: parsed.data.tanqueId,
        tipo: parsed.data.tipo,
        galones: new Prisma.Decimal(galones.toString()),
        fecha: parsed.data.fecha ? new Date(parsed.data.fecha) : new Date(),
        nota: parsed.data.nota || null,
        jornadaId: parsed.data.jornadaId ? parsed.data.jornadaId : null,
      },
    });

    if (!contentType.includes('application/json')) {
      return NextResponse.redirect(new URL('/inventario', request.url));
    }

    return NextResponse.json({ ok: true, movimiento }, { status: 201 });
  } catch (error) {
    console.error('MOVIMIENTO_STOCK_CREATE_ERROR', error);
    return NextResponse.json({ error: 'No se pudo registrar el movimiento.' }, { status: 500 });
  }
}
