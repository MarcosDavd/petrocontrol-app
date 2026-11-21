'use client';

import { useActionState } from 'react';
import { Trash2 } from 'lucide-react';
import { eliminarJornadaAction, type EstadoFormulario } from '../actions';

/** Eliminar una jornada (solo el admin). Pide confirmación porque no se puede deshacer. */
export function EliminarJornadaBoton({ jornadaId, descripcion, cerrada }: { jornadaId: number; descripcion: string; cerrada: boolean }) {
  const [estado, formAction, pending] = useActionState<EstadoFormulario, FormData>(eliminarJornadaAction, {});

  const aviso = [
    `¿Eliminar la jornada de ${descripcion}?`,
    '',
    cerrada
      ? 'Se borrarán sus lecturas y pagos, y los galones vendidos volverán al stock de los tanques.'
      : 'Se borrarán sus lecturas.',
    'Esta acción no se puede deshacer.',
  ].join('\n');

  return (
    <form
      action={formAction}
      onSubmit={(e) => {
        if (!confirm(aviso)) e.preventDefault();
      }}
      className="flex flex-col items-end gap-1"
    >
      <input type="hidden" name="jornadaId" value={jornadaId} />
      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-danger transition hover:bg-danger-light"
      >
        <Trash2 className="h-4 w-4" aria-hidden />
        {pending ? 'Eliminando…' : 'Eliminar'}
      </button>
      {estado.error && (
        <p role="alert" className="text-xs text-danger">{estado.error}</p>
      )}
    </form>
  );
}
