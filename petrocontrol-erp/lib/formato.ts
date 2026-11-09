import { ZONA_HORARIA } from './zona-horaria';

type Numerico = { toString(): string } | string | number | null | undefined;

const aNumero = (value: Numerico) => (value === null || value === undefined ? null : Number(value.toString()));

const decimal = new Intl.NumberFormat('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const moneda = new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN' });

export function formatoNumero(value: Numerico, vacio = '—') {
  const numero = aNumero(value);
  return numero === null ? vacio : decimal.format(numero);
}

export function formatoSoles(value: Numerico, vacio = '—') {
  const numero = aNumero(value);
  return numero === null ? vacio : moneda.format(numero);
}

export function formatoGalones(value: Numerico, vacio = '—') {
  const numero = aNumero(value);
  return numero === null ? vacio : `${decimal.format(numero)} gal`;
}

export function formatoFechaHora(value: Date | string | null | undefined) {
  if (!value) return '—';
  return new Date(value).toLocaleString('es-PE', { dateStyle: 'short', timeStyle: 'short', timeZone: ZONA_HORARIA });
}

export function formatoFecha(value: Date | string | null | undefined) {
  if (!value) return '—';
  return new Date(value).toLocaleDateString('es-PE', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: ZONA_HORARIA });
}
