import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';

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

export type SessionUser = {
  userId: number;
  email: string;
};

export async function createSessionToken(user: { id: number; email: string }): Promise<string> {
  const secret = getSessionSecret();

  return new SignJWT({ userId: user.id, email: user.email, type: 'session' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(secret);
}

export async function verifySessionToken(token: string): Promise<SessionUser | null> {
  const secret = getSessionSecret();

  try {
    const { payload } = await jwtVerify(token, secret);
    const userId = Number(payload.userId);
    const email = typeof payload.email === 'string' ? payload.email : '';

    if (!userId || !email) {
      return null;
    }

    return { userId, email };
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
