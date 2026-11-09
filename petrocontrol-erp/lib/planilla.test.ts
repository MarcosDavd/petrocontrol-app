import { describe, expect, it } from 'vitest';
import { aCentesimas, calcularDiferenciaApertura, calcularImporte, deCentesimas } from './calculos';
import { calcularGalonesLectura, LecturaInvalidaError } from './jornada';

// Datos reales de la planilla Excel (20/6 al 26/6):
// [fecha, ANTERIOR atrás, ANTERIOR adelante, ACTUAL atrás, ACTUAL adelante, GALONES]
type Fila = [string, string, string, string, string, string];

const PLANILLA: Record<string, Fila[]> = {
  Diesel: [
    ['20/6', '18943,47', '237,69', '19251,50', '342,71', '413,05'],
    ['21/6', '19908,41', '111,29', '20277,34', '156,29', '413,93'],
    ['22/6', '832,08', '7969,26', '956,46', '8154,06', '309,18'],
    ['23/6', '703,45', '905,14', '933,96', '951,19', '276,56'],
    ['24/6', '493,24', '517,74', '825,45', '660,14', '474,61'],
    ['25/6', '210,52', '175,89', '552,35', '360,79', '526,73'],
    ['26/6', '3983,41', '1003,18', '4342,02', '1254,24', '609,67'],
  ],
  'Premium (Gasohol 95)': [
    ['20/6', '256,22', '199,27', '279,32', '210,93', '34,76'],
    ['21/6', '292,42', '237,20', '304,05', '241,69', '16,12'],
    ['22/6', '352,54', '253,31', '372,53', '260,32', '27,00'],
    ['23/6', '380,87', '277,01', '386,43', '288,43', '16,98'],
    ['24/6', '428,73', '298,09', '456,98', '330,41', '60,57'],
    ['25/6', '465,57', '353,01', '485,13', '366,72', '33,27'],
    ['26/6', '520,32', '380,89', '529,15', '385,42', '13,36'],
  ],
  'Regular (Gasohol 90)': [
    ['20/6', '369,97', '8002,67', '381,97', '8105,07', '114,40'],
    ['21/6', '436,29', '141,51', '463,89', '201,78', '87,87'],
    ['22/6', '497,62', '240,17', '535,54', '289,52', '87,27'],
    ['23/6', '551,88', '322,68', '566,74', '363,16', '55,34'],
    ['24/6', '661,45', '417,97', '707,56', '448,53', '76,67'],
    ['25/6', '744,55', '521,15', '772,31', '636,42', '143,03'],
    ['26/6', '811,82', '696,54', '836,94', '743,95', '72,53'],
  ],
};

const opciones = { modulo: 100_000_000n, direccion: 'SUBE' as const };

describe('planilla Excel', () => {
  for (const [producto, filas] of Object.entries(PLANILLA)) {
    it(`reproduce la columna GALONES de ${producto}`, () => {
      for (const [, aa, ad, ca, cd, galones] of filas) {
        const resultado = calcularGalonesLectura(
          {
            entradaAtras: aCentesimas(aa),
            entradaAdelante: aCentesimas(ad),
            salidaAtras: aCentesimas(ca),
            salidaAdelante: aCentesimas(cd),
            huboReinicio: false,
          },
          { ...opciones, producto }
        );
        expect(deCentesimas(resultado)).toBe(galones.replace(',', '.'));
      }
    });
  }

  it('detecta galones despachados entre jornadas (Premium atrás 20/6 → 21/6)', () => {
    // ACTUAL 20/6 = 279,32 ; ANTERIOR 21/6 = 292,42 → 13,10 gal sin registrar
    expect(
      calcularDiferenciaApertura({
        salidaPrevia: aCentesimas('279,32'),
        entradaActual: aCentesimas('292,42'),
        direccion: 'SUBE',
      })
    ).toBe(13_10n);
  });

  it('detecta contador que retrocede (Diesel atrás 21/6 → 22/6)', () => {
    expect(
      calcularDiferenciaApertura({
        salidaPrevia: aCentesimas('20277,34'),
        entradaActual: aCentesimas('832,08'),
        direccion: 'SUBE',
      })
    ).toBe(-19445_26n);
  });

  it('rechaza una lectura ACTUAL menor que la ANTERIOR sin reinicio confirmado', () => {
    const lectura = {
      entradaAtras: aCentesimas('500'),
      entradaAdelante: aCentesimas('100'),
      salidaAtras: aCentesimas('450'),
      salidaAdelante: aCentesimas('120'),
      huboReinicio: false,
    };
    expect(() => calcularGalonesLectura(lectura, { ...opciones, producto: 'Diesel' })).toThrow(LecturaInvalidaError);
  });

  it('acepta el paso por 0 cuando el usuario lo confirma', () => {
    const galones = calcularGalonesLectura(
      {
        entradaAtras: aCentesimas('999999,50'),
        entradaAdelante: aCentesimas('100'),
        salidaAtras: aCentesimas('1,50'),
        salidaAdelante: aCentesimas('100'),
        huboReinicio: true,
      },
      { ...opciones, producto: 'Diesel' }
    );
    expect(galones).toBe(2_00n);
  });

  it('calcula el importe con el precio de la planilla (Diesel 20/6 a S/ 20,79)', () => {
    // 413,05 × 20,79 = 8587,3095 → S/ 8587,31
    expect(deCentesimas(calcularImporte(aCentesimas('413,05'), aCentesimas('20,79')))).toBe('8587.31');
  });
});

describe('conversión de centésimas', () => {
  it('convierte en ambos sentidos', () => {
    expect(aCentesimas('19251.5')).toBe(1_925_150n);
    expect(aCentesimas(0)).toBe(0n);
    expect(aCentesimas('-3,456')).toBe(-346n);
    expect(deCentesimas(-5n)).toBe('-0.05');
    expect(() => aCentesimas('abc')).toThrow();
  });
});
