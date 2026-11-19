import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import type { Rol } from './permisos';

export const SESSION_COOKIE = 'petrocontrol_session';
const DEV_SECRET = 'petrocontrol-dev-secret-change-me';

/**
 * Clave para firmar las sesiones. En producción es obligatoria (mín. 32 caracteres):
 * con la clave de desarrollo, cualquiera que la conozca podría fabricar una sesión válida.
 * Se lee al usarla (no al importar el módulo) para no romper el build.
 */
function getSessionSecret(): Uint8Array {
  const secret = process.env.SESSION_SECRET;
  if (process.env.NODE_ENV === 'production') {
    if (!secret || secret.length < 32 || secret === DEV_SECRET) {
      throw new Error('SESSION_SECRET debe estar configurada con al menos 32 caracteres aleatorios en producción.');
    }
  }
  return new TextEncoder().encode(secret || DEV_SECRET);
}

/**
 * Datos que viajan firmados en la cookie. Sirven al middleware para filtrar rutas sin ir a la base;
 * la validez real (cuenta activa, contraseña no cambiada) se comprueba en lib/sesion.ts.
 */
export type SessionUser = {
  userId: number;
  rol: Rol;
  /** sesionVersion del usuario al ingresar: si cambió, la sesión ya no vale. */
  version: number;
  /** Tiene una contraseña temporal que debe cambiar. */
  cambioPendiente: boolean;
};

export async function createSessionToken(user: {
  id: number;
  rol: Rol;
  sesionVersion: number;
  debeCambiarPassword: boolean;
}): Promise<string> {
  const secret = getSessionSecret();

  return new SignJWT({
    userId: user.id,
    rol: user.rol,
    sv: user.sesionVersion,
    cp: user.debeCambiarPassword,
    type: 'session',
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(secret);
}

export async function verifySessionToken(token: string): Promise<SessionUser | null> {
  const secret = getSessionSecret();

  try {
    const { payload } = await jwtVerify(token, secret, { algorithms: ['HS256'] });
    const userId = Number(payload.userId);
    const rol = payload.rol;
    const version = payload.sv;

    // Los tokens anteriores a los roles no traen rol ni versión: se piden credenciales de nuevo.
    if (payload.type !== 'session' || !Number.isInteger(userId) || userId <= 0) return null;
    if (rol !== 'ADMIN' && rol !== 'EMPLEADO') return null;
    if (typeof version !== 'number' || !Number.isInteger(version)) return null;

    return { userId, rol, version, cambioPendiente: payload.cp === true };
  } catch {
    return null;
  }
}

export async function getSessionFromCookies(): Promise<SessionUser | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;

  if (!token) {
    return null;
  }

  return verifySessionToken(token);
}

export async function getSessionFromRequest(request: NextRequest): Promise<SessionUser | null> {
  const token = request.cookies.get(SESSION_COOKIE)?.value;

  if (!token) {
    return null;
  }

  return verifySessionToken(token);
}

export async function setSessionCookie(token: string): Promise<void> {
  const cookieStore = await cookies();

  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearSessionCookie(): Promise<void> {
  const cookieStore = await cookies();

  cookieStore.set(SESSION_COOKIE, '', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 0,
  });
}
