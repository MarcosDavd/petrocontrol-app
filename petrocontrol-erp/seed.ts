import bcrypt from 'bcryptjs';
import { Prisma, PrismaClient } from './generated/prisma';

const prisma = new PrismaClient();

// Precios por galón tomados de la planilla. GLP: completar con el precio real en Maestros.
const COMBUSTIBLES = [
  { nombre: 'Diesel', precio: '20.79' },
  { nombre: 'Regular', precio: '17.80' }, // Gasohol 90
  { nombre: 'Premium', precio: '19.79' }, // Gasohol 95
  { nombre: 'GLP', precio: null },
];

// Seed idempotente: se puede ejecutar varias veces sin duplicar datos.
async function main() {
  // Credenciales del dueño: en producción vienen de ADMIN_EMAIL / ADMIN_PASSWORD.
  // La contraseña de desarrollo solo se permite contra una base de datos local.
  const esLocal = /@(localhost|127\.0\.0\.1)[:/]/.test(process.env.DATABASE_URL ?? '');
  const email = process.env.ADMIN_EMAIL ?? 'dueno@petrocontrol.pe';
  const password = process.env.ADMIN_PASSWORD ?? (esLocal ? 'Admin123!' : '');
  if (password.length < 10 && !esLocal) {
    throw new Error('Define ADMIN_PASSWORD (mínimo 10 caracteres) para crear el usuario en una base de datos remota.');
  }

  const existing = await prisma.usuario.findUnique({ where: { email } });
  if (!existing) {
    await prisma.usuario.create({
      data: {
        nombre: 'Dueño',
        apellido: 'Grifos Lim',
        email,
        password: await bcrypt.hash(password, 10),
      },
    });
    console.log('Usuario creado:', email, esLocal ? `(contraseña de desarrollo: ${password})` : '(contraseña: la de ADMIN_PASSWORD)');
  } else {
    console.log(`Usuario existente: ${email}`);
  }

  const combustibles = [];
  for (const item of COMBUSTIBLES) {
    const combustible = await prisma.combustible.upsert({
      where: { nombre: item.nombre },
      update: {},
      create: { nombre: item.nombre },
    });
    combustibles.push(combustible);

  }

  const liquidos = combustibles.filter((c) => c.nombre !== 'GLP');
  const glp = combustibles.find((c) => c.nombre === 'GLP')!;

  // Estaciones de Grifos Lim. Las de ejemplo de versiones anteriores del seed se renombran
  // (y se les quita la dirección ficticia) en vez de duplicarse.
  const ESTACIONES = [
    { nombre: 'Pachas', anterior: { nombre: 'Estación Central', direccion: 'Av. Principal 123' } },
    { nombre: 'Tunan', anterior: { nombre: 'Estación Sur', direccion: 'Jr. Los Olivos 456' } },
  ];

  const estaciones = [];
  for (const { nombre, anterior } of ESTACIONES) {
    const vieja = await prisma.estacion.findFirst({ where: { nombre: anterior.nombre } });
    const actual = await prisma.estacion.findFirst({ where: { nombre } });
    if (vieja && !actual) {
      await prisma.estacion.update({
        where: { id: vieja.id },
        data: { nombre, direccion: vieja.direccion === anterior.direccion ? null : vieja.direccion },
      });
    }
    const estacion = (await prisma.estacion.findFirst({ where: { nombre } })) ?? (await prisma.estacion.create({ data: { nombre } }));
    estaciones.push(estacion);
  }

  for (const estacion of estaciones) {
    // Precios por galón: cada estación tiene los suyos (al inicio, los de la planilla en todas)
    for (const item of COMBUSTIBLES) {
      const combustible = combustibles.find((c) => c.nombre === item.nombre)!;
      const tienePrecio = await prisma.historialPrecio.count({
        where: { estacionId: estacion.id, combustibleId: combustible.id },
      });
      if (!tienePrecio && item.precio) {
        await prisma.historialPrecio.create({
          data: {
            estacionId: estacion.id,
            combustibleId: combustible.id,
            precio: new Prisma.Decimal(item.precio),
            vigenteDesde: new Date('2026-01-01T00:00:00-05:00'),
          },
        });
      }
    }

    // Máquinas de líquidos: Diesel, Regular y Premium (manguera atrás y adelante cada uno)
    for (let index = 1; index <= 2; index += 1) {
      const maquina = await prisma.maquina.upsert({
        where: { estacionId_nombre: { estacionId: estacion.id, nombre: `Máquina ${index}` } },
        update: {},
        create: { estacionId: estacion.id, nombre: `Máquina ${index}` },
      });
      for (const combustible of liquidos) {
        await prisma.maquinaCombustible.upsert({
          where: { maquinaId_combustibleId: { maquinaId: maquina.id, combustibleId: combustible.id } },
          update: {},
          create: { maquinaId: maquina.id, combustibleId: combustible.id },
        });
      }
    }

    // Surtidor de GLP independiente
    const surtidorGlp = await prisma.maquina.upsert({
      where: { estacionId_nombre: { estacionId: estacion.id, nombre: 'Surtidor GLP' } },
      update: {},
      create: { estacionId: estacion.id, nombre: 'Surtidor GLP' },
    });
    await prisma.maquinaCombustible.upsert({
      where: { maquinaId_combustibleId: { maquinaId: surtidorGlp.id, combustibleId: glp.id } },
      update: {},
      create: { maquinaId: surtidorGlp.id, combustibleId: glp.id },
    });

    for (const combustible of combustibles) {
      await prisma.tanque.upsert({
        where: { estacionId_combustibleId: { estacionId: estacion.id, combustibleId: combustible.id } },
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

  console.log('Seed completado.');
}

main()
  .catch((error) => {
    console.error('Error al crear la base inicial:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
