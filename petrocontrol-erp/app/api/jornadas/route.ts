import { Prisma } from '@/generated/prisma';
import { db } from '@/lib/db';
import { jornadaSchema } from '@/lib/validation/jornadas';
import { NextResponse } from 'next/server';

const asDecimalOrNull = (value: string | number | null | undefined) => {
  if (value === null || value === undefined || value === '') return null;
  return new Prisma.Decimal(value.toString());
};

export async function GET() {
  const jornadas = await db.jornada.findMany({
    include: {
      empleado: true,
      maquina: { include: { estacion: true } },
      estacion: true,
      pagos: true,
      lecturas: { include: { combustible: true } },
    },
    orderBy: [{ inicio: 'desc' }],
    take: 30,
  });

  return NextResponse.json({ jornadas });
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') ?? '';
    const rawData = contentType.includes('application/json')
      ? await request.json()
      : Object.fromEntries((await request.formData()).entries());

    const parsed = jornadaSchema.safeParse(rawData);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? 'Datos inválidos.' },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const totalizadorEntrada = new Prisma.Decimal(data.totalizadorEntrada.toString());
    const totalizadorSalida = asDecimalOrNull(data.totalizadorSalida);
    const galonesTotalizador = totalizadorSalida ? totalizadorSalida.sub(totalizadorEntrada) : null;
    const galonesProductos = asDecimalOrNull(data.galonesProductos);
    const diferenciaControl = asDecimalOrNull(data.diferenciaControl);
    const importeEsperado = asDecimalOrNull(data.importeEsperado);
    const importeDeclarado = asDecimalOrNull(data.importeDeclarado);
    const diferenciaCaja = asDecimalOrNull(data.diferenciaCaja);

    const jornada = await db.jornada.create({
      data: {
        empleadoId: data.empleadoId,
        maquinaId: data.maquinaId,
        estacionId: data.estacionId,
        inicio: new Date(data.inicio),
        fin: data.fin ? new Date(data.fin) : null,
        estado: data.fin ? 'CERRADA' : 'ABIERTA',
        notas: data.notas || null,
        totalizadorEntrada,
        totalizadorSalida,
        galonesTotalizador,
        galonesProductos,
        diferenciaControl,
        importeEsperado,
        importeDeclarado,
        diferenciaCaja,
      },
      include: {
        empleado: true,
        maquina: { include: { estacion: true } },
        estacion: true,
        pagos: true,
      },
    });

    if (!contentType.includes('application/json')) {
      return NextResponse.redirect(new URL('/jornadas', request.url));
    }

    return NextResponse.json({ ok: true, jornada }, { status: 201 });
  } catch (error) {
    console.error('JORNADA_CREATE_ERROR', error);
    return NextResponse.json({ error: 'No se pudo crear la jornada.' }, { status: 500 });
  }
}
