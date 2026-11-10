import { NextResponse } from 'next/server';
import { responderError } from '@/lib/respuesta-formulario';
import { db } from '@/lib/db';
import { maquinaEdicionSchema } from '@/lib/validation/maestros';

/** Actualiza los datos de una máquina (por ahora, su nombre). */
export async function POST(request: Request, { params }: { params: Promise<{ maquinaId: string }> }) {
  const { maquinaId } = await params;
  const id = Number(maquinaId);
  if (!Number.isInteger(id) || id <= 0) {
    return responderError(request, 'Máquina inválida.', 400);
  }

  try {
    const contentType = request.headers.get('content-type') ?? '';
    const rawData = contentType.includes('application/json')
      ? await request.json()
      : Object.fromEntries((await request.formData()).entries());

    const parsed = maquinaEdicionSchema.safeParse(rawData);
    if (!parsed.success) {
      return responderError(request, parsed.error.issues[0]?.message ?? 'Datos inválidos.', 400);
    }

    const existe = await db.maquina.findUnique({ where: { id }, select: { id: true } });
    if (!existe) {
      return responderError(request, 'La máquina no existe.', 404);
    }

    const maquina = await db.maquina.update({ where: { id }, data: { nombre: parsed.data.nombre } });

    if (!contentType.includes('application/json')) {
      return NextResponse.redirect(new URL(`/estaciones/maquinas/${id}`, request.url), 303);
    }
    return NextResponse.json({ ok: true, maquina });
  } catch (error) {
    console.error('MAQUINA_UPDATE_ERROR', error);
    return responderError(request, 'No se pudo guardar la máquina.', 500);
  }
}
