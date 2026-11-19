/**
 * Restablece la contraseña de un usuario (por ejemplo, si el dueño la olvidó).
 *
 *   pnpm usuario:reset correo@cliente.com                  → genera una contraseña temporal aleatoria
 *   pnpm usuario:reset correo@cliente.com 'clave-temporal'  → usa la indicada (mínimo 10 caracteres)
 *   pnpm usuario:reset jose.perez                           → cuenta de un empleado (por su usuario)
 *
 * Contra Neon, antepón la cadena directa:  DATABASE_URL='postgresql://...' pnpm usuario:reset ...
 * Cierra todas las sesiones abiertas de esa cuenta y la app pide cambiar la contraseña al ingresar.
 */
import 'dotenv/config';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '../generated/prisma';
import { BCRYPT_COSTE, generarPasswordTemporal } from '../lib/password-temporal';
import { MIN_PASSWORD } from '../lib/validation/auth';

const prisma = new PrismaClient();

async function main() {
  const [identificadorArg, passwordArg] = process.argv.slice(2);

  if (!identificadorArg) {
    console.error('Uso: pnpm usuario:reset <correo-o-usuario> [nueva-contraseña]');
    process.exit(1);
  }
  if (passwordArg !== undefined && passwordArg.length < MIN_PASSWORD) {
    console.error(`La contraseña debe tener al menos ${MIN_PASSWORD} caracteres.`);
    process.exit(1);
  }

  // Igual que el login: en minúsculas; con "@" es un correo, sin "@" un usuario de empleado
  const identificador = identificadorArg.trim().toLowerCase();
  const usuario = await prisma.usuario.findUnique({
    where: identificador.includes('@') ? { email: identificador } : { usuario: identificador },
  });
  if (!usuario) {
    const existentes = await prisma.usuario.findMany({ select: { email: true, usuario: true } });
    console.error(`No existe una cuenta con "${identificadorArg}".`);
    console.error(`Cuentas registradas: ${existentes.map((u) => u.email ?? u.usuario).join(', ') || '(ninguna)'}`);
    process.exit(1);
  }

  const password = passwordArg ?? generarPasswordTemporal();

  await prisma.usuario.update({
    where: { id: usuario.id },
    data: {
      password: await bcrypt.hash(password, BCRYPT_COSTE),
      debeCambiarPassword: true,
      sesionVersion: { increment: 1 }, // cierra las sesiones abiertas
    },
  });

  const host = (process.env.DATABASE_URL ?? '').replace(/^.*@([^/:?]+).*$/, '$1');
  console.log(`Contraseña restablecida para ${usuario.email ?? usuario.usuario} (base de datos: ${host || 'desconocida'}).`);
  if (!passwordArg) {
    console.log(`Contraseña temporal: ${password}`);
  }
  console.log('Entrégala por un medio privado: la app pedirá cambiarla al ingresar.');
}

main()
  .catch((error) => {
    console.error('No se pudo restablecer la contraseña:', error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
