/**
 * Reglas de acceso por rol. Funciones puras: las usa el middleware (con los datos del token)
 * y se prueban sin base de datos. La verificación definitiva se repite en cada página,
 * Server Action y ruta de API contra la base (ver lib/sesion.ts).
 */

import { hoyLima, sumarDias } from './zona-horaria';

export type Rol = 'ADMIN' | 'EMPLEADO';

/** Rutas a las que entra cualquiera sin sesión. */
export const RUTAS_PUBLICAS = ['/login', '/api/auth/login', '/api/auth/logout', '/manifest.webmanifest'];
/** Recursos de marca (logos, íconos) visibles sin sesión, p. ej. en /login. */
export const PREFIJOS_PUBLICOS = ['/_next', '/favicon', '/brand/', '/icon', '/apple-icon'];

export function esRutaPublica(pathname: string) {
  return RUTAS_PUBLICAS.includes(pathname) || PREFIJOS_PUBLICOS.some((prefijo) => pathname.startsWith(prefijo));
}

/**
 * Un empleado solo ve la lista de jornadas, el detalle y la corrección de una jornada (la página
 * comprueba que sea suya) y su cuenta. Los reportes, el inventario y la configuración son del admin.
 */
const RUTAS_EMPLEADO = [/^\/jornadas$/, /^\/jornadas\/\d+$/, /^\/jornadas\/\d+\/editar$/, /^\/cuenta$/];

export function puedeEntrar(rol: Rol, pathname: string) {
  if (rol === 'ADMIN') return true;
  const ruta = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return RUTAS_EMPLEADO.some((patron) => patron.test(ruta));
}

/** Página de inicio después de ingresar. */
export function inicioDe(rol: Rol) {
  return rol === 'ADMIN' ? '/home' : '/jornadas';
}

/** Con una contraseña temporal pendiente de cambio solo se puede ir a "Mi cuenta" o salir. */
export function permitidaConCambioPendiente(pathname: string) {
  return pathname === '/cuenta' || pathname === '/api/auth/logout';
}

/**
 * Fechas que un empleado puede poner al abrir o cerrar su jornada: hoy o ayer (hora de Perú).
 * Ayer cubre los turnos de noche y el olvido de abrir antes de medianoche.
 * Cualquier otra fecha (registrar días pasados, corregir) la pone el admin.
 */
export function rangoFechaEmpleado(ahora = new Date()) {
  const hoy = hoyLima(ahora);
  return { min: sumarDias(hoy, -1), max: hoy };
}

export function fechaPermitidaParaEmpleado(fecha: string, ahora = new Date()) {
  const { min, max } = rangoFechaEmpleado(ahora);
  // "YYYY-MM-DD" se ordena igual como texto que como fecha
  return /^\d{4}-\d{2}-\d{2}$/.test(fecha) && fecha >= min && fecha <= max;
}

export const MENSAJE_FECHA_EMPLEADO =
  'Solo puedes registrar jornadas con fecha de hoy o de ayer. Para otra fecha, consulta con el administrador.';
