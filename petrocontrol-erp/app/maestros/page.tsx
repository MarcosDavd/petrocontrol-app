import { db } from '@/lib/db';

async function getMaestros() {
  const [estaciones, maquinas, combustibles, precios, empleados] = await Promise.all([
    db.estacion.findMany({ orderBy: { nombre: 'asc' } }),
    db.maquina.findMany({
      include: { estacion: true },
      orderBy: [{ estacionId: 'asc' }, { nombre: 'asc' }],
    }),
    db.combustible.findMany({
      include: {
        precios: {
          orderBy: { vigenteDesde: 'desc' },
          take: 1,
        },
      },
      orderBy: { nombre: 'asc' },
    }),
    db.historialPrecio.findMany({
      include: { combustible: true },
      orderBy: [{ combustibleId: 'asc' }, { vigenteDesde: 'desc' }],
    }),
    db.empleado.findMany({
      include: { estacion: true },
      orderBy: [{ estacionId: 'asc' }, { nombre: 'asc' }],
    }),
  ]);

  return { estaciones, maquinas, combustibles, precios, empleados };
}

function formatMoney(value: { toString: () => string } | null | undefined) {
  if (!value) return '—';
  return `S/ ${Number(value.toString()).toFixed(2)}`;
}

export default async function MaestrosPage() {
  const { estaciones, maquinas, combustibles, precios, empleados } = await getMaestros();

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-slate-100">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">PetroControl</p>
              <h1 className="mt-2 text-3xl font-bold text-white">Maestros</h1>
            </div>
            <a
              href="/home"
              className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-500 hover:text-cyan-300"
            >
              Volver al dashboard
            </a>
          </div>
        </header>

        <section className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <h2 className="mb-4 text-xl font-semibold text-white">Estaciones</h2>
            <form action="/api/estaciones" method="post" className="space-y-3">
              <input name="nombre" placeholder="Nombre de la estación" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400" required />
              <input name="direccion" placeholder="Dirección" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400" />
              <label className="flex items-center gap-2 text-sm text-slate-300">
                <input type="checkbox" name="activa" defaultChecked className="h-4 w-4 rounded border-slate-700 bg-slate-950" />
                Activa
              </label>
              <button type="submit" className="rounded-lg bg-cyan-500 px-4 py-2 font-medium text-slate-950 hover:bg-cyan-400">
                Guardar estación
              </button>
            </form>
            <div className="mt-4 space-y-2">
              {estaciones.map((estacion) => (
                <div key={estacion.id} className="rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-sm text-slate-200">
                  <div className="flex items-center justify-between gap-2">
                    <strong>{estacion.nombre}</strong>
                    <span className={`rounded-full px-2 py-1 text-[10px] uppercase ${estacion.activa ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-700 text-slate-300'}`}>
                      {estacion.activa ? 'Activa' : 'Inactiva'}
                    </span>
                  </div>
                  <div className="mt-1 text-slate-400">{estacion.direccion || 'Sin dirección registrada'}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <h2 className="mb-4 text-xl font-semibold text-white">Máquinas</h2>
            <form action="/api/maquinas" method="post" className="space-y-3">
              <select name="estacionId" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400" required>
                <option value="">Selecciona estación</option>
                {estaciones.map((estacion) => (
                  <option key={estacion.id} value={estacion.id}>{estacion.nombre}</option>
                ))}
              </select>
              <input name="nombre" placeholder="Nombre de la máquina" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400" required />
              <label className="flex items-center gap-2 text-sm text-slate-300">
                <input type="checkbox" name="activa" defaultChecked className="h-4 w-4 rounded border-slate-700 bg-slate-950" />
                Activa
              </label>
              <button type="submit" className="rounded-lg bg-cyan-500 px-4 py-2 font-medium text-slate-950 hover:bg-cyan-400">
                Guardar máquina
              </button>
            </form>
            <div className="mt-4 space-y-2">
              {maquinas.map((maquina) => (
                <div key={maquina.id} className="rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-sm text-slate-200">
                  <div className="flex items-center justify-between gap-2">
                    <strong>{maquina.nombre}</strong>
                    <span className={`rounded-full px-2 py-1 text-[10px] uppercase ${maquina.activa ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-700 text-slate-300'}`}>
                      {maquina.activa ? 'Activa' : 'Inactiva'}
                    </span>
                  </div>
                  <div className="mt-1 text-slate-400">{maquina.estacion.nombre}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <h2 className="mb-4 text-xl font-semibold text-white">Combustibles y precios</h2>
            <form action="/api/combustibles" method="post" className="space-y-3">
              <input name="nombre" placeholder="Nombre del combustible" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400" required />
              <button type="submit" className="rounded-lg bg-cyan-500 px-4 py-2 font-medium text-slate-950 hover:bg-cyan-400">
                Crear combustible
              </button>
            </form>

            <div className="mt-4 space-y-3">
              {combustibles.map((combustible) => (
                <div key={combustible.id} className="rounded-lg border border-slate-800 bg-slate-950/60 p-3">
                  <div className="flex items-center justify-between gap-2">
                    <strong className="text-white">{combustible.nombre}</strong>
                    <span className="text-sm text-cyan-300">
                      {formatMoney(combustible.precios[0]?.precio ?? null)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <form action="/api/precios" method="post" className="mt-6 space-y-3 border-t border-slate-800 pt-4">
              <select name="combustibleId" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400" required>
                <option value="">Selecciona combustible</option>
                {combustibles.map((combustible) => (
                  <option key={combustible.id} value={combustible.id}>{combustible.nombre}</option>
                ))}
              </select>
              <input name="precio" type="number" step="0.01" min="0" placeholder="Precio por galón" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400" required />
              <button type="submit" className="rounded-lg bg-emerald-500 px-4 py-2 font-medium text-slate-950 hover:bg-emerald-400">
                Registrar precio
              </button>
            </form>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <h2 className="mb-4 text-xl font-semibold text-white">Empleados</h2>
            <form action="/api/empleados" method="post" className="space-y-3">
              <select name="estacionId" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400" required>
                <option value="">Selecciona estación</option>
                {estaciones.map((estacion) => (
                  <option key={estacion.id} value={estacion.id}>{estacion.nombre}</option>
                ))}
              </select>
              <input name="nombre" placeholder="Nombre del empleado" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400" required />
              <div className="grid gap-3 sm:grid-cols-2">
                <input name="horarioInicio" placeholder="Horario inicio" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400" />
                <input name="horarioFin" placeholder="Horario fin" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400" />
              </div>
              <label className="flex items-center gap-2 text-sm text-slate-300">
                <input type="checkbox" name="activo" defaultChecked className="h-4 w-4 rounded border-slate-700 bg-slate-950" />
                Activo
              </label>
              <button type="submit" className="rounded-lg bg-cyan-500 px-4 py-2 font-medium text-slate-950 hover:bg-cyan-400">
                Guardar empleado
              </button>
            </form>
            <div className="mt-4 space-y-2">
              {empleados.map((empleado) => (
                <div key={empleado.id} className="rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-sm text-slate-200">
                  <div className="flex items-center justify-between gap-2">
                    <strong>{empleado.nombre}</strong>
                    <span className={`rounded-full px-2 py-1 text-[10px] uppercase ${empleado.activo ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-700 text-slate-300'}`}>
                      {empleado.activo ? 'Activo' : 'Inactivo'}
                    </span>
                  </div>
                  <div className="mt-1 text-slate-400">{empleado.estacion.nombre}</div>
                  <div className="mt-1 text-slate-400">{empleado.horarioInicio || '—'} / {empleado.horarioFin || '—'}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
          <h2 className="mb-4 text-xl font-semibold text-white">Historial de precios</h2>
          <div className="space-y-2">
            {precios.map((precio) => (
              <div key={precio.id} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-200">
                <span>{precio.combustible.nombre}</span>
                <span className="text-cyan-300">{formatMoney(precio.precio)}</span>
                <span className="text-slate-400">{new Date(precio.vigenteDesde).toLocaleDateString('es-PE')}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
