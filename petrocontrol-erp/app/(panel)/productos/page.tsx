import { History, Plus, Tag } from 'lucide-react';
import { db } from '@/lib/db';
import { EmptyState, PageHeader } from '@/components/page-header';
import { formatoFecha, formatoSoles } from '@/lib/formato';

export const metadata = { title: 'Productos y precios' };

export default async function ProductosPage() {
  const ahora = new Date();
  const combustibles = await db.combustible.findMany({
    include: {
      precios: { orderBy: { vigenteDesde: 'desc' } },
      _count: { select: { maquinas: true, tanques: true } },
    },
    orderBy: { id: 'asc' },
  });

  return (
    <div className="space-y-6">
      <PageHeader title="Productos y precios" description="Combustibles que vende el grifo y su precio por galón." />

      <section className="grid items-start gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="card">
          <h2 className="card-title"><Tag className="h-5 w-5 text-primary" aria-hidden />Precio vigente</h2>
          {combustibles.length === 0 ? (
            <EmptyState>No hay productos registrados.</EmptyState>
          ) : (
            <ul className="grid gap-3 sm:grid-cols-2">
              {combustibles.map((combustible) => {
                // Vigente = el más reciente que ya empezó; puede haber uno programado a futuro
                const vigente = combustible.precios.find((p) => p.vigenteDesde <= ahora);
                const programado = combustible.precios.find((p) => p.vigenteDesde > ahora);
                return (
                  <li key={combustible.id} className="item p-4">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-base font-bold">{combustible.nombre}</p>
                      {!vigente && <span className="badge-danger">Sin precio</span>}
                    </div>
                    <p className={`mt-1 tabular-nums text-2xl font-bold ${vigente ? 'text-primary' : 'text-muted'}`}>
                      {vigente ? formatoSoles(vigente.precio) : '—'}
                      <span className="ml-1 font-sans text-xs font-normal text-muted">/ galón</span>
                    </p>
                    <p className="mt-1 text-xs text-muted">
                      {vigente ? `Desde ${formatoFecha(vigente.vigenteDesde)}` : 'Registra un precio para poder cerrar jornadas.'}
                    </p>
                    {programado && (
                      <p className="mt-1 text-xs font-medium text-warning">
                        Programado: {formatoSoles(programado.precio)} desde {formatoFecha(programado.vigenteDesde)}
                      </p>
                    )}
                    <p className="mt-2 text-xs text-muted">
                      {combustible._count.maquinas} máquina(s) y {combustible._count.tanques} tanque(s)
                    </p>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="space-y-6">
          <div className="card">
            <h2 className="card-title"><Tag className="h-5 w-5 text-primary" aria-hidden />Registrar precio</h2>
            <form action="/api/precios" method="post" className="space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <select name="combustibleId" aria-label="Producto" className="field" required>
                  <option value="">Selecciona producto</option>
                  {combustibles.map((combustible) => (
                    <option key={combustible.id} value={combustible.id}>{combustible.nombre}</option>
                  ))}
                </select>
                <input
                  name="precio"
                  type="number"
                  inputMode="decimal"
                  step="0.01"
                  min="0"
                  placeholder="Precio por galón (S/)"
                  aria-label="Precio por galón"
                  className="field"
                  required
                />
                <div className="sm:col-span-2">
                  <label htmlFor="vigenteDesde" className="label">
                    Vigente desde (vacío = ahora; usa una fecha pasada para cargar jornadas antiguas)
                  </label>
                  <input id="vigenteDesde" name="vigenteDesde" type="date" className="field" />
                </div>
              </div>
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
              Después asígnalo a sus máquinas en Estaciones y máquinas y crea su tanque en Inventario.
            </p>
          </div>
        </div>
      </section>

      <section className="card">
        <h2 className="card-title"><History className="h-5 w-5 text-primary" aria-hidden />Historial de precios</h2>
        {combustibles.every((c) => c.precios.length === 0) ? (
          <EmptyState>No hay precios registrados.</EmptyState>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {combustibles
              .filter((c) => c.precios.length > 0)
              .map((combustible) => (
                <div key={combustible.id}>
                  <h3 className="mb-2 text-sm font-semibold text-fg">{combustible.nombre}</h3>
                  <ul className="divide-y divide-border rounded-xl border border-border">
                    {combustible.precios.map((precio) => (
                      <li key={precio.id} className="flex items-center justify-between px-3 py-2 text-sm">
                        <span className="text-muted">{formatoFecha(precio.vigenteDesde)}</span>
                        <span className="tabular-nums font-semibold">{formatoSoles(precio.precio)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        )}
      </section>
    </div>
  );
}
