import { Prisma } from '@/generated/prisma';
import { db } from '@/lib/db';
import { movimientoStockSchema } from '@/lib/validation/inventario';
import { NextResponse } from 'next/server';
import { fechaHoraLima } from '@/lib/zona-horaria';

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

    if (parsed.data.tipo === 'MERMA') {
      galones = -Math.abs(galonesRaw);
    }

    const movimiento = await db.movimientoStock.create({
      data: {
        tanqueId: parsed.data.tanqueId,
        tipo: parsed.data.tipo,
        galones: new Prisma.Decimal(galones.toString()),
        // "YYYY-MM-DD" = mediodía en hora de Perú (new Date('YYYY-MM-DD') sería medianoche UTC = día anterior en Perú)
        fecha: parsed.data.fecha
          ? /^\d{4}-\d{2}-\d{2}$/.test(parsed.data.fecha)
            ? fechaHoraLima(parsed.data.fecha, '12:00')
            : new Date(parsed.data.fecha)
          : new Date(),
        nota: parsed.data.nota || null,
      },
    });

    if (!contentType.includes('application/json')) {
      return NextResponse.redirect(new URL('/inventario', request.url), 303);
    }

    return NextResponse.json({ ok: true, movimiento }, { status: 201 });
  } catch (error) {
    console.error('MOVIMIENTO_STOCK_CREATE_ERROR', error);
    return NextResponse.json({ error: 'No se pudo registrar el movimiento.' }, { status: 500 });
  }
}
