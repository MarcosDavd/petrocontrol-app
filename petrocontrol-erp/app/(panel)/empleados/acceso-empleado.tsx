'use client';

import { useActionState, useState } from 'react';
import { Copy, KeyRound } from 'lucide-react';
import { sugerirUsuario } from '@/lib/validation/auth';
import {
  crearAccesoAction,
  quitarAccesoAction,
  restablecerAccesoAction,
  type EstadoAcceso,
} from './actions';

function MensajeError({ estado }: { estado: EstadoAcceso }) {
  if (!estado.error) return null;
  return (
    <p role="alert" className="rounded-lg border border-danger/40 bg-danger-light px-3 py-2 text-xs text-danger">
      {estado.error}
    </p>
  );
}

/** La contraseña temporal solo se muestra aquí, una vez: no se guarda en claro en ningún lado. */
export function PasswordTemporal({
  password,
  usuario,
  etiquetaUsuario = 'Usuario',
}: {
  password: string;
  usuario: string;
  etiquetaUsuario?: string;
}) {
  const [copiada, setCopiada] = useState(false);
  return (
    <div role="status" className="space-y-1.5 rounded-lg border border-primary/40 bg-primary-light px-3 py-2.5 text-xs text-fg">
      <p>
        Entrégale estos datos en persona. La contraseña no se volverá a mostrar y la app le pedirá cambiarla al ingresar.
      </p>
      <p>
        {etiquetaUsuario}: <b className="font-mono text-sm">{usuario}</b>
      </p>
      <p className="flex flex-wrap items-center gap-2">
        Contraseña temporal: <b className="select-all font-mono text-sm tracking-wide">{password}</b>
        <button
          type="button"
          className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 font-medium text-primary hover:bg-surface"
          onClick={() => {
            navigator.clipboard?.writeText(password).then(() => setCopiada(true), () => {});
          }}
        >
          <Copy className="h-3.5 w-3.5" aria-hidden />
          {copiada ? 'Copiada' : 'Copiar'}
        </button>
      </p>
    </div>
  );
}

export function AccesoEmpleado({
  empleadoId,
  nombre,
  dni,
  usuario,
  activo,
}: {
  empleadoId: number;
  nombre: string;
  /** DNI del empleado: es el usuario por defecto al crearle el acceso. */
  dni: string | null;
  /** Usuario con el que ingresa, o null si todavía no tiene acceso. */
  usuario: string | null;
  activo: boolean;
}) {
  const [crear, crearAction, creando] = useActionState(crearAccesoAction, {});
  const [restablecer, restablecerAction, restableciendo] = useActionState(restablecerAccesoAction, {});
  const [quitar, quitarAction, quitando] = useActionState(quitarAccesoAction, {});
  const [nuevoUsuario, setNuevoUsuario] = useState(() => dni ?? sugerirUsuario(nombre));

  // Contraseña recién generada (al crear o restablecer), si la acción fue la última en responder
  const password = restablecer.password ?? crear.password;

  if (!usuario) {
    return (
      <form action={crearAction} className="mt-3 space-y-2">
        <input type="hidden" name="empleadoId" value={empleadoId} />
        <label htmlFor={`usuario-${empleadoId}`} className="label">
          Usuario para ingresar {dni ? '(su DNI)' : '(recomendado: su DNI)'}
        </label>
        <div className="flex flex-wrap gap-2">
          <input
            id={`usuario-${empleadoId}`}
            name="usuario"
            value={nuevoUsuario}
            onChange={(e) => setNuevoUsuario(e.target.value)}
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            className="field min-w-0 flex-1"
            required
            minLength={3}
            maxLength={32}
            disabled={!activo}
          />
          <button type="submit" disabled={creando || !activo} className="btn-primary px-3 py-1.5 text-xs">
            {creando ? 'Creando…' : 'Crear acceso'}
          </button>
        </div>
        {!activo && <p className="text-xs text-muted">Activa al empleado para darle acceso.</p>}
        <MensajeError estado={crear} />
      </form>
    );
  }

  return (
    <div className="mt-3 space-y-2">
      <p className="text-xs text-muted">
        Ingresa con el usuario <b className="font-mono text-fg">{usuario}</b>.
        {!activo && ' Está inactivo: no puede ingresar mientras siga así.'}
      </p>

      {password && <PasswordTemporal password={password} usuario={usuario} />}

      <div className="flex flex-wrap gap-2">
        <form action={restablecerAction}>
          <input type="hidden" name="empleadoId" value={empleadoId} />
          <button type="submit" disabled={restableciendo} className="btn-ghost px-3 py-1.5 text-xs">
            <KeyRound className="h-3.5 w-3.5" aria-hidden />
            {restableciendo ? 'Generando…' : 'Restablecer contraseña'}
          </button>
        </form>
        <form
          action={quitarAction}
          onSubmit={(e) => {
            if (!confirm(`¿Quitar el acceso de ${nombre}? Sus jornadas se conservan.`)) e.preventDefault();
          }}
        >
          <input type="hidden" name="empleadoId" value={empleadoId} />
          <button
            type="submit"
            disabled={quitando}
            className="rounded-lg px-3 py-1.5 text-xs font-medium text-danger transition hover:bg-danger-light"
          >
            {quitando ? 'Quitando…' : 'Quitar acceso'}
          </button>
        </form>
      </div>
      <MensajeError estado={restablecer} />
      <MensajeError estado={quitar} />
    </div>
  );
}
