'use client';

import { useId, useRef } from 'react';

/**
 * Switch para habilitar/deshabilitar una estación o máquina.
 * Deshabilitar pide confirmación en un diálogo; habilitar se envía directamente porque no hay nada que perder.
 * Si tiene jornadas abiertas, el switch queda bloqueado: no se puede deshabilitar algo en uso.
 */
export function BotonEstado({
  accion,
  activa,
  bloqueado,
  tipo,
  nombre,
}: {
  accion: string;
  activa: boolean;
  bloqueado?: string;
  tipo: 'estacion' | 'maquina';
  nombre: string;
}) {
  const dialogo = useRef<HTMLDialogElement>(null);
  const formulario = useRef<HTMLFormElement>(null);
  const id = useId();

  const sujeto = tipo === 'estacion' ? 'estación' : 'máquina';
  const enUso = activa && Boolean(bloqueado);
  const deshabilitable = activa && !bloqueado;
  const consecuencia =
    tipo === 'estacion'
      ? 'Sus máquinas dejarán de aparecer al abrir jornadas hasta que la vuelvas a habilitar. Los datos y el historial se conservan.'
      : 'Dejará de aparecer al abrir jornadas hasta que la vuelvas a habilitar. Los datos y el historial se conservan.';

  const alPulsar = () => {
    if (enUso) return;
    if (deshabilitable) dialogo.current?.showModal();
    else formulario.current?.requestSubmit();
  };

  return (
    <>
      <form ref={formulario} action={accion} method="post" className="flex items-center gap-2">
        <input type="hidden" name="activa" value={activa ? 'false' : 'true'} />
        {enUso && tipo === 'estacion' && <span className="text-xs text-muted">En uso</span>}
        <button
          type="button"
          role="switch"
          aria-checked={activa}
          aria-label={`Habilitar ${tipo === 'estacion' ? `la estación ${nombre}` : nombre}`}
          aria-disabled={enUso || undefined}
          title={enUso ? `${bloqueado}: no se puede deshabilitar` : undefined}
          onClick={alPulsar}
          className={`group inline-flex items-center gap-2 py-1 text-xs font-medium transition-colors focus-visible:outline-none ${
            enUso ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
          } ${activa ? 'text-primary' : 'text-muted hover:text-fg'}`}
        >
          {/* Pista: verde habilitada, gris deshabilitada */}
          <span
            aria-hidden
            className={`inline-flex h-5 w-9 shrink-0 items-center p-0.5 transition-colors group-focus-visible:ring-2 group-focus-visible:ring-primary group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-surface ${
              activa ? 'bg-primary' : 'bg-muted/40'
            }`}
          >
            <span
              className={`h-4 w-4 bg-white shadow-sm transition-transform motion-reduce:transition-none ${
                activa ? 'translate-x-4' : 'translate-x-0'
              }`}
            />
          </span>
          <span className="min-w-[5.75rem] text-left">{activa ? 'Habilitada' : 'Deshabilitada'}</span>
        </button>
      </form>

      {deshabilitable && (
        <dialog
          ref={dialogo}
          aria-labelledby={`${id}-titulo`}
          aria-describedby={`${id}-texto`}
          // Clic fuera del recuadro (sobre el fondo) cierra el diálogo
          onClick={(e) => e.target === e.currentTarget && dialogo.current?.close()}
          className="m-auto w-[min(26rem,calc(100%-2rem))] bg-surface p-0 text-fg backdrop:bg-black/50"
        >
          <div className="border-t-4 border-danger p-6">
            <h2 id={`${id}-titulo`} className="text-lg font-semibold">
              {tipo === 'estacion' ? `¿Deshabilitar la estación ${nombre}?` : `¿Deshabilitar ${nombre}?`}
            </h2>
            <p id={`${id}-texto`} className="mt-2 text-sm text-muted">{consecuencia}</p>
            <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <button type="button" autoFocus onClick={() => dialogo.current?.close()} className="btn-ghost">
                Cancelar
              </button>
              <button
                type="button"
                onClick={() => formulario.current?.requestSubmit()}
                className="btn bg-danger text-on-danger hover:bg-danger-hover focus-visible:ring-danger"
              >
                Deshabilitar {sujeto}
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
