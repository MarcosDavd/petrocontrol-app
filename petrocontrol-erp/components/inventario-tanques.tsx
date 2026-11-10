'use client';

import { useEffect, useMemo, useState, useTransition } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  type ChartOptions,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import { CircleAlert, Fuel, LineChart } from 'lucide-react';
import { formatoGalones } from '@/lib/formato';
import { ETIQUETA_NIVEL, PERIODOS, type NivelTanque, type PuntoHistorial } from '@/lib/inventario';

ChartJS.register(BarElement, CategoryScale, Filler, LinearScale, LineElement, PointElement, Tooltip);

export type TanqueResumen = {
  id: number;
  producto: string;
  estacion: string;
  estacionId: number;
  stock: number;
  capacidad: number;
  minimo: number;
  porcentaje: number;
  libre: number;
  nivel: NivelTanque;
};

const BADGE: Record<NivelTanque, string> = {
  revisar: 'badge-danger',
  bajo: 'badge-danger',
  medio: 'badge-warning',
  normal: 'badge-success',
};

type Colores = Record<'primary' | 'accent' | 'danger' | 'text' | 'muted' | 'border', string>;

/** Lee los tokens de color del tema (claro/oscuro) para usarlos en el canvas de Chart.js. */
function useColoresTema(): Colores | null {
  const [colores, setColores] = useState<Colores | null>(null);
  useEffect(() => {
    const leer = () => {
      const css = getComputedStyle(document.documentElement);
      const v = (nombre: string) => css.getPropertyValue(nombre).trim();
      setColores({
        primary: v('--primary'),
        accent: v('--accent'),
        danger: v('--danger'),
        text: v('--text'),
        muted: v('--text-muted'),
        border: v('--border'),
      });
    };
    leer();
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    media.addEventListener('change', leer);
    return () => media.removeEventListener('change', leer);
  }, []);
  return colores;
}

/** "#0f6b34" + 0.2 → "#0f6b3433" */
const conAlfa = (hex: string, alfa: number) =>
  /^#[0-9a-f]{6}$/i.test(hex) ? `${hex}${Math.round(alfa * 255).toString(16).padStart(2, '0')}` : hex;

const colorNivel = (nivel: NivelTanque, c: Colores) =>
  nivel === 'normal' ? c.primary : nivel === 'medio' ? c.accent : c.danger;

/** Tipado de las opciones del gráfico de línea (evita `satisfies` dentro de JSX). */
const opcionesLinea = (opciones: ChartOptions<'line'>) => opciones;

const fechaCorta = (fecha: string) => `${fecha.slice(8, 10)}/${fecha.slice(5, 7)}`;

export function InventarioTanques({
  tanques,
  seleccionadoId,
  historial,
  dias,
}: {
  tanques: TanqueResumen[];
  seleccionadoId: number;
  historial: PuntoHistorial[];
  dias: number;
}) {
  const router = useRouter();
  const [navegando, startTransition] = useTransition();
  const colores = useColoresTema();

  const estaciones = useMemo(
    () => [...new Map(tanques.map((t) => [t.estacionId, t.estacion])).entries()],
    [tanques]
  );
  const [estacionFiltro, setEstacionFiltro] = useState<number | 'todas'>('todas');
  const visibles = estacionFiltro === 'todas' ? tanques : tanques.filter((t) => t.estacionId === estacionFiltro);
  const seleccionado = tanques.find((t) => t.id === seleccionadoId) ?? tanques[0];
  const unaEstacion = estaciones.length <= 1;
  const etiqueta = (t: TanqueResumen) => (unaEstacion ? t.producto : `${t.producto} · ${t.estacion}`);

  const href = (tanqueId: number, periodo = dias) => `/inventario?tanque=${tanqueId}&dias=${periodo}`;
  const seleccionar = (tanqueId: number) =>
    startTransition(() => router.push(href(tanqueId), { scroll: false }));

  const alertas = tanques.filter((t) => t.nivel === 'revisar' || t.nivel === 'bajo').length;

  return (
    <section className="grid items-start gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
      {/* Vista general: una barra por tanque */}
      <div className="card min-w-0">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 className="card-title mb-0"><Fuel className="h-5 w-5 text-primary" aria-hidden />Nivel de tanques</h2>
          {alertas > 0 && <span className="badge-danger">{alertas} con alerta</span>}
        </div>

        {!unaEstacion && (
          <select
            aria-label="Filtrar por estación"
            className="field mb-4"
            value={estacionFiltro}
            onChange={(e) => setEstacionFiltro(e.target.value === 'todas' ? 'todas' : Number(e.target.value))}
          >
            <option value="todas">Todas las estaciones</option>
            {estaciones.map(([id, nombre]) => (
              <option key={id} value={id}>{nombre}</option>
            ))}
          </select>
        )}

        <div style={{ height: Math.max(120, visibles.length * 40 + 40) }}>
          {colores && (
            <Bar
              role="img"
              aria-label={`Nivel de llenado de ${visibles.length} tanques. Haz clic en una barra para ver su detalle.`}
              data={{
                labels: visibles.map(etiqueta),
                datasets: [
                  {
                    data: visibles.map((t) => t.porcentaje),
                    backgroundColor: visibles.map((t) =>
                      t.id === seleccionado.id ? colorNivel(t.nivel, colores) : conAlfa(colorNivel(t.nivel, colores), 0.55)
                    ),
                    borderRadius: 6,
                    borderSkipped: false,
                    barThickness: 22,
                    grouped: false,
                    order: 1,
                  },
                  {
                    // Pista de fondo (100 %): deja ver tanques vacíos y marca el seleccionado
                    data: visibles.map(() => 100),
                    // Stock negativo: la barra queda vacía, así que se tiñe la pista para que destaque
                    backgroundColor: visibles.map((t) =>
                      t.nivel === 'revisar' ? conAlfa(colores.danger, 0.28) : conAlfa(colores.muted, 0.12)
                    ),
                    borderColor: visibles.map((t) => (t.id === seleccionado.id ? colores.text : 'transparent')),
                    borderWidth: 2,
                    borderRadius: 6,
                    borderSkipped: false,
                    barThickness: 22,
                    grouped: false,
                    order: 2,
                  },
                ],
              }}
              options={{
                indexAxis: 'y',
                maintainAspectRatio: false,
                animation: false,
                // Toda la fila es clicable, no solo la barra rellena
                interaction: { mode: 'index', axis: 'y', intersect: false },
                onClick: (_evento, elementos) => {
                  const tanque = visibles[elementos[0]?.index ?? -1];
                  if (tanque) seleccionar(tanque.id);
                },
                onHover: (evento, elementos) => {
                  const canvas = evento.native?.target as HTMLCanvasElement | undefined;
                  if (canvas) canvas.style.cursor = elementos.length ? 'pointer' : 'default';
                },
                plugins: {
                  tooltip: {
                    filter: (item) => item.datasetIndex === 0,
                    callbacks: {
                      label: (ctx) => {
                        const t = visibles[ctx.dataIndex];
                        return `${Math.round(t.porcentaje)} % · ${formatoGalones(t.stock)} de ${formatoGalones(t.capacidad)}`;
                      },
                    },
                  },
                },
                scales: {
                  x: {
                    min: 0,
                    max: 100,
                    grid: { color: colores.border },
                    ticks: { color: colores.muted, callback: (valor) => `${valor} %` },
                  },
                  y: { grid: { display: false }, ticks: { color: colores.text, font: { weight: 600 } } },
                },
              }}
            />
          )}
        </div>

        {/* Alternativa accesible al gráfico */}
        <ul className="sr-only">
          {visibles.map((t) => (
            <li key={t.id}>
              {etiqueta(t)}: {Math.round(t.porcentaje)} %, {formatoGalones(t.stock)}, {ETIQUETA_NIVEL[t.nivel]}
            </li>
          ))}
        </ul>

        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted" aria-hidden>
          <li className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-primary" />Normal</li>
          <li className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-accent" />Bajo 30 %</li>
          <li className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-danger" />Bajo mínimo / revisar</li>
        </ul>
      </div>

      {/* Detalle del tanque seleccionado */}
      <div className={`card min-w-0 transition-opacity ${navegando ? 'opacity-60' : ''}`} aria-busy={navegando}>
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="card-title mb-0"><LineChart className="h-5 w-5 text-primary" aria-hidden />Detalle del tanque</h2>
          <select
            aria-label="Tanque a mostrar"
            className="field sm:w-auto"
            value={seleccionado.id}
            onChange={(e) => seleccionar(Number(e.target.value))}
          >
            {estaciones.map(([estacionId, nombre]) => (
              <optgroup key={estacionId} label={nombre}>
                {tanques
                  .filter((t) => t.estacionId === estacionId)
                  .map((t) => (
                    <option key={t.id} value={t.id}>{t.producto} · {t.estacion}</option>
                  ))}
              </optgroup>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <p className="text-base font-bold">{etiqueta(seleccionado)}</p>
              <span className={BADGE[seleccionado.nivel]}>{ETIQUETA_NIVEL[seleccionado.nivel]}</span>
            </div>
            <p className={`mt-1 font-mono text-2xl font-bold ${seleccionado.stock < 0 ? 'text-danger' : 'text-fg'}`}>
              {formatoGalones(seleccionado.stock)}
              <span className="ml-2 text-sm font-semibold text-muted">{Math.round(seleccionado.porcentaje)} %</span>
            </p>
          </div>
          <dl className="grid grid-cols-3 gap-4 text-xs">
            <div>
              <dt className="text-muted">Capacidad</dt>
              <dd className="font-semibold">{formatoGalones(seleccionado.capacidad)}</dd>
            </div>
            <div>
              <dt className="text-muted">Mínimo</dt>
              <dd className="font-semibold">{formatoGalones(seleccionado.minimo)}</dd>
            </div>
            <div>
              <dt className="text-muted">Espacio libre</dt>
              <dd className="font-semibold">{formatoGalones(seleccionado.libre)}</dd>
            </div>
          </dl>
        </div>

        {seleccionado.nivel === 'revisar' && (
          <p className="mt-3 flex items-start gap-1 text-xs text-danger">
            <CircleAlert className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
            Se vendió más de lo registrado: falta registrar una recarga o el stock inicial (ajuste).
          </p>
        )}

        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="text-sm font-semibold">Stock al cierre de cada día</p>
          <nav aria-label="Período" className="flex gap-1">
            {PERIODOS.map((periodo) => (
              <Link
                key={periodo}
                href={href(seleccionado.id, periodo)}
                scroll={false}
                aria-current={periodo === dias ? 'true' : undefined}
                className={`whitespace-nowrap rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
                  periodo === dias ? 'bg-primary text-on-primary' : 'text-muted hover:bg-surface-alt hover:text-fg'
                }`}
              >
                {periodo} d
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-3 h-64">
          {colores && (
            <Line
              role="img"
              aria-label={`Stock de ${etiqueta(seleccionado)} en los últimos ${dias} días`}
              data={{
                labels: historial.map((p) => fechaCorta(p.fecha)),
                datasets: [
                  {
                    label: 'Stock',
                    data: historial.map((p) => p.stock),
                    borderColor: colores.primary,
                    backgroundColor: conAlfa(colores.primary, 0.15),
                    fill: 'origin',
                    tension: 0.25,
                    pointRadius: 0,
                    pointHoverRadius: 4,
                    borderWidth: 2,
                  },
                  {
                    label: 'Mínimo',
                    data: historial.map(() => seleccionado.minimo),
                    borderColor: colores.danger,
                    borderDash: [6, 4],
                    borderWidth: 1.5,
                    pointRadius: 0,
                    pointHoverRadius: 0,
                  },
                  {
                    label: 'Capacidad',
                    data: historial.map(() => seleccionado.capacidad),
                    borderColor: colores.muted,
                    borderDash: [2, 4],
                    borderWidth: 1.5,
                    pointRadius: 0,
                    pointHoverRadius: 0,
                  },
                ],
              }}
              options={opcionesLinea({
                  maintainAspectRatio: false,
                  animation: false,
                  interaction: { mode: 'index', intersect: false },
                  plugins: {
                    tooltip: {
                      callbacks: {
                        title: (items) => historial[items[0]?.dataIndex ?? 0]?.fecha.split('-').reverse().join('/') ?? '',
                        label: (ctx) => `${ctx.dataset.label}: ${formatoGalones(ctx.parsed.y)}`,
                      },
                    },
                  },
                  scales: {
                    x: { grid: { display: false }, ticks: { color: colores.muted, maxTicksLimit: 8, maxRotation: 0 } },
                    y: {
                      beginAtZero: true,
                      grid: { color: colores.border },
                      ticks: { color: colores.muted, callback: (valor) => `${Number(valor).toLocaleString('es-PE')} gal` },
                    },
                  },
                })}
            />
          )}
        </div>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted" aria-hidden>
          <li className="flex items-center gap-1.5"><span className="h-0.5 w-4 bg-primary" />Stock</li>
          <li className="flex items-center gap-1.5"><span className="w-4 border-t-2 border-dashed border-danger" />Mínimo</li>
          <li className="flex items-center gap-1.5"><span className="w-4 border-t-2 border-dotted border-muted" />Capacidad</li>
        </ul>
      </div>
    </section>
  );
}
