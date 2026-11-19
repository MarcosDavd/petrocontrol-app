'use server';

import { revalidatePath } from 'next/cache';
import { Prisma } from '@/generated/prisma';
import { db } from '@/lib/db';
import { exigirAdmin } from '@/lib/sesion';
import { limitesTanqueSchema } from '@/lib/validation/inventario';

export type EstadoTanque = { error?: string; ok?: boolean };

/** Cambia la capacidad (máximo) y el mínimo de alerta de un tanque. El stock no se toca. */
export async function actualizarLimitesTanqueAction(_prev: EstadoTanque, formData: FormData): Promise<EstadoTanque> {
  await exigirAdmin();

  const parsed = limitesTanqueSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? 'Datos inválidos.' };
  const { tanqueId, capacidad, minimo } = parsed.data;

  const { count } = await db.tanque.updateMany({
    where: { id: tanqueId },
    data: {
      capacidad: new Prisma.Decimal(capacidad.toFixed(2)),
      minimo: new Prisma.Decimal(minimo.toFixed(2)),
    },
  });
  if (count === 0) return { error: 'El tanque no existe.' };

  // El nivel (bajo, medio, normal) depende de estos valores: se ve en inventario y en el inicio
  revalidatePath('/inventario');
  revalidatePath('/home');
  return { ok: true };
}
