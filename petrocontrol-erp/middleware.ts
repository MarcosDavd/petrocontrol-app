import { NextRequest, NextResponse } from 'next/server';
import { SESSION_COOKIE, verifySessionToken } from '@/lib/auth';
import { esRutaPublica, inicioDe, permitidaConCambioPendiente, puedeEntrar } from '@/lib/permisos';

/**
 * Primer filtro, solo con los datos firmados de la cookie (sin base de datos).
 * Cada página, Server Action y ruta de API vuelve a validar la sesión contra la base (lib/sesion.ts):
 * así una cuenta desactivada o una contraseña cambiada cortan el acceso de inmediato.
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const esApi = pathname.startsWith('/api/');

  if (esRutaPublica(pathname)) {
    return NextResponse.next();
  }

  const token = request.cookies.get(SESSION_COOKIE)?.value;
  const session = token ? await verifySessionToken(token) : null;

  if (!session) {
    if (esApi) {
      return NextResponse.json({ error: 'No autorizado.' }, { status: 401 });
    }

    const response = NextResponse.redirect(new URL('/login', request.url));
    if (token) {
      response.cookies.set(SESSION_COOKIE, '', {
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 0,
        path: '/',
      });
    }

    return response;
  }

  if (session.cambioPendiente && !permitidaConCambioPendiente(pathname)) {
    if (esApi) {
      return NextResponse.json({ error: 'Primero cambia tu contraseña temporal.' }, { status: 403 });
    }
    return NextResponse.redirect(new URL('/cuenta', request.url));
  }

  if (!puedeEntrar(session.rol, pathname)) {
    if (esApi) {
      return NextResponse.json({ error: 'No tienes permiso para esta acción.' }, { status: 403 });
    }
    return NextResponse.redirect(new URL(inicioDe(session.rol), request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
