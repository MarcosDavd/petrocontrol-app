import { describe, expect, it } from 'vitest';
import { estadoTanque, historialStock } from './inventario';
import { fechaHoraLima } from './zona-horaria';

describe('estadoTanque', () => {
  it('clasifica el nivel según stock, mínimo y porcentaje', () => {
    expect(estadoTanque(-5, 1000, 100).nivel).toBe('revisar');
    expect(estadoTanque(100, 1000, 100).nivel).toBe('bajo');
    expect(estadoTanque(250, 1000, 100).nivel).toBe('medio');
    expect(estadoTanque(800, 1000, 100).nivel).toBe('normal');
  });

  it('limita el porcentaje entre 0 y 100 y calcula el espacio libre', () => {
    expect(estadoTanque(-5, 1000, 100)).toMatchObject({ porcentaje: 0, libre: 1000 });
    expect(estadoTanque(1200, 1000, 100)).toMatchObject({ porcentaje: 100, libre: 0 });
    expect(estadoTanque(500, 0, 0).porcentaje).toBe(0);
  });
});

describe('historialStock', () => {
  it('acumula los movimientos por día y repite el stock en días sin movimientos', () => {
    const puntos = historialStock(
      100,
      [
        { fecha: fechaHoraLima('2026-06-01', '08:00'), galones: 500 },
        { fecha: fechaHoraLima('2026-06-01', '20:00'), galones: -50.1 },
        { fecha: fechaHoraLima('2026-06-03', '10:00'), galones: -0.2 },
      ],
      '2026-06-01',
      '2026-06-04'
    );
    expect(puntos).toEqual([
      { fecha: '2026-06-01', stock: 549.9 },
      { fecha: '2026-06-02', stock: 549.9 },
      { fecha: '2026-06-03', stock: 549.7 },
      { fecha: '2026-06-04', stock: 549.7 },
    ]);
  });

  it('asigna el movimiento al día de Perú, no al de UTC', () => {
    // 23:30 del 1 de junio en Lima = 04:30 UTC del 2 de junio
    const puntos = historialStock(0, [{ fecha: fechaHoraLima('2026-06-01', '23:30'), galones: 10 }], '2026-06-01', '2026-06-02');
    expect(puntos[0]).toEqual({ fecha: '2026-06-01', stock: 10 });
  });
});
