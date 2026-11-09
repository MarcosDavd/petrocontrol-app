import { Building2, Monitor, Plus, Power } from 'lucide-react';
import { db } from '@/lib/db';
import { EmptyState, PageHeader } from '@/components/page-header';

export const metadata = { title: 'Estaciones y máquinas' };

function BotonEstado({ accion, activa, bloqueado }: { accion: string; activa: boolean; bloqueado?: string }) {
  if (bloqueado && activa) {
    return <span className="text-xs text-muted" title={bloqueado}>En uso</span>;
  }
  return (
    <form action={accion} method="post">
      <input type="hidden" name="activa" value={activa ? 'false' : 'true'} />
      <button
        type="submit"
        className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium transition ${
          activa ? 'text-muted hover:bg-danger-light hover:text-danger' : 'text-primary hover:bg-primary-light'
        }`}
      >
        <Power className="h-3.5 w-3.5" aria-hidden />
        {activa ? 'Desactivar' : 'Activar'}
      </button>
    </form>
  );
}

export default async function EstacionesPage() {
  const [estaciones, combustibles] = await Promise.all([
    db.estacion.findMany({
      include: {
        maquinas: {
          include: {
            productos: { include: { combustible: true }, orderBy: { combustibleId: 'asc' } },
            jornadas: { where: { estado: 'ABIERTA' }, select: { id: true }, take: 1 },
          },
          orderBy: { nombre: 'asc' },
        },
        jornadas: { where: { estado: 'ABIERTA' }, select: { id: true }, take: 1 },
      },
      orderBy: { nombre: 'asc' },
    }),
    db.combustible.findMany({ orderBy: { id: 'asc' } }),
  ]);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Estaciones y máquinas"
        description="Grifos, sus máquinas y los productos que despacha cada una (manguera atrás y adelante por producto)."
      />

      <section className="grid items-start gap-6 lg:grid-cols-2">
        <div className="card">
          <h2 className="card-title"><Plus className="h-5 w-5 text-primary" aria-hidden />Nueva estación</h2>
          <form action="/api/estaciones" method="post" className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <input name="nombre" placeholder="Nombre de la estación" aria-label="Nombre de la estación" className="field" required />
              <input name="direccion" placeholder="Dirección" aria-label="Dirección" className="field" />
            </div>
            <input type="hidden" name="activa" value="true" />
            <button type="submit" className="btn-primary w-full sm:w-auto">Guardar estación</button>
          </form>
        </div>

        <div className="card">
          <h2 className="card-title"><Plus className="h-5 w-5 text-primary" aria-hidden />Nueva máquina</h2>
          <form action="/api/maquinas" method="post" className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <select name="estacionId" aria-label="Estación" className="field" required>
                <option value="">Selecciona estación</option>
                {estaciones.map((estacion) => (
                  <option key={estacion.id} value={estacion.id}>{estacion.nombre}</option>
                ))}
              </select>
              <input name="nombre" placeholder="Nombre (ej. Máquina 3)" aria-label="Nombre de la máquina" className="field" required />
            </div>
            <fieldset>
              <legend className="label">Productos que despacha</legend>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {combustibles.map((combustible) => (
                  <label key={combustible.id} className="flex items-center gap-2 text-sm text-fg">
                    <input type="checkbox" name="combustibleIds" value={combustible.id} className="check" />
                    {combustible.nombre}
                  </label>
                ))}
              </div>
            </fieldset>
            <input type="hidden" name="activa" value="true" />
            <button type="submit" className="btn-primary w-full sm:w-auto">Guardar máquina</button>
          </form>
        </div>
      </section>

      {estaciones.length === 0 ? (
        <section className="card"><EmptyState>No hay estaciones registradas.</EmptyState></section>
      ) : (
        estaciones.map((estacion) => (
          <section key={estacion.id} className={`card ${estacion.activa ? '' : 'opacity-75'}`}>
            <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-fg">
                  <Building2 className="h-5 w-5 text-primary" aria-hidden />
                  {estacion.nombre}
                </h2>
                <p className="text-sm text-muted">{estacion.direccion || 'Sin dirección registrada'}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={estacion.activa ? 'badge-success' : 'badge-neutral'}>{estacion.activa ? 'Activa' : 'Inactiva'}</span>
                <BotonEstado
                  accion={`/api/estaciones/${estacion.id}/estado`}
                  activa={estacion.activa}
                  bloqueado={estacion.jornadas.length > 0 ? 'Tiene jornadas abiertas' : undefined}
                />
              </div>
            </div>

            {estacion.maquinas.length === 0 ? (
              <EmptyState>Esta estación no tiene máquinas.</EmptyState>
            ) : (
              <ul className="grid gap-3 md:grid-cols-2 2xl:grid-cols-3">
                {estacion.maquinas.map((maquina) => {
                  const asignados = new Set(maquina.productos.map((p) => p.combustibleId));
                  const enUso = maquina.jornadas.length > 0;
                  return (
                    <li key={maquina.id} className={`item ${maquina.activa ? '' : 'opacity-70'}`}>
                      <div className="flex items-center justify-between gap-2">
                        <p className="flex min-w-0 items-center gap-2 font-semibold">
                          <Monitor className="h-4 w-4 shrink-0 text-muted" aria-hidden />
                          <span className="truncate">{maquina.nombre}</span>
                        </p>
                        <div className="flex items-center gap-1">
                          {enUso && <span className="badge-warning">En jornada</span>}
                          {!maquina.activa && <span className="badge-neutral">Inactiva</span>}
                          <BotonEstado
                            accion={`/api/maquinas/${maquina.id}/estado`}
                            activa={maquina.activa}
                            bloqueado={enUso ? 'Tiene una jornada abierta' : undefined}
                          />
                        </div>
                      </div>

                      <div className="mt-2 flex flex-wrap gap-1">
                        {maquina.productos.length === 0 ? (
                          <span className="badge-danger">Sin productos</span>
                        ) : (
                          maquina.productos.map((p) => (
                            <span key={p.combustibleId} className="badge-neutral">{p.combustible.nombre}</span>
                          ))
                        )}
                      </div>

                      <details className="mt-2">
                        <summary className="cursor-pointer text-xs font-medium text-primary">Editar productos</summary>
                        {enUso ? (
                          <p className="mt-2 text-xs text-muted">Tiene una jornada abierta: ciérrala para editar sus productos.</p>
                        ) : (
                          <form action={`/api/maquinas/${maquina.id}/productos`} method="post" className="mt-2 space-y-2">
                            <div className="flex flex-wrap gap-x-4 gap-y-1">
                              {combustibles.map((combustible) => (
                                <label key={combustible.id} className="flex items-center gap-2 text-sm">
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
                            <button type="submit" className="btn-ghost px-3 py-1.5 text-xs">Guardar productos</button>
                          </form>
                        )}
                      </details>
                    </li>
                  );
                })}
              </ul>
            )}
          </section>
        ))
      )}
    </div>
  );
}
