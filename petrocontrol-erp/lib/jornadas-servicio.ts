import { Prisma } from '@/generated/prisma';
import { db } from './db';
import {
  aCentesimas,
  calcularDiferenciaApertura,
  calcularGalonesContador,
  calcularImporte,
  deCentesimas,
} from './calculos';
import { calcularGalonesLectura } from './jornada';
import { ErrorNegocio } from './errores';
import { HORA_REGEX } from './turnos';
import { fechaHoraLima } from './zona-horaria';
import { formatoFecha, formatoFechaHora } from './formato';

const dec = (centesimas: bigint) => new Prisma.Decimal(deCentesimas(centesimas));

export type LecturaApertura = {
  combustibleId: number;
  entradaAtras: string;
  entradaAdelante: string;
};

export type LecturaCierre = {
  combustibleId: number;
  salidaAtras: string;
  salidaAdelante: string;
  huboReinicio: boolean;
};

/**
 * ACTUAL (salida) de la última jornada cerrada de la máquina hasta `antesDe` (inclusive),
 * por producto. Es el valor que debería tener el ANTERIOR de la siguiente jornada.
 */
export async function obtenerLecturasPrevias(maquinaId: number, antesDe?: Date) {
  const lecturas = await db.lecturaJornada.findMany({
    where: {
      jornada: {
        maquinaId,
        estado: 'CERRADA',
        // lte: con la hora tomada del horario, dos jornadas pueden empezar en el mismo instante
        ...(antesDe ? { inicio: { lte: antesDe } } : {}),
      },
    },
    orderBy: [{ jornada: { inicio: 'desc' } }, { jornadaId: 'desc' }],
    select: { combustibleId: true, salidaAtras: true, salidaAdelante: true, jornadaId: true },
  });

  const porProducto = new Map<number, { salidaAtras: string; salidaAdelante: string; jornadaId: number }>();
  for (const lectura of lecturas) {
    if (porProducto.has(lectura.combustibleId)) continue;
    if (lectura.salidaAtras === null || lectura.salidaAdelante === null) continue;
    porProducto.set(lectura.combustibleId, {
      salidaAtras: lectura.salidaAtras.toString(),
      salidaAdelante: lectura.salidaAdelante.toString(),
      jornadaId: lectura.jornadaId,
    });
  }
  return porProducto;
}

function leer(valor: string, campo: string) {
  try {
    const centesimas = aCentesimas(valor);
    if (centesimas < 0n) throw new Error();
    return centesimas;
  } catch {
    throw new ErrorNegocio(`${campo}: ingresa un número válido (mayor o igual a 0).`);
  }
}

/**
 * Abre la jornada de un empleado en una máquina registrando el ANTERIOR de cada producto.
 * El inicio = `fecha` + hora de inicio del horario de trabajo del empleado
 * (`horaManual` solo se usa si el empleado no tiene horario registrado).
 */
export async function abrirJornada(input: {
  maquinaId: number;
  empleadoId: number;
  fecha: string;
  horaManual?: string;
  totalizadorEntrada?: string;
  notas?: string;
  lecturas: LecturaApertura[];
}) {
  const maquina = await db.maquina.findUnique({
    where: { id: input.maquinaId },
    include: { estacion: true, productos: { include: { combustible: true } } },
  });
  if (!maquina || !maquina.activa) throw new ErrorNegocio('La máquina no existe o está inactiva.');
  if (!maquina.estacion.activa) throw new ErrorNegocio(`La estación ${maquina.estacion.nombre} está inactiva.`);
  if (maquina.productos.length === 0) {
    throw new ErrorNegocio('La máquina no tiene productos asignados. Asígnalos en Estaciones y máquinas.');
  }

  const empleado = await db.empleado.findUnique({ where: { id: input.empleadoId } });
  if (!empleado || !empleado.activo) throw new ErrorNegocio('El empleado no existe o está inactivo.');
  if (empleado.estacionId !== maquina.estacionId) {
    throw new ErrorNegocio('El empleado no pertenece a la estación de la máquina.');
  }

  const hora = empleado.horarioInicio || input.horaManual;
  if (!hora || !HORA_REGEX.test(hora)) {
    throw new ErrorNegocio(`${empleado.nombre} no tiene horario de trabajo registrado: indica la hora de inicio.`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(input.fecha)) throw new ErrorNegocio('Selecciona la fecha de la jornada.');
  const inicio = fechaHoraLima(input.fecha, hora);

  const abierta = await db.jornada.findFirst({ where: { maquinaId: maquina.id, estado: 'ABIERTA' } });
  if (abierta) {
    throw new ErrorNegocio(`La máquina ${maquina.nombre} ya tiene una jornada abierta. Ciérrala antes de abrir otra.`);
  }

  const previas = await obtenerLecturasPrevias(maquina.id, inicio);
  const direccion = maquina.direccionProductos;

  const lecturas = maquina.productos.map(({ combustible }) => {
    const lectura = input.lecturas.find((item) => item.combustibleId === combustible.id);
    if (!lectura) throw new ErrorNegocio(`Falta la lectura ANTERIOR de ${combustible.nombre}.`);

    const entradaAtras = leer(lectura.entradaAtras, `${combustible.nombre} · atrás`);
    const entradaAdelante = leer(lectura.entradaAdelante, `${combustible.nombre} · adelante`);

    const previa = previas.get(combustible.id);
    const diferenciaApertura = previa
      ? calcularDiferenciaApertura({ salidaPrevia: aCentesimas(previa.salidaAtras), entradaActual: entradaAtras, direccion }) +
        calcularDiferenciaApertura({ salidaPrevia: aCentesimas(previa.salidaAdelante), entradaActual: entradaAdelante, direccion })
      : null;

    return {
      combustibleId: combustible.id,
      entradaAtras: dec(entradaAtras),
      entradaAdelante: dec(entradaAdelante),
      diferenciaApertura: diferenciaApertura === null ? null : dec(diferenciaApertura),
    };
  });

  const totalizadorEntrada = input.totalizadorEntrada
    ? dec(leer(input.totalizadorEntrada, 'Totalizador de entrada'))
    : null;

  return db.jornada.create({
    data: {
      empleadoId: empleado.id,
      maquinaId: maquina.id,
      estacionId: maquina.estacionId,
      inicio,
      estado: 'ABIERTA',
      notas: input.notas || null,
      totalizadorEntrada,
      lecturas: { create: lecturas },
    },
  });
}

/**
 * Cierra la jornada con el ACTUAL de cada producto: calcula galones e importes,
 * congela precios, compara con el totalizador, cuadra caja y descuenta el stock
 * de los tanques (movimiento VENTA).
 * El fin = `fecha` + hora de fin del horario del empleado (`horaManual` solo si no tiene).
 */
export async function cerrarJornada(
  jornadaId: number,
  input: { fecha: string; horaManual?: string; totalizadorSalida?: string; notas?: string; lecturas: LecturaCierre[] }
) {
  const jornada = await db.jornada.findUnique({
    where: { id: jornadaId },
    include: { maquina: true, empleado: true, lecturas: { include: { combustible: true } }, pagos: true },
  });
  if (!jornada) throw new ErrorNegocio('La jornada no existe.');
  if (jornada.estado !== 'ABIERTA') throw new ErrorNegocio('La jornada ya está cerrada.');

  const hora = jornada.empleado.horarioFin || input.horaManual;
  if (!hora || !HORA_REGEX.test(hora)) {
    throw new ErrorNegocio(`${jornada.empleado.nombre} no tiene hora de fin registrada: indica la hora de cierre.`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(input.fecha)) throw new ErrorNegocio('Selecciona la fecha de cierre.');
  const fin = fechaHoraLima(input.fecha, hora);
  if (fin <= jornada.inicio) {
    throw new ErrorNegocio(
      `El cierre (${formatoFechaHora(fin)}) no puede ser anterior al inicio de la jornada. Si el horario termina al día siguiente, elige esa fecha.`
    );
  }

  const { maquina } = jornada;
  const tanques = await db.tanque.findMany({ where: { estacionId: jornada.estacionId } });

  const cierres = await Promise.all(
    jornada.lecturas.map(async (lectura) => {
      const producto = lectura.combustible.nombre;
      const datos = input.lecturas.find((item) => item.combustibleId === lectura.combustibleId);
      if (!datos) throw new ErrorNegocio(`Falta la lectura ACTUAL de ${producto}.`);

      const salidaAtras = leer(datos.salidaAtras, `${producto} · atrás`);
      const salidaAdelante = leer(datos.salidaAdelante, `${producto} · adelante`);
      const galones = calcularGalonesLectura(
        {
          entradaAtras: aCentesimas(lectura.entradaAtras),
          entradaAdelante: aCentesimas(lectura.entradaAdelante),
          salidaAtras,
          salidaAdelante,
          huboReinicio: datos.huboReinicio,
        },
        { modulo: maquina.moduloContador, direccion: maquina.direccionProductos, producto }
      );

      const precio = await db.historialPrecio.findFirst({
        where: { combustibleId: lectura.combustibleId, vigenteDesde: { lte: jornada.inicio } },
        orderBy: { vigenteDesde: 'desc' },
      });
      if (!precio) {
        throw new ErrorNegocio(
          `${producto} no tiene un precio vigente al ${formatoFecha(jornada.inicio)}. Regístralo en Productos y precios.`
        );
      }

      const tanque = tanques.find((item) => item.combustibleId === lectura.combustibleId);
      if (!tanque) throw new ErrorNegocio(`La estación no tiene un tanque de ${producto}. Créalo en Inventario.`);

      const precioUnitario = aCentesimas(precio.precio);
      return {
        lecturaId: lectura.id,
        tanqueId: tanque.id,
        producto,
        salidaAtras,
        salidaAdelante,
        huboReinicio: datos.huboReinicio,
        galones,
        precioUnitario,
        importe: calcularImporte(galones, precioUnitario),
      };
    })
  );

  const galonesProductos = cierres.reduce((total, item) => total + item.galones, 0n);
  const importeEsperado = cierres.reduce((total, item) => total + item.importe, 0n);
  const importeDeclarado = jornada.pagos.reduce((total, pago) => total + aCentesimas(pago.monto), 0n);

  let totalizadorSalida: bigint | null = null;
  let galonesTotalizador: bigint | null = null;
  if (input.totalizadorSalida) {
    totalizadorSalida = leer(input.totalizadorSalida, 'Totalizador de salida');
    if (jornada.totalizadorEntrada !== null) {
      galonesTotalizador = calcularGalonesContador({
        entrada: aCentesimas(jornada.totalizadorEntrada),
        salida: totalizadorSalida,
        modulo: maquina.moduloContador,
        direccion: maquina.direccionTotalizador,
      });
    }
  }

  return db.$transaction(async (tx) => {
    for (const cierre of cierres) {
      await tx.lecturaJornada.update({
        where: { id: cierre.lecturaId },
        data: {
          salidaAtras: dec(cierre.salidaAtras),
          salidaAdelante: dec(cierre.salidaAdelante),
          huboReinicio: cierre.huboReinicio,
          galones: dec(cierre.galones),
          precioUnitario: dec(cierre.precioUnitario),
          importe: dec(cierre.importe),
        },
      });

      if (cierre.galones > 0n) {
        await tx.movimientoStock.create({
          data: {
            tanqueId: cierre.tanqueId,
            tipo: 'VENTA',
            galones: dec(-cierre.galones),
            fecha: fin,
            jornadaId: jornada.id,
            nota: `Venta jornada #${jornada.id} · ${maquina.nombre}`,
          },
        });
      }
    }

    return tx.jornada.update({
      where: { id: jornada.id },
      data: {
        estado: 'CERRADA',
        fin,
        notas: input.notas !== undefined ? input.notas || null : jornada.notas,
        totalizadorSalida: totalizadorSalida === null ? null : dec(totalizadorSalida),
        galonesTotalizador: galonesTotalizador === null ? null : dec(galonesTotalizador),
        galonesProductos: dec(galonesProductos),
        diferenciaControl: galonesTotalizador === null ? null : dec(galonesTotalizador - galonesProductos),
        importeEsperado: dec(importeEsperado),
        importeDeclarado: dec(importeDeclarado),
        diferenciaCaja: dec(importeEsperado - importeDeclarado),
      },
    });
  });
}

/** Recalcula lo declarado y la diferencia de caja después de agregar o quitar pagos. */
export async function recalcularCaja(jornadaId: number) {
  const jornada = await db.jornada.findUnique({ where: { id: jornadaId }, include: { pagos: true } });
  if (!jornada) return;

  const declarado = jornada.pagos.reduce((total, pago) => total + aCentesimas(pago.monto), 0n);
  const esperado = jornada.importeEsperado === null ? null : aCentesimas(jornada.importeEsperado);

  await db.jornada.update({
    where: { id: jornadaId },
    data: {
      importeDeclarado: dec(declarado),
      diferenciaCaja: esperado === null ? null : dec(esperado - declarado),
    },
  });
}
