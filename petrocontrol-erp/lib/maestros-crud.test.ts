import { describe, expect, it } from 'vitest';
import { normalizeUpdatePayload } from './maestros-crud';

describe('normalizeUpdatePayload', () => {
  it('normaliza texto vacío y booleanos de formularios', () => {
    expect(
      normalizeUpdatePayload({
        nombre: 'Estación Central',
        direccion: '',
        activa: 'on',
      })
    ).toEqual({
      nombre: 'Estación Central',
      direccion: null,
      activa: true,
    });
  });
});
