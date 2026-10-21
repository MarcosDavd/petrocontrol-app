import { describe, expect, it } from 'vitest';
import {
  calcularCuadreCaja,
  calcularDiferenciaControl,
  calcularGalonesContador,
  calcularGalonesProducto,
  calcularImporte,
} from './calculos';

describe('calcularGalonesContador', () => {
  it('suma sin reinicio', () => {
    expect(
      calcularGalonesContador({
        entrada: 100n,
        salida: 200n,
        modulo: 100_000_000n,
        direccion: 'SUBE',
      })
    ).toBe(100n);
  });

  it('suma con reinicio', () => {
    expect(
      calcularGalonesContador({
        entrada: 99_999_900n,
        salida: 800n,
        modulo: 100_000_000n,
        direccion: 'SUBE',
      })
    ).toBe(900n);
  });

  it('baja con reinicio', () => {
    expect(
      calcularGalonesContador({
        entrada: 300n,
        salida: 99_999_900n,
        modulo: 100_000_000n,
        direccion: 'BAJA',
      })
    ).toBe(400n);
  });
});

describe('calcularGalonesProducto', () => {
  it('suma las lecturas de atrás y adelante usando centésimas', () => {
    const galones = calcularGalonesProducto({
      entradaAtras: 1_894_347n,
      salidaAtras: 1_925_150n,
      entradaAdelante: 237_69n,
      salidaAdelante: 342_71n,
      modulo: 100_000_000n,
      direccion: 'SUBE',
    });

    expect(galones).toBe(413_05n);
  });
});

describe('calcularImporte', () => {
  it('calcula importes en centésimas sin corrupción por float', () => {
    const galones = 41_305n;
    const precio = 1_420n;

    expect(calcularImporte(galones, precio)).toBe(586_531n);
  });
});

describe('calcularDiferenciaControl', () => {
  it('calcula la diferencia entre totalizador y productos', () => {
    expect(calcularDiferenciaControl(1000n, 1000n)).toBe(0n);
  });
});

describe('calcularCuadreCaja', () => {
  it('cuadra el esperado con el declarado', () => {
    expect(calcularCuadreCaja(1_000n, 50n + 300n + 200n + 450n)).toBe(0n);
  });
});
