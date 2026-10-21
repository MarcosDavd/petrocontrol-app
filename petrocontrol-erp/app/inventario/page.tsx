import { db } from '@/lib/db';

async function getInventario() {
  const [estaciones, combustibles, tanques, movimientos] = await Promise.all([
    db.estacion.findMany({ orderBy: { nombre: 'asc' } }),
    db.combustible.findMany({ orderBy: { nombre: 'asc' } }),
    db.tanque.findMany({
      include: {
        estacion: true,
        combustible: true,
        movimientos: { orderBy: { fecha: 'desc' }, take: 10 },
      },
      orderBy: [{ estacionId: 'asc' }, { combustibleId: 'asc' }],
    }),
    db.movimientoStock.findMany({
      include: {
        tanque: {
          include: {
            combustible: true,
            estacion: true,
          },
        },
      },
      orderBy: { fecha: 'desc' },
      take: 20,
    }),
  ]);

  return { estaciones, combustibles, tanques, movimientos };
}

function toNumber(value: { toString: () => string } | string | number | null | undefined) {
  if (value === null || value === undefined) return 0;
  return Number(value.toString());
}

function formatGalones(value: { toString: () => string } | string | number | null | undefined) {
  return `${toNumber(value).toLocaleString('es-PE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} gal.`;
}

function formatDate(value: Date | string) {
  return new Date(value).toLocaleDateString('es-PE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

export default async function InventarioPage() {
  const { estaciones, combustibles, tanques, movimientos } = await getInventario();

  const stockPorTanque = new Map<number, number>();

  tanques.forEach((tanque) => {
    const stock = tanque.movimientos.reduce((total, movimiento) => {
      return total + toNumber(movimiento.galones);
    }, 0);

    stockPorTanque.set(tanque.id, stock);
  });

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-slate-100">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">PetroControl</p>
              <h1 className="mt-2 text-3xl font-bold text-white">Inventario</h1>
            </div>
            <div className="flex gap-3">
              <a
                href="/home"
                className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-500 hover:text-cyan-300"
              >
                Dashboard
              </a>
              <a
                href="/maestros"
                className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-500 hover:text-cyan-300"
              >
                Maestros
              </a>
            </div>
          </div>
        </header>

        <section className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <h2 className="mb-4 text-xl font-semibold text-white">Crear tanque</h2>
            <form action="/api/tanques" method="post" className="space-y-3">
              <select name="estacionId" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400" required>
                <option value="">Selecciona estación</option>
                {estaciones.map((estacion) => (
                  <option key={estacion.id} value={estacion.id}>{estacion.nombre}</option>
                ))}
              </select>
              <select name="combustibleId" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400" required>
                <option value="">Selecciona combustible</option>
                {combustibles.map((combustible) => (
                  <option key={combustible.id} value={combustible.id}>{combustible.nombre}</option>
                ))}
              </select>
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  name="capacidad"
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="Capacidad (gal.)"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400"
                  required
                />
                <input
                  name="minimo"
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="Mínimo (gal.)"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400"
                  required
                />
              </div>
              <button type="submit" className="rounded-lg bg-cyan-500 px-4 py-2 font-medium text-slate-950 hover:bg-cyan-400">
                Guardar tanque
              </button>
            </form>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <h2 className="mb-4 text-xl font-semibold text-white">Registrar movimiento</h2>
            <form action="/api/movimientos-stock" method="post" className="space-y-3">
              <select name="tanqueId" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400" required>
                <option value="">Selecciona tanque</option>
                {tanques.map((tanque) => (
                  <option key={tanque.id} value={tanque.id}>
                    {tanque.estacion.nombre} · {tanque.combustible.nombre}
                  </option>
                ))}
              </select>
              <select name="tipo" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400" required>
                <option value="RECARGA">Recarga</option>
                <option value="VENTA">Venta</option>
                <option value="AJUSTE">Ajuste</option>
                <option value="MERMA">Merma</option>
              </select>
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  name="galones"
                  type="number"
                  step="0.01"
                  placeholder="Galones (+/-)"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400"
                  required
                />
                <input
                  name="fecha"
                  type="date"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400"
                />
              </div>
              <input
                name="nota"
                placeholder="Nota opcional"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400"
              />
              <button type="submit" className="rounded-lg bg-emerald-500 px-4 py-2 font-medium text-slate-950 hover:bg-emerald-400">
                Registrar movimiento
              </button>
            </form>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <h2 className="mb-4 text-xl font-semibold text-white">Resumen por tanque</h2>
            <div className="space-y-3">
              {tanques.map((tanque) => {
                const stock = stockPorTanque.get(tanque.id) ?? 0;
                const capacidad = toNumber(tanque.capacidad);
                const umbral = toNumber(tanque.minimo);
                const porcentaje = capacidad > 0 ? Math.min((stock / capacidad) * 100, 100) : 0;
                const estado = stock <= umbral ? 'Bajo mínimo' : 'Normal';

                return (
                  <div key={tanque.id} className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-white font-semibold">{tanque.estacion.nombre}</p>
                        <p className="text-sm text-slate-400">{tanque.combustible.nombre}</p>
                      </div>
                      <span
                        className={`rounded-full px-2 py-1 text-[10px] uppercase ${
                          estado === 'Bajo mínimo'
                            ? 'bg-amber-500/20 text-amber-300'
                            : 'bg-emerald-500/20 text-emerald-300'
                        }`}
                      >
                        {estado}
                      </span>
                    </div>

                    <div className="mt-3 grid grid-cols-3 gap-2 text-sm text-slate-300">
                      <div>
                        <p className="text-slate-400">Stock</p>
                        <p className="mt-1 text-white">{formatGalones(stock)}</p>
                      </div>
                      <div>
                        <p className="text-slate-400">Capacidad</p>
                        <p className="mt-1 text-white">{formatGalones(capacidad)}</p>
                      </div>
                      <div>
                        <p className="text-slate-400">Mínimo</p>
                        <p className="mt-1 text-white">{formatGalones(umbral)}</p>
                      </div>
                    </div>

                    <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-800">
                      <div
                        className={`h-full rounded-full ${porcentaje < 30 ? 'bg-amber-500' : 'bg-cyan-500'}`}
                        style={{ width: `${Math.max(5, porcentaje)}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <h2 className="mb-4 text-xl font-semibold text-white">Últimos movimientos</h2>
            <div className="space-y-3">
              {movimientos.map((movimiento) => (
                <div key={movimiento.id} className="rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-sm text-slate-200">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-medium text-white">
                        {movimiento.tanque.estacion.nombre} · {movimiento.tanque.combustible.nombre}
                      </p>
                      <p className="text-xs text-slate-400">{movimiento.tipo}</p>
                    </div>
                    <span
                      className={`rounded-full px-2 py-1 text-[10px] uppercase ${
                        Number(movimiento.galones.toString()) >= 0
                          ? 'bg-emerald-500/20 text-emerald-300'
                          : 'bg-rose-500/20 text-rose-300'
                      }`}
                    >
                      {formatGalones(movimiento.galones)}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
                    <span>{formatDate(movimiento.fecha)}</span>
                    <span>{movimiento.nota || 'Sin nota'}</span>
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
