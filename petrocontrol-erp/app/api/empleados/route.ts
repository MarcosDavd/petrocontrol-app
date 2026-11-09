import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { empleadoSchema } from '@/lib/validation/maestros';

export async function GET() {
  const empleados = await db.empleado.findMany({
    include: { estacion: true },
    orderBy: [{ estacionId: 'asc' }, { nombre: 'asc' }],
  });

  return NextResponse.json({ empleados });
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') ?? '';
    const rawData = contentType.includes('application/json')
      ? await request.json()
      : Object.fromEntries((await request.formData()).entries());

    const parsed = empleadoSchema.safeParse(rawData);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? 'Datos inválidos.' },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const empleado = await db.empleado.create({
      data: {
        nombre: data.nombre,
        estacionId: data.estacionId,
        horarioInicio: data.horarioInicio || null,
        horarioFin: data.horarioFin || null,
        activo: data.activo ?? true,
      },
    });

    if (!contentType.includes('application/json')) {
      return NextResponse.redirect(new URL('/empleados', request.url), 303);
    }

    return NextResponse.json({ ok: true, empleado }, { status: 201 });
  } catch (error) {
    console.error('EMPLEADO_CREATE_ERROR', error);
    return NextResponse.json({ error: 'No se pudo crear el empleado.' }, { status: 500 });
  }
}
