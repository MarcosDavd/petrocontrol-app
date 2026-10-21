import { z } from 'zod';

export const pagoSchema = z.object({
  medio: z.enum(['EFECTIVO', 'TARJETA', 'TRANSFERENCIA', 'DESCUENTO']),
  monto: z.coerce.number().min(0, 'El monto no puede ser negativo.'),
  nota: z.string().trim().max(250, 'La nota es demasiado larga.').optional().or(z.literal('')),
});
