import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Banknote, CircleCheck, Gauge, Pencil, StopCircle, Trash2 } from 'lucide-react';
import { db } from '@/lib/db';
import { PageHeader } from '@/components/page-header';
import { AlertasJornada } from '@/components/alertas-jornada';
import { formatoFechaHora, formatoGalones, formatoNumero, formatoSoles } from '@/lib/formato';
import { eliminarPagoAction } from '../actions';
import { CerrarJornadaForm } from './cerrar-jornada-form';
import { AgregarPagoForm } from './agregar-pago-form';
import { EliminarJornadaBoton } from './eliminar-jornada-boton';
import { ETIQUETA_MEDIO, type MedioPago } from '@/lib/pagos';
import { sugerirFechaFin } from '@/lib/turnos';
import { fechaHoraLima } from '@/lib/zona-horaria';
import { puedeEliminarJornada } from '@/lib/jornada';
import { exigirUsuario } from '@/lib/sesion';
import { rangoFechaEmpleado } from '@/lib/permisos';

export const metadata = { title: 'Detalle de jornada' };

export default async function JornadaDetallePage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ editada?: string }>;
}) {
  const usuario = await exigirUsuario();
  const esAdmin = usuario.rol === 'ADMIN';
  const { id } = await params;
  const { editada } = await searchParams;
  const jornadaId = Number(id);
  if (!Number.isInteger(jornadaId) || jornadaId <= 0) notFound();

  const jornada = await db.jornada.findUnique({
    where: { id: jornadaId },
    include: {
      empleado: true,
      maquina: true,
      estacion: true,
      pagos: { orderBy: { id: 'asc' } },
      lecturas: { include: { combustible: true }, orderBy: { combustibleId: 'asc' } },
    },
  });
  // Un empleado solo ve sus propias jornadas
  if (!jornada || (!esAdmin && jornada.empleadoId !== usuario.empleadoId)) notFound();

  const abierta = jornada.estado === 'ABIERTA';

  // Resumen del cierre: el cierre usa el precio vigente al FIN de la jornada. Aquí todavía no hay fin,
  // así que se estima con la fecha de cierre sugerida y la hora de salida del horario (o ahora, sin horario).
  const fechaFinSugerida = abierta ? sugerirFechaFin(jornada.inicio, jornada.empleado.horarioFin) : '';
  const finEstimado =
    abierta && jornada.empleado.horarioFin ? fechaHoraLima(fechaFinSugerida, jornada.empleado.horarioFin) : new Date();
  const precios = abierta
    ? await db.historialPrecio.findMany({
        where: {
          estacionId: jornada.estacionId,
          combustibleId: { in: jornada.lecturas.map((l) => l.combustibleId) },
          vigenteDesde: { lte: finEstimado },
        },
        orderBy: { vigenteDesde: 'desc' },
      })
    : [];
  const precioDe = (combustibleId: number) => precios.find((p) => p.combustibleId === combustibleId)?.precio.toString() ?? null;
  const declarado = jornada.pagos.reduce((total, pago) => total + Number(pago.monto), 0);
  const esperado = jornada.importeEsperado === null ? null : Number(jornada.importeEsperado);
  const diferencia = esperado === null ? null : esperado - declarado;

  return (
    <div className="space-y-6">
      <Link href="/jornadas" className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-primary">
        <ArrowLeft className="h-4 w-4" aria-hidden /> {esAdmin ? 'Jornadas' : 'Mis jornadas'}
      </Link>

      <PageHeader
        title={`${jornada.empleado.nombre}, ${jornada.maquina.nombre}`}
        description={`${jornada.estacion.nombre}. Desde ${formatoFechaHora(jornada.inicio)}${
          jornada.fin ? ` hasta ${formatoFechaHora(jornada.fin)}` : ', en curso'
        }`}
        actions={
          <div className="flex items-center gap-3">
            <span className={abierta ? 'badge-warning text-sm' : 'badge-success text-sm'}>{abierta ? 'Abierta' : 'Cerrada'}</span>
            <Link href={`/jornadas/${jornada.id}/editar`} className="btn-ghost px-3 py-2">
              <Pencil className="h-4 w-4" aria-hidden />{esAdmin ? 'Editar jornada' : 'Corregir'}
            </Link>
            {esAdmin && puedeEliminarJornada(jornada.createdAt) && (
              <EliminarJornadaBoton
                jornadaId={jornada.id}
                descripcion={`${jornada.empleado.nombre} en ${jornada.maquina.nombre} (${jornada.estacion.nombre}), ${formatoFechaHora(jornada.inicio)}`}
                cerrada={!abierta}
              />
            )}
          </div>
        }
      />

      {editada && (
        <p role="status" className="flex items-center gap-2 border-l-4 border-primary bg-primary-light px-4 py-3 text-sm text-fg">
          <CircleCheck className="h-4 w-4 shrink-0 text-primary" aria-hidden />
          Cambios guardados.{!abierta && ' Se recalcularon galones, importes, stock y cuadre de caja.'}
        </p>
      )}

      {!abierta && <AlertasJornada jornada={jornada} />}

      {/* Planilla: equivalente a una fila del Excel por producto */}
      <section className="card">
        <h2 className="card-title"><Gauge className="h-5 w-5 text-primary" aria-hidden />Lecturas de contadores</h2>
        <div className="-mx-4 overflow-x-auto sm:mx-0">
          <table className="w-full min-w-[720px] text-sm">
            <thead className="text-xs font-medium text-muted">
              <tr>
                <th rowSpan={2} className="border-b border-border px-3 py-2 text-left font-medium">Producto</th>
                <th colSpan={2} className="border-b border-border px-3 py-1 text-center font-medium">Anterior</th>
                <th colSpan={2} className="border-b border-border px-3 py-1 text-center font-medium">Actual</th>
                <th rowSpan={2} className="border-b border-border bg-accent-light px-3 py-2 text-right font-semibold text-fg">Galones</th>
                <th rowSpan={2} className="border-b border-border px-3 py-2 text-right font-medium">Precio</th>
                <th rowSpan={2} className="border-b border-border px-3 py-2 text-right font-medium">Importe</th>
                <th rowSpan={2} className="border-b border-border px-3 py-2 text-right font-medium" title="ANTERIOR de esta jornada − ACTUAL de la jornada previa">Salto</th>
              </tr>
              <tr>
                <th className="border-b border-border px-3 py-1 text-right font-medium">Atrás</th>
                <th className="border-b border-border px-3 py-1 text-right font-medium">Adelante</th>
                <th className="border-b border-border px-3 py-1 text-right font-medium">Atrás</th>
                <th className="border-b border-border px-3 py-1 text-right font-medium">Adelante</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border tabular-nums">
              {jornada.lecturas.map((lectura) => {
                const salto = lectura.diferenciaApertura === null ? null : Number(lectura.diferenciaApertura);
                return (
                  <tr key={lectura.id}>
                    <td className="px-3 py-2.5 font-sans font-semibold">
                      {lectura.combustible.nombre}
                      {lectura.huboReinicio && <span className="badge-neutral ml-2">Reinicio</span>}
                    </td>
                    <td className="px-3 py-2.5 text-right">{formatoNumero(lectura.entradaAtras)}</td>
                    <td className="px-3 py-2.5 text-right">{formatoNumero(lectura.entradaAdelante)}</td>
                    <td className="px-3 py-2.5 text-right">{formatoNumero(lectura.salidaAtras)}</td>
                    <td className="px-3 py-2.5 text-right">{formatoNumero(lectura.salidaAdelante)}</td>
                    <td className="bg-accent-light/60 px-3 py-2.5 text-right font-bold">{formatoNumero(lectura.galones)}</td>
                    <td className="px-3 py-2.5 text-right">{formatoSoles(lectura.precioUnitario)}</td>
                    <td className="px-3 py-2.5 text-right">{formatoSoles(lectura.importe)}</td>
                    <td className={`px-3 py-2.5 text-right ${salto !== null && Math.abs(salto) > 0.004 ? 'font-bold text-danger' : 'text-muted'}`}>
                      {salto === null ? '—' : formatoNumero(salto)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            {!abierta && (
              <tfoot className="tabular-nums font-semibold">
                <tr>
                  <td className="px-3 py-2.5 font-sans" colSpan={5}>Total</td>
                  <td className="bg-accent-light/60 px-3 py-2.5 text-right">{formatoNumero(jornada.galonesProductos)}</td>
                  <td />
                  <td className="px-3 py-2.5 text-right">{formatoSoles(jornada.importeEsperado)}</td>
                  <td />
                </tr>
              </tfoot>
            )}
          </table>
        </div>
        {(jornada.totalizadorEntrada !== null || jornada.totalizadorSalida !== null) && (
          <p className="mt-3 text-xs text-muted">
            Totalizador general: de {formatoNumero(jornada.totalizadorEntrada)} a {formatoNumero(jornada.totalizadorSalida)}
            {jornada.galonesTotalizador !== null && ` (${formatoGalones(jornada.galonesTotalizador)})`}
          </p>
        )}
        {jornada.notas && <p className="mt-2 text-sm text-muted">Notas: {jornada.notas}</p>}
      </section>

      {abierta && (
        <section className="card">
          <h2 className="card-title"><StopCircle className="h-5 w-5 text-primary" aria-hidden />Cerrar jornada</h2>
          <CerrarJornadaForm
            jornadaId={jornada.id}
            modulo={jornada.maquina.moduloContador.toString()}
            direccion={jornada.maquina.direccionProductos}
            conTotalizador={jornada.totalizadorEntrada !== null}
            empleado={jornada.empleado.nombre}
            horarioFin={jornada.empleado.horarioFin}
            fechaSugerida={fechaFinSugerida}
            rangoFecha={esAdmin ? undefined : rangoFechaEmpleado()}
            notas={jornada.notas ?? ''}
            lecturas={jornada.lecturas.map((lectura) => ({
              combustibleId: lectura.combustibleId,
              nombre: lectura.combustible.nombre,
              entradaAtras: lectura.entradaAtras.toString(),
              entradaAdelante: lectura.entradaAdelante.toString(),
              precio: precioDe(lectura.combustibleId),
            }))}
            pagosRegistrados={jornada.pagos.map((pago) => ({
              id: pago.id,
              medio: pago.medio,
              monto: pago.monto.toString(),
              nota: pago.nota,
            }))}
          />
        </section>
      )}

      {!abierta && (
        <section className="card">
          <h2 className="card-title"><Banknote className="h-5 w-5 text-primary" aria-hidden />Pagos y cuadre de caja</h2>

          <div className="grid grid-cols-3 gap-2 rounded-xl border border-border bg-surface-alt/60 p-3 text-center">
            <div>
              <p className="text-xs text-muted">Esperado</p>
              <p className="tabular-nums font-semibold">{esperado === null ? 'Al cerrar' : formatoSoles(esperado)}</p>
            </div>
            <div>
              <p className="text-xs text-muted">Declarado</p>
              <p className="tabular-nums font-semibold">{formatoSoles(declarado)}</p>
            </div>
            <div>
              <p className="text-xs text-muted">
                {diferencia === null ? 'Diferencia' : diferencia > 0.004 ? 'Faltante' : diferencia < -0.004 ? 'Sobrante' : 'Cuadrado'}
              </p>
              <p className={`tabular-nums font-semibold ${diferencia === null ? '' : diferencia > 0.004 ? 'text-danger' : diferencia < -0.004 ? 'text-warning' : 'text-success'}`}>
                {diferencia === null ? '—' : formatoSoles(Math.abs(diferencia))}
              </p>
            </div>
          </div>

          {jornada.pagos.length > 0 && (
            <ul className="mt-3 divide-y divide-border">
              {jornada.pagos.map((pago) => (
                <li key={pago.id} className="flex items-center justify-between gap-2 py-2 text-sm">
                  <span>
                    {ETIQUETA_MEDIO[pago.medio as MedioPago] ?? pago.medio}
                    {pago.nota && <span className="text-muted"> ({pago.nota})</span>}
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="tabular-nums font-semibold">{formatoSoles(pago.monto)}</span>
                    <form action={eliminarPagoAction}>
                      <input type="hidden" name="pagoId" value={pago.id} />
                      <input type="hidden" name="jornadaId" value={jornada.id} />
                      <button type="submit" className="rounded p-1 text-muted hover:bg-danger-light hover:text-danger" aria-label="Eliminar pago">
                        <Trash2 className="h-4 w-4" aria-hidden />
                      </button>
                    </form>
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* Corrección posterior: un pago que se olvidó al cerrar o que hay que volver a cargar */}
          <details className="mt-4">
            <summary className="cursor-pointer text-sm font-medium text-primary">Agregar un pago olvidado</summary>
            <AgregarPagoForm jornadaId={jornada.id} />
          </details>
        </section>
      )}
    </div>
  );
}
