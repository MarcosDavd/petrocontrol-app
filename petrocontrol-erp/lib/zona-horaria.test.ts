import { describe, expect, it } from 'vitest';
import { fechaHoraLima, finDelDiaLima, hoyLima, inicioMesLima, partesLima, sumarDias } from './zona-horaria';
import { sugerirFechaFin } from './turnos';
import { formatoFechaHora } from './formato';

// Estos tests deben dar lo mismo sin importar la zona horaria de la máquina (TZ=UTC, etc.)
describe('hora de Perú independiente del servidor', () => {
  it('interpreta fecha + hora como hora de Perú (UTC−5)', () => {
    expect(fechaHoraLima('2026-06-20', '08:00').toISOString()).toBe('2026-06-20T13:00:00.000Z');
    expect(finDelDiaLima('2026-06-20').toISOString()).toBe('2026-06-21T04:59:59.999Z');
  });

  it('muestra un instante con la fecha y hora de Perú', () => {
    // 02:30 UTC del 21/06 = 21:30 del 20/06 en Perú
    expect(partesLima(new Date('2026-06-21T02:30:00Z'))).toMatchObject({ fecha: '2026-06-20', hora: '21:30' });
    expect(hoyLima(new Date('2026-06-21T02:30:00Z'))).toBe('2026-06-20');
    expect(formatoFechaHora(new Date('2026-06-20T13:00:00Z'))).toMatch(/20\/06\/(20)?26.*8:00/);
  });

  it('calcula el inicio de mes y suma días cruzando meses', () => {
    expect(inicioMesLima(new Date('2026-07-01T03:00:00Z')).toISOString()).toBe('2026-06-01T05:00:00.000Z');
    expect(sumarDias('2026-06-30', 1)).toBe('2026-07-01');
    expect(sumarDias('2026-03-01', -1)).toBe('2026-02-28');
  });

  it('propone el día siguiente para un turno nocturno aunque el servidor esté en UTC', () => {
    // 22:00 en Perú = 03:00 UTC del día siguiente
    expect(sugerirFechaFin(fechaHoraLima('2026-06-20', '22:00'), '06:00')).toBe('2026-06-21');
    expect(sugerirFechaFin(fechaHoraLima('2026-06-20', '08:00'), '16:00')).toBe('2026-06-20');
  });
});
