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
