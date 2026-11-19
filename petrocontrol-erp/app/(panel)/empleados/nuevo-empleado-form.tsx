'use client';

import { useActionState, useState } from 'react';
import { CircleCheck } from 'lucide-react';
import { SelectorHorario } from '@/components/selector-horario';
import { PasswordTemporal } from './acceso-empleado';
import { registrarEmpleadoAction, type EstadoRegistro } from './actions';

type Estacion = { id: number; nombre: string };

/**
 * Campos del formulario. Son controlados para que no se borren si el servidor devuelve un error
 * (React reinicia los no controlados al terminar la acción). Tras un registro exitoso se
 * vuelve a montar con otra `key` y queda vacío para el siguiente empleado.
 */
function Campos({ estaciones, pending }: { estaciones: Estacion[]; pending: boolean }) {
  const [nombre, setNombre] = useState('');
  const [dni, setDni] = useState('');
  const [estacionId, setEstacionId] = useState(estaciones.length === 1 ? String(estaciones[0].id) : '');

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="registro-nombre" className="label">Nombre completo</label>
          <input
            id="registro-nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            autoComplete="off"
            className="field"
            required
            minLength={2}
            maxLength={100}
          />
        </div>
        <div>
          <label htmlFor="registro-dni" className="label">DNI</label>
          <input
            id="registro-dni"
            name="dni"
            value={dni}
            // Solo dígitos, como máximo 8
            onChange={(e) => setDni(e.target.value.replace(/\D/g, '').slice(0, 8))}
            inputMode="numeric"
            autoComplete="off"
            pattern="\d{8}"
            title="8 dígitos"
            placeholder="8 dígitos"
            className="field tabular-nums"
            required
          />
        </div>
        <div>
          <label htmlFor="registro-estacion" className="label">Estación</label>
          <select
            id="registro-estacion"
            name="estacionId"
            value={estacionId}
            onChange={(e) => setEstacionId(e.target.value)}
            className="field"
            required
          >
            <option value="">Selecciona estación</option>
            {estaciones.map((estacion) => (
              <option key={estacion.id} value={estacion.id}>{estacion.nombre}</option>
            ))}
          </select>
        </div>
        <SelectorHorario />
      </div>

      <p className="text-xs text-muted">
        El DNI será su usuario para ingresar a la app. Se generará una contraseña temporal que deberá cambiar
        la primera vez que ingrese.
      </p>

      <button type="submit" disabled={pending} className="btn-primary w-full sm:w-auto">
        {pending ? 'Registrando…' : 'Registrar empleado'}
      </button>
    </>
  );
}

export function NuevoEmpleadoForm({ estaciones }: { estaciones: Estacion[] }) {
  const [estado, formAction, pending] = useActionState<EstadoRegistro, FormData>(registrarEmpleadoAction, {});
  // Último registro exitoso: sus datos de acceso siguen a la vista aunque el siguiente intento falle,
  // y su id vacía los campos una sola vez (un error posterior no borra lo que se está escribiendo).
  const [registrado, setRegistrado] = useState<EstadoRegistro['registrado']>();
  if (estado.registrado && estado.registrado.id !== registrado?.id) {
    setRegistrado(estado.registrado);
  }

  return (
    <div className="space-y-4">
      {registrado && (
        <div className="space-y-2">
          <p role="status" className="flex items-center gap-2 text-sm font-medium text-fg">
            <CircleCheck className="h-4 w-4 shrink-0 text-primary" aria-hidden />
            {registrado.nombre} quedó registrado con acceso a la app.
          </p>
          <PasswordTemporal password={registrado.password} usuario={registrado.dni} etiquetaUsuario="DNI de acceso" />
        </div>
      )}

      <form action={formAction} className="space-y-3">
        <Campos key={registrado?.id ?? 'nuevo'} estaciones={estaciones} pending={pending} />

        {estado.error && (
          <p role="alert" className="rounded-lg border border-danger/40 bg-danger-light px-3 py-2 text-sm text-danger">
            {estado.error}
          </p>
        )}
      </form>
    </div>
  );
}
