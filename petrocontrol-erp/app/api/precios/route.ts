import { NextResponse } from 'next/server';
import { fechaHoraLima } from '@/lib/zona-horaria';
import { Prisma } from '@/generated/prisma';
import { db } from '@/lib/db';
import { precioSchema } from '@/lib/validation/maestros';

export async function GET() {
  const precios = await db.historialPrecio.findMany({
    include: { combustible: true },
    orderBy: [{ combustibleId: 'asc' }, { vigenteDesde: 'desc' }],
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
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? 'Datos inválidos.' },
        { status: 400 }
      );
    }

    const precio = await db.historialPrecio.create({
      data: {
        combustibleId: parsed.data.combustibleId,
        precio: new Prisma.Decimal(parsed.data.precio.toString()),
        // "YYYY-MM-DD" = vigente desde el inicio de ese día (hora local)
        vigenteDesde:
          parsed.data.vigenteDesde && /^\d{4}-\d{2}-\d{2}$/.test(parsed.data.vigenteDesde)
            ? fechaHoraLima(parsed.data.vigenteDesde)
            : parsed.data.vigenteDesde
              ? new Date(parsed.data.vigenteDesde)
              : new Date(),
      },
    });

    if (!contentType.includes('application/json')) {
      return NextResponse.redirect(new URL('/productos', request.url), 303);
    }

    return NextResponse.json({ ok: true, precio }, { status: 201 });
  } catch (error) {
    console.error('PRECIO_CREATE_ERROR', error);
    return NextResponse.json({ error: 'No se pudo registrar el precio.' }, { status: 500 });
  }
}
