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
  // Se redondea al céntimo más cercano (medio céntimo hacia arriba).
  const producto = galonesCentavos * precioUnitarioCentavos;
  const signo = producto < 0n ? -1n : 1n;
  return (signo * ((signo * producto + 50n) / 100n));
}

/**
 * Diferencia entre la lectura ANTERIOR de una jornada y la ACTUAL de la jornada previa
 * en la misma máquina/producto/manguera. Debería ser 0.
 *   > 0: el contador avanzó fuera de toda jornada (combustible despachado sin registrar).
 *   < 0: el contador retrocedió (error de digitación o reemplazo de contador).
 * No aplica módulo: un salto así siempre debe revisarse.
 */
export function calcularDiferenciaApertura({
  salidaPrevia,
  entradaActual,
  direccion,
}: {
  salidaPrevia: bigint;
  entradaActual: bigint;
  direccion: DireccionContador;
}): bigint {
  return direccion === 'SUBE' ? entradaActual - salidaPrevia : salidaPrevia - entradaActual;
}

/** true si la lectura de salida "retrocede" respecto a la entrada (solo posible con reinicio). */
export function contadorRetrocede({
  entrada,
  salida,
  direccion,
}: {
  entrada: bigint;
  salida: bigint;
  direccion: DireccionContador;
}): boolean {
  return direccion === 'SUBE' ? salida < entrada : salida > entrada;
}

// ------------------------------------------------------------
// Conversión entre decimales (string/Decimal) y centésimas (bigint)
// ------------------------------------------------------------

type Decimalish = { toString(): string } | string | number;

/** "19251.50" | 19251.5 | Decimal => 1925150n. Admite coma decimal ("19251,50"). */
export function aCentesimas(value: Decimalish): bigint {
  const texto = value.toString().trim().replace(',', '.');
  if (!/^-?\d+(\.\d+)?$/.test(texto)) {
    throw new Error(`Valor numérico inválido: "${value.toString()}"`);
  }
  const negativo = texto.startsWith('-');
  const [entero, decimales = ''] = texto.replace('-', '').split('.');
  const dosDecimales = (decimales + '00').slice(0, 2);
  // Redondeo por el tercer decimal
  const redondeo = Number(decimales[2] ?? '0') >= 5 ? 1n : 0n;
  const resultado = BigInt(entero) * 100n + BigInt(dosDecimales) + redondeo;
  return negativo ? -resultado : resultado;
}

/** 1925150n => "19251.50" (listo para guardar como Decimal). */
export function deCentesimas(value: bigint): string {
  const negativo = value < 0n;
  const abs = negativo ? -value : value;
  const entero = abs / 100n;
  const decimales = (abs % 100n).toString().padStart(2, '0');
  return `${negativo ? '-' : ''}${entero}.${decimales}`;
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
