import { describe, expect, it } from 'vitest';
import { limitesTanqueSchema, tanqueSchema } from './validation/inventario';

describe('límites de un tanque', () => {
  it('acepta capacidad y mínimo válidos', () => {
    expect(limitesTanqueSchema.parse({ tanqueId: '3', capacidad: '5000', minimo: '800.5' })).toEqual({
      tanqueId: 3,
      capacidad: 5000,
      minimo: 800.5,
    });
  });

  it('el mínimo debe ser menor que la capacidad', () => {
    expect(limitesTanqueSchema.safeParse({ tanqueId: 1, capacidad: 1000, minimo: 1000 }).success).toBe(false);
    expect(limitesTanqueSchema.safeParse({ tanqueId: 1, capacidad: 1000, minimo: 1200 }).success).toBe(false);
  });

  it('rechaza capacidad cero o negativa y mínimo negativo', () => {
    expect(limitesTanqueSchema.safeParse({ tanqueId: 1, capacidad: 0, minimo: 0 }).success).toBe(false);
    expect(limitesTanqueSchema.safeParse({ tanqueId: 1, capacidad: 1000, minimo: -1 }).success).toBe(false);
  });

  it('la misma regla vale al crear un tanque', () => {
    expect(tanqueSchema.safeParse({ estacionId: 1, combustibleId: 1, capacidad: 500, minimo: 600 }).success).toBe(false);
    expect(tanqueSchema.safeParse({ estacionId: 1, combustibleId: 1, capacidad: 500, minimo: 100 }).success).toBe(true);
  });
});
