import { z } from 'zod';

/** El admin ingresa con su correo; los empleados, con su usuario (p. ej. su DNI). */
export const loginSchema = z.object({
  identificador: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, 'Ingresa tu correo o usuario.')
    .max(254, 'El correo o usuario es demasiado largo.'),
  password: z
    .string()
    .min(1, 'Ingresa tu contraseña.')
    .max(128, 'La contraseña es demasiado larga.'),
});

/** Reglas de toda contraseña nueva (cambio en "Mi cuenta" y script de restablecimiento). */
export const MIN_PASSWORD = 10;

export const nuevaPasswordSchema = z
  .string()
  .min(MIN_PASSWORD, `La nueva contraseña debe tener al menos ${MIN_PASSWORD} caracteres.`)
  .max(128, 'La nueva contraseña es demasiado larga.');

/**
 * Usuario de acceso de un empleado: minúsculas, números, punto, guion y guion bajo.
 * Sin "@", para que nunca se confunda con el correo del admin al ingresar.
 */
export const nombreUsuarioSchema = z
  .string()
  .trim()
  .toLowerCase()
  .min(3, 'El usuario debe tener al menos 3 caracteres.')
  .max(32, 'El usuario puede tener hasta 32 caracteres.')
  .regex(/^[a-z0-9._-]+$/, 'El usuario solo puede tener letras sin tildes, números, punto, guion y guion bajo.');

/**
 * Sugerencia de usuario a partir del nombre del empleado: "José Pérez" → "jose.perez".
 * El admin puede reemplazarla (por ejemplo, por el DNI).
 */
export function sugerirUsuario(nombre: string) {
  return nombre
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '.')
    .replace(/^\.+|\.+$/g, '')
    .slice(0, 32);
}
