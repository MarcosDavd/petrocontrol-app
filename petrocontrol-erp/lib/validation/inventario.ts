import { z } from 'zod';

export const tanqueSchema = z.object({
  estacionId: z.coerce.number().int().positive('La estación es obligatoria.'),
  combustibleId: z.coerce.number().int().positive('El combustible es obligatorio.'),
  capacidad: z.coerce.number().min(0, 'La capacidad no puede ser negativa.'),
  minimo: z.coerce.number().min(0, 'El mínimo no puede ser negativo.'),
});

export const movimientoStockSchema = z.object({
  tanqueId: z.coerce.number().int().positive('El tanque es obligatorio.'),
  tipo: z.enum(['RECARGA', 'VENTA', 'AJUSTE', 'MERMA']),
  galones: z.coerce.number().refine((value) => Number.isFinite(value), {
    message: 'Los galones son obligatorios.',
  }),
  fecha: z.string().optional().or(z.literal('')),
  nota: z.string().trim().max(200, 'La nota es demasiado larga.').optional().or(z.literal('')),
  jornadaId: z.coerce.number().int().positive().optional().nullable().or(z.literal('')),
});
