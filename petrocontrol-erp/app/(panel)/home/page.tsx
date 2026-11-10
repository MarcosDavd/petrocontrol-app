import Link from 'next/link';
import { ChevronRight, Clock, Droplets, Fuel, Scale } from 'lucide-react';
import { db } from '@/lib/db';
import { getSessionFromCookies } from '@/lib/auth';
import { PageHeader } from '@/components/page-header';
import { COLOR_TEXTO_NIVEL, Torta } from '@/components/torta-tanque';
import { necesitaAtencion, obtenerResumenTanques } from '@/lib/tanques-servicio';
import { formatoGalones, formatoSoles } from '@/lib/formato';
import { inicioMesLima } from '@/lib/zona-horaria';

export const metadata = { title: 'Inicio' };

async function getResumen() {
  const inicioMes = inicioMesLima();

  const [jornadasAbiertas, tanques, cierresMes] = await Promise.all([
    db.jornada.count({ where: { estado: 'ABIERTA' } }),
    obtenerResumenTanques(),
    db.jornada.aggregate({
      where: { estado: 'CERRADA', inicio: { gte: inicioMes } },
      _sum: { galonesProductos: true, diferenciaCaja: true },
    }),
  ]);

  // Tanques agrupados por estación, en el orden en que llegan (por estación y producto)
  const porEstacion = new Map<number, { nombre: string; tanques: typeof tanques }>();
  for (const tanque of tanques) {
    const grupo = porEstacion.get(tanque.estacionId) ?? { nombre: tanque.estacion, tanques: [] };
    grupo.tanques.push(tanque);
    porEstacion.set(tanque.estacionId, grupo);
  }

  return {
    jornadasAbiertas,
    estaciones: [...porEstacion.entries()].map(([id, grupo]) => ({ id, ...grupo })),
    tanquesBajoMinimo: tanques.filter(necesitaAtencion).length,
    totalTanques: tanques.length,
    galonesMes: Number(cierresMes._sum.galonesProductos ?? 0),
    diferenciaCajaMes: Number(cierresMes._sum.diferenciaCaja ?? 0),
  };
}

export default async function HomePage() {
  const [session, resumen] = await Promise.all([getSessionFromCookies(), getResumen()]);

  const hayFaltante = resumen.diferenciaCajaMes > 0.004;
  const haySobrante = resumen.diferenciaCajaMes < -0.004;

  const lecturas = [
    {
      label: 'Jornadas abiertas',
      value: String(resumen.jornadasAbiertas),
      icon: Clock,
      alerta: false,
    },
    {
      label: 'Tanques bajo mínimo',
      value: String(resumen.tanquesBajoMinimo),
      detalle: `de ${resumen.totalTanques}`,
      icon: Fuel,
      alerta: resumen.tanquesBajoMinimo > 0,
    },
    {
      label: 'Galones vendidos este mes',
      value: formatoGalones(resumen.galonesMes),
      icon: Droplets,
      alerta: false,
    },
    {
      label: haySobrante ? 'Sobrante de caja este mes' : 'Faltante de caja este mes',
      value: formatoSoles(Math.abs(resumen.diferenciaCajaMes)),
      icon: Scale,
      alerta: hayFaltante,
    },
  ];

  return (
    <>
      <PageHeader title="Inicio" description={session ? `Hola, ${session.email}` : undefined} />

      {/* Lecturas del mes: cards sin borde, el fondo tintado las separa de la página */}
      <section aria-label="Resumen del mes" className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
        {lecturas.map(({ label, value, detalle, icon: Icon, alerta }) => (
          <article
            key={label}
            className={`flex min-h-32 flex-col justify-between gap-4 p-4 sm:min-h-36 sm:p-5 ${
              alerta ? 'bg-danger-light' : 'bg-surface-alt'
            }`}
          >
            <p className={`flex items-start gap-2 text-sm leading-snug ${alerta ? 'text-danger' : 'text-muted'}`}>
              <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${alerta ? 'text-danger' : 'text-primary'}`} aria-hidden />
              {label}
            </p>
            <p className="flex items-baseline gap-1.5">
              <span
                className={`truncate text-2xl font-semibold tabular-nums tracking-tight sm:text-3xl ${
                  alerta ? 'text-danger' : 'text-fg'
                }`}
              >
                {value}
              </span>
              {detalle && <span className={`text-sm ${alerta ? 'text-danger/80' : 'text-muted'}`}>{detalle}</span>}
            </p>
          </article>
        ))}
      </section>

      <h2 className="mb-3 mt-10 text-lg font-semibold tracking-tight text-fg">Tanques</h2>
      {resumen.estaciones.length === 0 ? (
        <p className="rounded-2xl bg-surface-alt px-4 py-8 text-center text-sm text-muted">
          Aún no hay tanques. Créalos en{' '}
          <Link href="/estaciones" className="font-medium text-primary hover:underline">Estaciones y máquinas</Link>.
        </p>
      ) : (
        <div className="grid gap-3 sm:gap-4 xl:grid-cols-2">
          {resumen.estaciones.map((estacion) => {
            const atencion = estacion.tanques.filter(necesitaAtencion).length;
            return (
              <Link
                key={estacion.id}
                href={`/inventario?estacion=${estacion.id}`}
                className="group block rounded-2xl bg-surface-alt p-4 transition-colors hover:bg-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:p-5"
              >
                <span className="flex items-start justify-between gap-3">
                  <span className="min-w-0">
                    <span className="block font-semibold text-fg">{estacion.nombre}</span>
                    {atencion > 0 && (
                      <span className="block text-sm text-danger">
                        {atencion === 1 ? '1 tanque necesita atención' : `${atencion} tanques necesitan atención`}
                      </span>
                    )}
                  </span>
                  <span className="flex shrink-0 items-center gap-1 text-sm text-muted group-hover:text-primary">
                    <span className="hidden sm:inline">Ver en inventario</span>
                    <ChevronRight className="h-5 w-5 sm:h-4 sm:w-4" aria-hidden />
                  </span>
                </span>
                <span className="mt-4 grid grid-cols-4 gap-2 sm:gap-4">
                  {estacion.tanques.map((tanque) => (
                    <span key={tanque.id} className="flex flex-col items-center text-center">
                      <span className="relative block aspect-square w-full max-w-20">
                        <Torta porcentaje={tanque.porcentaje} nivel={tanque.nivel} grosor={12} />
                        <span
                          className={`absolute inset-0 flex items-center justify-center text-sm font-semibold tabular-nums ${COLOR_TEXTO_NIVEL[tanque.nivel]}`}
                        >
                          {Math.round(tanque.porcentaje)} %
                        </span>
                      </span>
                      <span className="mt-1.5 text-sm text-fg">{tanque.producto}</span>
                    </span>
                  ))}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
