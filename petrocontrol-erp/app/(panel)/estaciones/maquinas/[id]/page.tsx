import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CircleAlert, Clock, Fuel, Gauge, Pencil } from 'lucide-react';
import { db } from '@/lib/db';
import { EmptyState, PageHeader } from '@/components/page-header';
import { BotonEstado } from '@/components/boton-estado';
import { formatoFechaHora, formatoGalones, formatoNumero } from '@/lib/formato';

const DIRECCION = { SUBE: 'Sube (de menor a mayor)', BAJA: 'Baja (de mayor a menor)' } as const;

async function getMaquina(id: number) {
  return db.maquina.findUnique({
    where: { id },
    include: {
      estacion: true,
      productos: { select: { combustibleId: true } },
      jornadas: {
        include: { empleado: true },
        orderBy: { inicio: 'desc' },
        take: 10,
      },
    },
  });
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const maquina = Number.isInteger(Number(id)) ? await db.maquina.findUnique({ where: { id: Number(id) } }) : null;
  return { title: maquina ? maquina.nombre : 'Máquina' };
}

export default async function MaquinaPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const maquinaId = Number(id);
  if (!Number.isInteger(maquinaId) || maquinaId <= 0) notFound();

  const [maquina, combustibles] = await Promise.all([
    getMaquina(maquinaId),
    db.combustible.findMany({ orderBy: { id: 'asc' } }),
  ]);
  if (!maquina) notFound();

  const abierta = maquina.jornadas.find((j) => j.estado === 'ABIERTA');
  const asignados = new Set(maquina.productos.map((p) => p.combustibleId));
  // El contador vuelve a 0 al llegar a este valor (se guarda en centésimas de galón)
  const maximoContador = (Number(maquina.moduloContador) - 1) / 100;

  return (
    <div className="space-y-6">
      <Link href="/estaciones" className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-primary">
        <ArrowLeft className="h-4 w-4" aria-hidden /> Estaciones y máquinas
      </Link>

      <PageHeader
        title={maquina.nombre}
        description={`Estación ${maquina.estacion.nombre}`}
        actions={
          <BotonEstado
            accion={`/api/maquinas/${maquina.id}/estado`}
            activa={maquina.activa}
            bloqueado={abierta ? 'Tiene una jornada abierta' : undefined}
            tipo="maquina"
            nombre={`${maquina.nombre} de ${maquina.estacion.nombre}`}
          />
        }
      />

      {abierta && (
        <p className="flex items-start gap-2 border-l-4 border-accent bg-accent-light px-4 py-3 text-sm text-fg">
          <CircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-warning" aria-hidden />
          <span>
            {abierta.empleado.nombre} tiene una jornada abierta en esta máquina. Mientras siga abierta no se pueden cambiar
            sus productos ni deshabilitarla.{' '}
            <Link href={`/jornadas/${abierta.id}`} className="font-medium text-primary hover:underline">Ver jornada</Link>
          </span>
        </p>
      )}

      <section className="grid items-start gap-6 lg:grid-cols-2">
        <div className="card">
          <h2 className="card-title"><Pencil className="h-5 w-5 text-primary" aria-hidden />Datos</h2>
          <form action={`/api/maquinas/${maquina.id}`} method="post" className="space-y-3">
            <div>
              <label htmlFor="m-nombre" className="label">Nombre</label>
              <input id="m-nombre" name="nombre" defaultValue={maquina.nombre} minLength={2} className="field" required />
            </div>
            <div>
              <p className="label">Estación</p>
              <p className="py-2 text-sm text-fg">{maquina.estacion.nombre}</p>
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto">Guardar nombre</button>
          </form>
        </div>

        <div className="card">
          <h2 className="card-title"><Fuel className="h-5 w-5 text-primary" aria-hidden />Productos que despacha</h2>
          {combustibles.length === 0 ? (
            <EmptyState>No hay productos registrados.</EmptyState>
          ) : (
            <form action={`/api/maquinas/${maquina.id}/productos`} method="post" className="space-y-4">
              <fieldset disabled={Boolean(abierta)} className="disabled:opacity-60">
                <legend className="sr-only">Productos</legend>
                <div className="grid gap-2 sm:grid-cols-2">
                  {combustibles.map((combustible) => (
                    <label key={combustible.id} className="item flex cursor-pointer items-center gap-3">
                      <input
                        type="checkbox"
                        name="combustibleIds"
                        value={combustible.id}
                        defaultChecked={asignados.has(combustible.id)}
                        className="check"
                      />
                      {combustible.nombre}
                    </label>
                  ))}
                </div>
              </fieldset>
              {asignados.size === 0 && (
                <p className="text-sm text-danger">Sin productos no se pueden abrir jornadas en esta máquina.</p>
              )}
              <button type="submit" disabled={Boolean(abierta)} className="btn-primary w-full sm:w-auto">
                Guardar productos
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="grid items-start gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <div className="card">
          <h2 className="card-title"><Gauge className="h-5 w-5 text-primary" aria-hidden />Contadores</h2>
          <dl className="divide-y divide-border text-sm">
            <div className="flex items-baseline justify-between gap-4 py-2.5">
              <dt className="text-muted">Contadores por producto</dt>
              <dd className="text-right font-medium">{DIRECCION[maquina.direccionProductos]}</dd>
            </div>
            <div className="flex items-baseline justify-between gap-4 py-2.5">
              <dt className="text-muted">Totalizador general</dt>
              <dd className="text-right font-medium">{DIRECCION[maquina.direccionTotalizador]}</dd>
            </div>
            <div className="flex items-baseline justify-between gap-4 py-2.5">
              <dt className="text-muted">Vuelve a cero después de</dt>
              <dd className="text-right font-medium tabular-nums">{formatoNumero(maximoContador)}</dd>
            </div>
          </dl>
        </div>

        <div className="card">
          <h2 className="card-title"><Clock className="h-5 w-5 text-primary" aria-hidden />Últimas jornadas</h2>
          {maquina.jornadas.length === 0 ? (
            <EmptyState>Esta máquina todavía no tiene jornadas.</EmptyState>
          ) : (
            <ul className="divide-y divide-border">
              {maquina.jornadas.map((jornada) => (
                <li key={jornada.id}>
                  <Link
                    href={`/jornadas/${jornada.id}`}
                    className="flex items-center justify-between gap-3 py-2.5 text-sm hover:text-primary"
                  >
                    <span className="min-w-0">
                      <span className="block font-medium">{jornada.empleado.nombre}</span>
                      <span className="block text-xs text-muted">{formatoFechaHora(jornada.inicio)}</span>
                    </span>
                    {jornada.estado === 'ABIERTA' ? (
                      <span className="badge-warning">Abierta</span>
                    ) : (
                      <span className="shrink-0 font-medium tabular-nums">{formatoGalones(jornada.galonesProductos)}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
