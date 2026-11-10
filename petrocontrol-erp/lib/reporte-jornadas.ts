import { aCentesimas, deCentesimas } from './calculos';
import { generarCsv, numeroCsv, type Celda } from './csv';
import { partesLima } from './zona-horaria';

type Num = { toString(): string } | null;

export type JornadaReporte = {
  id: number;
  inicio: Date;
  fin: Date | null;
  empleado: { nombre: string };
  estacion: { nombre: string };
  maquina: { nombre: string };
  importeEsperado: Num;
  importeDeclarado: Num;
  diferenciaCaja: Num;
  lecturas: {
    combustible: { nombre: string };
    entradaAtras: Num;
    entradaAdelante: Num;
    salidaAtras: Num;
    salidaAdelante: Num;
    galones: Num;
    precioUnitario: Num;
    importe: Num;
    diferenciaApertura: Num;
  }[];
};

export const ENCABEZADOS_JORNADAS = [
  'Jornada',
  'Fecha inicio',
  'Hora inicio',
  'Fecha fin',
  'Hora fin',
  'Empleado',
  'Estación',
  'Máquina',
  'Producto',
  'Anterior atrás',
  'Anterior adelante',
  'Actual atrás',
  'Actual adelante',
  'Galones',
  'Precio (S/)',
  'Importe (S/)',
  'Salto de contador (gal)',
  // Totales de caja de la jornada: solo en la primera fila de cada jornada para que sumar la columna no los duplique
  'Esperado jornada (S/)',
  'Declarado jornada (S/)',
  'Faltante (+) / sobrante (-) (S/)',
];

// Fecha y hora en hora de Perú, independiente de la zona horaria del servidor
const fecha = (valor: Date | null) => {
  if (!valor) return '';
  const { dia, mes, anio } = partesLima(valor);
  return `${dia}/${mes}/${anio}`;
};
const hora = (valor: Date | null) => (valor ? partesLima(valor).hora : '');

/** Una fila por jornada y producto: equivale a la planilla Excel con los controles de la app. */
export function filasReporteJornadas(jornadas: JornadaReporte[]): Celda[][] {
  return jornadas.flatMap((jornada) =>
    jornada.lecturas.map((lectura, indice) => {
      const primera = indice === 0;
      return [
        jornada.id,
        fecha(jornada.inicio),
        hora(jornada.inicio),
        fecha(jornada.fin),
        hora(jornada.fin),
        jornada.empleado.nombre,
        jornada.estacion.nombre,
        jornada.maquina.nombre,
        lectura.combustible.nombre,
        numeroCsv(lectura.entradaAtras),
        numeroCsv(lectura.entradaAdelante),
        numeroCsv(lectura.salidaAtras),
        numeroCsv(lectura.salidaAdelante),
        numeroCsv(lectura.galones),
        numeroCsv(lectura.precioUnitario),
        numeroCsv(lectura.importe),
        numeroCsv(lectura.diferenciaApertura),
        primera ? numeroCsv(jornada.importeEsperado) : '',
        primera ? numeroCsv(jornada.importeDeclarado) : '',
        primera ? numeroCsv(jornada.diferenciaCaja) : '',
      ];
    })
  );
}

// Posición de cada columna en ENCABEZADOS_JORNADAS (para ubicar los totales)
const COL = {
  etiqueta: 0,
  producto: ENCABEZADOS_JORNADAS.indexOf('Producto'),
  galones: ENCABEZADOS_JORNADAS.indexOf('Galones'),
  importe: ENCABEZADOS_JORNADAS.indexOf('Importe (S/)'),
  esperado: ENCABEZADOS_JORNADAS.indexOf('Esperado jornada (S/)'),
  declarado: ENCABEZADOS_JORNADAS.indexOf('Declarado jornada (S/)'),
  diferencia: ENCABEZADOS_JORNADAS.indexOf('Faltante (+) / sobrante (-) (S/)'),
};

/** Suma exacta en céntimos (evita errores de coma flotante al sumar muchas filas). */
const sumar = (valores: Num[]) =>
  valores.reduce<bigint>((total, valor) => total + (valor === null ? 0n : aCentesimas(valor)), 0n);
const fila = (celdas: Partial<Record<keyof typeof COL, Celda>>): Celda[] => {
  const resultado: Celda[] = ENCABEZADOS_JORNADAS.map(() => '');
  for (const [clave, valor] of Object.entries(celdas)) resultado[COL[clave as keyof typeof COL]] = valor;
  return resultado;
};

/**
 * Totalizador al final del reporte: galones e importe por producto y un total general
 * con galones, importe y el cuadre de caja (esperado, declarado y faltante/sobrante).
 */
export function filasTotales(jornadas: JornadaReporte[]): Celda[][] {
  const lecturas = jornadas.flatMap((jornada) => jornada.lecturas);
  const productos = [...new Set(lecturas.map((lectura) => lectura.combustible.nombre))];

  const porProducto = productos.map((producto) => {
    const delProducto = lecturas.filter((lectura) => lectura.combustible.nombre === producto);
    return fila({
      etiqueta: 'Total por producto',
      producto,
      galones: numeroCsv(deCentesimas(sumar(delProducto.map((l) => l.galones)))),
      importe: numeroCsv(deCentesimas(sumar(delProducto.map((l) => l.importe)))),
    });
  });

  const general = fila({
    etiqueta: 'TOTAL GENERAL',
    producto: `${jornadas.length} ${jornadas.length === 1 ? 'jornada' : 'jornadas'}`,
    galones: numeroCsv(deCentesimas(sumar(lecturas.map((l) => l.galones)))),
    importe: numeroCsv(deCentesimas(sumar(lecturas.map((l) => l.importe)))),
    esperado: numeroCsv(deCentesimas(sumar(jornadas.map((j) => j.importeEsperado)))),
    declarado: numeroCsv(deCentesimas(sumar(jornadas.map((j) => j.importeDeclarado)))),
    diferencia: numeroCsv(deCentesimas(sumar(jornadas.map((j) => j.diferenciaCaja)))),
  });

  // Fila en blanco para separar el detalle de los totales
  return [ENCABEZADOS_JORNADAS.map(() => ''), ...porProducto, general];
}

export function csvReporteJornadas(jornadas: JornadaReporte[]) {
  return generarCsv(ENCABEZADOS_JORNADAS, [...filasReporteJornadas(jornadas), ...filasTotales(jornadas)]);
}
