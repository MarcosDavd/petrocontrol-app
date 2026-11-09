/**
 * Restablece la contraseña de un usuario (por ejemplo, si el dueño la olvidó).
 *
 *   pnpm usuario:reset correo@cliente.com                  → genera una contraseña temporal aleatoria
 *   pnpm usuario:reset correo@cliente.com 'clave-temporal'  → usa la indicada (mínimo 10 caracteres)
 *
 * Contra Neon, antepón la cadena directa:  DATABASE_URL='postgresql://...' pnpm usuario:reset ...
 * Después el usuario debe cambiarla en "Mi cuenta".
 */
import 'dotenv/config';
import { randomBytes } from 'node:crypto';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  const [email, passwordArg] = process.argv.slice(2);

  if (!email) {
    console.error('Uso: pnpm usuario:reset <correo> [nueva-contraseña]');
    process.exit(1);
  }
  if (passwordArg !== undefined && passwordArg.length < 10) {
    console.error('La contraseña debe tener al menos 10 caracteres.');
    process.exit(1);
  }

  const usuario = await prisma.usuario.findUnique({ where: { email: email.trim() } });
  if (!usuario) {
    const existentes = await prisma.usuario.findMany({ select: { email: true } });
    console.error(`No existe un usuario con el correo "${email}".`);
    console.error(`Usuarios registrados: ${existentes.map((u) => u.email).join(', ') || '(ninguno)'}`);
    process.exit(1);
  }

  // 12 bytes aleatorios en base64url = 16 caracteres sin símbolos confusos para dictar
  const password = passwordArg ?? randomBytes(12).toString('base64url');

  await prisma.usuario.update({
    where: { id: usuario.id },
    data: { password: await bcrypt.hash(password, 12) },
  });

  const host = (process.env.DATABASE_URL ?? '').replace(/^.*@([^/:?]+).*$/, '$1');
  console.log(`Contraseña restablecida para ${usuario.email} (base de datos: ${host || 'desconocida'}).`);
  if (!passwordArg) {
    console.log(`Contraseña temporal: ${password}`);
  }
  console.log('Entrégala por un medio privado y pide que la cambie en "Mi cuenta".');
}

main()
  .catch((error) => {
    console.error('No se pudo restablecer la contraseña:', error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
