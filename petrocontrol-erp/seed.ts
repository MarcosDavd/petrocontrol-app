import bcrypt from 'bcryptjs';
import { Prisma, PrismaClient } from './generated/prisma';

const prisma = new PrismaClient();

async function main() {
  const email = 'dueno@petrocontrol.pe';
  const password = 'Admin123!';
  const hashedPassword = await bcrypt.hash(password, 10);

  const existing = await prisma.usuario.findUnique({ where: { email } });

  if (existing) {
    console.log(`Usuario existente: ${email}`);
    return;
  }

  const owner = await prisma.usuario.create({
    data: {
      nombre: 'Dueño',
      apellido: 'PetroControl',
      email,
      password: hashedPassword,
    },
  });

  const combustibles = await Promise.all([
    prisma.combustible.upsert({
      where: { nombre: 'Diesel' },
      update: {},
      create: { nombre: 'Diesel' },
    }),
    prisma.combustible.upsert({
      where: { nombre: 'Regular' },
      update: {},
      create: { nombre: 'Regular' },
    }),
    prisma.combustible.upsert({
      where: { nombre: 'Premium' },
      update: {},
      create: { nombre: 'Premium' },
    }),
  ]);

  const precioBase = [
    { nombre: 'Diesel', precio: '14.20' },
    { nombre: 'Regular', precio: '15.10' },
    { nombre: 'Premium', precio: '16.40' },
  ];

  for (const combustible of combustibles) {
    const match = precioBase.find((item) => item.nombre === combustible.nombre);
    if (!match) continue;

    await prisma.historialPrecio.create({
      data: {
        combustibleId: combustible.id,
        precio: new Prisma.Decimal(match.precio),
        vigenteDesde: new Date(),
      },
    });
  }

  const estaciones = await Promise.all([
    prisma.estacion.upsert({
      where: { id: 1 },
      update: {},
      create: {
        nombre: 'Estación Central',
        direccion: 'Av. Principal 123',
      },
    }),
    prisma.estacion.upsert({
      where: { id: 2 },
      update: {},
      create: {
        nombre: 'Estación Sur',
        direccion: 'Jr. Los Olivos 456',
      },
    }),
  ]);

  for (const estacion of estaciones) {
    for (let index = 1; index <= 2; index += 1) {
      await prisma.maquina.upsert({
        where: {
          estacionId_nombre: {
            estacionId: estacion.id,
            nombre: `Máquina ${index}`,
          },
        },
        update: {},
        create: {
          estacionId: estacion.id,
          nombre: `Máquina ${index}`,
        },
      });
    }

    for (const combustible of combustibles) {
      await prisma.tanque.upsert({
        where: {
          estacionId_combustibleId: {
            estacionId: estacion.id,
            combustibleId: combustible.id,
          },
        },
        update: {},
        create: {
          estacionId: estacion.id,
          combustibleId: combustible.id,
          capacidad: '20000',
          minimo: '1500',
        },
      });
    }
  }

  console.log('Usuario creador:', {
    id: owner.id,
    email: owner.email,
    nombre: owner.nombre,
    apellido: owner.apellido,
  });

  console.log('Seed completado. Credenciales de acceso:');
  console.log({ email, password });
}

main()
  .catch((error) => {
    console.error('Error al crear la base inicial:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
