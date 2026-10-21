import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { db } from '@/lib/db';
import { createSessionToken, setSessionCookie } from '@/lib/auth';
import { loginSchema } from '@/lib/validation/auth';

export async function GET() {
  return NextResponse.json({
    ok: true,
    message: 'Endpoint de login disponible',
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = loginSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? 'Datos inválidos.' },
        { status: 400 }
      );
    }

    const email = parsed.data.email.trim().toLowerCase();
    const password = parsed.data.password;

    const user = await db.usuario.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json({ error: 'Credenciales inválidas.' }, { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Credenciales inválidas.' }, { status: 401 });
    }

    const sessionToken = await createSessionToken({ id: user.id, email: user.email });
    await setSessionCookie(sessionToken);

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
