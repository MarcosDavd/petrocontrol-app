import {
  calcularGalonesContador,
  calcularImporte,
  contadorRetrocede,
  type DireccionContador,
} from './calculos';
import { ErrorNegocio } from './errores';

export type LecturaJornadaInput = {
  galones: bigint;
  precioUnitario: bigint;
};

/** Valores en centésimas (galones) de una fila de la planilla: un producto en una jornada. */
export type LecturaProducto = {
  entradaAtras: bigint;
  entradaAdelante: bigint;
  salidaAtras: bigint;
  salidaAdelante: bigint;
  huboReinicio: boolean;
};

export class LecturaInvalidaError extends ErrorNegocio {}

/**
 * Calcula los galones despachados por un producto en la jornada:
 *   (ACTUAL atrás - ANTERIOR atrás) + (ACTUAL adelante - ANTERIOR adelante)
 * Si alguna manguera "retrocede" solo se acepta cuando el usuario confirma que el
 * contador pasó por 0 (huboReinicio); en otro caso es un error de digitación.
 */
export function calcularGalonesLectura(
  lectura: LecturaProducto,
  { modulo, direccion, producto }: { modulo: bigint; direccion: DireccionContador; producto: string }
): bigint {
  const mangueras = [
    { nombre: 'atrás', entrada: lectura.entradaAtras, salida: lectura.salidaAtras },
    { nombre: 'adelante', entrada: lectura.entradaAdelante, salida: lectura.salidaAdelante },
  ];

  let total = 0n;
  for (const manguera of mangueras) {
    if (contadorRetrocede({ entrada: manguera.entrada, salida: manguera.salida, direccion }) && !lectura.huboReinicio) {
      throw new LecturaInvalidaError(
        `${producto}: la lectura ACTUAL de la manguera de ${manguera.nombre} es ${
          direccion === 'SUBE' ? 'menor' : 'mayor'
        } que la ANTERIOR. Corrige el valor o marca "el contador pasó por 0".`
      );
    }
    total += calcularGalonesContador({ entrada: manguera.entrada, salida: manguera.salida, modulo, direccion });
  }
  return total;
}

export function calcularResumenJornada({
  totalizadorEntrada,
  totalizadorSalida,
  lecturas,
  pagos,
}: {
  totalizadorEntrada: bigint;
  totalizadorSalida: bigint;
  lecturas: LecturaJornadaInput[];
  pagos: bigint[];
}) {
  const galonesTotalizador = totalizadorSalida - totalizadorEntrada;
  const galonesProductos = lecturas.reduce((total, lectura) => total + lectura.galones, 0n);
  const diferenciaControl = galonesTotalizador - galonesProductos;

  const importeEsperado = lecturas.reduce(
    (total, lectura) => total + calcularImporte(lectura.galones, lectura.precioUnitario),
    0n
  );

  const importeDeclarado = pagos.reduce((total, monto) => total + monto, 0n);
  const diferenciaCaja = importeEsperado - importeDeclarado;

  return {
    galonesTotalizador,
    galonesProductos,
    diferenciaControl,
    importeEsperado,
    importeDeclarado,
    diferenciaCaja,
  };
}
