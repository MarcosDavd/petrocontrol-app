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
import type { PagoCierre } from './validation/jornadas';

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
export async function obtenerLecturasPrevias(maquinaId: number, antesDe?: Date, excluirJornadaId?: number) {
  const lecturas = await db.lecturaJornada.findMany({
    where: {
      jornada: {
        maquinaId,
        estado: 'CERRADA',
        ...(excluirJornadaId ? { id: { not: excluirJornadaId } } : {}),
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

/** Un empleado no puede tener dos jornadas abiertas a la vez (en ninguna máquina). */
async function exigirEmpleadoLibre(empleado: { id: number; nombre: string }, excluirJornadaId?: number) {
  const otra = await db.jornada.findFirst({
    where: { empleadoId: empleado.id, estado: 'ABIERTA', ...(excluirJornadaId ? { id: { not: excluirJornadaId } } : {}) },
    include: { maquina: true, estacion: true },
  });
  if (otra) {
    throw new ErrorNegocio(
      `${empleado.nombre} ya tiene una jornada abierta en ${otra.maquina.nombre} de ${otra.estacion.nombre}. Ciérrala antes de abrirle otra.`
    );
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
  await exigirEmpleadoLibre(empleado);

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

const INCLUIR_JORNADA = {
  maquina: true,
  empleado: true,
  estacion: true,
  lecturas: { include: { combustible: true } },
  pagos: true,
} satisfies Prisma.JornadaInclude;

type JornadaCompleta = Prisma.JornadaGetPayload<{ include: typeof INCLUIR_JORNADA }>;

type Entradas = Map<number, { atras: bigint; adelante: bigint }>;

type CierreProducto = {
  lecturaId: number;
  combustibleId: number;
  tanqueId: number;
  producto: string;
  salidaAtras: bigint;
  salidaAdelante: bigint;
  huboReinicio: boolean;
  galones: bigint;
  precioUnitario: bigint;
  importe: bigint;
};

/** Fin de la jornada: `fecha` + hora de fin del horario del empleado (`horaManual` solo si no tiene). */
function calcularFin(empleado: { nombre: string; horarioFin: string | null }, fecha: string, horaManual: string | undefined, inicio: Date) {
  const hora = empleado.horarioFin || horaManual;
  if (!hora || !HORA_REGEX.test(hora)) {
    throw new ErrorNegocio(`${empleado.nombre} no tiene hora de fin registrada: indica la hora de cierre.`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(fecha)) throw new ErrorNegocio('Selecciona la fecha de cierre.');
  const fin = fechaHoraLima(fecha, hora);
  if (fin <= inicio) {
    throw new ErrorNegocio(
      `El cierre (${formatoFechaHora(fin)}) no puede ser anterior al inicio de la jornada (${formatoFechaHora(inicio)}). Si el horario termina al día siguiente, elige esa fecha.`
    );
  }
  return fin;
}

/**
 * Galones, precio (de la estación, vigente en `inicio`) e importe de cada producto a partir de
 * las lecturas ANTERIOR (`entradas`) y ACTUAL (`lecturas`). Lo usan el cierre y la edición.
 */
async function calcularCierre(jornada: JornadaCompleta, inicio: Date, entradas: Entradas, lecturas: LecturaCierre[]) {
  const { maquina } = jornada;
  const tanques = await db.tanque.findMany({ where: { estacionId: jornada.estacionId } });

  const cierres: CierreProducto[] = await Promise.all(
    jornada.lecturas.map(async (lectura) => {
      const producto = lectura.combustible.nombre;
      const datos = lecturas.find((item) => item.combustibleId === lectura.combustibleId);
      if (!datos) throw new ErrorNegocio(`Falta la lectura ACTUAL de ${producto}.`);
      const entrada = entradas.get(lectura.combustibleId)!;

      const salidaAtras = leer(datos.salidaAtras, `${producto} · atrás`);
      const salidaAdelante = leer(datos.salidaAdelante, `${producto} · adelante`);
      const galones = calcularGalonesLectura(
        {
          entradaAtras: entrada.atras,
          entradaAdelante: entrada.adelante,
          salidaAtras,
          salidaAdelante,
          huboReinicio: datos.huboReinicio,
        },
        { modulo: maquina.moduloContador, direccion: maquina.direccionProductos, producto }
      );

      // Precio de ESTA estación vigente al inicio de la jornada (cada estación tiene los suyos)
      const precio = await db.historialPrecio.findFirst({
        where: { estacionId: jornada.estacionId, combustibleId: lectura.combustibleId, vigenteDesde: { lte: inicio } },
        orderBy: { vigenteDesde: 'desc' },
      });
      if (!precio) {
        throw new ErrorNegocio(
          `${producto} no tiene precio en ${jornada.estacion.nombre} vigente al ${formatoFecha(inicio)}. Regístralo en Productos y precios.`
        );
      }

      const tanque = tanques.find((item) => item.combustibleId === lectura.combustibleId);
      if (!tanque) throw new ErrorNegocio(`La estación no tiene un tanque de ${producto}. Créalo en Estaciones y máquinas.`);

      const precioUnitario = aCentesimas(precio.precio);
      return {
        lecturaId: lectura.id,
        combustibleId: lectura.combustibleId,
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
  return cierres;
}

/** Totalizador de salida y galones según el totalizador (si hay totalizador de entrada). */
function calcularTotalizador(jornada: JornadaCompleta, totalizadorEntrada: bigint | null, valor: string | undefined) {
  if (!valor) return { totalizadorSalida: null, galonesTotalizador: null };
  const totalizadorSalida = leer(valor, 'Totalizador de salida');
  const galonesTotalizador =
    totalizadorEntrada === null
      ? null
      : calcularGalonesContador({
          entrada: totalizadorEntrada,
          salida: totalizadorSalida,
          modulo: jornada.maquina.moduloContador,
          direccion: jornada.maquina.direccionTotalizador,
        });
  return { totalizadorSalida, galonesTotalizador };
}

/**
 * Escribe el cierre dentro de una transacción: lecturas ACTUAL, galones e importes,
 * venta de stock (reemplaza la anterior si se está editando) y totales de la jornada.
 */
async function guardarCierre(
  tx: Prisma.TransactionClient,
  jornada: JornadaCompleta,
  datos: {
    fin: Date;
    cierres: CierreProducto[];
    totalizadorEntrada: bigint | null;
    totalizadorSalida: bigint | null;
    galonesTotalizador: bigint | null;
    importeDeclarado: bigint;
  }
) {
  const { fin, cierres, galonesTotalizador } = datos;
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
  }

  // La venta de la jornada sale del stock: se borra la anterior (al editar) y se vuelve a registrar
  await tx.movimientoStock.deleteMany({ where: { jornadaId: jornada.id, tipo: 'VENTA' } });
  const ventas = cierres.filter((cierre) => cierre.galones > 0n);
  if (ventas.length > 0) {
    await tx.movimientoStock.createMany({
      data: ventas.map((cierre) => ({
        tanqueId: cierre.tanqueId,
        tipo: 'VENTA' as const,
        galones: dec(-cierre.galones),
        fecha: fin,
        jornadaId: jornada.id,
        nota: `Venta jornada #${jornada.id} · ${jornada.maquina.nombre}`,
      })),
    });
  }

  const galonesProductos = cierres.reduce((total, item) => total + item.galones, 0n);
  const importeEsperado = cierres.reduce((total, item) => total + item.importe, 0n);
  return {
    estado: 'CERRADA' as const,
    fin,
    totalizadorEntrada: datos.totalizadorEntrada === null ? null : dec(datos.totalizadorEntrada),
    totalizadorSalida: datos.totalizadorSalida === null ? null : dec(datos.totalizadorSalida),
    galonesTotalizador: galonesTotalizador === null ? null : dec(galonesTotalizador),
    galonesProductos: dec(galonesProductos),
    diferenciaControl: galonesTotalizador === null ? null : dec(galonesTotalizador - galonesProductos),
    importeEsperado: dec(importeEsperado),
    importeDeclarado: dec(datos.importeDeclarado),
    diferenciaCaja: dec(importeEsperado - datos.importeDeclarado),
  };
}

const sumaPagos = (pagos: { monto: Prisma.Decimal | string }[]) =>
  pagos.reduce((total, pago) => total + aCentesimas(pago.monto), 0n);

const entradasGuardadas = (jornada: JornadaCompleta): Entradas =>
  new Map(
    jornada.lecturas.map((l) => [l.combustibleId, { atras: aCentesimas(l.entradaAtras), adelante: aCentesimas(l.entradaAdelante) }])
  );

/**
 * Cierra la jornada con el ACTUAL de cada producto: calcula galones e importes,
 * congela precios, compara con el totalizador, cuadra caja y descuenta el stock
 * de los tanques (movimiento VENTA).
 * El fin = `fecha` + hora de fin del horario del empleado (`horaManual` solo si no tiene).
 */
export async function cerrarJornada(
  jornadaId: number,
  input: {
    fecha: string;
    horaManual?: string;
    totalizadorSalida?: string;
    notas?: string;
    lecturas: LecturaCierre[];
    /** Pagos que entrega el empleado; se guardan junto con el cierre (todo o nada). */
    pagos?: PagoCierre[];
  }
) {
  const jornada = await db.jornada.findUnique({ where: { id: jornadaId }, include: INCLUIR_JORNADA });
  if (!jornada) throw new ErrorNegocio('La jornada no existe.');
  if (jornada.estado !== 'ABIERTA') throw new ErrorNegocio('La jornada ya está cerrada.');

  const fin = calcularFin(jornada.empleado, input.fecha, input.horaManual, jornada.inicio);
  const cierres = await calcularCierre(jornada, jornada.inicio, entradasGuardadas(jornada), input.lecturas);
  const totalizadorEntrada = jornada.totalizadorEntrada === null ? null : aCentesimas(jornada.totalizadorEntrada);
  const totalizador = calcularTotalizador(jornada, totalizadorEntrada, input.totalizadorSalida);

  // Declarado = pagos ya registrados (si los hubiera) + los que llegan con el cierre
  const pagosNuevos = input.pagos ?? [];
  const importeDeclarado = sumaPagos(jornada.pagos) + sumaPagos(pagosNuevos);

  return db.$transaction(async (tx) => {
    if (pagosNuevos.length > 0) {
      await tx.pagoJornada.createMany({
        data: pagosNuevos.map((pago) => ({
          jornadaId: jornada.id,
          medio: pago.medio,
          monto: dec(aCentesimas(pago.monto)),
          nota: pago.nota || null,
        })),
      });
    }
    const totales = await guardarCierre(tx, jornada, { fin, cierres, totalizadorEntrada, ...totalizador, importeDeclarado });
    return tx.jornada.update({
      where: { id: jornada.id },
      data: { ...totales, notas: input.notas !== undefined ? input.notas || null : jornada.notas },
    });
  });
}

/**
 * Diferencia entre el ANTERIOR de cada producto de la jornada y el ACTUAL de la jornada
 * cerrada previa de la misma máquina (salto de contador). null si no hay jornada previa.
 */
async function calcularDiferenciasApertura(maquina: { id: number; direccionProductos: JornadaCompleta['maquina']['direccionProductos'] }, inicio: Date, jornadaId: number, entradas: Entradas) {
  const previas = await obtenerLecturasPrevias(maquina.id, inicio, jornadaId);
  const direccion = maquina.direccionProductos;
  return new Map(
    [...entradas.entries()].map(([combustibleId, entrada]) => {
      const previa = previas.get(combustibleId);
      const diferencia = previa
        ? calcularDiferenciaApertura({ salidaPrevia: aCentesimas(previa.salidaAtras), entradaActual: entrada.atras, direccion }) +
          calcularDiferenciaApertura({ salidaPrevia: aCentesimas(previa.salidaAdelante), entradaActual: entrada.adelante, direccion })
        : null;
      return [combustibleId, diferencia];
    })
  );
}

/** Vuelve a calcular el salto de contador de una jornada (p. ej. si se corrigió el cierre de la anterior). */
async function recalcularSaltoApertura(jornadaId: number) {
  const jornada = await db.jornada.findUnique({ where: { id: jornadaId }, include: INCLUIR_JORNADA });
  if (!jornada) return;
  const diferencias = await calcularDiferenciasApertura(jornada.maquina, jornada.inicio, jornada.id, entradasGuardadas(jornada));
  for (const lectura of jornada.lecturas) {
    const diferencia = diferencias.get(lectura.combustibleId) ?? null;
    await db.lecturaJornada.update({
      where: { id: lectura.id },
      data: { diferenciaApertura: diferencia === null ? null : dec(diferencia) },
    });
  }
}

/** Jornada que sigue a `inicio` en la máquina (su ANTERIOR debería ser nuestro ACTUAL). */
function siguienteJornada(maquinaId: number, jornadaId: number, inicio: Date) {
  return db.jornada.findFirst({
    where: { maquinaId, id: { not: jornadaId }, inicio: { gte: inicio } },
    orderBy: [{ inicio: 'asc' }, { id: 'asc' }],
    select: { id: true },
  });
}

/**
 * Corrige una jornada abierta o cerrada (errores de digitación).
 * - Abierta: empleado, fecha de inicio, ANTERIOR de cada producto, totalizador de entrada y notas.
 * - Cerrada: además el ACTUAL, la fecha de cierre y el totalizador de salida; se recalculan
 *   galones, precio (vigente en la nueva fecha), importes, venta de stock y cuadre de caja.
 * La máquina no se cambia (define los productos y la secuencia de contadores).
 * También se recalcula el salto de contador de la jornada siguiente de la máquina.
 */
export async function editarJornada(
  jornadaId: number,
  input: {
    empleadoId: number;
    fecha: string;
    horaManual?: string;
    totalizadorEntrada?: string;
    notas?: string;
    entradas: LecturaApertura[];
    /** Obligatorio si la jornada está cerrada. */
    cierre?: { fecha: string; horaManual?: string; totalizadorSalida?: string; lecturas: LecturaCierre[] };
  }
) {
  const jornada = await db.jornada.findUnique({ where: { id: jornadaId }, include: INCLUIR_JORNADA });
  if (!jornada) throw new ErrorNegocio('La jornada no existe.');
  const cerrada = jornada.estado === 'CERRADA';
  if (cerrada && !input.cierre) throw new ErrorNegocio('Faltan los datos de cierre de la jornada.');

  // Empleado: de la misma estación; si se cambia por otro, debe estar activo
  const empleado =
    input.empleadoId === jornada.empleadoId ? jornada.empleado : await db.empleado.findUnique({ where: { id: input.empleadoId } });
  if (!empleado) throw new ErrorNegocio('El empleado no existe.');
  if (empleado.estacionId !== jornada.estacionId) throw new ErrorNegocio('El empleado no pertenece a la estación de la jornada.');
  if (empleado.id !== jornada.empleadoId && !empleado.activo) throw new ErrorNegocio(`${empleado.nombre} está inactivo.`);
  if (!cerrada && empleado.id !== jornada.empleadoId) await exigirEmpleadoLibre(empleado, jornada.id);

  const hora = empleado.horarioInicio || input.horaManual;
  if (!hora || !HORA_REGEX.test(hora)) {
    throw new ErrorNegocio(`${empleado.nombre} no tiene horario de trabajo registrado: indica la hora de inicio.`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(input.fecha)) throw new ErrorNegocio('Selecciona la fecha de la jornada.');
  const inicio = fechaHoraLima(input.fecha, hora);

  const entradas: Entradas = new Map(
    jornada.lecturas.map((lectura) => {
      const producto = lectura.combustible.nombre;
      const datos = input.entradas.find((item) => item.combustibleId === lectura.combustibleId);
      if (!datos) throw new ErrorNegocio(`Falta la lectura ANTERIOR de ${producto}.`);
      return [
        lectura.combustibleId,
        { atras: leer(datos.entradaAtras, `${producto} · atrás (anterior)`), adelante: leer(datos.entradaAdelante, `${producto} · adelante (anterior)`) },
      ];
    })
  );
  const diferencias = await calcularDiferenciasApertura(jornada.maquina, inicio, jornada.id, entradas);
  const totalizadorEntrada = input.totalizadorEntrada ? leer(input.totalizadorEntrada, 'Totalizador de entrada') : null;

  let cierreCalculado: { fin: Date; cierres: CierreProducto[]; totalizador: ReturnType<typeof calcularTotalizador> } | null = null;
  if (cerrada && input.cierre) {
    const fin = calcularFin(empleado, input.cierre.fecha, input.cierre.horaManual, inicio);
    const cierres = await calcularCierre(jornada, inicio, entradas, input.cierre.lecturas);
    cierreCalculado = { fin, cierres, totalizador: calcularTotalizador(jornada, totalizadorEntrada, input.cierre.totalizadorSalida) };
  }

  // Jornadas siguientes antes y después del cambio (si se movió la fecha, pueden ser distintas)
  const siguienteAntes = await siguienteJornada(jornada.maquinaId, jornada.id, jornada.inicio);

  const actualizada = await db.$transaction(async (tx) => {
    for (const lectura of jornada.lecturas) {
      const entrada = entradas.get(lectura.combustibleId)!;
      const diferencia = diferencias.get(lectura.combustibleId) ?? null;
      await tx.lecturaJornada.update({
        where: { id: lectura.id },
        data: {
          entradaAtras: dec(entrada.atras),
          entradaAdelante: dec(entrada.adelante),
          diferenciaApertura: diferencia === null ? null : dec(diferencia),
        },
      });
    }

    const comunes = {
      empleadoId: empleado.id,
      inicio,
      notas: input.notas !== undefined ? input.notas || null : jornada.notas,
      totalizadorEntrada: totalizadorEntrada === null ? null : dec(totalizadorEntrada),
    };
    if (!cierreCalculado) return tx.jornada.update({ where: { id: jornada.id }, data: comunes });

    const totales = await guardarCierre(tx, jornada, {
      fin: cierreCalculado.fin,
      cierres: cierreCalculado.cierres,
      totalizadorEntrada,
      ...cierreCalculado.totalizador,
      importeDeclarado: sumaPagos(jornada.pagos),
    });
    return tx.jornada.update({ where: { id: jornada.id }, data: { ...totales, ...comunes } });
  });

  // El ACTUAL corregido es el ANTERIOR esperado de la jornada siguiente: se recalcula su salto de contador
  if (cerrada) {
    const siguienteDespues = await siguienteJornada(jornada.maquinaId, jornada.id, inicio);
    for (const id of new Set([siguienteAntes?.id, siguienteDespues?.id].filter((x): x is number => Boolean(x)))) {
      await recalcularSaltoApertura(id);
    }
  }
  return actualizada;
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
