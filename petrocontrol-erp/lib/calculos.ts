export type DireccionContador = 'SUBE' | 'BAJA';

export function calcularGalonesContador({
  entrada,
  salida,
  modulo,
  direccion,
}: {
  entrada: bigint;
  salida: bigint;
  modulo: bigint;
  direccion: DireccionContador;
}): bigint {
  const moduloSeguro = modulo > 0n ? modulo : 100_000_000n;

  if (direccion === 'SUBE') {
    return (salida - entrada + moduloSeguro) % moduloSeguro;
  }

  return (entrada - salida + moduloSeguro) % moduloSeguro;
}

export function calcularGalonesProducto({
  entradaAtras,
  salidaAtras,
  entradaAdelante,
  salidaAdelante,
  modulo,
  direccion,
}: {
  entradaAtras: bigint;
  salidaAtras: bigint;
  entradaAdelante: bigint;
  salidaAdelante: bigint;
  modulo: bigint;
  direccion: DireccionContador;
}): bigint {
  const atras = calcularGalonesContador({
    entrada: entradaAtras,
    salida: salidaAtras,
    modulo,
    direccion,
  });

  const adelante = calcularGalonesContador({
    entrada: entradaAdelante,
    salida: salidaAdelante,
    modulo,
    direccion,
  });

  return atras + adelante;
}

export function calcularImporte(
  galonesCentavos: bigint,
  precioUnitarioCentavos: bigint
): bigint {
  // Galones y precio se expresan en centavos: 413,05 => 41305 y 14,20 => 1420.
  // El resultado debe quedar en centavos de moneda: 41305 * 1420 / 100 = 586531
  return (galonesCentavos * precioUnitarioCentavos) / 100n;
}

export function calcularDiferenciaControl(
  galonesTotalizador: bigint,
  galonesProductos: bigint
): bigint {
  return galonesTotalizador - galonesProductos;
}

export function calcularCuadreCaja(
  importeEsperadoCentavos: bigint,
  importeDeclaradoCentavos: bigint
): bigint {
  // SIGNO: positivo => faltante, negativo => sobrante.
  return importeEsperadoCentavos - importeDeclaradoCentavos;
}
