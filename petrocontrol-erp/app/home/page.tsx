import { redirect } from 'next/navigation';
import { getSessionFromCookies } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const session = await getSessionFromCookies();

  if (!session) {
    redirect('/login');
  }

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <aside className="mb-6 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-lg shadow-slate-950/40">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">PetroControl</p>
              <h1 className="mt-2 text-2xl font-bold text-white">Dashboard</h1>
            </div>
            <form action="/api/auth/logout" method="POST">
              <button
                type="submit"
                className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-500 hover:text-cyan-300"
              >
                Cerrar sesión
              </button>
            </form>
          </div>
        </aside>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <p className="text-sm text-slate-400">Usuario</p>
            <p className="mt-2 text-xl font-semibold text-white">{session.email}</p>
          </article>
          <article className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <p className="text-sm text-slate-400">Estaciones</p>
            <p className="mt-2 text-xl font-semibold text-white">2</p>
          </article>
          <article className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <p className="text-sm text-slate-400">Estado</p>
            <p className="mt-2 text-xl font-semibold text-emerald-400">Activo</p>
          </article>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          <a href="/maestros" className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 text-left transition hover:border-cyan-500 hover:bg-slate-900">
            <p className="text-sm text-slate-400">Módulo</p>
            <h2 className="mt-2 text-xl font-semibold text-white">Maestros</h2>
            <p className="mt-2 text-sm text-slate-300">Estaciones, máquinas, precios y empleados</p>
          </a>
          <a href="/inventario" className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 text-left transition hover:border-cyan-500 hover:bg-slate-900">
            <p className="text-sm text-slate-400">Módulo</p>
            <h2 className="mt-2 text-xl font-semibold text-white">Inventario</h2>
            <p className="mt-2 text-sm text-slate-300">Tanques, stock y movimientos</p>
          </a>
          <a href="/jornadas" className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 text-left transition hover:border-cyan-500 hover:bg-slate-900">
            <p className="text-sm text-slate-400">Módulo</p>
            <h2 className="mt-2 text-xl font-semibold text-white">Jornadas</h2>
            <p className="mt-2 text-sm text-slate-300">Apertura, cierre y control operativo</p>
          </a>
          <a href="/gastos" className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 text-left transition hover:border-cyan-500 hover:bg-slate-900">
            <p className="text-sm text-slate-400">Módulo</p>
            <h2 className="mt-2 text-xl font-semibold text-white">Gastos</h2>
            <p className="mt-2 text-sm text-slate-300">Servicios, mantenimientos y costos del día</p>
          </a>
          <a href="/reportes" className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 text-left transition hover:border-cyan-500 hover:bg-slate-900">
            <p className="text-sm text-slate-400">Módulo</p>
            <h2 className="mt-2 text-xl font-semibold text-white">Reportes</h2>
            <p className="mt-2 text-sm text-slate-300">Ingresos, gastos y utilidad del negocio</p>
          </a>
        </section>
      </div>
    </main>
  );
}