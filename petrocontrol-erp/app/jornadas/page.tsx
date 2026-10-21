import { db } from '@/lib/db';

async function getJornadas() {
  const [estaciones, empleados, maquinas, jornadas] = await Promise.all([
    db.estacion.findMany({ orderBy: { nombre: 'asc' } }),
    db.empleado.findMany({ orderBy: [{ estacionId: 'asc' }, { nombre: 'asc' }] }),
    db.maquina.findMany({ include: { estacion: true }, orderBy: [{ estacionId: 'asc' }, { nombre: 'asc' }] }),
    db.jornada.findMany({
      include: {
        empleado: true,
        maquina: { include: { estacion: true } },
        estacion: true,
        pagos: true,
        lecturas: { include: { combustible: true } },
      },
      orderBy: [{ inicio: 'desc' }],
      take: 20,
    }),
  ]);

  return { estaciones, empleados, maquinas, jornadas };
}

function formatDecimal(value: { toString: () => string } | string | number | null | undefined) {
  if (value === null || value === undefined) return '—';
  const number = Number(value.toString());
  return new Intl.NumberFormat('es-PE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);
}

function totalPagos(pagos: { medio: string; monto: { toString: () => string } }[]) {
  return pagos.reduce((sum, pago) => sum + Number(pago.monto.toString()), 0);
}

export default async function JornadasPage() {
  const { estaciones, empleados, maquinas, jornadas } = await getJornadas();

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-slate-100">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">PetroControl</p>
              <h1 className="mt-2 text-3xl font-bold text-white">Jornadas</h1>
            </div>
            <div className="flex gap-3">
              <a
                href="/home"
                className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-500 hover:text-cyan-300"
              >
                Dashboard
              </a>
              <a
                href="/inventario"
                className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-500 hover:text-cyan-300"
              >
                Inventario
              </a>
            </div>
          </div>
        </header>

        <section className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <h2 className="mb-4 text-xl font-semibold text-white">Abrir jornada</h2>
            <form action="/api/jornadas" method="post" className="space-y-3">
              <select name="estacionId" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400" required>
                <option value="">Selecciona estación</option>
                {estaciones.map((estacion) => (
                  <option key={estacion.id} value={estacion.id}>{estacion.nombre}</option>
                ))}
              </select>

              <select name="empleadoId" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400" required>
                <option value="">Selecciona empleado</option>
                {empleados.map((empleado) => (
                  <option key={empleado.id} value={empleado.id}>{empleado.nombre}</option>
                ))}
              </select>

              <select name="maquinaId" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400" required>
                <option value="">Selecciona máquina</option>
                {maquinas.map((maquina) => (
                  <option key={maquina.id} value={maquina.id}>{maquina.nombre}</option>
                ))}
              </select>

              <div className="grid gap-3 sm:grid-cols-2">
                <input name="inicio" type="datetime-local" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400" required />
                <input name="fin" type="datetime-local" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400" />
              </div>

              <input name="totalizadorEntrada" type="number" step="0.01" min="0" placeholder="Totalizador entrada" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400" required />
              <input name="totalizadorSalida" type="number" step="0.01" min="0" placeholder="Totalizador salida (opcional)" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400" />
              <textarea name="notas" placeholder="Notas" className="min-h-24 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400" />

              <button type="submit" className="rounded-lg bg-cyan-500 px-4 py-2 font-medium text-slate-950 hover:bg-cyan-400">
                Guardar jornada
              </button>
            </form>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <h2 className="mb-4 text-xl font-semibold text-white">Resumen operativo</h2>
            <div className="space-y-3">
              {jornadas.length === 0 && (
                <p className="text-sm text-slate-400">No hay jornadas registradas todavía.</p>
              )}

              {jornadas.map((jornada) => {
                const pagosTotal = totalPagos(jornada.pagos);
                const diferenciaCaja = Number((jornada.importeEsperado ?? 0).toString()) - pagosTotal;

                return (
                  <div key={jornada.id} className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-200">
                    <div className="flex items-center justify-between gap-2">
                      <strong className="text-white">{jornada.empleado.nombre}</strong>
                      <span className={`rounded-full px-2 py-1 text-[10px] uppercase ${jornada.estado === 'ABIERTA' ? 'bg-amber-500/20 text-amber-300' : 'bg-emerald-500/20 text-emerald-300'}`}>
                        {jornada.estado}
                      </span>
                    </div>
                    <div className="mt-2 text-slate-400">{jornada.maquina.nombre} · {jornada.estacion.nombre}</div>
                    <div className="mt-2 grid gap-2 sm:grid-cols-2">
                      <div>
                        <p className="text-slate-400">Inicio</p>
                        <p>{new Date(jornada.inicio).toLocaleString('es-PE')}</p>
                      </div>
                      <div>
                        <p className="text-slate-400">Fin</p>
                        <p>{jornada.fin ? new Date(jornada.fin).toLocaleString('es-PE') : '—'}</p>
                      </div>
                    </div>
                    <div className="mt-2 grid gap-2 sm:grid-cols-2">
                      <div>
                        <p className="text-slate-400">Entrada</p>
                        <p>{formatDecimal(jornada.totalizadorEntrada)}</p>
                      </div>
                      <div>
                        <p className="text-slate-400">Salida</p>
                        <p>{formatDecimal(jornada.totalizadorSalida)}</p>
                      </div>
                    </div>
                    <div className="mt-3 rounded-xl border border-slate-800 bg-slate-900/70 p-3">
                      <div className="flex items-center justify-between gap-2 text-xs uppercase tracking-[0.12em] text-slate-400">
                        <span>Cierre de caja</span>
                        <span className={diferenciaCaja >= 0 ? 'text-emerald-300' : 'text-rose-300'}>
                          {diferenciaCaja >= 0 ? 'Faltante' : 'Sobrante'}
                        </span>
                      </div>
                      <div className="mt-2 flex items-center justify-between text-sm text-slate-200">
                        <span>Esperado</span>
                        <span>{formatDecimal(jornada.importeEsperado ?? 0)}</span>
                      </div>
                      <div className="mt-1 flex items-center justify-between text-sm text-slate-200">
                        <span>Declarado</span>
                        <span>{formatDecimal(pagosTotal)}</span>
                      </div>
                      <div className="mt-1 flex items-center justify-between text-sm text-slate-200">
                        <span>Diferencia</span>
                        <span className={diferenciaCaja >= 0 ? 'text-amber-300' : 'text-emerald-300'}>
                          {formatDecimal(diferenciaCaja)}
                        </span>
                      </div>
                    </div>

                    <form action={`/api/jornadas/${jornada.id}/pagos`} method="post" className="mt-3 grid gap-2 sm:grid-cols-[1fr_1fr_auto]">
                      <select name="medio" className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400" defaultValue="EFECTIVO" required>
                        <option value="EFECTIVO">Efectivo</option>
                        <option value="TARJETA">Tarjeta</option>
                        <option value="TRANSFERENCIA">Transferencia</option>
                        <option value="DESCUENTO">Descuento</option>
                      </select>
                      <input name="monto" type="number" step="0.01" min="0" placeholder="Monto" className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400" required />
                      <button type="submit" className="rounded-lg bg-cyan-500 px-3 py-2 text-sm font-medium text-slate-950 hover:bg-cyan-400">
                        Registrar
                      </button>
                    </form>

                    <div className="mt-2 text-slate-400">
                      {jornada.notas || 'Sin notas'}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
