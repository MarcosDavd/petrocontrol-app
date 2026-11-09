import Link from 'next/link';
import { ChevronRight, Clock, Droplets, Fuel, Scale } from 'lucide-react';
import { db } from '@/lib/db';
import { getSessionFromCookies } from '@/lib/auth';
import { PageHeader } from '@/components/page-header';
import { NAV_ITEMS } from '@/components/nav-items';
import { formatoGalones, formatoSoles } from '@/lib/formato';
import { inicioMesLima } from '@/lib/zona-horaria';

export const metadata = { title: 'Dashboard' };

async function getResumen() {
  const inicioMes = inicioMesLima();

  const [jornadasAbiertas, tanques, stock, cierresMes] = await Promise.all([
    db.jornada.count({ where: { estado: 'ABIERTA' } }),
    db.tanque.findMany({ select: { id: true, minimo: true } }),
    db.movimientoStock.groupBy({ by: ['tanqueId'], _sum: { galones: true } }),
    db.jornada.aggregate({
      where: { estado: 'CERRADA', inicio: { gte: inicioMes } },
      _sum: { galonesProductos: true, diferenciaCaja: true },
    }),
  ]);

  const stockPorTanque = new Map(stock.map((s) => [s.tanqueId, Number(s._sum.galones ?? 0)]));
  const tanquesBajoMinimo = tanques.filter((t) => (stockPorTanque.get(t.id) ?? 0) <= Number(t.minimo)).length;

  return {
    jornadasAbiertas,
    tanquesBajoMinimo,
    totalTanques: tanques.length,
    galonesMes: Number(cierresMes._sum.galonesProductos ?? 0),
    diferenciaCajaMes: Number(cierresMes._sum.diferenciaCaja ?? 0),
  };
}

export default async function HomePage() {
  const [session, resumen] = await Promise.all([getSessionFromCookies(), getResumen()]);

  const kpis = [
    { label: 'Jornadas abiertas', value: resumen.jornadasAbiertas, icon: Clock, tone: 'bg-accent-light text-warning' },
    {
      label: 'Tanques bajo mínimo',
      value: `${resumen.tanquesBajoMinimo} / ${resumen.totalTanques}`,
      icon: Fuel,
      tone: resumen.tanquesBajoMinimo > 0 ? 'bg-danger-light text-danger' : 'bg-primary-light text-primary',
    },
    { label: 'Galones vendidos (mes)', value: formatoGalones(resumen.galonesMes), icon: Droplets, tone: 'bg-primary-light text-primary' },
    {
      label: resumen.diferenciaCajaMes < -0.004 ? 'Sobrante de caja (mes)' : 'Faltante de caja (mes)',
      value: formatoSoles(Math.abs(resumen.diferenciaCajaMes)),
      icon: Scale,
      tone: resumen.diferenciaCajaMes > 0.004 ? 'bg-danger-light text-danger' : 'bg-primary-light text-primary',
    },
  ];

  return (
    <>
      <PageHeader
        title="Dashboard"
        description={session ? `Bienvenido, ${session.email}` : 'Resumen general del negocio'}
      />

      <section className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4" aria-label="Indicadores">
        {kpis.map(({ label, value, icon: Icon, tone }) => (
          <article key={label} className="card flex flex-col gap-3 sm:flex-row sm:items-center">
            <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12 ${tone}`}>
              <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="text-xs text-muted sm:text-sm">{label}</p>
              <p className="mt-0.5 truncate text-xl font-bold text-fg sm:text-2xl">{value}</p>
            </div>
          </article>
        ))}
      </section>

      <h2 className="mb-3 mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-muted">Módulos</h2>
      <section className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        {NAV_ITEMS.filter((item) => item.href !== '/home').map(({ href, label, description, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="card group flex items-center gap-4 transition hover:border-primary hover:shadow-md"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-on-primary transition group-hover:bg-primary-hover">
              <Icon className="h-6 w-6" aria-hidden />
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-fg">{label}</h3>
              <p className="mt-0.5 text-sm text-muted">{description}</p>
            </div>
            <ChevronRight className="h-5 w-5 shrink-0 text-muted transition group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden />
          </Link>
        ))}
      </section>
    </>
  );
}
