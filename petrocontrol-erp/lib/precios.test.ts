import { describe, expect, it } from 'vitest';
import { campoPrecio, campoPrecioEstacion, fechaVigencia, leerPreciosIniciales, leerPreciosNuevoProducto } from './precios';
import { fechaHoraLima } from './zona-horaria';

const PRODUCTOS = [
  { id: 1, nombre: 'Diesel' },
  { id: 3, nombre: 'GLP' },
];

describe('leerPreciosIniciales', () => {
  it('devuelve un precio por cada producto', () => {
    const r = leerPreciosIniciales({ [campoPrecio(1)]: '14.20', [campoPrecio(3)]: '7,5' }, PRODUCTOS);
    expect(r).toEqual({
      ok: true,
      precios: [
        { combustibleId: 1, precio: '14.20' },
        { combustibleId: 3, precio: '7.5' },
      ],
    });
  });

  it('no permite crear la estación si falta el precio de algún producto', () => {
    const r = leerPreciosIniciales({ [campoPrecio(1)]: '14.20', [campoPrecio(3)]: '  ' }, PRODUCTOS);
    expect(r).toEqual({ ok: false, error: expect.stringContaining('Falta el precio de GLP') });
  });

  it('rechaza precios en 0, negativos, con texto o con más de 2 decimales', () => {
    for (const valor of ['0', '0.00', '-3', 'abc', '14.205']) {
      const r = leerPreciosIniciales({ [campoPrecio(1)]: valor, [campoPrecio(3)]: '7' }, PRODUCTOS);
      expect(r.ok, valor).toBe(false);
    }
  });

  it('exige que exista al menos un producto', () => {
    expect(leerPreciosIniciales({}, [])).toEqual({ ok: false, error: expect.stringContaining('Primero crea') });
  });
});

describe('leerPreciosNuevoProducto', () => {
  const ESTACIONES = [
    { id: 2, nombre: 'Pachas' },
    { id: 1, nombre: 'Tunan' },
  ];

  it('devuelve un precio por cada estación', () => {
    const r = leerPreciosNuevoProducto({ [campoPrecioEstacion(2)]: '9.10', [campoPrecioEstacion(1)]: '9,25' }, ESTACIONES);
    expect(r).toEqual({
      ok: true,
      precios: [
        { estacionId: 2, precio: '9.10' },
        { estacionId: 1, precio: '9.25' },
      ],
    });
  });

  it('no permite crear el producto si falta el precio en alguna estación', () => {
    const r = leerPreciosNuevoProducto({ [campoPrecioEstacion(2)]: '9.10' }, ESTACIONES);
    expect(r).toEqual({ ok: false, error: expect.stringContaining('Falta el precio en Tunan') });
  });

  it('rechaza precios en 0 o con más de 2 decimales', () => {
    for (const valor of ['0', '9.999', 'x']) {
      expect(leerPreciosNuevoProducto({ [campoPrecioEstacion(2)]: valor, [campoPrecioEstacion(1)]: '9' }, ESTACIONES).ok, valor).toBe(false);
    }
  });

  it('sin estaciones no pide precios', () => {
    expect(leerPreciosNuevoProducto({}, [])).toEqual({ ok: true, precios: [] });
  });
});

describe('fechaVigencia', () => {
  it('vacío = ahora; "YYYY-MM-DD" = inicio del día en Perú', () => {
    const ahora = new Date('2026-11-10T15:00:00Z');
    expect(fechaVigencia(undefined, ahora)).toBe(ahora);
    expect(fechaVigencia('', ahora)).toBe(ahora);
    expect(fechaVigencia('2026-11-01', ahora)).toEqual(fechaHoraLima('2026-11-01'));
  });
});
