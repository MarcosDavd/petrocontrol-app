import { NextResponse } from 'next/server';
import { responderError } from '@/lib/respuesta-formulario';
import { db } from '@/lib/db';
import { empleadoSchema } from '@/lib/validation/maestros';

/** Actualiza nombre, estación, horario y estado de un empleado (POST para poder usarlo desde formularios). */
export async function POST(request: Request, { params }: { params: Promise<{ empleadoId: string }> }) {
  const { empleadoId } = await params;
  const id = Number(empleadoId);
  if (!Number.isInteger(id) || id <= 0) {
    return responderError(request, 'Empleado inválido.', 400);
  }

  try {
    const contentType = request.headers.get('content-type') ?? '';
    const rawData = contentType.includes('application/json')
      ? await request.json()
      : Object.fromEntries((await request.formData()).entries());

    const parsed = empleadoSchema.safeParse(rawData);
    if (!parsed.success) {
      return responderError(request, parsed.error.issues[0]?.message ?? 'Datos inválidos.', 400);
    }

    const actual = await db.empleado.findUnique({ where: { id } });
    if (!actual) return responderError(request, 'El empleado no existe.', 404);

    const data = parsed.data;
    if (data.estacionId !== actual.estacionId) {
      const abierta = await db.jornada.findFirst({ where: { empleadoId: id, estado: 'ABIERTA' } });
      if (abierta) {
        return responderError(request, 'No se puede cambiar la estación mientras el empleado tiene una jornada abierta.', 409);
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
    return responderError(request, 'No se pudo actualizar el empleado.', 500);
  }
}
