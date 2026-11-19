import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { db } from '@/lib/db';
import { iniciarSesion } from '@/lib/sesion';
import { inicioDe } from '@/lib/permisos';
import {
  LIMITES,
  claveCuenta,
  claveIp,
  ipDeLaPeticion,
  liberarIntentos,
  mensajeDeEspera,
  reservarIntento,
} from '@/lib/limite-login';
import { loginSchema } from '@/lib/validation/auth';

const CREDENCIALES_INVALIDAS = 'Credenciales inválidas.';

// Hash de una contraseña cualquiera: si el usuario no existe se compara igual contra él,
// para que el tiempo de respuesta no delate qué correos o usuarios están registrados.
const HASH_SEÑUELO = bcrypt.hashSync('petrocontrol-usuario-inexistente', 12);

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

    const { identificador, password } = parsed.data;

    // Límite de intentos, antes de mirar la contraseña. Se aplica igual a cuentas inexistentes.
    const ip = ipDeLaPeticion(request.headers);
    const espera =
      (ip ? await reservarIntento(claveIp(ip), LIMITES.ip) : 0) ||
      (await reservarIntento(claveCuenta(identificador), LIMITES.cuenta));
    if (espera > 0) {
      return NextResponse.json(
        { error: mensajeDeEspera(espera) },
        { status: 429, headers: { 'Retry-After': String(espera) } }
      );
    }

    // Con "@" es el correo del admin; sin "@", el usuario de un empleado.
    const user = await db.usuario.findUnique({
      where: identificador.includes('@') ? { email: identificador } : { usuario: identificador },
      include: { empleado: true },
    });

    const isPasswordValid = await bcrypt.compare(password, user?.password ?? HASH_SEÑUELO);

    if (!user || !isPasswordValid) {
      return NextResponse.json({ error: CREDENCIALES_INVALIDAS }, { status: 401 });
    }

    const cuentaHabilitada =
      user.activo && (user.rol === 'ADMIN' || (user.empleado !== null && user.empleado.activo));

    if (!cuentaHabilitada) {
      return NextResponse.json(
        { error: 'Tu cuenta está desactivada. Consulta con el administrador.' },
        { status: 403 }
      );
    }

    await liberarIntentos(identificador, ip);
    await iniciarSesion(user);

    return NextResponse.json({
      ok: true,
      destino: user.debeCambiarPassword ? '/cuenta' : inicioDe(user.rol),
    });
  } catch (error) {
    console.error('LOGIN_ERROR', error);

    return NextResponse.json(
      { error: 'Error interno al iniciar sesión.' },
      { status: 500 }
    );
  }
}
