import { z } from 'zod';

export const gastoSchema = z.object({
  estacionId: z.coerce.number().int().positive('La estación es obligatoria.'),
  categoria: z.enum(['Servicios', 'Mantenimiento', 'Personal', 'Logística', 'Otros']),
  descripcion: z.string().trim().min(1, 'La descripción es obligatoria.').max(500, 'La descripción es demasiado larga.'),
  monto: z.coerce.number().min(0, 'El monto no puede ser negativo.'),
  fecha: z.string().min(1, 'La fecha es obligatoria.'),
});
