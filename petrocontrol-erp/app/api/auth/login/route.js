import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  return NextResponse.json({
    ok: true,
    message: 'Endpoint de login disponible',
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
    const password = typeof body.password === 'string' ? body.password : '';

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email y contraseña son requeridos.' },
        { status: 400 }
      );
    }

    const user = await db.usuario.findUnique({
      where: { email },
    });

    if (!user || user.password !== password) {
      return NextResponse.json(
        { error: 'Credenciales inválidas.' },
        { status: 401 }
      );
    }

    const { password: _password, ...safeUser } = user;

    return NextResponse.json({
      ok: true,
      user: safeUser,
    });
  } catch (error) {
    console.error('LOGIN_ERROR', error);

    return NextResponse.json(
      { error: 'Error interno al iniciar sesión.' },
      { status: 500 }
    );
  }
}
