import Link from 'next/link';
import { ChevronRight, ClipboardList, PlayCircle, Timer } from 'lucide-react';
import { db } from '@/lib/db';
import { EmptyState, PageHeader } from '@/components/page-header';
import { AlertasJornada, tieneAlertas } from '@/components/alertas-jornada';
import { formatoFechaHora, formatoGalones, formatoSoles } from '@/lib/formato';
import { obtenerLecturasPrevias } from '@/lib/jornadas-servicio';
import { AbrirJornadaForm, type MaquinaOpcion } from './abrir-jornada-form';

export const metadata = { title: 'Jornadas' };

async function getDatos() {
  const [maquinas, empleados, abiertas, cerradas] = await Promise.all([
    db.maquina.findMany({
      where: { activa: true, estacion: { activa: true } },
      include: {
        estacion: true,
        productos: { include: { combustible: true }, orderBy: { combustibleId: 'asc' } },
        jornadas: { where: { estado: 'ABIERTA' }, include: { empleado: true }, take: 1 },
      },
      orderBy: [{ estacionId: 'asc' }, { nombre: 'asc' }],
    }),
    db.empleado.findMany({ where: { activo: true }, orderBy: { nombre: 'asc' } }),
    db.jornada.findMany({
      where: { estado: 'ABIERTA' },
      include: { empleado: true, maquina: true, estacion: true },
      orderBy: { inicio: 'desc' },
    }),
    db.jornada.findMany({
      where: { estado: 'CERRADA' },
      include: { empleado: true, maquina: true, estacion: true, lecturas: { include: { combustible: true } } },
      orderBy: { inicio: 'desc' },
      take: 30,
    }),
  ]);

  const opciones: MaquinaOpcion[] = await Promise.all(
    maquinas.map(async (maquina) => {
      const previas = await obtenerLecturasPrevias(maquina.id);
      return {
        id: maquina.id,
        nombre: maquina.nombre,
        estacionId: maquina.estacionId,
        estacionNombre: maquina.estacion.nombre,
        ocupadaPor: maquina.jornadas[0]?.empleado.nombre ?? null,
        productos: maquina.productos.map(({ combustible }) => ({
          combustibleId: combustible.id,
          nombre: combustible.nombre,
          previoAtras: previas.get(combustible.id)?.salidaAtras ?? null,
          previoAdelante: previas.get(combustible.id)?.salidaAdelante ?? null,
        })),
      };
    })
  );

  return {
    maquinas: opciones,
    empleados: empleados.map(({ id, nombre, estacionId, horarioInicio, horarioFin }) => ({
      id,
      nombre,
      estacionId,
      horarioInicio,
      horarioFin,
    })),
    abiertas,
    cerradas,
  };
}

export default async function JornadasPage() {
  const { maquinas, empleados, abiertas, cerradas } = await getDatos();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Jornadas"
        description="Registra cómo recibe y cómo deja cada empleado los contadores de su máquina."
      />

      <section className="grid items-start gap-6 xl:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="card">
          <h2 className="card-title"><PlayCircle className="h-5 w-5 text-primary" aria-hidden />Abrir jornada</h2>
          <AbrirJornadaForm maquinas={maquinas} empleados={empleados} />
        </div>

        <div className="card">
          <h2 className="card-title"><Timer className="h-5 w-5 text-primary" aria-hidden />Jornadas abiertas</h2>
          {abiertas.length === 0 ? (
            <EmptyState>No hay jornadas abiertas.</EmptyState>
          ) : (
            <ul className="space-y-2">
              {abiertas.map((jornada) => (
                <li key={jornada.id}>
                  <Link
                    href={`/jornadas/${jornada.id}`}
                    className="item flex items-center gap-3 transition hover:border-primary"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold">{jornada.empleado.nombre}</p>
                      <p className="text-xs text-muted">
                        {jornada.maquina.nombre} · {jornada.estacion.nombre} · desde {formatoFechaHora(jornada.inicio)}
                      </p>
                    </div>
                    <span className="badge-warning">Cerrar</span>
                    <ChevronRight className="h-4 w-4 shrink-0 text-muted" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="card">
        <h2 className="card-title"><ClipboardList className="h-5 w-5 text-primary" aria-hidden />Jornadas cerradas</h2>
        {cerradas.length === 0 ? (
          <EmptyState>Todavía no hay jornadas cerradas.</EmptyState>
        ) : (
          <>
            {/* Tabla (tablet / escritorio) */}
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-border text-xs uppercase tracking-wide text-muted">
                  <tr>
                    <th className="px-3 py-2 font-medium">Inicio</th>
                    <th className="px-3 py-2 font-medium">Empleado</th>
                    <th className="px-3 py-2 font-medium">Máquina</th>
                    <th className="px-3 py-2 text-right font-medium">Galones</th>
                    <th className="px-3 py-2 text-right font-medium">Esperado</th>
                    <th className="px-3 py-2 text-right font-medium">Caja</th>
                    <th className="px-3 py-2 font-medium">Alertas</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {cerradas.map((jornada) => {
                    const caja = Number(jornada.diferenciaCaja ?? 0);
                    return (
                      <tr key={jornada.id} className="text-fg hover:bg-surface-alt/60">
                        <td className="whitespace-nowrap px-3 py-2.5">
                          <Link href={`/jornadas/${jornada.id}`} className="font-medium text-primary hover:underline">
                            {formatoFechaHora(jornada.inicio)}
                          </Link>
                        </td>
                        <td className="px-3 py-2.5">{jornada.empleado.nombre}</td>
                        <td className="px-3 py-2.5 text-muted">{jornada.maquina.nombre} · {jornada.estacion.nombre}</td>
                        <td className="whitespace-nowrap px-3 py-2.5 text-right font-mono">{formatoGalones(jornada.galonesProductos)}</td>
                        <td className="whitespace-nowrap px-3 py-2.5 text-right font-mono">{formatoSoles(jornada.importeEsperado)}</td>
                        <td className={`whitespace-nowrap px-3 py-2.5 text-right font-mono font-semibold ${caja > 0.004 ? 'text-danger' : caja < -0.004 ? 'text-warning' : 'text-success'}`}>
                          {caja > 0.004 ? '−' : caja < -0.004 ? '+' : ''}{formatoSoles(Math.abs(caja))}
                        </td>
                        <td className="px-3 py-2.5"><AlertasJornada jornada={jornada} compacto /></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Tarjetas (móvil) */}
            <ul className="space-y-2 md:hidden">
              {cerradas.map((jornada) => (
                <li key={jornada.id}>
                  <Link href={`/jornadas/${jornada.id}`} className="item block">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="truncate font-semibold">{jornada.empleado.nombre}</p>
                        <p className="text-xs text-muted">{jornada.maquina.nombre} · {formatoFechaHora(jornada.inicio)}</p>
                      </div>
                      <span className="font-mono text-sm font-semibold">{formatoSoles(jornada.importeEsperado)}</span>
                    </div>
                    <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-muted">
                      <span>{formatoGalones(jornada.galonesProductos)}</span>
                      {tieneAlertas(jornada) ? <AlertasJornada jornada={jornada} compacto /> : <span className="badge-success">Sin alertas</span>}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </div>
  );
}
