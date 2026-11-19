import { Prisma } from '@/generated/prisma';
import { NextResponse } from 'next/server';
import { responderError } from '@/lib/respuesta-formulario';
import { db } from '@/lib/db';
import { empleadoSchema } from '@/lib/validation/maestros';
import { exigirAdminApi } from '@/lib/sesion';

/** Actualiza nombre, estación, horario y estado de un empleado (POST para poder usarlo desde formularios). */
export async function POST(request: Request, { params }: { params: Promise<{ empleadoId: string }> }) {
  const denegado = await exigirAdminApi();
  if (denegado) return denegado;

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

    const actual = await db.empleado.findUnique({ where: { id }, include: { usuario: true } });
    if (!actual) return responderError(request, 'El empleado no existe.', 404);

    const data = parsed.data;

    // DNI: no se puede borrar una vez registrado (es su usuario) y no puede repetirse
    const dni = data.dni || null;
    if (!dni && actual.dni) return responderError(request, 'El DNI es obligatorio.', 400);
    if (dni && dni !== actual.dni) {
      const [otroEmpleado, otraCuenta] = await Promise.all([
        db.empleado.findUnique({ where: { dni }, select: { id: true, nombre: true } }),
        db.usuario.findUnique({ where: { usuario: dni }, select: { empleadoId: true } }),
      ]);
      if (otroEmpleado && otroEmpleado.id !== id) {
        return responderError(request, `El DNI ${dni} ya está registrado para ${otroEmpleado.nombre}.`, 409);
      }
      if (otraCuenta && otraCuenta.empleadoId !== id) {
        return responderError(request, `El DNI ${dni} ya se usa como usuario de otra cuenta.`, 409);
      }
    }
    // Si ingresaba con su DNI anterior, su usuario pasa a ser el DNI nuevo
    const actualizarUsuario =
      dni !== null && dni !== actual.dni && actual.usuario !== null && actual.usuario.usuario === actual.dni;
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
        dni,
        estacionId: data.estacionId,
        horarioInicio: data.horarioInicio || null,
        horarioFin: data.horarioFin || null,
        activo: data.activo ?? actual.activo,
        ...(actualizarUsuario ? { usuario: { update: { usuario: dni } } } : {}),
      },
    });

    if (!contentType.includes('application/json')) {
      return NextResponse.redirect(new URL('/empleados', request.url), 303);
    }
    return NextResponse.json({ ok: true, empleado });
  } catch (error) {
    // Otro empleado con el mismo DNI se guardó justo antes
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      return responderError(request, 'Ese DNI ya está registrado.', 409);
    }
    console.error('EMPLEADO_UPDATE_ERROR', error);
    return responderError(request, 'No se pudo actualizar el empleado.', 500);
  }
}
