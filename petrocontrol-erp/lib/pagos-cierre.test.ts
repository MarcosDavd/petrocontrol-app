import { describe, expect, it } from 'vitest';
import { leerPagosCierre } from './validation/jornadas';

describe('leerPagosCierre', () => {
  it('sin pagos es válido (vacío o ausente)', () => {
    expect(leerPagosCierre(null)).toEqual({ ok: true, pagos: [] });
    expect(leerPagosCierre('')).toEqual({ ok: true, pagos: [] });
    expect(leerPagosCierre('[]')).toEqual({ ok: true, pagos: [] });
  });

  it('lee varios pagos y normaliza la coma decimal', () => {
    const r = leerPagosCierre(
      JSON.stringify([
        { medio: 'EFECTIVO', monto: '500', nota: '' },
        { medio: 'TRANSFERENCIA', monto: '120,50', nota: ' Yape ' },
      ])
    );
    expect(r).toEqual({
      ok: true,
      pagos: [
        { medio: 'EFECTIVO', monto: '500', nota: '' },
        { medio: 'TRANSFERENCIA', monto: '120.50', nota: 'Yape' },
      ],
    });
  });

  it('rechaza montos en 0, negativos, vacíos o con más de 2 decimales', () => {
    for (const monto of ['0', '-5', '', 'abc', '10.555']) {
      const r = leerPagosCierre(JSON.stringify([{ medio: 'TARJETA', monto }]));
      expect(r.ok, monto).toBe(false);
    }
  });

  it('rechaza un medio desconocido y un JSON roto', () => {
    expect(leerPagosCierre(JSON.stringify([{ medio: 'BITCOIN', monto: '5' }])).ok).toBe(false);
    expect(leerPagosCierre('[{roto')).toEqual({ ok: false, error: expect.stringContaining('No se pudieron leer') });
  });
});
