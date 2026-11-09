import { fechaHoraLima, finDelDiaLima, hoyLima, partesLima } from './zona-horaria';

const FECHA = /^\d{4}-\d{2}-\d{2}$/;

/**
 * Rango de fechas de un reporte ("YYYY-MM-DD", ambos días incluidos, hora de Perú).
 * Por defecto: del 1 del mes actual a hoy. Si vienen invertidas se ordenan.
 */
export function rangoFechas(desdeParam?: string | null, hastaParam?: string | null, ahora = new Date()) {
  const valido = (valor?: string | null) => (valor && FECHA.test(valor) ? valor : undefined);
  const { anio, mes } = partesLima(ahora);
  let desde = valido(desdeParam) ?? `${anio}-${mes}-01`;
  let hasta = valido(hastaParam) ?? hoyLima(ahora);
  if (desde > hasta) [desde, hasta] = [hasta, desde];

  return { desde, hasta, inicio: fechaHoraLima(desde), fin: finDelDiaLima(hasta) };
}

/** "2026-06-01" → "01-06-2026" (apto para nombres de archivo). */
export function fechaParaArchivo(fecha: string) {
  const [anio, mes, dia] = fecha.split('-');
  return `${dia}-${mes}-${anio}`;
}
