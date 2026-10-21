import { describe, expect, it } from 'vitest';
import { calcularResumenJornada } from './jornada';

describe('calcularResumenJornada', () => {
  it('resume galones, caja y diferencia en una sola operación', () => {
    const resumen = calcularResumenJornada({
      totalizadorEntrada: 1_000n,
      totalizadorSalida: 2_000n,
      lecturas: [
        { galones: 400n, precioUnitario: 1_500n },
        { galones: 600n, precioUnitario: 1_600n },
      ],
      pagos: [600n, 600n, 300n],
    });

    expect(resumen.galonesTotalizador).toBe(1_000n);
    expect(resumen.galonesProductos).toBe(1_000n);
    expect(resumen.diferenciaControl).toBe(0n);
    expect(resumen.importeEsperado).toBe(15_600n);
    expect(resumen.importeDeclarado).toBe(1_500n);
    expect(resumen.diferenciaCaja).toBe(14_100n);
  });
});
