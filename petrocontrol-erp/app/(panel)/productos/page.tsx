import { History, Plus, Tag } from 'lucide-react';
import { db } from '@/lib/db';
import { EmptyState, PageHeader } from '@/components/page-header';
import { formatoFecha, formatoSoles } from '@/lib/formato';

export const metadata = { title: 'Productos y precios' };

const HISTORIAL_MAXIMO = 40;

export default async function ProductosPage() {
  const ahora = new Date();
  const [estaciones, combustibles, precios, historial] = await Promise.all([
    db.estacion.findMany({ select: { id: true, nombre: true, activa: true }, orderBy: { nombre: 'asc' } }),
    db.combustible.findMany({
      include: { _count: { select: { maquinas: true, tanques: true } } },
      orderBy: { id: 'asc' },
    }),
    // Todos los precios, del más reciente al más antiguo (para elegir el vigente de cada estación y producto)
    db.historialPrecio.findMany({ orderBy: { vigenteDesde: 'desc' } }),
    db.historialPrecio.findMany({
      include: { estacion: { select: { nombre: true } }, combustible: { select: { nombre: true } } },
      orderBy: [{ vigenteDesde: 'desc' }, { id: 'desc' }],
      take: HISTORIAL_MAXIMO,
    }),
  ]);

  const buscar = (estacionId: number, combustibleId: number) => {
    const deEsteProducto = precios.filter((p) => p.estacionId === estacionId && p.combustibleId === combustibleId);
    return {
      // Vigente = el más reciente que ya empezó; puede haber uno programado a futuro
      vigente: deEsteProducto.find((p) => p.vigenteDesde <= ahora),
      programado: deEsteProducto.findLast((p) => p.vigenteDesde > ahora),
    };
  };
  const faltantes = estaciones.reduce(
    (total, e) => total + combustibles.filter((c) => !buscar(e.id, c.id).vigente).length,
    0
  );

  return (
    <div className="space-y-6">
      <PageHeader
        title="Productos y precios"
        description="Combustibles que vende el grifo y su precio por galón en cada estación."
      />

      <section className="card">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 className="card-title mb-0"><Tag className="h-5 w-5 text-primary" aria-hidden />Precio vigente por estación</h2>
          {faltantes > 0 && (
            <p className="text-sm text-danger">
              {faltantes === 1 ? '1 precio falta' : `${faltantes} precios faltan`}: sin precio no se pueden cerrar jornadas.
            </p>
          )}
        </div>
        {combustibles.length === 0 || estaciones.length === 0 ? (
          <EmptyState>
            {combustibles.length === 0 ? 'No hay productos registrados.' : 'No hay estaciones registradas.'}
          </EmptyState>
        ) : (
          <div className="-mx-4 overflow-x-auto sm:mx-0">
            <table className="w-full min-w-[420px] text-sm">
              <thead className="border-b border-border text-xs font-medium text-muted">
                <tr>
                  <th className="px-4 py-2 text-left font-medium sm:px-3">Producto</th>
                  {estaciones.map((estacion) => (
                    <th key={estacion.id} className="px-4 py-2 text-right font-medium sm:px-3">
                      {estacion.nombre}
                      {!estacion.activa && <span className="block font-normal">deshabilitada</span>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {combustibles.map((combustible) => (
                  <tr key={combustible.id}>
                    <td className="px-4 py-3 sm:px-3">
                      <span className="block font-semibold text-fg">{combustible.nombre}</span>
                      <span className="hidden text-xs text-muted sm:block">
                        {combustible._count.maquinas} máquina(s) y {combustible._count.tanques} tanque(s)
                      </span>
                    </td>
                    {estaciones.map((estacion) => {
                      const { vigente, programado } = buscar(estacion.id, combustible.id);
                      return (
                        <td key={estacion.id} className="whitespace-nowrap px-4 py-3 text-right align-top sm:px-3">
                          {vigente ? (
                            <>
                              <span className="block text-base font-semibold tabular-nums text-fg">
                                {formatoSoles(vigente.precio)}
                              </span>
                              <span className="block text-xs text-muted">desde {formatoFecha(vigente.vigenteDesde)}</span>
                            </>
                          ) : (
                            <span className="badge-danger">Sin precio</span>
                          )}
                          {programado && (
                            <span className="mt-1 block text-xs font-medium text-warning">
                              {formatoSoles(programado.precio)} desde {formatoFecha(programado.vigenteDesde)}
                            </span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="grid items-start gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="card">
          <h2 className="card-title"><Tag className="h-5 w-5 text-primary" aria-hidden />Registrar precio</h2>
          <form action="/api/precios" method="post" className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="p-estacion" className="label">Estación</label>
                <select id="p-estacion" name="estacionId" className="field" required>
                  <option value="">Selecciona estación</option>
                  {estaciones.map((estacion) => (
                    <option key={estacion.id} value={estacion.id}>{estacion.nombre}</option>
                  ))}
                  {estaciones.length > 1 && <option value="todas">Todas las estaciones (mismo precio)</option>}
                </select>
              </div>
              <div>
                <label htmlFor="p-producto" className="label">Producto</label>
                <select id="p-producto" name="combustibleId" className="field" required>
                  <option value="">Selecciona producto</option>
                  {combustibles.map((combustible) => (
                    <option key={combustible.id} value={combustible.id}>{combustible.nombre}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="p-precio" className="label">Precio por galón (S/)</label>
                <input
                  id="p-precio"
                  name="precio"
                  type="number"
                  inputMode="decimal"
                  step="0.01"
                  min="0.01"
                  placeholder="0.00"
                  className="field"
                  required
                />
              </div>
              <div>
                <label htmlFor="p-desde" className="label">Vigente desde</label>
                <input id="p-desde" name="vigenteDesde" type="date" className="field" />
              </div>
            </div>
            <p className="text-xs text-muted">
              Sin fecha, rige desde ahora. Usa una fecha pasada para cargar jornadas antiguas o una futura para programar un cambio.
            </p>
            <button type="submit" className="btn-accent w-full sm:w-auto">Registrar precio</button>
          </form>
        </div>

        <div className="card">
          <h2 className="card-title"><Plus className="h-5 w-5 text-primary" aria-hidden />Nuevo producto</h2>
          <form action="/api/combustibles" method="post" className="flex flex-col gap-3 sm:flex-row">
            <input name="nombre" placeholder="Nombre del producto" aria-label="Nombre del producto" className="field" required />
            <button type="submit" className="btn-ghost shrink-0">Crear</button>
          </form>
          <p className="mt-2 text-xs text-muted">
            Después regístrale un precio en cada estación, asígnalo a sus máquinas y crea su tanque en Estaciones y máquinas.
          </p>
        </div>
      </section>

      <section className="card">
        <h2 className="card-title"><History className="h-5 w-5 text-primary" aria-hidden />Historial de precios</h2>
        {historial.length === 0 ? (
          <EmptyState>No hay precios registrados.</EmptyState>
        ) : (
          <>
            <div className="-mx-4 overflow-x-auto sm:mx-0">
              <table className="w-full min-w-[420px] text-sm">
                <thead className="border-b border-border text-xs font-medium text-muted">
                  <tr>
                    <th className="px-4 py-2 text-left font-medium sm:px-3">Vigente desde</th>
                    <th className="px-4 py-2 text-left font-medium sm:px-3">Estación</th>
                    <th className="px-4 py-2 text-left font-medium sm:px-3">Producto</th>
                    <th className="px-4 py-2 text-right font-medium sm:px-3">Precio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {historial.map((precio) => (
                    <tr key={precio.id}>
                      <td className="px-4 py-2.5 tabular-nums text-muted sm:px-3">{formatoFecha(precio.vigenteDesde)}</td>
                      <td className="px-4 py-2.5 sm:px-3">{precio.estacion.nombre}</td>
                      <td className="px-4 py-2.5 font-medium sm:px-3">{precio.combustible.nombre}</td>
                      <td className="px-4 py-2.5 text-right font-semibold tabular-nums sm:px-3">{formatoSoles(precio.precio)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {historial.length === HISTORIAL_MAXIMO && (
              <p className="mt-3 text-xs text-muted">Se muestran los {HISTORIAL_MAXIMO} cambios más recientes.</p>
            )}
          </>
        )}
      </section>
    </div>
  );
}
