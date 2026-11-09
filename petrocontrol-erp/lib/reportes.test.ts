import { describe, expect, it } from 'vitest';
import { calcularResumenReportes } from './reportes';

describe('calcularResumenReportes', () => {
  it('acumula esperado, declarado y faltante por estación y por empleado', () => {
    const resumen = calcularResumenReportes({
      jornadas: [
        { importeEsperado: 5_000n, importeDeclarado: 4_800n, estacionId: 1, empleadoId: 10 },
        { importeEsperado: 2_000n, importeDeclarado: 2_100n, estacionId: 1, empleadoId: 11 },
        { importeEsperado: 1_500n, importeDeclarado: 1_400n, estacionId: 2, empleadoId: 10 },
      ],
    });

    expect(resumen.total.esperado).toBe(8_500n);
    expect(resumen.total.declarado).toBe(8_300n);
    expect(resumen.total.diferencia).toBe(200n);
    expect(resumen.porEstacion.get(1)?.diferencia).toBe(100n);
    expect(resumen.porEmpleado.get(10)?.diferencia).toBe(300n);
    expect(resumen.porEmpleado.get(10)?.jornadas).toBe(2);
    expect(resumen.porEmpleado.get(11)?.diferencia).toBe(-100n);
  });
});
