import { z } from 'zod';
import { HORA_REGEX } from '../turnos';

const opcional = z.string().trim().optional().or(z.literal(''));

export const abrirJornadaSchema = z.object({
  maquinaId: z.coerce.number().int().positive('Selecciona una máquina.'),
  empleadoId: z.coerce.number().int().positive('Selecciona un empleado.'),
  // Solo la fecha: la hora sale del horario de trabajo del empleado
  fecha: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Selecciona la fecha de la jornada.'),
  // Solo se usa si el empleado no tiene horario registrado
  hora: z.string().trim().regex(HORA_REGEX, 'Selecciona una hora de inicio válida.').optional().or(z.literal('')),
  totalizadorEntrada: opcional,
  notas: z.string().trim().max(500, 'La nota es demasiado larga.').optional().or(z.literal('')),
});

export const cerrarJornadaSchema = z.object({
  jornadaId: z.coerce.number().int().positive(),
  // Solo la fecha: la hora sale del horario de trabajo del empleado
  fecha: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Selecciona la fecha de cierre.'),
  // Solo se usa si el empleado no tiene hora de fin registrada
  hora: z.string().trim().regex(HORA_REGEX, 'Selecciona una hora de fin válida.').optional().or(z.literal('')),
  totalizadorSalida: opcional,
  notas: z.string().trim().max(500, 'La nota es demasiado larga.').optional(),
});

/** Corrección de una jornada abierta o cerrada. Los campos de cierre solo se usan si está cerrada. */
export const editarJornadaSchema = z.object({
  jornadaId: z.coerce.number().int().positive(),
  empleadoId: z.coerce.number().int().positive('Selecciona un empleado.'),
  fecha: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Selecciona la fecha de la jornada.'),
  hora: z.string().trim().regex(HORA_REGEX, 'Selecciona una hora de inicio válida.').optional().or(z.literal('')),
  totalizadorEntrada: opcional,
  notas: z.string().trim().max(500, 'La nota es demasiado larga.').optional(),
  fechaCierre: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Selecciona la fecha de cierre.').optional(),
  horaCierre: z.string().trim().regex(HORA_REGEX, 'Selecciona una hora de fin válida.').optional().or(z.literal('')),
  totalizadorSalida: opcional,
});

const MONTO_REGEX = /^\d+(\.\d{1,2})?$/;

/** Un pago agregado al cerrar la jornada (aún no guardado). */
export const pagoCierreSchema = z.object({
  medio: z.enum(['EFECTIVO', 'TARJETA', 'TRANSFERENCIA', 'DESCUENTO'], { error: 'Elige el medio de cada pago.' }),
  monto: z
    .string()
    .trim()
    .transform((valor) => valor.replace(',', '.'))
    .refine((valor) => MONTO_REGEX.test(valor) && Number(valor) > 0, {
      error: 'Cada pago necesita un monto mayor que 0, con 2 decimales como máximo.',
    }),
  nota: z.string().trim().max(250, 'La nota de un pago es demasiado larga.').optional().default(''),
});

export type PagoCierre = z.infer<typeof pagoCierreSchema>;

/**
 * Pagos que llegan con el cierre, en el campo oculto `pagos` (JSON).
 * Vacío = sin pagos nuevos (el empleado no entregó nada o ya estaban registrados).
 */
export function leerPagosCierre(valor: FormDataEntryValue | null): { ok: true; pagos: PagoCierre[] } | { ok: false; error: string } {
  const texto = typeof valor === 'string' ? valor.trim() : '';
  if (!texto) return { ok: true, pagos: [] };
  let datos: unknown;
  try {
    datos = JSON.parse(texto);
  } catch {
    return { ok: false, error: 'No se pudieron leer los pagos. Vuelve a agregarlos.' };
  }
  const parsed = z.array(pagoCierreSchema).max(50, 'Demasiados pagos en una jornada.').safeParse(datos);
  if (!parsed.success) return { ok: false, error: parsed.error.issues[0]?.message ?? 'Pagos inválidos.' };
  return { ok: true, pagos: parsed.data };
}

/** Lee los campos dinámicos `<prefijo>_<combustibleId>` de un formulario. */
export function camposPorProducto(formData: FormData, prefijo: string) {
  const valores = new Map<number, string>();
  for (const [clave, valor] of formData.entries()) {
    if (!clave.startsWith(`${prefijo}_`)) continue;
    const id = Number(clave.slice(prefijo.length + 1));
    if (Number.isInteger(id) && id > 0) valores.set(id, String(valor).trim());
  }
  return valores;
}
