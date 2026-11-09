import { describe, expect, it } from 'vitest';
import { sugerirFechaFin } from './turnos';

describe('sugerirFechaFin', () => {
  it('propone el mismo día para un horario diurno (08:00 – 16:00)', () => {
    expect(sugerirFechaFin(new Date('2026-06-20T08:00:00-05:00'), '16:00')).toBe('2026-06-20');
  });

  it('propone el día siguiente si el horario cruza la medianoche (22:00 – 06:00)', () => {
    expect(sugerirFechaFin(new Date('2026-06-30T22:00:00-05:00'), '06:00')).toBe('2026-07-01');
  });

  it('usa el día del inicio si el empleado no tiene hora de fin', () => {
    expect(sugerirFechaFin(new Date('2026-06-20T08:00:00-05:00'), null)).toBe('2026-06-20');
  });
});
