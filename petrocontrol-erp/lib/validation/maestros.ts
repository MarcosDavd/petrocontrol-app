import { z } from 'zod';

export const estacionSchema = z.object({
  nombre: z.string().trim().min(2, 'El nombre de la estación es obligatorio.'),
  direccion: z.string().trim().max(200, 'La dirección es demasiado larga.').optional().or(z.literal('')),
  activa: z.coerce.boolean().optional(),
});

export const maquinaSchema = z.object({
  estacionId: z.coerce.number().int().positive('La estación es obligatoria.'),
  nombre: z.string().trim().min(2, 'El nombre de la máquina es obligatorio.'),
  activa: z.coerce.boolean().optional(),
});

export const combustibleSchema = z.object({
  nombre: z.string().trim().min(2, 'El nombre del combustible es obligatorio.'),
});

export const precioSchema = z.object({
  combustibleId: z.coerce.number().int().positive('El combustible es obligatorio.'),
  precio: z.coerce.number().min(0, 'El precio no puede ser menor a 0.'),
});

export const empleadoSchema = z.object({
  nombre: z.string().trim().min(2, 'El nombre del empleado es obligatorio.'),
  estacionId: z.coerce.number().int().positive('La estación es obligatoria.'),
  horarioInicio: z.string().trim().optional().or(z.literal('')),
  horarioFin: z.string().trim().optional().or(z.literal('')),
  activo: z.coerce.boolean().optional(),
});
