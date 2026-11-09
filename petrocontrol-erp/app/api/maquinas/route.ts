import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { maquinaSchema } from '@/lib/validation/maestros';

export async function GET() {
  const maquinas = await db.maquina.findMany({
    include: { estacion: true, productos: { include: { combustible: true } } },
    orderBy: [{ estacionId: 'asc' }, { nombre: 'asc' }],
  });

  return NextResponse.json({ maquinas });
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') ?? '';
    let rawData: Record<string, unknown>;
    let combustibleIds: number[] = [];
    if (contentType.includes('application/json')) {
      rawData = await request.json();
      combustibleIds = Array.isArray(rawData.combustibleIds) ? rawData.combustibleIds.map(Number) : [];
    } else {
      const formData = await request.formData();
      rawData = Object.fromEntries(formData.entries());
      combustibleIds = formData.getAll('combustibleIds').map(Number);
    }
    combustibleIds = combustibleIds.filter((id) => Number.isInteger(id) && id > 0);

    const parsed = maquinaSchema.safeParse(rawData);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? 'Datos inválidos.' },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const maquina = await db.maquina.create({
      data: {
        estacionId: data.estacionId,
        nombre: data.nombre,
        activa: data.activa ?? true,
        productos: { create: combustibleIds.map((combustibleId) => ({ combustibleId })) },
      },
    });

    if (!contentType.includes('application/json')) {
      return NextResponse.redirect(new URL('/estaciones', request.url), 303);
    }

    return NextResponse.json({ ok: true, maquina }, { status: 201 });
  } catch (error) {
    console.error('MAQUINA_CREATE_ERROR', error);
    return NextResponse.json({ error: 'No se pudo crear la máquina.' }, { status: 500 });
  }
}
