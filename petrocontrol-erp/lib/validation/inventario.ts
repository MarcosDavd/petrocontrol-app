import { z } from 'zod';

export const tanqueSchema = z.object({
  estacionId: z.coerce.number().int().positive('La estación es obligatoria.'),
  combustibleId: z.coerce.number().int().positive('El combustible es obligatorio.'),
  capacidad: z.coerce.number().min(0, 'La capacidad no puede ser negativa.'),
  minimo: z.coerce.number().min(0, 'El mínimo no puede ser negativo.'),
});

export const movimientoStockSchema = z.object({
  tanqueId: z.coerce.number().int().positive('El tanque es obligatorio.'),
  // VENTA no se registra a mano: la genera el cierre de cada jornada a partir de los contadores.
  tipo: z.enum(['RECARGA', 'AJUSTE', 'MERMA'], { message: 'Tipo de movimiento inválido.' }),
  galones: z.coerce
    .number()
    .refine((value) => Number.isFinite(value) && value !== 0, { message: 'Ingresa una cantidad de galones distinta de 0.' }),
  fecha: z.string().optional().or(z.literal('')),
  nota: z.string().trim().max(200, 'La nota es demasiado larga.').optional().or(z.literal('')),
});
