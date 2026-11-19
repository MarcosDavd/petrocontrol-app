'use server';

import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';
import { Prisma } from '@/generated/prisma';
import { db } from '@/lib/db';
import { BCRYPT_COSTE, generarPasswordTemporal } from '@/lib/password-temporal';
import { exigirAdmin } from '@/lib/sesion';
import { nombreUsuarioSchema } from '@/lib/validation/auth';
import { registroEmpleadoSchema } from '@/lib/validation/maestros';

/** `password` es la contraseña temporal recién generada: se muestra una sola vez al admin. */
export type EstadoAcceso = { error?: string; ok?: boolean; password?: string };

function leerEmpleadoId(formData: FormData) {
  const id = Number(formData.get('empleadoId'));
  return Number.isInteger(id) && id > 0 ? id : null;
}

export type EstadoRegistro = {
  error?: string;
  /** Datos para entregar al empleado: se muestran una sola vez. */
  registrado?: { id: number; nombre: string; dni: string; password: string };
};

/**
 * Registra un empleado y su acceso a la app en un solo paso (y en una sola transacción):
 * el DNI es su usuario y se genera una contraseña temporal que deberá cambiar al ingresar.
 */
export async function registrarEmpleadoAction(_prev: EstadoRegistro, formData: FormData): Promise<EstadoRegistro> {
  await exigirAdmin();

  const parsed = registroEmpleadoSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? 'Datos inválidos.' };
  const datos = parsed.data;

  const estacion = await db.estacion.findUnique({ where: { id: datos.estacionId } });
  if (!estacion || !estacion.activa) return { error: 'La estación no existe o está inactiva.' };

  // El DNI no puede estar en otro empleado ni usarse ya como usuario de otra cuenta
  const [empleadoConDni, cuentaConDni] = await Promise.all([
    db.empleado.findUnique({ where: { dni: datos.dni }, select: { nombre: true } }),
    db.usuario.findUnique({ where: { usuario: datos.dni }, select: { id: true } }),
  ]);
  if (empleadoConDni) return { error: `El DNI ${datos.dni} ya está registrado para ${empleadoConDni.nombre}.` };
  if (cuentaConDni) return { error: `El DNI ${datos.dni} ya se usa como usuario de otra cuenta.` };

  const password = generarPasswordTemporal();
  try {
    // Creación anidada: el empleado y su cuenta se guardan juntos o no se guarda ninguno
    const empleado = await db.empleado.create({
      data: {
        nombre: datos.nombre,
        dni: datos.dni,
        estacionId: datos.estacionId,
        horarioInicio: datos.horarioInicio,
        horarioFin: datos.horarioFin,
        activo: true,
        usuario: {
          create: {
            nombre: datos.nombre,
            apellido: '',
            usuario: datos.dni,
            password: await bcrypt.hash(password, BCRYPT_COSTE),
            rol: 'EMPLEADO',
            debeCambiarPassword: true,
          },
        },
      },
    });

    revalidatePath('/empleados');
    return { registrado: { id: empleado.id, nombre: empleado.nombre, dni: datos.dni, password } };
  } catch (error) {
    // Otro registro con el mismo DNI se guardó justo antes
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      return { error: `El DNI ${datos.dni} ya está registrado.` };
    }
    console.error('REGISTRAR_EMPLEADO_ERROR', error);
    return { error: 'No se pudo registrar el empleado. Intenta nuevamente.' };
  }
}

/** Crea la cuenta de acceso de un empleado ya registrado, con una contraseña temporal. */
export async function crearAccesoAction(_prev: EstadoAcceso, formData: FormData): Promise<EstadoAcceso> {
  await exigirAdmin();

  const empleadoId = leerEmpleadoId(formData);
  if (!empleadoId) return { error: 'Empleado inválido.' };

  const usuario = nombreUsuarioSchema.safeParse(formData.get('usuario') ?? '');
  if (!usuario.success) return { error: usuario.error.issues[0]?.message ?? 'Usuario inválido.' };

  const empleado = await db.empleado.findUnique({ where: { id: empleadoId }, include: { usuario: true } });
  if (!empleado) return { error: 'El empleado no existe.' };
  if (!empleado.activo) return { error: 'El empleado está inactivo: actívalo antes de darle acceso.' };
  if (empleado.usuario) return { error: 'El empleado ya tiene acceso.' };

  const password = generarPasswordTemporal();
  try {
    await db.usuario.create({
      data: {
        nombre: empleado.nombre,
        apellido: '',
        usuario: usuario.data,
        password: await bcrypt.hash(password, BCRYPT_COSTE),
        rol: 'EMPLEADO',
        debeCambiarPassword: true,
        empleadoId: empleado.id,
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      return { error: `El usuario "${usuario.data}" ya está en uso. Elige otro (por ejemplo, el DNI).` };
    }
    console.error('CREAR_ACCESO_ERROR', error);
    return { error: 'No se pudo crear el acceso. Intenta nuevamente.' };
  }

  revalidatePath('/empleados');
  return { ok: true, password };
}

/**
 * Genera una contraseña temporal nueva (para un empleado que olvidó la suya)
 * y cierra sus sesiones abiertas.
 */
export async function restablecerAccesoAction(_prev: EstadoAcceso, formData: FormData): Promise<EstadoAcceso> {
  await exigirAdmin();

  const empleadoId = leerEmpleadoId(formData);
  if (!empleadoId) return { error: 'Empleado inválido.' };

  const password = generarPasswordTemporal();
  const { count } = await db.usuario.updateMany({
    where: { empleadoId, rol: 'EMPLEADO' },
    data: {
      password: await bcrypt.hash(password, BCRYPT_COSTE),
      debeCambiarPassword: true,
      sesionVersion: { increment: 1 },
    },
  });
  if (count === 0) return { error: 'El empleado no tiene acceso a la app.' };

  revalidatePath('/empleados');
  return { ok: true, password };
}

/** Elimina la cuenta de acceso. Sus jornadas no se tocan: pertenecen al empleado, no a la cuenta. */
export async function quitarAccesoAction(_prev: EstadoAcceso, formData: FormData): Promise<EstadoAcceso> {
  await exigirAdmin();

  const empleadoId = leerEmpleadoId(formData);
  if (!empleadoId) return { error: 'Empleado inválido.' };

  await db.usuario.deleteMany({ where: { empleadoId, rol: 'EMPLEADO' } });

  revalidatePath('/empleados');
  return { ok: true };
}
