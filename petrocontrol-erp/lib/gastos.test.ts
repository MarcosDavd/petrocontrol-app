import { describe, expect, it } from 'vitest';
import { calcularResumenGastos } from './gastos';

describe('calcularResumenGastos', () => {
  it('suma importes por categoría y total general', () => {
    const resumen = calcularResumenGastos([
      { categoria: 'Servicios', monto: 1_000n },
      { categoria: 'Mantenimiento', monto: 500n },
      { categoria: 'Servicios', monto: 300n },
    ]);

    expect(resumen.total).toBe(1_800n);
    expect(resumen.porCategoria.Servicios).toBe(1_300n);
    expect(resumen.porCategoria.Mantenimiento).toBe(500n);
  });
});
