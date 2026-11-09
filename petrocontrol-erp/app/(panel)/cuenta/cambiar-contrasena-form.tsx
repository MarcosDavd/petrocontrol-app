'use client';

import { useActionState } from 'react';
import { cambiarContrasenaAction, type EstadoCambio } from './actions';

export function CambiarContrasenaForm() {
  const [estado, formAction, pending] = useActionState<EstadoCambio, FormData>(cambiarContrasenaAction, {});

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label htmlFor="actual" className="label text-sm">Contraseña actual</label>
        <input id="actual" name="actual" type="password" autoComplete="current-password" className="field" required />
      </div>
      <div>
        <label htmlFor="nueva" className="label text-sm">Nueva contraseña (mínimo 10 caracteres)</label>
        <input id="nueva" name="nueva" type="password" autoComplete="new-password" minLength={10} className="field" required />
      </div>
      <div>
        <label htmlFor="confirmacion" className="label text-sm">Repite la nueva contraseña</label>
        <input id="confirmacion" name="confirmacion" type="password" autoComplete="new-password" minLength={10} className="field" required />
      </div>

      {estado.error && (
        <p role="alert" className="rounded-lg border border-danger/40 bg-danger-light px-3 py-2 text-sm text-danger">{estado.error}</p>
      )}
      {estado.ok && (
        <p role="status" className="rounded-lg border border-primary/40 bg-primary-light px-3 py-2 text-sm text-primary">
          Contraseña actualizada. Úsala la próxima vez que inicies sesión.
        </p>
      )}

      <button type="submit" disabled={pending} className="btn-primary w-full sm:w-auto">
        {pending ? 'Guardando…' : 'Cambiar contraseña'}
      </button>
    </form>
  );
}
