import { db } from '@/lib/db';

async function getGastos() {
  const [estaciones, gastos] = await Promise.all([
    db.estacion.findMany({ orderBy: { nombre: 'asc' } }),
    db.gasto.findMany({
      include: { estacion: true },
      orderBy: [{ fecha: 'desc' }],
      take: 30,
    }),
  ]);

  return { estaciones, gastos };
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

export default async function GastosPage() {
  const { estaciones, gastos } = await getGastos();

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-slate-100">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">PetroControl</p>
              <h1 className="mt-2 text-3xl font-bold text-white">Gastos</h1>
            </div>
            <div className="flex gap-3">
              <a
                href="/home"
                className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-500 hover:text-cyan-300"
              >
                Dashboard
              </a>
              <a
                href="/jornadas"
                className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-500 hover:text-cyan-300"
              >
                Jornadas
              </a>
            </div>
          </div>
        </header>

        <section className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <h2 className="mb-4 text-xl font-semibold text-white">Registrar gasto</h2>
            <form action="/api/gastos" method="post" className="space-y-3">
              <select name="estacionId" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400" required>
                <option value="">Selecciona estación</option>
                {estaciones.map((estacion) => (
                  <option key={estacion.id} value={estacion.id}>{estacion.nombre}</option>
                ))}
              </select>

              <select name="categoria" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400" required>
                <option value="">Selecciona categoría</option>
                <option value="Servicios">Servicios</option>
                <option value="Mantenimiento">Mantenimiento</option>
                <option value="Personal">Personal</option>
                <option value="Logística">Logística</option>
                <option value="Otros">Otros</option>
              </select>

              <textarea name="descripcion" placeholder="Descripción del gasto" className="min-h-24 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400" required />

              <div className="grid gap-3 sm:grid-cols-2">
                <input name="monto" type="number" step="0.01" min="0" placeholder="Monto" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400" required />
                <input name="fecha" type="date" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400" required />
              </div>

              <button type="submit" className="rounded-lg bg-cyan-500 px-4 py-2 font-medium text-slate-950 hover:bg-cyan-400">
                Guardar gasto
              </button>
            </form>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <h2 className="mb-4 text-xl font-semibold text-white">Últimos movimientos</h2>
            <div className="space-y-3">
              {gastos.length === 0 ? (
                <p className="text-sm text-slate-400">No hay gastos registrados todavía.</p>
              ) : (
                gastos.map((gasto) => (
                  <div key={gasto.id} className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-200">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-medium text-white">{gasto.categoria}</p>
                        <p className="mt-1 text-slate-400">{gasto.estacion.nombre}</p>
                      </div>
                      <span className="text-lg font-semibold text-rose-300">{formatMoney(gasto.monto)}</span>
                    </div>
                    <p className="mt-3 text-slate-300">{gasto.descripcion}</p>
                    <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                      <span>{new Date(gasto.fecha).toLocaleDateString('es-PE')}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
