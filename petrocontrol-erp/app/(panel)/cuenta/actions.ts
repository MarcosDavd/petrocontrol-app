'use server';

import bcrypt from 'bcryptjs';
import { z } from 'zod';
import { redirect } from 'next/navigation';
import { db } from '@/lib/db';
import { BCRYPT_COSTE } from '@/lib/password-temporal';
import { inicioDe } from '@/lib/permisos';
import { exigirUsuario, iniciarSesion } from '@/lib/sesion';
import { nuevaPasswordSchema } from '@/lib/validation/auth';

export type EstadoCambio = { error?: string; ok?: boolean };

const esquema = z
  .object({
    actual: z.string().min(1, 'Ingresa tu contraseña actual.'),
    nueva: nuevaPasswordSchema,
    confirmacion: z.string(),
  })
  .refine((d) => d.nueva === d.confirmacion, { message: 'La confirmación no coincide con la nueva contraseña.' })
  .refine((d) => d.nueva !== d.actual, { message: 'La nueva contraseña debe ser distinta de la actual.' });

export async function cambiarContrasenaAction(_prev: EstadoCambio, formData: FormData): Promise<EstadoCambio> {
  const usuario = await exigirUsuario({ permitirCambioPendiente: true });

  const parsed = esquema.safeParse(Object.fromEntries(formData.entries()));
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? 'Datos inválidos.' };

  const valida = await bcrypt.compare(parsed.data.actual, usuario.password);
  if (!valida) return { error: 'La contraseña actual no es correcta.' };

  // Nueva versión de sesión: se cierran las sesiones abiertas en otros dispositivos
  // (si alguien conocía la contraseña anterior, pierde el acceso). Esta se renueva.
  const actualizado = await db.usuario.update({
    where: { id: usuario.id },
    data: {
      password: await bcrypt.hash(parsed.data.nueva, BCRYPT_COSTE),
      debeCambiarPassword: false,
      sesionVersion: { increment: 1 },
    },
  });
  await iniciarSesion(actualizado);

  // Era la contraseña temporal: ya puede usar la app
  if (usuario.debeCambiarPassword) redirect(inicioDe(usuario.rol));

  return { ok: true };
}
