import { describe, expect, it } from 'vitest';
import { calcularResumenReportes } from './reportes';

describe('calcularResumenReportes', () => {
  it('suma ingresos, gastos y utilidad del negocio', () => {
    const resumen = calcularResumenReportes({
      jornadas: [
        { importeEsperado: 5_000n, importeDeclarado: 4_800n, estacionId: 1 },
        { importeEsperado: 2_000n, importeDeclarado: 2_100n, estacionId: 1 },
        { importeEsperado: 1_500n, importeDeclarado: 1_400n, estacionId: 2 },
      ],
      gastos: [
        { monto: 1_000n, estacionId: 1 },
        { monto: 500n, estacionId: 2 },
      ],
    });

    expect(resumen.totalIngresos).toBe(8_500n);
    expect(resumen.totalDeclarado).toBe(8_300n);
    expect(resumen.totalGastos).toBe(1_500n);
    expect(resumen.utilidadNeta).toBe(7_000n);
    expect(resumen.porEstacion[1]?.ingresos).toBe(7_000n);
    expect(resumen.porEstacion[2]?.gastos).toBe(500n);
  });
});
