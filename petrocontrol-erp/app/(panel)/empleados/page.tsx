import { KeyRound, Pencil, UserPlus, UsersRound } from 'lucide-react';
import { db } from '@/lib/db';
import { EmptyState, PageHeader } from '@/components/page-header';
import { SelectorHorario } from '@/components/selector-horario';
import { describirHorario } from '@/lib/turnos';
import { AccesoEmpleado } from './acceso-empleado';
import { NuevoEmpleadoForm } from './nuevo-empleado-form';
import { exigirAdmin } from '@/lib/sesion';

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
  await exigirAdmin();
  const [estaciones, empleados] = await Promise.all([
    db.estacion.findMany({ orderBy: { nombre: 'asc' } }),
    db.empleado.findMany({
      include: {
        jornadas: { where: { estado: 'ABIERTA' }, select: { id: true }, take: 1 },
        usuario: { select: { usuario: true } },
      },
      orderBy: [{ activo: 'desc' }, { nombre: 'asc' }],
    }),
  ]);

  const sinHorario = empleados.filter((e) => e.activo && (!e.horarioInicio || !e.horarioFin)).length;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Empleados"
        description="Personal de cada estación, su horario de trabajo y su acceso a la app (cada empleado solo abre y cierra sus jornadas)."
      />

      <section className="grid items-start gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <div className="card xl:sticky xl:top-8">
          <h2 className="card-title"><UserPlus className="h-5 w-5 text-primary" aria-hidden />Registrar empleado</h2>
          <NuevoEmpleadoForm
            estaciones={estaciones.filter((e) => e.activa).map(({ id, nombre }) => ({ id, nombre }))}
          />
        </div>

        <div className="card">
          <h2 className="card-title">
            <UsersRound className="h-5 w-5 text-primary" aria-hidden />
            Personal: {empleados.filter((e) => e.activo).length} {empleados.filter((e) => e.activo).length === 1 ? 'activo' : 'activos'}
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
                    <h3 className="mb-2 text-sm font-semibold text-fg">{estacion.nombre}</h3>
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
                                  <p className="text-xs text-muted tabular-nums">
                                    {empleado.dni ? `DNI ${empleado.dni}` : 'Sin DNI registrado'}
                                  </p>
                                  <p className={`text-xs ${faltaHorario ? 'font-medium text-warning' : 'text-muted'}`}>
                                    {describirHorario(empleado.horarioInicio, empleado.horarioFin)}
                                  </p>
                                </div>
                                <div className="flex flex-wrap gap-1">
                                  {enJornada && <span className="badge-warning">En jornada</span>}
                                  <span className={empleado.usuario ? 'badge-success' : 'badge-neutral'}>
                                    {empleado.usuario ? 'Con acceso' : 'Sin acceso'}
                                  </span>
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
                                    <input
                                      name="dni"
                                      defaultValue={empleado.dni ?? ''}
                                      aria-label="DNI"
                                      placeholder="DNI (8 dígitos)"
                                      inputMode="numeric"
                                      pattern="\d{8}"
                                      title="8 dígitos"
                                      maxLength={8}
                                      className="field tabular-nums"
                                      required={empleado.dni !== null}
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

                              <details className="mt-2">
                                <summary className="inline-flex cursor-pointer items-center gap-1 text-xs font-medium text-primary">
                                  <KeyRound className="h-3.5 w-3.5" aria-hidden /> Acceso a la app
                                </summary>
                                <AccesoEmpleado
                                  empleadoId={empleado.id}
                                  nombre={empleado.nombre}
                                  dni={empleado.dni}
                                  usuario={empleado.usuario?.usuario ?? null}
                                  activo={empleado.activo}
                                />
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
