'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { CircleAlert } from 'lucide-react';
import { formatoGalones } from '@/lib/formato';
import { ETIQUETA_NIVEL, type NivelTanque, type TanqueResumen } from '@/lib/inventario';
import { COLOR_TEXTO_NIVEL, Torta } from '@/components/torta-tanque';

export type { TanqueResumen };

const BADGE: Record<NivelTanque, string> = {
  revisar: 'badge-danger',
  bajo: 'badge-danger',
  medio: 'badge-warning',
  normal: 'badge-success',
};

function TortaTanque({ tanque }: { tanque: TanqueResumen }) {
  const porcentaje = Math.round(tanque.porcentaje);

  return (
    <article className="flex flex-col rounded-2xl bg-surface-alt p-5" aria-labelledby={`tanque-${tanque.id}`}>
      <div className="flex items-center justify-between gap-2">
        <h3 id={`tanque-${tanque.id}`} className="text-base font-semibold text-fg">{tanque.producto}</h3>
        <span className={BADGE[tanque.nivel]}>{ETIQUETA_NIVEL[tanque.nivel]}</span>
      </div>

      <div className="relative mx-auto my-5 aspect-square w-full max-w-40">
        <Torta porcentaje={tanque.porcentaje} nivel={tanque.nivel} />
        <p className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className={`text-3xl font-semibold tabular-nums tracking-tight ${COLOR_TEXTO_NIVEL[tanque.nivel]}`}>
            {porcentaje} %
          </span>
          <span className={`mt-0.5 text-xs tabular-nums ${tanque.stock < 0 ? 'text-danger' : 'text-muted'}`}>
            {formatoGalones(tanque.stock)}
          </span>
        </p>
        <span className="sr-only">
          {tanque.producto}: {porcentaje} % lleno, {formatoGalones(tanque.stock)}.
        </span>
      </div>

      <dl className="divide-y divide-border border-t border-border text-sm">
        {[
          ['Capacidad', tanque.capacidad],
          ['Mínimo', tanque.minimo],
          ['Espacio libre', tanque.libre],
        ].map(([etiqueta, galones]) => (
          <div key={etiqueta} className="flex items-baseline justify-between gap-3 py-2">
            <dt className="text-muted">{etiqueta}</dt>
            <dd className="font-medium tabular-nums text-fg">{formatoGalones(Number(galones))}</dd>
          </div>
        ))}
      </dl>

      {tanque.nivel === 'revisar' && (
        <p className="mt-3 flex items-start gap-1.5 text-xs text-danger">
          <CircleAlert className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
          Se vendió más de lo registrado. Registra la recarga o el stock inicial con un ajuste.
        </p>
      )}
    </article>
  );
}

export function InventarioTanques({
  tanques,
  estaciones,
  estacionId,
}: {
  tanques: TanqueResumen[];
  estaciones: { id: number; nombre: string }[];
  estacionId: number | null;
}) {
  const router = useRouter();
  const [navegando, startTransition] = useTransition();

  // Estado local para que el cambio sea inmediato; la URL se actualiza para conservarlo al paginar o recargar
  const [seleccion, setSeleccion] = useState<number | null>(estacionId);
  const [estacionPrevia, setEstacionPrevia] = useState(estacionId);
  if (estacionPrevia !== estacionId) {
    // La URL cambió (atrás/adelante del navegador): se sincroniza sin un efecto extra
    setEstacionPrevia(estacionId);
    setSeleccion(estacionId);
  }

  const visibles = seleccion === null ? [] : tanques.filter((t) => t.estacionId === seleccion);
  const alertas = visibles.filter((t) => t.nivel === 'revisar' || t.nivel === 'bajo').length;

  const cambiarEstacion = (valor: string) => {
    const id = valor ? Number(valor) : null;
    setSeleccion(id);
    // Al cambiar de estación la paginación de movimientos no cambia: se conserva la página actual
    const params = new URLSearchParams(window.location.search);
    if (id === null) params.delete('estacion');
    else params.set('estacion', String(id));
    const query = params.toString();
    startTransition(() => router.replace(query ? `/inventario?${query}` : '/inventario', { scroll: false }));
  };

  return (
    <section aria-labelledby="titulo-tanques" className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="w-full sm:max-w-xs">
          <label htmlFor="estacion-tanques" id="titulo-tanques" className="mb-1.5 block text-sm font-medium text-fg">
            Estación
          </label>
          <select
            id="estacion-tanques"
            className="field"
            value={seleccion ?? ''}
            onChange={(e) => cambiarEstacion(e.target.value)}
          >
            <option value="">Selecciona una estación</option>
            {estaciones.map((estacion) => (
              <option key={estacion.id} value={estacion.id}>{estacion.nombre}</option>
            ))}
          </select>
        </div>
        {alertas > 0 && (
          <p className="flex items-center gap-1.5 text-sm text-danger">
            <CircleAlert className="h-4 w-4" aria-hidden />
            {alertas === 1 ? '1 tanque necesita atención' : `${alertas} tanques necesitan atención`}
          </p>
        )}
      </div>

      {seleccion === null ? (
        <p className="rounded-2xl bg-surface-alt px-4 py-10 text-center text-sm text-muted">
          Elige una estación para ver el nivel de sus tanques.
        </p>
      ) : visibles.length === 0 ? (
        <p className="rounded-2xl bg-surface-alt px-4 py-10 text-center text-sm text-muted">
          Esta estación no tiene tanques. Créalo en “Crear tanque”, más abajo.
        </p>
      ) : (
        <div
          aria-busy={navegando}
          className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
        >
          {visibles.map((tanque) => (
            <TortaTanque key={tanque.id} tanque={tanque} />
          ))}
        </div>
      )}
    </section>
  );
}
