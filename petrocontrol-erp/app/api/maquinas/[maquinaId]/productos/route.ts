import { NextResponse } from 'next/server';
import { responderError } from '@/lib/respuesta-formulario';
import { db } from '@/lib/db';

/** Reemplaza los productos (combustibles) que despacha una máquina. */
export async function POST(request: Request, { params }: { params: Promise<{ maquinaId: string }> }) {
  const { maquinaId } = await params;
  const id = Number(maquinaId);
  if (!Number.isInteger(id) || id <= 0) {
    return responderError(request, 'Máquina inválida.', 400);
  }

  try {
    const contentType = request.headers.get('content-type') ?? '';
    let ids: number[];
    if (contentType.includes('application/json')) {
      const body = await request.json();
      ids = Array.isArray(body.combustibleIds) ? body.combustibleIds.map(Number) : [];
    } else {
      ids = (await request.formData()).getAll('combustibleIds').map(Number);
    }
    ids = [...new Set(ids.filter((value) => Number.isInteger(value) && value > 0))];

    const abierta = await db.jornada.findFirst({ where: { maquinaId: id, estado: 'ABIERTA' } });
    if (abierta) {
      return responderError(request, 'No se pueden cambiar los productos mientras la máquina tiene una jornada abierta.', 409);
    }

    await db.$transaction([
      db.maquinaCombustible.deleteMany({ where: { maquinaId: id } }),
      db.maquinaCombustible.createMany({ data: ids.map((combustibleId) => ({ maquinaId: id, combustibleId })) }),
    ]);

    if (!contentType.includes('application/json')) {
      return NextResponse.redirect(new URL(`/estaciones/maquinas/${id}`, request.url), 303);
    }
    return NextResponse.json({ ok: true, combustibleIds: ids });
  } catch (error) {
    console.error('MAQUINA_PRODUCTOS_ERROR', error);
    return responderError(request, 'No se pudieron guardar los productos.', 500);
  }
}
