import { calcularImporte } from './calculos';

export type LecturaJornadaInput = {
  galones: bigint;
  precioUnitario: bigint;
};

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
