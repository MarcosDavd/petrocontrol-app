import Link from 'next/link';
import { History, PlusCircle, SlidersHorizontal, Truck } from 'lucide-react';
import { db } from '@/lib/db';
import { EmptyState, PageHeader } from '@/components/page-header';
import { InventarioTanques, type TanqueResumen } from '@/components/inventario-tanques';
import { formatoFecha, formatoGalones } from '@/lib/formato';
import { estadoTanque, historialStock, PERIODOS } from '@/lib/inventario';
import { fechaHoraLima, hoyLima, sumarDias } from '@/lib/zona-horaria';

export const metadata = { title: 'Inventario' };

const DIAS_RESUMEN = 30;

/** Stock diario de un tanque en los últimos `dias` días (incluido hoy). */
async function getHistorial(tanqueId: number, dias: number) {
  const hasta = hoyLima();
  const desde = sumarDias(hasta, -(dias - 1));
  const inicio = fechaHoraLima(desde);

  const [previo, movimientos] = await Promise.all([
    db.movimientoStock.aggregate({ where: { tanqueId, fecha: { lt: inicio } }, _sum: { galones: true } }),
    db.movimientoStock.findMany({
      where: { tanqueId, fecha: { gte: inicio } },
      select: { fecha: true, galones: true },
    }),
  ]);

  return historialStock(
    Number(previo._sum.galones ?? 0),
    movimientos.map((m) => ({ fecha: m.fecha, galones: Number(m.galones) })),
    desde,
    hasta
  );
}

async function getInventario() {
  const desde = fechaHoraLima(sumarDias(hoyLima(), -DIAS_RESUMEN));

  const [estaciones, combustibles, tanques, stock, periodo, movimientos] = await Promise.all([
    db.estacion.findMany({ orderBy: { nombre: 'asc' } }),
    db.combustible.findMany({ orderBy: { id: 'asc' } }),
    db.tanque.findMany({
      include: { estacion: true, combustible: true },
      orderBy: [{ estacionId: 'asc' }, { combustibleId: 'asc' }],
    }),
    // Stock teórico = suma de TODOS los movimientos del tanque
    db.movimientoStock.groupBy({ by: ['tanqueId'], _sum: { galones: true } }),
    db.movimientoStock.groupBy({
      by: ['tanqueId', 'tipo'],
      where: { fecha: { gte: desde } },
      _sum: { galones: true },
    }),
    db.movimientoStock.findMany({
      include: { tanque: { include: { combustible: true, estacion: true } } },
      orderBy: [{ fecha: 'desc' }, { id: 'desc' }],
      take: 25,
    }),
  ]);

  const stockPorTanque = new Map(stock.map((s) => [s.tanqueId, Number(s._sum.galones ?? 0)]));

  // Recargado vs vendido por producto (todas las estaciones) en el período
  const resumenProducto = new Map<number, { recargado: number; vendido: number }>();
  for (const fila of periodo) {
    const tanque = tanques.find((t) => t.id === fila.tanqueId);
    if (!tanque) continue;
    const actual = resumenProducto.get(tanque.combustibleId) ?? { recargado: 0, vendido: 0 };
    const galones = Number(fila._sum.galones ?? 0);
    if (fila.tipo === 'RECARGA') actual.recargado += galones;
    if (fila.tipo === 'VENTA') actual.vendido += -galones;
    resumenProducto.set(tanque.combustibleId, actual);
  }

  return { estaciones, combustibles, tanques, stockPorTanque, resumenProducto, movimientos };
}

const TIPO: Record<string, { etiqueta: string; clase: string }> = {
  RECARGA: { etiqueta: 'Recarga', clase: 'badge-success' },
  VENTA: { etiqueta: 'Venta', clase: 'badge-neutral' },
  AJUSTE: { etiqueta: 'Ajuste', clase: 'badge-warning' },
  MERMA: { etiqueta: 'Merma', clase: 'badge-danger' },
};

function opcionesTanque(tanques: Awaited<ReturnType<typeof getInventario>>['tanques']) {
  return tanques.map((tanque) => (
    <option key={tanque.id} value={tanque.id}>
      {tanque.combustible.nombre} · {tanque.estacion.nombre}
    </option>
  ));
}

export default async function InventarioPage({
  searchParams,
}: {
  searchParams: Promise<{ tanque?: string; dias?: string }>;
}) {
  const params = await searchParams;
  const { estaciones, combustibles, tanques, stockPorTanque, resumenProducto, movimientos } = await getInventario();
  const hoy = hoyLima();

  const resumenTanques: TanqueResumen[] = tanques.map((tanque) => {
    const stock = stockPorTanque.get(tanque.id) ?? 0;
    const capacidad = Number(tanque.capacidad);
    const minimo = Number(tanque.minimo);
    return {
      id: tanque.id,
      producto: tanque.combustible.nombre,
      estacion: tanque.estacion.nombre,
      estacionId: tanque.estacionId,
      stock,
      capacidad,
      minimo,
      ...estadoTanque(stock, capacidad, minimo),
    };
  });

  // Tanque a detallar: el de la URL; si no hay, el primero con alerta; si no, el primero.
  const seleccionado =
    resumenTanques.find((t) => t.id === Number(params.tanque)) ??
    resumenTanques.find((t) => t.nivel === 'revisar' || t.nivel === 'bajo') ??
    resumenTanques[0];
  const dias = PERIODOS.find((p) => p === Number(params.dias)) ?? PERIODOS[0];
  const historial = seleccionado ? await getHistorial(seleccionado.id, dias) : [];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Inventario"
        description="Stock de cada tanque: recargas registradas menos lo vendido según los contadores de las jornadas."
      />

      {seleccionado ? (
        <InventarioTanques tanques={resumenTanques} seleccionadoId={seleccionado.id} historial={historial} dias={dias} />
      ) : (
        <section className="card"><EmptyState>No hay tanques registrados.</EmptyState></section>
      )}

      <section className="grid items-start gap-6 xl:grid-cols-2">
        <div className="card">
          <h2 className="card-title"><Truck className="h-5 w-5 text-primary" aria-hidden />Registrar recarga (cisterna)</h2>
          <form action="/api/movimientos-stock" method="post" className="space-y-3">
            <input type="hidden" name="tipo" value="RECARGA" />
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="r-tanque" className="label">Producto y estación</label>
                <select id="r-tanque" name="tanqueId" className="field" required>
                  <option value="">Selecciona tanque</option>
                  {opcionesTanque(tanques)}
                </select>
              </div>
              <div>
                <label htmlFor="r-galones" className="label">Galones cargados</label>
                <input id="r-galones" name="galones" type="number" inputMode="decimal" step="0.01" min="0.01" placeholder="0.00" className="field" required />
              </div>
              <div>
                <label htmlFor="r-fecha" className="label">Fecha</label>
                <input id="r-fecha" name="fecha" type="date" defaultValue={hoy} className="field" required />
              </div>
            </div>
            <input name="nota" placeholder="Guía / factura / proveedor (opcional)" aria-label="Nota" className="field" />
            <button type="submit" className="btn-primary w-full sm:w-auto">Registrar recarga</button>
          </form>
        </div>

        <div className="card">
          <h2 className="card-title"><History className="h-5 w-5 text-primary" aria-hidden />Últimos {DIAS_RESUMEN} días por producto</h2>
          {combustibles.length === 0 ? (
            <EmptyState>No hay productos registrados.</EmptyState>
          ) : (
            <div className="-mx-4 overflow-x-auto sm:mx-0">
              <table className="w-full min-w-[360px] text-sm">
                <thead className="border-b border-border text-xs uppercase tracking-wide text-muted">
                  <tr>
                    <th className="px-4 py-2 text-left font-medium sm:px-3">Producto</th>
                    <th className="px-4 py-2 text-right font-medium sm:px-3">Cargado</th>
                    <th className="px-4 py-2 text-right font-medium sm:px-3">Vendido</th>
                    <th className="px-4 py-2 text-right font-medium sm:px-3">Stock total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border font-mono">
                  {combustibles.map((combustible) => {
                    const resumen = resumenProducto.get(combustible.id) ?? { recargado: 0, vendido: 0 };
                    const total = tanques
                      .filter((t) => t.combustibleId === combustible.id)
                      .reduce((suma, t) => suma + (stockPorTanque.get(t.id) ?? 0), 0);
                    return (
                      <tr key={combustible.id}>
                        <td className="px-4 py-2.5 font-sans font-semibold sm:px-3">{combustible.nombre}</td>
                        <td className="px-4 py-2.5 text-right text-success sm:px-3">{formatoGalones(resumen.recargado)}</td>
                        <td className="px-4 py-2.5 text-right sm:px-3">{formatoGalones(resumen.vendido)}</td>
                        <td className={`px-4 py-2.5 text-right font-bold sm:px-3 ${total < 0 ? 'text-danger' : ''}`}>{formatoGalones(total)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      <section className="grid items-start gap-6 xl:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="card">
          <h2 className="card-title"><History className="h-5 w-5 text-primary" aria-hidden />Últimos movimientos</h2>
          {movimientos.length === 0 ? (
            <EmptyState>No hay movimientos registrados.</EmptyState>
          ) : (
            <ul className="divide-y divide-border">
              {movimientos.map((movimiento) => {
                const galones = Number(movimiento.galones);
                const tipo = TIPO[movimiento.tipo] ?? { etiqueta: movimiento.tipo, clase: 'badge-neutral' };
                return (
                  <li key={movimiento.id} className="flex items-center gap-3 py-2.5 text-sm">
                    <span className={`${tipo.clase} w-20 justify-center`}>{tipo.etiqueta}</span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium">
                        {movimiento.tanque.combustible.nombre} · {movimiento.tanque.estacion.nombre}
                      </p>
                      <p className="truncate text-xs text-muted">
                        {formatoFecha(movimiento.fecha)}
                        {movimiento.jornadaId ? (
                          <>
                            {' · '}
                            <Link href={`/jornadas/${movimiento.jornadaId}`} className="text-primary hover:underline">
                              jornada #{movimiento.jornadaId}
                            </Link>
                          </>
                        ) : movimiento.nota ? (
                          ` · ${movimiento.nota}`
                        ) : null}
                      </p>
                    </div>
                    <span className={`shrink-0 font-mono font-semibold ${galones >= 0 ? 'text-success' : 'text-fg'}`}>
                      {galones >= 0 ? '+' : ''}{formatoGalones(galones)}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="space-y-6">
          <details className="card group">
            <summary className="card-title mb-0 cursor-pointer list-none">
              <SlidersHorizontal className="h-5 w-5 text-primary" aria-hidden />Ajuste o merma
            </summary>
            <p className="mt-3 text-xs text-muted">
              Usa <b>Ajuste</b> para cargar el stock inicial de un tanque o corregirlo (+/−), y <b>Merma</b> para pérdidas
              (evaporación, derrame). Las ventas no se registran aquí: se calculan al cerrar cada jornada.
            </p>
            <form action="/api/movimientos-stock" method="post" className="mt-3 space-y-3">
              <select name="tanqueId" aria-label="Tanque" className="field" required>
                <option value="">Selecciona tanque</option>
                {opcionesTanque(tanques)}
              </select>
              <div className="grid gap-3 sm:grid-cols-2">
                <select name="tipo" aria-label="Tipo" className="field" required>
                  <option value="AJUSTE">Ajuste (+/−)</option>
                  <option value="MERMA">Merma (−)</option>
                </select>
                <input name="galones" type="number" inputMode="decimal" step="0.01" placeholder="Galones" aria-label="Galones" className="field" required />
                <input name="fecha" type="date" defaultValue={hoy} aria-label="Fecha" className="field" />
                <input name="nota" placeholder="Motivo" aria-label="Motivo" className="field" />
              </div>
              <button type="submit" className="btn-ghost w-full sm:w-auto">Guardar</button>
            </form>
          </details>

          <details className="card">
            <summary className="card-title mb-0 cursor-pointer list-none">
              <PlusCircle className="h-5 w-5 text-primary" aria-hidden />Crear tanque
            </summary>
            <form action="/api/tanques" method="post" className="mt-3 space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <select name="estacionId" aria-label="Estación" className="field" required>
                  <option value="">Selecciona estación</option>
                  {estaciones.map((estacion) => (
                    <option key={estacion.id} value={estacion.id}>{estacion.nombre}</option>
                  ))}
                </select>
                <select name="combustibleId" aria-label="Combustible" className="field" required>
                  <option value="">Selecciona producto</option>
                  {combustibles.map((combustible) => (
                    <option key={combustible.id} value={combustible.id}>{combustible.nombre}</option>
                  ))}
                </select>
                <input name="capacidad" type="number" inputMode="decimal" step="0.01" min="0" placeholder="Capacidad (gal)" aria-label="Capacidad" className="field" required />
                <input name="minimo" type="number" inputMode="decimal" step="0.01" min="0" placeholder="Mínimo (gal)" aria-label="Mínimo" className="field" required />
              </div>
              <button type="submit" className="btn-ghost w-full sm:w-auto">Guardar tanque</button>
            </form>
          </details>
        </div>
      </section>
    </div>
  );
}
