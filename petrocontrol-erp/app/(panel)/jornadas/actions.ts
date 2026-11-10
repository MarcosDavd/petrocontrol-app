'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { getSessionFromCookies } from '@/lib/auth';
import { db } from '@/lib/db';
import { ErrorNegocio } from '@/lib/errores';
import { abrirJornada, cerrarJornada, editarJornada, recalcularCaja } from '@/lib/jornadas-servicio';
import {
  abrirJornadaSchema,
  camposPorProducto,
  cerrarJornadaSchema,
  editarJornadaSchema,
  leerPagosCierre,
} from '@/lib/validation/jornadas';

export type EstadoFormulario = { error?: string };

async function exigirSesion() {
  const session = await getSessionFromCookies();
  if (!session) redirect('/login');
}

function mensajeDeError(error: unknown, contexto: string): EstadoFormulario {
  if (error instanceof ErrorNegocio) return { error: error.message };
  console.error(contexto, error);
  return { error: 'Ocurrió un error inesperado. Intenta nuevamente.' };
}

function revalidarTodo() {
  for (const ruta of ['/jornadas', '/inventario', '/reportes', '/home']) revalidatePath(ruta);
}

export async function abrirJornadaAction(_prev: EstadoFormulario, formData: FormData): Promise<EstadoFormulario> {
  await exigirSesion();

  const parsed = abrirJornadaSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? 'Datos inválidos.' };

  const atras = camposPorProducto(formData, 'entradaAtras');
  const adelante = camposPorProducto(formData, 'entradaAdelante');

  let jornadaId: number;
  try {
    const jornada = await abrirJornada({
      maquinaId: parsed.data.maquinaId,
      empleadoId: parsed.data.empleadoId,
      fecha: parsed.data.fecha,
      horaManual: parsed.data.hora || undefined,
      totalizadorEntrada: parsed.data.totalizadorEntrada || undefined,
      notas: parsed.data.notas || undefined,
      lecturas: [...atras.keys()].map((combustibleId) => ({
        combustibleId,
        entradaAtras: atras.get(combustibleId) ?? '',
        entradaAdelante: adelante.get(combustibleId) ?? '',
      })),
    });
    jornadaId = jornada.id;
  } catch (error) {
    return mensajeDeError(error, 'ABRIR_JORNADA_ERROR');
  }

  revalidarTodo();
  redirect(`/jornadas/${jornadaId}`);
}

export async function cerrarJornadaAction(_prev: EstadoFormulario, formData: FormData): Promise<EstadoFormulario> {
  await exigirSesion();

  const parsed = cerrarJornadaSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? 'Datos inválidos.' };

  const atras = camposPorProducto(formData, 'salidaAtras');
  const adelante = camposPorProducto(formData, 'salidaAdelante');
  const reinicio = camposPorProducto(formData, 'reinicio');
  const pagos = leerPagosCierre(formData.get('pagos'));
  if (!pagos.ok) return { error: pagos.error };

  try {
    await cerrarJornada(parsed.data.jornadaId, {
      fecha: parsed.data.fecha,
      horaManual: parsed.data.hora || undefined,
      totalizadorSalida: parsed.data.totalizadorSalida || undefined,
      notas: parsed.data.notas,
      lecturas: [...atras.keys()].map((combustibleId) => ({
        combustibleId,
        salidaAtras: atras.get(combustibleId) ?? '',
        salidaAdelante: adelante.get(combustibleId) ?? '',
        huboReinicio: reinicio.has(combustibleId),
      })),
      pagos: pagos.pagos,
    });
  } catch (error) {
    return mensajeDeError(error, 'CERRAR_JORNADA_ERROR');
  }

  revalidarTodo();
  redirect(`/jornadas/${parsed.data.jornadaId}`);
}

export async function editarJornadaAction(_prev: EstadoFormulario, formData: FormData): Promise<EstadoFormulario> {
  await exigirSesion();

  const parsed = editarJornadaSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? 'Datos inválidos.' };
  const datos = parsed.data;

  const entradaAtras = camposPorProducto(formData, 'entradaAtras');
  const entradaAdelante = camposPorProducto(formData, 'entradaAdelante');
  const salidaAtras = camposPorProducto(formData, 'salidaAtras');
  const salidaAdelante = camposPorProducto(formData, 'salidaAdelante');
  const reinicio = camposPorProducto(formData, 'reinicio');

  try {
    await editarJornada(datos.jornadaId, {
      empleadoId: datos.empleadoId,
      fecha: datos.fecha,
      horaManual: datos.hora || undefined,
      totalizadorEntrada: datos.totalizadorEntrada || undefined,
      notas: datos.notas,
      entradas: [...entradaAtras.keys()].map((combustibleId) => ({
        combustibleId,
        entradaAtras: entradaAtras.get(combustibleId) ?? '',
        entradaAdelante: entradaAdelante.get(combustibleId) ?? '',
      })),
      // Solo llegan en jornadas cerradas
      cierre: datos.fechaCierre
        ? {
            fecha: datos.fechaCierre,
            horaManual: datos.horaCierre || undefined,
            totalizadorSalida: datos.totalizadorSalida || undefined,
            lecturas: [...salidaAtras.keys()].map((combustibleId) => ({
              combustibleId,
              salidaAtras: salidaAtras.get(combustibleId) ?? '',
              salidaAdelante: salidaAdelante.get(combustibleId) ?? '',
              huboReinicio: reinicio.has(combustibleId),
            })),
          }
        : undefined,
    });
  } catch (error) {
    return mensajeDeError(error, 'EDITAR_JORNADA_ERROR');
  }

  revalidarTodo();
  revalidatePath(`/jornadas/${datos.jornadaId}`);
  redirect(`/jornadas/${datos.jornadaId}?editada=1`);
}

export async function eliminarPagoAction(formData: FormData) {
  await exigirSesion();
  const pagoId = Number(formData.get('pagoId'));
  const jornadaId = Number(formData.get('jornadaId'));
  if (!Number.isInteger(pagoId) || !Number.isInteger(jornadaId)) return;

  await db.pagoJornada.deleteMany({ where: { id: pagoId, jornadaId } });
  await recalcularCaja(jornadaId);
  revalidarTodo();
  revalidatePath(`/jornadas/${jornadaId}`);
}
