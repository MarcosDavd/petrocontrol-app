import { db } from '@/lib/db';

async function getReporte() {
  const [estaciones, jornadas, gastos] = await Promise.all([
    db.estacion.findMany({ orderBy: { nombre: 'asc' } }),
    db.jornada.findMany({
      include: { estacion: true, pagos: true },
      orderBy: [{ inicio: 'desc' }],
    }),
    db.gasto.findMany({
      include: { estacion: true },
      orderBy: [{ fecha: 'desc' }],
    }),
  ]);

  return { estaciones, jornadas, gastos };
}

function formatMoney(value: { toString: () => string } | string | number | null | undefined) {
  if (value === null || value === undefined) return 'S/ 0.00';
  const number = Number(value.toString());
  return new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);
}

export default async function ReportesPage() {
  const { estaciones, jornadas, gastos } = await getReporte();

  const ingresoTotal = jornadas.reduce((sum, jornada) => sum + Number(jornada.importeEsperado?.toString() ?? 0), 0);
  const declaradosTotal = jornadas.reduce((sum, jornada) => sum + Number(jornada.importeDeclarado?.toString() ?? 0), 0);
  const gastosTotal = gastos.reduce((sum, gasto) => sum + Number(gasto.monto.toString()), 0);

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-slate-100">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">PetroControl</p>
              <h1 className="mt-2 text-3xl font-bold text-white">Reportes</h1>
            </div>
            <a
              href="/home"
              className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-500 hover:text-cyan-300"
            >
              Dashboard
            </a>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <p className="text-sm text-slate-400">Ingresos</p>
            <p className="mt-2 text-2xl font-semibold text-emerald-300">{formatMoney(ingresoTotal)}</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <p className="text-sm text-slate-400">Declarado</p>
            <p className="mt-2 text-2xl font-semibold text-cyan-300">{formatMoney(declaradosTotal)}</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <p className="text-sm text-slate-400">Gastos</p>
            <p className="mt-2 text-2xl font-semibold text-rose-300">{formatMoney(gastosTotal)}</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <p className="text-sm text-slate-400">Utilidad</p>
            <p className="mt-2 text-2xl font-semibold text-amber-300">{formatMoney(ingresoTotal - gastosTotal)}</p>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <h2 className="mb-4 text-xl font-semibold text-white">Por estación</h2>
            <div className="space-y-3">
              {estaciones.map((estacion) => {
                const ingresos = jornadas
                  .filter((j) => j.estacionId === estacion.id)
                  .reduce((sum, j) => sum + Number(j.importeEsperado?.toString() ?? 0), 0);
                const gastosEstacion = gastos
                  .filter((g) => g.estacionId === estacion.id)
                  .reduce((sum, g) => sum + Number(g.monto.toString()), 0);

                return (
                  <div key={estacion.id} className="rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-sm text-slate-200">
                    <div className="flex items-center justify-between gap-2">
                      <strong className="text-white">{estacion.nombre}</strong>
                      <span className="text-cyan-300">{formatMoney(ingresos - gastosEstacion)}</span>
                    </div>
                    <div className="mt-2 grid gap-2 sm:grid-cols-3 text-xs text-slate-400">
                      <span>Ingresos: {formatMoney(ingresos)}</span>
                      <span>Gastos: {formatMoney(gastosEstacion)}</span>
                      <span>Utilidad: {formatMoney(ingresos - gastosEstacion)}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <h2 className="mb-4 text-xl font-semibold text-white">Últimas jornadas</h2>
            <div className="space-y-3">
              {jornadas.slice(0, 6).map((jornada) => (
                <div key={jornada.id} className="rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-sm text-slate-200">
                  <div className="flex items-center justify-between gap-2">
                    <strong className="text-white">{jornada.estacion.nombre}</strong>
                    <span className="text-emerald-300">{formatMoney(jornada.importeEsperado ?? 0)}</span>
                  </div>
                  <div className="mt-2 text-slate-400">{new Date(jornada.inicio).toLocaleDateString('es-PE')}</div>
                  <div className="mt-2 text-xs text-slate-400">
                    Declarado: {formatMoney(jornada.importeDeclarado ?? 0)} · {jornada.estado}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
