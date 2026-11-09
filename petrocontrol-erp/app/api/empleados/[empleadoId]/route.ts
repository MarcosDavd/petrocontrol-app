import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { empleadoSchema } from '@/lib/validation/maestros';

/** Actualiza nombre, estación, horario y estado de un empleado (POST para poder usarlo desde formularios). */
export async function POST(request: Request, { params }: { params: Promise<{ empleadoId: string }> }) {
  const { empleadoId } = await params;
  const id = Number(empleadoId);
  if (!Number.isInteger(id) || id <= 0) {
    return NextResponse.json({ error: 'Empleado inválido.' }, { status: 400 });
  }

  try {
    const contentType = request.headers.get('content-type') ?? '';
    const rawData = contentType.includes('application/json')
      ? await request.json()
      : Object.fromEntries((await request.formData()).entries());

    const parsed = empleadoSchema.safeParse(rawData);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Datos inválidos.' }, { status: 400 });
    }

    const actual = await db.empleado.findUnique({ where: { id } });
    if (!actual) return NextResponse.json({ error: 'El empleado no existe.' }, { status: 404 });

    const data = parsed.data;
    if (data.estacionId !== actual.estacionId) {
      const abierta = await db.jornada.findFirst({ where: { empleadoId: id, estado: 'ABIERTA' } });
      if (abierta) {
        return NextResponse.json(
          { error: 'No se puede cambiar la estación mientras el empleado tiene una jornada abierta.' },
          { status: 409 }
        );
      }
    }

    const empleado = await db.empleado.update({
      where: { id },
      data: {
        nombre: data.nombre,
        estacionId: data.estacionId,
        horarioInicio: data.horarioInicio || null,
        horarioFin: data.horarioFin || null,
        activo: data.activo ?? actual.activo,
      },
    });

    if (!contentType.includes('application/json')) {
      return NextResponse.redirect(new URL('/empleados', request.url), 303);
    }
    return NextResponse.json({ ok: true, empleado });
  } catch (error) {
    console.error('EMPLEADO_UPDATE_ERROR', error);
    return NextResponse.json({ error: 'No se pudo actualizar el empleado.' }, { status: 500 });
  }
}
