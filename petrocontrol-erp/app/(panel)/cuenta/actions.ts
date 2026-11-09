'use server';

import bcrypt from 'bcryptjs';
import { z } from 'zod';
import { redirect } from 'next/navigation';
import { getSessionFromCookies } from '@/lib/auth';
import { db } from '@/lib/db';

export type EstadoCambio = { error?: string; ok?: boolean };

const esquema = z
  .object({
    actual: z.string().min(1, 'Ingresa tu contraseña actual.'),
    nueva: z
      .string()
      .min(10, 'La nueva contraseña debe tener al menos 10 caracteres.')
      .max(128, 'La nueva contraseña es demasiado larga.'),
    confirmacion: z.string(),
  })
  .refine((d) => d.nueva === d.confirmacion, { message: 'La confirmación no coincide con la nueva contraseña.' })
  .refine((d) => d.nueva !== d.actual, { message: 'La nueva contraseña debe ser distinta de la actual.' });

export async function cambiarContrasenaAction(_prev: EstadoCambio, formData: FormData): Promise<EstadoCambio> {
  const session = await getSessionFromCookies();
  if (!session) redirect('/login');

  const parsed = esquema.safeParse(Object.fromEntries(formData.entries()));
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? 'Datos inválidos.' };

  const usuario = await db.usuario.findUnique({ where: { id: session.userId } });
  if (!usuario) redirect('/login');

  const valida = await bcrypt.compare(parsed.data.actual, usuario.password);
  if (!valida) return { error: 'La contraseña actual no es correcta.' };

  await db.usuario.update({
    where: { id: usuario.id },
    data: { password: await bcrypt.hash(parsed.data.nueva, 12) },
  });

  return { ok: true };
}
