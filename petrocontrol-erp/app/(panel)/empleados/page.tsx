import { Pencil, UserPlus, UsersRound } from 'lucide-react';
import { db } from '@/lib/db';
import { EmptyState, PageHeader } from '@/components/page-header';
import { SelectorHorario } from '@/components/selector-horario';
import { describirHorario } from '@/lib/turnos';

export const metadata = { title: 'Empleados' };

type Estacion = { id: number; nombre: string };

function SelectEstacion({ estaciones, valor }: { estaciones: Estacion[]; valor?: number }) {
  return (
    <select name="estacionId" aria-label="Estación" className="field" defaultValue={valor ?? ''} required>
      <option value="">Selecciona estación</option>
      {estaciones.map((estacion) => (
        <option key={estacion.id} value={estacion.id}>{estacion.nombre}</option>
      ))}
    </select>
  );
}

function CasillaActivo({ marcada = true }: { marcada?: boolean }) {
  return (
    <label className="flex items-center gap-2 text-sm text-fg">
      {/* Un checkbox desmarcado no se envía: el hidden manda "false" en ese caso */}
      <input type="hidden" name="activo" value="false" />
      <input type="checkbox" name="activo" defaultChecked={marcada} className="check" />
      Activo
    </label>
  );
}

export default async function EmpleadosPage() {
  const [estaciones, empleados] = await Promise.all([
    db.estacion.findMany({ orderBy: { nombre: 'asc' } }),
    db.empleado.findMany({
      include: { jornadas: { where: { estado: 'ABIERTA' }, select: { id: true }, take: 1 } },
      orderBy: [{ activo: 'desc' }, { nombre: 'asc' }],
    }),
  ]);

  const sinHorario = empleados.filter((e) => e.activo && (!e.horarioInicio || !e.horarioFin)).length;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Empleados"
        description="Personal de cada estación y su horario de trabajo (define la hora de inicio y fin de sus jornadas)."
      />

      <section className="grid items-start gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <div className="card xl:sticky xl:top-8">
          <h2 className="card-title"><UserPlus className="h-5 w-5 text-primary" aria-hidden />Nuevo empleado</h2>
          <form action="/api/empleados" method="post" className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <input name="nombre" placeholder="Nombre del empleado" aria-label="Nombre del empleado" className="field" required />
              <SelectEstacion estaciones={estaciones} />
              <SelectorHorario />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <CasillaActivo />
              <button type="submit" className="btn-primary w-full sm:w-auto">Guardar empleado</button>
            </div>
          </form>
        </div>

        <div className="card">
          <h2 className="card-title">
            <UsersRound className="h-5 w-5 text-primary" aria-hidden />
            Personal ({empleados.filter((e) => e.activo).length} activos)
          </h2>
          {sinHorario > 0 && (
            <p className="mb-3 rounded-lg bg-accent-light px-3 py-2 text-xs text-fg">
              {sinHorario} empleado(s) activo(s) sin horario: edítalos para que la hora de sus jornadas se complete sola.
            </p>
          )}

          {empleados.length === 0 ? (
            <EmptyState>No hay empleados registrados.</EmptyState>
          ) : (
            <div className="space-y-5">
              {estaciones
                .filter((estacion) => empleados.some((e) => e.estacionId === estacion.id))
                .map((estacion) => (
                  <div key={estacion.id}>
                    <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted">{estacion.nombre}</h3>
                    <ul className="space-y-2">
                      {empleados
                        .filter((e) => e.estacionId === estacion.id)
                        .map((empleado) => {
                          const enJornada = empleado.jornadas.length > 0;
                          const faltaHorario = !empleado.horarioInicio || !empleado.horarioFin;
                          return (
                            <li key={empleado.id} className={`item ${empleado.activo ? '' : 'opacity-70'}`}>
                              <div className="flex flex-wrap items-center justify-between gap-2">
                                <div className="min-w-0">
                                  <p className="truncate font-semibold">{empleado.nombre}</p>
                                  <p className={`text-xs ${faltaHorario ? 'font-medium text-warning' : 'text-muted'}`}>
                                    {describirHorario(empleado.horarioInicio, empleado.horarioFin)}
                                  </p>
                                </div>
                                <div className="flex flex-wrap gap-1">
                                  {enJornada && <span className="badge-warning">En jornada</span>}
                                  <span className={empleado.activo ? 'badge-success' : 'badge-neutral'}>
                                    {empleado.activo ? 'Activo' : 'Inactivo'}
                                  </span>
                                </div>
                              </div>

                              <details className="mt-2">
                                <summary className="inline-flex cursor-pointer items-center gap-1 text-xs font-medium text-primary">
                                  <Pencil className="h-3.5 w-3.5" aria-hidden /> Editar
                                </summary>
                                <form action={`/api/empleados/${empleado.id}`} method="post" className="mt-3 space-y-3">
                                  <div className="grid gap-3 sm:grid-cols-2">
                                    <input
                                      name="nombre"
                                      defaultValue={empleado.nombre}
                                      aria-label="Nombre"
                                      className="field"
                                      required
                                    />
                                    <SelectEstacion estaciones={estaciones} valor={empleado.estacionId} />
                                    <SelectorHorario inicio={empleado.horarioInicio ?? ''} fin={empleado.horarioFin ?? ''} />
                                  </div>
                                  {enJornada && (
                                    <p className="text-xs text-muted">
                                      Tiene una jornada abierta: no se puede cambiar de estación hasta cerrarla.
                                    </p>
                                  )}
                                  <div className="flex flex-wrap items-center justify-between gap-3">
                                    <CasillaActivo marcada={empleado.activo} />
                                    <button type="submit" className="btn-ghost px-3 py-1.5 text-xs">Guardar cambios</button>
                                  </div>
                                </form>
                              </details>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
