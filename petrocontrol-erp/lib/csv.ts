/**
 * CSV compatible con Excel en español (Perú): separador ";", coma decimal,
 * saltos de línea CRLF y BOM UTF-8 para que se vean bien las tildes y la ñ.
 */
export type Celda = string | number | null | undefined;

const SEPARADOR = ';';

export function celdaCsv(valor: Celda): string {
  if (valor === null || valor === undefined) return '';
  // Enteros (ids, cantidades) tal cual; decimales con coma
  const texto = typeof valor === 'number' ? (Number.isInteger(valor) ? String(valor) : numeroCsv(valor)) : valor;
  return /[";\r\n]/.test(texto) || /^\s|\s$/.test(texto) ? `"${texto.replace(/"/g, '""')}"` : texto;
}

/** 1234.5 → "1234,50" (sin separador de miles para que Excel lo lea como número). */
export function numeroCsv(valor: number | { toString(): string } | null | undefined, decimales = 2): string {
  if (valor === null || valor === undefined) return '';
  const numero = typeof valor === 'number' ? valor : Number(valor.toString());
  return Number.isFinite(numero) ? numero.toFixed(decimales).replace('.', ',') : '';
}

export function generarCsv(encabezados: string[], filas: Celda[][]): string {
  const lineas = [encabezados, ...filas].map((fila) => fila.map(celdaCsv).join(SEPARADOR));
  return `﻿${lineas.join('\r\n')}\r\n`;
}
