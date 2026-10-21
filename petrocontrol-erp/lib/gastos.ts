export type GastoResumenInput = {
  categoria: string;
  monto: bigint;
};

export function calcularResumenGastos(gastos: GastoResumenInput[]) {
  const porCategoria = gastos.reduce<Record<string, bigint>>((acc, gasto) => {
    acc[gasto.categoria] = (acc[gasto.categoria] ?? 0n) + gasto.monto;
    return acc;
  }, {});

  const total = Object.values(porCategoria).reduce((sum, value) => sum + value, 0n);

  return {
    total,
    porCategoria,
  };
}
