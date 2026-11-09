import Link from 'next/link';
import { Building2, CircleAlert, Download, Droplets, Fuel, Scale, UserRound, Wallet } from 'lucide-react';
import { db } from '@/lib/db';
import { aCentesimas } from '@/lib/calculos';
import { calcularResumenReportes, type Acumulado } from '@/lib/reportes';
import { EmptyState, PageHeader } from '@/components/page-header';
import { AlertasJornada, tieneAlertas } from '@/components/alertas-jornada';
import { formatoFechaHora, formatoGalones, formatoSoles } from '@/lib/formato';
import { rangoFechas } from '@/lib/rango-fechas';

export const metadata = { title: 'Reportes' };

const soles = (centimos: bigint) => formatoSoles(Number(centimos) / 100);
const aCent = (value: { toString(): string } | null) => (value === null ? 0n : aCentesimas(value));

function DiferenciaCaja({ valor }: { valor: bigint }) {
  if (valor > 0n) return <span className="font-semibold text-danger">−{soles(valor)}</span>;
  if (valor < 0n) return <span className="font-semibold text-warning">+{soles(-valor)}</span>;
  return <span className="font-semibold text-success">{soles(0n)}</span>;
}

function TablaAcumulado({ filas, titulo }: { filas: { nombre: string; datos: Acumulado }[]; titulo: string }) {
  if (filas.length === 0) return <EmptyState>Sin jornadas cerradas en el período.</EmptyState>;
  return (
    <div className="-mx-4 overflow-x-auto sm:mx-0">
      <table className="w-full min-w-[460px] text-sm">
        <thead className="border-b border-border text-xs uppercase tracking-wide text-muted">
          <tr>
            <th className="px-4 py-2 text-left font-medium sm:px-3">{titulo}</th>
            <th className="px-4 py-2 text-right font-medium sm:px-3">Jornadas</th>
            <th className="px-4 py-2 text-right font-medium sm:px-3">Esperado</th>
            <th className="px-4 py-2 text-right font-medium sm:px-3">Declarado</th>
            <th className="px-4 py-2 text-right font-medium sm:px-3">Faltante / sobrante</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border font-mono">
          {filas.map(({ nombre, datos }) => (
            <tr key={nombre}>
              <td className="px-4 py-2.5 font-sans font-semibold sm:px-3">{nombre}</td>
              <td className="px-4 py-2.5 text-right sm:px-3">{datos.jornadas}</td>
              <td className="px-4 py-2.5 text-right sm:px-3">{soles(datos.esperado)}</td>
              <td className="px-4 py-2.5 text-right sm:px-3">{soles(datos.declarado)}</td>
              <td className="px-4 py-2.5 text-right sm:px-3"><DiferenciaCaja valor={datos.diferencia} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function ReportesPage({
  searchParams,
}: {
  searchParams: Promise<{ desde?: string; hasta?: string }>;
}) {
  const params = await searchParams;
  const { desde, hasta, inicio, fin } = rangoFechas(params.desde, params.hasta);

  const [jornadas, combustibles, recargas, tanques] = await Promise.all([
    db.jornada.findMany({
      where: { estado: 'CERRADA', inicio: { gte: inicio, lte: fin } },
      include: { empleado: true, estacion: true, maquina: true, lecturas: { include: { combustible: true } } },
      orderBy: { inicio: 'desc' },
    }),
    db.combustible.findMany({ orderBy: { id: 'asc' } }),
    db.movimientoStock.groupBy({
      by: ['tanqueId'],
      where: { tipo: 'RECARGA', fecha: { gte: inicio, lte: fin } },
      _sum: { galones: true },
    }),
    db.tanque.findMany({ select: { id: true, combustibleId: true } }),
  ]);

  const resumen = calcularResumenReportes({
    jornadas: jornadas.map((j) => ({
      importeEsperado: aCent(j.importeEsperado),
      importeDeclarado: aCent(j.importeDeclarado),
      estacionId: j.estacionId,
      empleadoId: j.empleadoId,
    })),
  });

  // Por producto: galones e importe vendidos (contadores) y galones recargados
  const porProducto = new Map<number, { galones: bigint; importe: bigint; recargado: number }>();
  const producto = (id: number) => {
    const actual = porProducto.get(id) ?? { galones: 0n, importe: 0n, recargado: 0 };
    porProducto.set(id, actual);
    return actual;
  };
  for (const jornada of jornadas) {
    for (const lectura of jornada.lecturas) {
      const p = producto(lectura.combustibleId);
      p.galones += aCent(lectura.galones);
      p.importe += aCent(lectura.importe);
    }
  }
  for (const recarga of recargas) {
    const tanque = tanques.find((t) => t.id === recarga.tanqueId);
    if (tanque) producto(tanque.combustibleId).recargado += Number(recarga._sum.galones ?? 0);
  }
  const galonesTotales = [...porProducto.values()].reduce((total, p) => total + p.galones, 0n);

  const nombres = {
    empleado: new Map(jornadas.map((j) => [j.empleadoId, j.empleado.nombre])),
    estacion: new Map(jornadas.map((j) => [j.estacionId, j.estacion.nombre])),
  };
  const filasEmpleado = [...resumen.porEmpleado.entries()]
    .map(([id, datos]) => ({ nombre: nombres.empleado.get(id) ?? `#${id}`, datos }))
    .sort((a, b) => (b.datos.diferencia > a.datos.diferencia ? 1 : b.datos.diferencia < a.datos.diferencia ? -1 : 0));
  const filasEstacion = [...resumen.porEstacion.entries()].map(([id, datos]) => ({
    nombre: nombres.estacion.get(id) ?? `#${id}`,
    datos,
  }));

  const conAlertas = jornadas.filter(tieneAlertas);

  const kpis = [
    { label: 'Galones vendidos', valor: formatoGalones(Number(galonesTotales) / 100), icon: Droplets, tono: 'bg-primary-light text-primary', texto: 'text-fg' },
    { label: 'Venta esperada', valor: soles(resumen.total.esperado), icon: Fuel, tono: 'bg-primary-light text-primary', texto: 'text-fg' },
    { label: 'Declarado', valor: soles(resumen.total.declarado), icon: Wallet, tono: 'bg-surface-alt text-fg', texto: 'text-fg' },
    {
      label: resumen.total.diferencia > 0n ? 'Faltante neto' : resumen.total.diferencia < 0n ? 'Sobrante neto' : 'Caja cuadrada',
      valor: soles(resumen.total.diferencia < 0n ? -resumen.total.diferencia : resumen.total.diferencia),
      icon: Scale,
      tono: resumen.total.diferencia > 0n ? 'bg-danger-light text-danger' : 'bg-accent-light text-warning',
      texto: resumen.total.diferencia > 0n ? 'text-danger' : resumen.total.diferencia < 0n ? 'text-warning' : 'text-success',
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Reportes"
        description="Ventas según contadores, cuadre de caja y posibles faltantes."
        actions={
          <form className="flex flex-wrap items-end gap-2" method="get">
            <div>
              <label htmlFor="desde" className="label">Fecha de inicio</label>
              <input id="desde" name="desde" type="date" defaultValue={desde} className="field py-2" required />
            </div>
            <div>
              <label htmlFor="hasta" className="label">Fecha de fin</label>
              <input id="hasta" name="hasta" type="date" defaultValue={hasta} className="field py-2" required />
            </div>
            <button type="submit" className="btn-ghost py-2">Filtrar</button>
            {/* Mismo formulario y mismas fechas, pero descarga el CSV en vez de filtrar la página */}
            <button type="submit" formAction="/api/reportes/jornadas" className="btn-primary py-2">
              <Download className="h-4 w-4" aria-hidden />
              Generar CSV
            </button>
          </form>
        }
      />

      <section className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4" aria-label="Totales">
        {kpis.map(({ label, valor, icon: Icon, tono, texto }) => (
          <article key={label} className="card">
            <div className="flex items-center gap-2">
              <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${tono}`}>
                <Icon className="h-4 w-4" aria-hidden />
              </span>
              <p className="text-sm text-muted">{label}</p>
            </div>
            <p className={`mt-3 break-all font-mono text-lg font-bold sm:text-2xl ${texto}`}>{valor}</p>
          </article>
        ))}
      </section>

      <section className="card">
        <h2 className="card-title"><CircleAlert className="h-5 w-5 text-danger" aria-hidden />Jornadas con alertas ({conAlertas.length})</h2>
        {conAlertas.length === 0 ? (
          <EmptyState>Sin faltantes, saltos de contador ni diferencias de totalizador en el período.</EmptyState>
        ) : (
          <ul className="divide-y divide-border">
            {conAlertas.map((jornada) => (
              <li key={jornada.id} className="flex flex-col gap-2 py-2.5 sm:flex-row sm:items-center sm:justify-between">
                <Link href={`/jornadas/${jornada.id}`} className="min-w-0 text-sm hover:text-primary">
                  <span className="font-semibold">{jornada.empleado.nombre}</span>
                  <span className="text-muted"> · {jornada.maquina.nombre} · {jornada.estacion.nombre} · {formatoFechaHora(jornada.inicio)}</span>
                </Link>
                <AlertasJornada jornada={jornada} compacto />
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="card">
        <h2 className="card-title"><Fuel className="h-5 w-5 text-primary" aria-hidden />Por producto</h2>
        <div className="-mx-4 overflow-x-auto sm:mx-0">
          <table className="w-full min-w-[420px] text-sm">
            <thead className="border-b border-border text-xs uppercase tracking-wide text-muted">
              <tr>
                <th className="px-4 py-2 text-left font-medium sm:px-3">Producto</th>
                <th className="px-4 py-2 text-right font-medium sm:px-3">Galones vendidos</th>
                <th className="px-4 py-2 text-right font-medium sm:px-3">Importe</th>
                <th className="px-4 py-2 text-right font-medium sm:px-3">Galones recargados</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border font-mono">
              {combustibles.map((combustible) => {
                const datos = porProducto.get(combustible.id) ?? { galones: 0n, importe: 0n, recargado: 0 };
                return (
                  <tr key={combustible.id}>
                    <td className="px-4 py-2.5 font-sans font-semibold sm:px-3">{combustible.nombre}</td>
                    <td className="px-4 py-2.5 text-right sm:px-3">{formatoGalones(Number(datos.galones) / 100)}</td>
                    <td className="px-4 py-2.5 text-right sm:px-3">{soles(datos.importe)}</td>
                    <td className="px-4 py-2.5 text-right text-success sm:px-3">{formatoGalones(datos.recargado)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid items-start gap-6 xl:grid-cols-2">
        <div className="card">
          <h2 className="card-title"><UserRound className="h-5 w-5 text-primary" aria-hidden />Caja por empleado</h2>
          <TablaAcumulado filas={filasEmpleado} titulo="Empleado" />
        </div>
        <div className="card">
          <h2 className="card-title"><Building2 className="h-5 w-5 text-primary" aria-hidden />Caja por estación</h2>
          <TablaAcumulado filas={filasEstacion} titulo="Estación" />
        </div>
      </section>
    </div>
  );
}
