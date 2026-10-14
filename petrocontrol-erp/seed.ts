import { PrismaClient } from './generated/prisma';

const prisma = new PrismaClient();

async function main() {
  const email = 'user@gmail.com';
  const password = '123456';

  const existing = await prisma.usuario.findUnique({
    where: { email },
  });

  if (existing) {
    console.log(`Usuario existente: ${email}`);
    return;
  }

  const user = await prisma.usuario.create({
    data: {
      nombre: 'Usuario',
      apellido: 'Demo',
      email,
      password,
    },
  });

  console.log('Usuario creado:', {
    id: user.id,
    email: user.email,
    nombre: user.nombre,
    apellido: user.apellido,
  });
}

main()
  .catch((error) => {
    console.error('Error al crear usuario de prueba:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
