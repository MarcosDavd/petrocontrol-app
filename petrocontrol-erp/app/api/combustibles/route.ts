import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { combustibleSchema } from '@/lib/validation/maestros';

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
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? 'Datos inválidos.' },
        { status: 400 }
      );
    }

    const combustible = await db.combustible.create({
      data: {
        nombre: parsed.data.nombre,
      },
    });

    if (!contentType.includes('application/json')) {
      return NextResponse.redirect(new URL('/maestros', request.url));
    }

    return NextResponse.json({ ok: true, combustible }, { status: 201 });
  } catch (error) {
    console.error('COMBUSTIBLE_CREATE_ERROR', error);
    return NextResponse.json({ error: 'No se pudo crear el combustible.' }, { status: 500 });
  }
}
