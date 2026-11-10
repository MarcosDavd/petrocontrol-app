import { fechaHoraLima } from './zona-horaria';

/** Nombre del campo de formulario con el precio de un producto, p. ej. `precio_3`. */
export const campoPrecio = (combustibleId: number) => `precio_${combustibleId}`;

const PRECIO_REGEX = /^\d+(\.\d{1,2})?$/;

type Resultado =
  | { ok: true; precios: { combustibleId: number; precio: string }[] }
  | { ok: false; error: string };

/**
 * Precios iniciales de una estación nueva: uno por cada producto, todos obligatorios y mayores que 0.
 * Una estación no puede crearse sin precio, porque sin él no se pueden cerrar sus jornadas.
 */
export function leerPreciosIniciales(
  datos: Record<string, unknown>,
  combustibles: { id: number; nombre: string }[]
): Resultado {
  if (combustibles.length === 0) {
    return { ok: false, error: 'Primero crea al menos un producto en Productos y precios.' };
  }

  const precios: { combustibleId: number; precio: string }[] = [];
  for (const combustible of combustibles) {
    const texto = String(datos[campoPrecio(combustible.id)] ?? '').trim().replace(',', '.');
    if (texto === '') {
      return { ok: false, error: `Falta el precio de ${combustible.nombre}. Cada estación necesita precio para todos sus productos.` };
    }
    if (!PRECIO_REGEX.test(texto) || Number(texto) <= 0) {
      return { ok: false, error: `El precio de ${combustible.nombre} debe ser mayor que 0 y tener como máximo 2 decimales.` };
    }
    precios.push({ combustibleId: combustible.id, precio: texto });
  }
  return { ok: true, precios };
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
