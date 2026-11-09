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

export function csvReporteJornadas(jornadas: JornadaReporte[]) {
  return generarCsv(ENCABEZADOS_JORNADAS, filasReporteJornadas(jornadas));
}
