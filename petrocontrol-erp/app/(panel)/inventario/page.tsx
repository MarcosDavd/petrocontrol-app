import Link from 'next/link';
import { ChevronLeft, ChevronRight, History, SlidersHorizontal, Truck } from 'lucide-react';
import { db } from '@/lib/db';
import { EmptyState, PageHeader } from '@/components/page-header';
import { InventarioTanques } from '@/components/inventario-tanques';
import { formatoFecha, formatoGalones } from '@/lib/formato';
import { paginar } from '@/lib/paginacion';
import { obtenerResumenTanques } from '@/lib/tanques-servicio';
import { hoyLima } from '@/lib/zona-horaria';

export const metadata = { title: 'Inventario' };

const MOVIMIENTOS_POR_PAGINA = 15;

async function getInventario(paginaPedida: string | undefined) {
  const [estaciones, tanques, totalMovimientos] = await Promise.all([
    db.estacion.findMany({ orderBy: { nombre: 'asc' } }),
    obtenerResumenTanques(),
    db.movimientoStock.count(),
  ]);

  // Solo se trae la página pedida (máx. 15), no todo el historial
  const paginacion = paginar(totalMovimientos, paginaPedida, MOVIMIENTOS_POR_PAGINA);
  const movimientos = await db.movimientoStock.findMany({
    include: { tanque: { include: { combustible: true, estacion: true } } },
    orderBy: [{ fecha: 'desc' }, { id: 'desc' }],
    skip: paginacion.skip,
    take: paginacion.take,
  });

  return { estaciones, tanques, movimientos, totalMovimientos, paginacion };
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
      {tanque.producto} en {tanque.estacion}
    </option>
  ));
}

export default async function InventarioPage({
  searchParams,
}: {
  searchParams: Promise<{ estacion?: string; pagina?: string }>;
}) {
  const params = await searchParams;
  const { estaciones, tanques, movimientos, totalMovimientos, paginacion } = await getInventario(params.pagina);
  const hoy = hoyLima();

  // Estación de la URL; si no hay (o no existe), la primera que tenga tanques
  const estacionId =
    estaciones.find((e) => e.id === Number(params.estacion))?.id ??
    estaciones.find((e) => tanques.some((t) => t.estacionId === e.id))?.id ??
    null;

  /** Enlace a otra página de movimientos conservando la estación elegida. */
  const hrefPagina = (pagina: number) => {
    const query = new URLSearchParams();
    if (estacionId !== null) query.set('estacion', String(estacionId));
    if (pagina > 1) query.set('pagina', String(pagina));
    const texto = query.toString();
    return texto ? `/inventario?${texto}` : '/inventario';
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Inventario"
        description="Stock de cada tanque: recargas registradas menos lo vendido según los contadores de las jornadas."
      />

      {estaciones.length === 0 ? (
        <section className="card"><EmptyState>No hay estaciones registradas.</EmptyState></section>
      ) : (
        <InventarioTanques
          tanques={tanques}
          estaciones={estaciones.map((e) => ({ id: e.id, nombre: e.nombre }))}
          estacionId={estacionId}
        />
      )}

      {/* Operación diaria: lo que entra al tanque y las correcciones */}
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
          <h2 className="card-title"><SlidersHorizontal className="h-5 w-5 text-primary" aria-hidden />Ajuste o merma</h2>
          <p className="text-sm text-muted">
            Usa <b>Ajuste</b> para cargar el stock inicial de un tanque o corregirlo (+/−), y <b>Merma</b> para pérdidas
            (evaporación, derrame). Las ventas no se registran aquí: se calculan al cerrar cada jornada.
          </p>
          <form action="/api/movimientos-stock" method="post" className="mt-4 space-y-3">
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
        </div>
      </section>

      <section>
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
                        {movimiento.tanque.combustible.nombre} en {movimiento.tanque.estacion.nombre}
                      </p>
                      <p className="truncate text-xs text-muted">
                        {formatoFecha(movimiento.fecha)}
                        {movimiento.jornadaId ? (
                          <>
                            {', '}
                            <Link href={`/jornadas/${movimiento.jornadaId}`} className="text-primary hover:underline">
                              jornada #{movimiento.jornadaId}
                            </Link>
                          </>
                        ) : movimiento.nota ? (
                          `, ${movimiento.nota}`
                        ) : null}
                      </p>
                    </div>
                    <span className={`shrink-0 tabular-nums font-semibold ${galones >= 0 ? 'text-success' : 'text-fg'}`}>
                      {galones >= 0 ? '+' : ''}{formatoGalones(galones)}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}

          {paginacion.totalPaginas > 1 && (
            <nav aria-label="Páginas de movimientos" className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-4 text-sm">
              <p className="tabular-nums text-muted">
                {paginacion.desde}–{paginacion.hasta} de {totalMovimientos}
              </p>
              <div className="flex items-center gap-2">
                {paginacion.pagina > 1 ? (
                  <Link href={hrefPagina(paginacion.pagina - 1)} scroll={false} className="btn-ghost px-3 py-2" rel="prev">
                    <ChevronLeft className="h-4 w-4" aria-hidden />Anterior
                  </Link>
                ) : (
                  <span aria-disabled className="btn-ghost pointer-events-none px-3 py-2 opacity-40">
                    <ChevronLeft className="h-4 w-4" aria-hidden />Anterior
                  </span>
                )}
                <span className="tabular-nums text-muted" aria-current="page">
                  {paginacion.pagina} / {paginacion.totalPaginas}
                </span>
                {paginacion.pagina < paginacion.totalPaginas ? (
                  <Link href={hrefPagina(paginacion.pagina + 1)} scroll={false} className="btn-ghost px-3 py-2" rel="next">
                    Siguiente<ChevronRight className="h-4 w-4" aria-hidden />
                  </Link>
                ) : (
                  <span aria-disabled className="btn-ghost pointer-events-none px-3 py-2 opacity-40">
                    Siguiente<ChevronRight className="h-4 w-4" aria-hidden />
                  </span>
                )}
              </div>
            </nav>
          )}
        </div>
      </section>
    </div>
  );
}
