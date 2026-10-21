export type JornadaResumenReporte = {
  importeEsperado: bigint;
  importeDeclarado: bigint;
  estacionId: number;
};

export type GastoResumenReporte = {
  monto: bigint;
  estacionId: number;
};

export function calcularResumenReportes({
  jornadas,
  gastos,
}: {
  jornadas: JornadaResumenReporte[];
  gastos: GastoResumenReporte[];
}) {
  const totalIngresos = jornadas.reduce((sum, jornada) => sum + jornada.importeEsperado, 0n);
  const totalDeclarado = jornadas.reduce((sum, jornada) => sum + jornada.importeDeclarado, 0n);
  const totalGastos = gastos.reduce((sum, gasto) => sum + gasto.monto, 0n);
  const utilidadNeta = totalIngresos - totalGastos;

  const porEstacion = new Map<number, { ingresos: bigint; declarados: bigint; gastos: bigint }>();

  for (const jornada of jornadas) {
    const estacion = porEstacion.get(jornada.estacionId) ?? {
      ingresos: 0n,
      declarados: 0n,
      gastos: 0n,
    };

    estacion.ingresos += jornada.importeEsperado;
    estacion.declarados += jornada.importeDeclarado;
    porEstacion.set(jornada.estacionId, estacion);
  }

  for (const gasto of gastos) {
    const estacion = porEstacion.get(gasto.estacionId) ?? {
      ingresos: 0n,
      declarados: 0n,
      gastos: 0n,
    };

    estacion.gastos += gasto.monto;
    porEstacion.set(gasto.estacionId, estacion);
  }

  return {
    totalIngresos,
    totalDeclarado,
    totalGastos,
    utilidadNeta,
    porEstacion: Object.fromEntries(Array.from(porEstacion.entries())),
  };
}
