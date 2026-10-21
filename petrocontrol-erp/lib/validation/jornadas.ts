import { z } from 'zod';

export const jornadaSchema = z.object({
  empleadoId: z.coerce.number().int().positive('El empleado es obligatorio.'),
  maquinaId: z.coerce.number().int().positive('La máquina es obligatoria.'),
  estacionId: z.coerce.number().int().positive('La estación es obligatoria.'),
  inicio: z.string().min(1, 'La fecha de inicio es obligatoria.'),
  fin: z.string().optional().or(z.literal('')),
  estado: z.enum(['ABIERTA', 'CERRADA']).optional(),
  notas: z.string().trim().max(500, 'La nota es demasiado larga.').optional().or(z.literal('')),
  totalizadorEntrada: z.coerce.number().min(0, 'El totalizador de entrada no puede ser negativo.'),
  totalizadorSalida: z.coerce.number().min(0, 'El totalizador de salida no puede ser negativo.').optional().nullable().or(z.literal('')),
  galonesTotalizador: z.coerce.number().min(0, 'Los galones del totalizador no pueden ser negativos.').optional().nullable().or(z.literal('')),
  galonesProductos: z.coerce.number().min(0, 'Los galones de producto no pueden ser negativos.').optional().nullable().or(z.literal('')),
  diferenciaControl: z.coerce.number().optional().nullable().or(z.literal('')),
  importeEsperado: z.coerce.number().min(0, 'El importe esperado no puede ser negativo.').optional().nullable().or(z.literal('')),
  importeDeclarado: z.coerce.number().min(0, 'El importe declarado no puede ser negativo.').optional().nullable().or(z.literal('')),
  diferenciaCaja: z.coerce.number().optional().nullable().or(z.literal('')),
});
