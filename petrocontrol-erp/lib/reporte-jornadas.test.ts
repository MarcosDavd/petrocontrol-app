import { describe, expect, it } from 'vitest';
import { celdaCsv, generarCsv, numeroCsv } from './csv';
import { fechaParaArchivo, rangoFechas } from './rango-fechas';
import { csvReporteJornadas, ENCABEZADOS_JORNADAS, type JornadaReporte } from './reporte-jornadas';

describe('csv para Excel en español', () => {
  it('usa coma decimal y sin separador de miles', () => {
    expect(numeroCsv(19251.5)).toBe('19251,50');
    expect(numeroCsv('-13.1')).toBe('-13,10');
    expect(numeroCsv(null)).toBe('');
  });

  it('escapa punto y coma, comillas y saltos de línea', () => {
    expect(celdaCsv('Pérez; Juan')).toBe('"Pérez; Juan"');
    expect(celdaCsv('dijo "hola"')).toBe('"dijo ""hola"""');
    expect(celdaCsv('Máquina 1')).toBe('Máquina 1');
  });

  it('incluye BOM UTF-8, separador ";" y CRLF', () => {
    const csv = generarCsv(['A', 'B'], [['1', 'ñ']]);
    expect(csv.startsWith('﻿A;B\r\n1;ñ\r\n')).toBe(true);
  });
});

describe('reporte de jornadas', () => {
  const lectura = (nombre: string, valores: string[]) => ({
    combustible: { nombre },
    entradaAtras: valores[0],
    entradaAdelante: valores[1],
    salidaAtras: valores[2],
    salidaAdelante: valores[3],
    galones: valores[4],
    precioUnitario: valores[5],
    importe: valores[6],
    diferenciaApertura: null,
  });

  const jornada: JornadaReporte = {
    id: 7,
    inicio: new Date('2026-06-20T08:00:00-05:00'),
    fin: new Date('2026-06-20T16:00:00-05:00'),
    empleado: { nombre: 'Tomas' },
    estacion: { nombre: 'Estación Central' },
    maquina: { nombre: 'Máquina 1' },
    importeEsperado: '9275.21',
    importeDeclarado: '9000.00',
    diferenciaCaja: '275.21',
    lecturas: [
      lectura('Diesel', ['18943.47', '237.69', '19251.50', '342.71', '413.05', '20.79', '8587.31']),
      lectura('Premium', ['256.22', '199.27', '279.32', '210.93', '34.76', '19.79', '687.90']),
    ],
  };

  it('genera una fila por producto, como la planilla, con totales de caja solo en la primera', () => {
    const lineas = csvReporteJornadas([jornada]).replace('﻿', '').trim().split('\r\n');
    expect(lineas[0].split(';')).toEqual(ENCABEZADOS_JORNADAS);
    // 2 filas de detalle + fila en blanco + 2 totales por producto + total general
    expect(lineas).toHaveLength(7);
    expect(lineas[1]).toBe(
      '7;20/06/2026;08:00;20/06/2026;16:00;Tomas;Estación Central;Máquina 1;Diesel;18943,47;237,69;19251,50;342,71;413,05;20,79;8587,31;;9275,21;9000,00;275,21'
    );
    expect(lineas[2].endsWith('687,90;;;;')).toBe(true);
  });

  it('agrega un totalizador de galones y dinero por producto y general', () => {
    const otra: JornadaReporte = {
      ...jornada,
      id: 8,
      importeEsperado: '100.10',
      importeDeclarado: '100.20',
      diferenciaCaja: '-0.10',
      lecturas: [lectura('Diesel', ['0', '0', '0', '0', '4.81', '20.81', '100.10'])],
    };
    const lineas = csvReporteJornadas([jornada, otra]).replace('﻿', '').trim().split('\r\n');
    const columnas = (linea: string) => linea.split(';');
    const col = (nombre: string) => ENCABEZADOS_JORNADAS.indexOf(nombre);

    expect(lineas[4]).toBe(';'.repeat(ENCABEZADOS_JORNADAS.length - 1));

    const diesel = columnas(lineas[5]);
    expect([diesel[0], diesel[col('Producto')], diesel[col('Galones')], diesel[col('Importe (S/)')]]).toEqual([
      'Total por producto', 'Diesel', '417,86', '8687,41',
    ]);
    const premium = columnas(lineas[6]);
    expect([premium[col('Producto')], premium[col('Galones')], premium[col('Importe (S/)')]]).toEqual(['Premium', '34,76', '687,90']);

    const total = columnas(lineas[7]);
    expect(total[0]).toBe('TOTAL GENERAL');
    expect(total[col('Producto')]).toBe('2 jornadas');
    expect(total[col('Galones')]).toBe('452,62');
    expect(total[col('Importe (S/)')]).toBe('9375,31');
    expect(total[col('Esperado jornada (S/)')]).toBe('9375,31');
    expect(total[col('Declarado jornada (S/)')]).toBe('9100,20');
    expect(total[col('Faltante (+) / sobrante (-) (S/)')]).toBe('275,11');
  });

  it('sin jornadas el total general queda en cero', () => {
    const lineas = csvReporteJornadas([]).replace('﻿', '').trim().split('\r\n');
    const total = lineas.at(-1)!.split(';');
    expect(total[0]).toBe('TOTAL GENERAL');
    expect(total[ENCABEZADOS_JORNADAS.indexOf('Galones')]).toBe('0,00');
  });
});

describe('rango de fechas', () => {
  it('ordena fechas invertidas e incluye el día completo', () => {
    const rango = rangoFechas('2026-06-30', '2026-06-01');
    expect(rango.desde).toBe('2026-06-01');
    expect(rango.hasta).toBe('2026-06-30');
    expect(rango.inicio.toISOString()).toBe('2026-06-01T05:00:00.000Z');
    expect(rango.fin.toISOString()).toBe('2026-07-01T04:59:59.999Z');
  });

  it('por defecto va del 1 del mes a hoy', () => {
    const rango = rangoFechas(undefined, 'basura', new Date('2026-11-09T10:00:00-05:00'));
    expect(rango).toMatchObject({ desde: '2026-11-01', hasta: '2026-11-09' });
  });

  it('formatea la fecha para el nombre del archivo', () => {
    expect(fechaParaArchivo('2026-06-01')).toBe('01-06-2026');
  });
});
