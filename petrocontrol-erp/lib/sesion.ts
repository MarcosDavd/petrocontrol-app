import { cache } from 'react';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';
import { createSessionToken, getSessionFromCookies, setSessionCookie } from './auth';
import { db } from './db';
import { inicioDe } from './permisos';

/**
 * Usuario de la sesión actual, validado contra la base de datos:
 * - la cuenta existe y está activa (y su empleado también, si es un empleado),
 * - la contraseña no cambió desde que se emitió la cookie (sesionVersion).
 * Se memoriza por petición, así layout, página y acciones hacen una sola consulta.
 */
export const obtenerUsuarioActual = cache(async () => {
  const sesion = await getSessionFromCookies();
  if (!sesion) return null;

  const usuario = await db.usuario.findUnique({
    where: { id: sesion.userId },
    include: { empleado: true },
  });

  if (!usuario || !usuario.activo) return null;
  if (usuario.sesionVersion !== sesion.version) return null;
  if (usuario.rol === 'EMPLEADO' && (!usuario.empleado || !usuario.empleado.activo)) return null;

  return usuario;
});

export type UsuarioActual = NonNullable<Awaited<ReturnType<typeof obtenerUsuarioActual>>>;

/** Nombre a mostrar en la interfaz. */
export function nombreVisible(usuario: UsuarioActual) {
  return usuario.empleado?.nombre ?? usuario.email ?? usuario.usuario ?? 'Usuario';
}

/** Identificador con el que ingresa (correo o usuario). */
export function identificador(usuario: UsuarioActual) {
  return usuario.email ?? usuario.usuario ?? '';
}

/**
 * Para páginas y Server Actions: exige una sesión válida.
 * Con una contraseña temporal pendiente redirige a "Mi cuenta", salvo que se indique lo contrario.
 */
export async function exigirUsuario(opciones: { permitirCambioPendiente?: boolean } = {}) {
  const usuario = await obtenerUsuarioActual();
  if (!usuario) redirect('/login');
  if (usuario.debeCambiarPassword && !opciones.permitirCambioPendiente) redirect('/cuenta');
  return usuario;
}

/** Para páginas y Server Actions del administrador: un empleado vuelve a sus jornadas. */
export async function exigirAdmin() {
  const usuario = await exigirUsuario();
  if (usuario.rol !== 'ADMIN') redirect(inicioDe(usuario.rol));
  return usuario;
}

/**
 * Para rutas de API (todas son del administrador). Devuelve la respuesta de error o null si puede seguir:
 *   const denegado = await exigirAdminApi(); if (denegado) return denegado;
 */
export async function exigirAdminApi(): Promise<NextResponse | null> {
  const usuario = await obtenerUsuarioActual();
  if (!usuario) return NextResponse.json({ error: 'No autorizado.' }, { status: 401 });
  if (usuario.rol !== 'ADMIN' || usuario.debeCambiarPassword) {
    return NextResponse.json({ error: 'No tienes permiso para esta acción.' }, { status: 403 });
  }
  return null;
}

/** Emite la cookie de sesión con los datos actuales del usuario. */
export async function iniciarSesion(usuario: {
  id: number;
  rol: 'ADMIN' | 'EMPLEADO';
  sesionVersion: number;
  debeCambiarPassword: boolean;
}) {
  await setSessionCookie(await createSessionToken(usuario));
}
