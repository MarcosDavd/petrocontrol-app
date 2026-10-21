import { describe, expect, it } from 'vitest';
import { calcularResumenPagos } from './pagos';

describe('calcularResumenPagos', () => {
  it('suma importes por medio de pago y total general', () => {
    const resumen = calcularResumenPagos([
      { medio: 'EFECTIVO', monto: 1_200n },
      { medio: 'TARJETA', monto: 900n },
      { medio: 'EFECTIVO', monto: 400n },
      { medio: 'TRANSFERENCIA', monto: 300n },
    ]);

    expect(resumen.total).toBe(2_800n);
    expect(resumen.porMedio.EFECTIVO).toBe(1_600n);
    expect(resumen.porMedio.TARJETA).toBe(900n);
    expect(resumen.porMedio.TRANSFERENCIA).toBe(300n);
    expect(resumen.porMedio.DESCUENTO).toBe(0n);
  });
});
