import { Prisma } from '@/generated/prisma';
import { db } from '@/lib/db';
import { pagoSchema } from '@/lib/validation/pagos';
import { NextResponse } from 'next/server';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ jornadaId: string }> }
) {
  const { jornadaId } = await params;
  const id = Number(jornadaId);

  if (!Number.isInteger(id) || id <= 0) {
    return NextResponse.json({ error: 'Jornada inválida.' }, { status: 400 });
  }

  const pagos = await db.pagoJornada.findMany({
    where: { jornadaId: id },
    orderBy: { id: 'desc' },
  });

  return NextResponse.json({ pagos });
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ jornadaId: string }> }
) {
  try {
    const { jornadaId } = await params;
    const jornadaIdNumber = Number(jornadaId);

    if (!Number.isInteger(jornadaIdNumber) || jornadaIdNumber <= 0) {
      return NextResponse.json({ error: 'Jornada inválida.' }, { status: 400 });
    }

    const contentType = request.headers.get('content-type') ?? '';
    const rawData = contentType.includes('application/json')
      ? await request.json()
      : Object.fromEntries((await request.formData()).entries());

    const parsed = pagoSchema.safeParse(rawData);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? 'Datos inválidos.' },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const pago = await db.pagoJornada.create({
      data: {
        jornadaId: jornadaIdNumber,
        medio: data.medio,
        monto: new Prisma.Decimal(data.monto.toString()),
        nota: data.nota || null,
      },
    });

    if (!contentType.includes('application/json')) {
      return NextResponse.redirect(new URL('/jornadas', request.url));
    }

    return NextResponse.json({ ok: true, pago }, { status: 201 });
  } catch (error) {
    console.error('PAGO_JORNADA_CREATE_ERROR', error);
    return NextResponse.json({ error: 'No se pudo registrar el pago.' }, { status: 500 });
  }
}
