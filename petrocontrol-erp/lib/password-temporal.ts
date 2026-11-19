import { randomInt } from 'node:crypto';

/** Coste de bcrypt para toda contraseña que se guarda. */
export const BCRYPT_COSTE = 12;

// Sin caracteres que se confunden al dictarla o leerla en pantalla (0/O, 1/l/I).
const ALFABETO = 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789';

/**
 * Contraseña temporal aleatoria para entregar en persona: 12 caracteres en grupos de 4 ("Xk7m-Qp2a-9tRw").
 * Unos 70 bits de entropía; el usuario debe cambiarla al ingresar.
 */
export function generarPasswordTemporal() {
  const grupos = Array.from({ length: 3 }, () =>
    Array.from({ length: 4 }, () => ALFABETO[randomInt(ALFABETO.length)]).join('')
  );
  return grupos.join('-');
}
