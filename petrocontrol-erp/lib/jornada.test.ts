import { describe, expect, it } from 'vitest';
import { calcularResumenJornada, puedeEliminarJornada } from './jornada';

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

describe('plazo para eliminar una jornada', () => {
  const registrada = new Date('2026-11-20T13:00:00Z');

  it('se puede hasta 24 horas después de registrarla', () => {
    expect(puedeEliminarJornada(registrada, new Date('2026-11-20T13:05:00Z'))).toBe(true);
    expect(puedeEliminarJornada(registrada, new Date('2026-11-21T13:00:00Z'))).toBe(true);
  });

  it('pasadas las 24 horas ya no', () => {
    expect(puedeEliminarJornada(registrada, new Date('2026-11-21T13:00:01Z'))).toBe(false);
    expect(puedeEliminarJornada(registrada, new Date('2026-12-20T13:00:00Z'))).toBe(false);
  });

  it('una pequeña diferencia de reloj no bloquea una recién creada', () => {
    expect(puedeEliminarJornada(registrada, new Date('2026-11-20T12:59:58Z'))).toBe(true);
  });
});
