import { Prisma } from '@/generated/prisma';
import { NextResponse } from 'next/server';
import { responderError } from '@/lib/respuesta-formulario';
import { db } from '@/lib/db';
import { empleadoSchema } from '@/lib/validation/maestros';
import { exigirAdminApi } from '@/lib/sesion';

export async function GET() {
  const denegado = await exigirAdminApi();
  if (denegado) return denegado;

  const empleados = await db.empleado.findMany({
    include: { estacion: true },
    orderBy: [{ estacionId: 'asc' }, { nombre: 'asc' }],
  });

  return NextResponse.json({ empleados });
}

export async function POST(request: Request) {
  const denegado = await exigirAdminApi();
  if (denegado) return denegado;

  try {
    const contentType = request.headers.get('content-type') ?? '';
    const rawData = contentType.includes('application/json')
      ? await request.json()
      : Object.fromEntries((await request.formData()).entries());

    const parsed = empleadoSchema.safeParse(rawData);

    if (!parsed.success) {
      return responderError(request, parsed.error.issues[0]?.message ?? 'Datos inválidos.', 400);
    }

    const data = parsed.data;
    const empleado = await db.empleado.create({
      data: {
        nombre: data.nombre,
        dni: data.dni || null,
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
    // Otro empleado con el mismo DNI se guardó justo antes
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      return responderError(request, 'Ese DNI ya está registrado.', 409);
    }
    console.error('EMPLEADO_CREATE_ERROR', error);
    return responderError(request, 'No se pudo crear el empleado.', 500);
  }
}
