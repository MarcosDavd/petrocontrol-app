import Link from 'next/link';
import { Building2, ChevronRight, Monitor, Plus } from 'lucide-react';
import { db } from '@/lib/db';
import { EmptyState, PageHeader } from '@/components/page-header';
import { BotonEstado } from '@/components/boton-estado';
import { campoPrecio } from '@/lib/precios';

export const metadata = { title: 'Estaciones y máquinas' };

export default async function EstacionesPage() {
  const [estaciones, combustibles] = await Promise.all([
    db.estacion.findMany({
      include: {
        maquinas: { select: { id: true, nombre: true, activa: true }, orderBy: { nombre: 'asc' } },
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
        description="Grifos, sus máquinas y los productos que despacha cada una. Aquí también se crean los tanques."
      />

      <section className="grid items-start gap-6 lg:grid-cols-2 2xl:grid-cols-3">
        <div className="card">
          <h2 className="card-title"><Plus className="h-5 w-5 text-primary" aria-hidden />Nueva estación</h2>
          <form action="/api/estaciones" method="post" className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <input name="nombre" placeholder="Nombre de la estación" aria-label="Nombre de la estación" className="field" required />
              <input name="direccion" placeholder="Dirección" aria-label="Dirección" className="field" />
            </div>
            {/* Obligatorio: sin precio no se podrían cerrar jornadas en la estación */}
            <fieldset>
              <legend className="label">Precio por galón en esta estación (S/)</legend>
              {combustibles.length === 0 ? (
                <p className="text-sm text-danger">Primero crea al menos un producto en Productos y precios.</p>
              ) : (
                <div className="grid gap-3 sm:grid-cols-2">
                  {combustibles.map((combustible) => (
                    <label key={combustible.id} className="flex items-center gap-3 text-sm text-fg">
                      <span className="w-20 shrink-0">{combustible.nombre}</span>
                      <input
                        name={campoPrecio(combustible.id)}
                        type="number"
                        inputMode="decimal"
                        step="0.01"
                        min="0.01"
                        placeholder="0.00"
                        className="field"
                        required
                      />
                    </label>
                  ))}
                </div>
              )}
            </fieldset>
            <input type="hidden" name="activa" value="true" />
            <button type="submit" disabled={combustibles.length === 0} className="btn-primary w-full sm:w-auto">
              Guardar estación
            </button>
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

        <div className="card lg:col-span-2 2xl:col-span-1">
          <h2 className="card-title"><Plus className="h-5 w-5 text-primary" aria-hidden />Nuevo tanque</h2>
          <form action="/api/tanques" method="post" className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-2">
              <div>
                <label htmlFor="t-estacion" className="label">Estación</label>
                <select id="t-estacion" name="estacionId" className="field" required>
                  <option value="">Selecciona estación</option>
                  {estaciones.map((estacion) => (
                    <option key={estacion.id} value={estacion.id}>{estacion.nombre}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="t-producto" className="label">Producto</label>
                <select id="t-producto" name="combustibleId" className="field" required>
                  <option value="">Selecciona producto</option>
                  {combustibles.map((combustible) => (
                    <option key={combustible.id} value={combustible.id}>{combustible.nombre}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="t-capacidad" className="label">Capacidad (galones)</label>
                <input id="t-capacidad" name="capacidad" type="number" inputMode="decimal" step="0.01" min="0" className="field" required />
              </div>
              <div>
                <label htmlFor="t-minimo" className="label">Mínimo de alerta (galones)</label>
                <input id="t-minimo" name="minimo" type="number" inputMode="decimal" step="0.01" min="0" className="field" required />
              </div>
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto">Guardar tanque</button>
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
                <BotonEstado
                  accion={`/api/estaciones/${estacion.id}/estado`}
                  activa={estacion.activa}
                  bloqueado={estacion.jornadas.length > 0 ? 'Tiene jornadas abiertas' : undefined}
                  tipo="estacion"
                  nombre={estacion.nombre}
                />
              </div>
            </div>

            {estacion.maquinas.length === 0 ? (
              <EmptyState>Esta estación no tiene máquinas.</EmptyState>
            ) : (
              <ul className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                {estacion.maquinas.map((maquina) => (
                  <li key={maquina.id}>
                    <Link
                      href={`/estaciones/maquinas/${maquina.id}`}
                      className={`group flex items-center gap-3 bg-surface px-4 py-3 text-sm transition-colors hover:bg-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary ${
                        maquina.activa ? 'text-fg' : 'text-muted'
                      }`}
                    >
                      <Monitor className="h-4 w-4 shrink-0 text-muted" aria-hidden />
                      <span className="min-w-0 flex-1 truncate font-medium">{maquina.nombre}</span>
                      {!maquina.activa && <span className="text-xs">Deshabilitada</span>}
                      <ChevronRight className="h-4 w-4 shrink-0 text-muted group-hover:text-primary" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))
      )}
    </div>
  );
}
