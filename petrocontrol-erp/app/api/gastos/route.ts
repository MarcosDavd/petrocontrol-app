import { Prisma } from '@/generated/prisma';
import { db } from '@/lib/db';
import { gastoSchema } from '@/lib/validation/gastos';
import { NextResponse } from 'next/server';

export async function GET() {
  const gastos = await db.gasto.findMany({
    include: { estacion: true },
    orderBy: [{ fecha: 'desc' }],
    take: 30,
  });

  return NextResponse.json({ gastos });
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') ?? '';
    const rawData = contentType.includes('application/json')
      ? await request.json()
      : Object.fromEntries((await request.formData()).entries());

    const parsed = gastoSchema.safeParse(rawData);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? 'Datos inválidos.' },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const gasto = await db.gasto.create({
      data: {
        estacionId: data.estacionId,
        categoria: data.categoria,
        descripcion: data.descripcion,
        monto: new Prisma.Decimal(data.monto.toString()),
        fecha: new Date(data.fecha),
      },
      include: { estacion: true },
    });

    if (!contentType.includes('application/json')) {
      return NextResponse.redirect(new URL('/gastos', request.url));
    }

    return NextResponse.json({ ok: true, gasto }, { status: 201 });
  } catch (error) {
    console.error('GASTO_CREATE_ERROR', error);
    return NextResponse.json({ error: 'No se pudo registrar el gasto.' }, { status: 500 });
  }
}
