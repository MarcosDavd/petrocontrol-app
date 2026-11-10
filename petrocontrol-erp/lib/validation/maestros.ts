import { z } from 'zod';
import { HORA_REGEX } from '../turnos';

/**
 * Casilla de formulario. Un checkbox desmarcado no se envía, por eso los formularios
 * incluyen un <input type="hidden" value="false"> con el mismo nombre antes del checkbox.
 * (z.coerce.boolean() no sirve: convierte el texto "false" en true.)
 */
const casilla = z
  .preprocess(
    (valor) => (valor === undefined || valor === null || valor === '' ? undefined : valor === true || valor === 'on' || valor === 'true' || valor === '1'),
    z.boolean()
  )
  .optional();

const hora = (campo: string) =>
  z.string().trim().regex(HORA_REGEX, `${campo}: selecciona una hora válida (HH:MM).`).optional().or(z.literal(''));

export const estacionSchema = z.object({
  nombre: z.string().trim().min(2, 'El nombre de la estación es obligatorio.'),
  direccion: z.string().trim().max(200, 'La dirección es demasiado larga.').optional().or(z.literal('')),
  activa: casilla,
});

export const maquinaSchema = z.object({
  estacionId: z.coerce.number().int().positive('La estación es obligatoria.'),
  nombre: z.string().trim().min(2, 'El nombre de la máquina es obligatorio.'),
  activa: casilla,
});

/** Edición de una máquina existente desde su detalle (la estación no se cambia). */
export const maquinaEdicionSchema = maquinaSchema.pick({ nombre: true });

export const combustibleSchema = z.object({
  nombre: z.string().trim().min(2, 'El nombre del combustible es obligatorio.'),
});

export const precioSchema = z.object({
  // Una estación concreta o "todas" (mismo precio en todas las estaciones)
  estacionId: z.preprocess(
    (valor) => (valor === 'todas' ? valor : valor === '' || valor == null ? undefined : Number(valor)),
    z.union([z.literal('todas'), z.number().int().positive()], { error: 'Selecciona una estación.' })
  ),
  combustibleId: z.coerce.number().int().positive('El combustible es obligatorio.'),
  precio: z.coerce.number().min(0, 'El precio no puede ser menor a 0.'),
  // Opcional: permite registrar precios con fecha pasada (p. ej. al cargar jornadas antiguas)
  vigenteDesde: z.string().optional().or(z.literal('')),
});

export const empleadoSchema = z.object({
  nombre: z.string().trim().min(2, 'El nombre del empleado es obligatorio.'),
  estacionId: z.coerce.number().int().positive('La estación es obligatoria.'),
  horarioInicio: hora('Hora de entrada'),
  horarioFin: hora('Hora de salida'),
  activo: casilla,
}).refine((data) => Boolean(data.horarioInicio) === Boolean(data.horarioFin), {
  message: 'Indica la hora de entrada y la de salida.',
});
