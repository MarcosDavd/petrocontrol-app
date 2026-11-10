import { fechaHoraLima } from './zona-horaria';

/** Nombre del campo de formulario con el precio de un producto, p. ej. `precio_3`. */
export const campoPrecio = (combustibleId: number) => `precio_${combustibleId}`;

/** Nombre del campo con el precio de un producto nuevo en una estación, p. ej. `precio_estacion_2`. */
export const campoPrecioEstacion = (estacionId: number) => `precio_estacion_${estacionId}`;

const PRECIO_REGEX = /^\d+(\.\d{1,2})?$/;

type Resultado<T> = { ok: true; precios: (T & { precio: string })[] } | { ok: false; error: string };

/** Lee un precio obligatorio (> 0, máx. 2 decimales) por cada elemento de `items`. */
function leerPrecios<T>(
  datos: Record<string, unknown>,
  items: { id: number; nombre: string }[],
  campo: (id: number) => string,
  clave: (id: number) => T,
  mensajes: { falta: (nombre: string) => string; invalido: (nombre: string) => string }
): Resultado<T> {
  const precios: (T & { precio: string })[] = [];
  for (const item of items) {
    const texto = String(datos[campo(item.id)] ?? '').trim().replace(',', '.');
    if (texto === '') return { ok: false, error: mensajes.falta(item.nombre) };
    if (!PRECIO_REGEX.test(texto) || Number(texto) <= 0) return { ok: false, error: mensajes.invalido(item.nombre) };
    precios.push({ ...clave(item.id), precio: texto });
  }
  return { ok: true, precios };
}

/**
 * Precios iniciales de una estación nueva: uno por cada producto, todos obligatorios y mayores que 0.
 * Una estación no puede crearse sin precio, porque sin él no se pueden cerrar sus jornadas.
 */
export function leerPreciosIniciales(datos: Record<string, unknown>, combustibles: { id: number; nombre: string }[]) {
  if (combustibles.length === 0) {
    return { ok: false as const, error: 'Primero crea al menos un producto en Productos y precios.' };
  }
  return leerPrecios(datos, combustibles, campoPrecio, (combustibleId) => ({ combustibleId }), {
    falta: (nombre) => `Falta el precio de ${nombre}. Cada estación necesita precio para todos sus productos.`,
    invalido: (nombre) => `El precio de ${nombre} debe ser mayor que 0 y tener como máximo 2 decimales.`,
  });
}

/**
 * Precios de un producto nuevo: uno por cada estación, todos obligatorios y mayores que 0.
 * Sin estaciones no hay precios que pedir.
 */
export function leerPreciosNuevoProducto(datos: Record<string, unknown>, estaciones: { id: number; nombre: string }[]) {
  return leerPrecios(datos, estaciones, campoPrecioEstacion, (estacionId) => ({ estacionId }), {
    falta: (nombre) => `Falta el precio en ${nombre}. Un producto nuevo necesita precio en todas las estaciones.`,
    invalido: (nombre) => `El precio en ${nombre} debe ser mayor que 0 y tener como máximo 2 decimales.`,
  });
}

/**
 * Fecha desde la que rige un precio. "YYYY-MM-DD" = inicio de ese día en hora de Perú;
 * vacío = ahora. Permite fechas pasadas para cargar jornadas antiguas.
 */
export function fechaVigencia(valor: string | undefined, ahora = new Date()) {
  if (!valor) return ahora;
  if (/^\d{4}-\d{2}-\d{2}$/.test(valor)) return fechaHoraLima(valor);
  return new Date(valor);
}
