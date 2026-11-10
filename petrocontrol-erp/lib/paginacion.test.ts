import { describe, expect, it } from 'vitest';
import { paginar } from './paginacion';

describe('paginar', () => {
  it('calcula skip y rango de la página pedida', () => {
    expect(paginar(40, '2', 15)).toEqual({ pagina: 2, totalPaginas: 3, skip: 15, take: 15, desde: 16, hasta: 30 });
  });

  it('la última página muestra solo lo que queda', () => {
    expect(paginar(40, 3, 15)).toMatchObject({ pagina: 3, skip: 30, desde: 31, hasta: 40 });
  });

  it('lleva valores inválidos o fuera de rango a una página válida', () => {
    expect(paginar(40, undefined, 15).pagina).toBe(1);
    expect(paginar(40, 'abc', 15).pagina).toBe(1);
    expect(paginar(40, '0', 15).pagina).toBe(1);
    expect(paginar(40, '-3', 15).pagina).toBe(1);
    expect(paginar(40, '99', 15).pagina).toBe(3);
    expect(paginar(40, '2.7', 15).pagina).toBe(2);
  });

  it('sin elementos hay una sola página vacía', () => {
    expect(paginar(0, '5', 15)).toEqual({ pagina: 1, totalPaginas: 1, skip: 0, take: 15, desde: 0, hasta: 0 });
  });
});
