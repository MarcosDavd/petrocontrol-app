import { partesLima, sumarDias } from './zona-horaria';

/**
 * Fecha propuesta para el cierre (hora de Perú): la del inicio, o el día siguiente si la
 * hora de fin del horario es menor o igual a la hora de inicio (horario que cruza la medianoche).
 */
export function sugerirFechaFin(inicio: Date, horaFin: string | null) {
  const { fecha, hora } = partesLima(inicio);
  return horaFin && horaFin <= hora ? sumarDias(fecha, 1) : fecha;
}

export const HORA_REGEX = /^([01]\d|2[0-3]):[0-5]\d$/;

/** "08:00 – 16:00" o "Sin horario". La salida puede ser menor que la entrada (cruza medianoche). */
export function describirHorario(inicio: string | null, fin: string | null) {
  if (!inicio && !fin) return 'Sin horario';
  return `${inicio ?? '—'} – ${fin ?? '—'}`;
}
