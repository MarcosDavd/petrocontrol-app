'use client';

import { useActionState, useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { aCentesimas, calcularImporte, deCentesimas, type DireccionContador } from '@/lib/calculos';
import { calcularGalonesLectura } from '@/lib/jornada';
import { formatoSoles } from '@/lib/formato';
import { ETIQUETA_MEDIO, type MedioPago } from '@/lib/pagos';
import { cerrarJornadaAction, eliminarPagoAction, type EstadoFormulario } from '../actions';

export type LecturaAbierta = {
  combustibleId: number;
  nombre: string;
  entradaAtras: string;
  entradaAdelante: string;
  /** Precio por galón de la estación vigente al inicio de la jornada (null = sin precio). */
  precio: string | null;
};

export type PagoRegistrado = { id: number; medio: string; monto: string; nota: string | null };

type Valores = { atras: string; adelante: string; reinicio: boolean };
type PagoNuevo = { clave: number; medio: MedioPago; monto: string; nota: string };

const MEDIOS = Object.entries(ETIQUETA_MEDIO) as [MedioPago, string][];
const MONTO_REGEX = /^\d+([.,]\d{1,2})?$/;

/** Galones vendidos según las lecturas escritas (null si faltan datos o hay un error). */
function calcularGalones(lectura: LecturaAbierta, valores: Valores, modulo: string, direccion: DireccionContador) {
  if (!valores.atras || !valores.adelante) return null;
  try {
    const galones = calcularGalonesLectura(
      {
        entradaAtras: aCentesimas(lectura.entradaAtras),
        entradaAdelante: aCentesimas(lectura.entradaAdelante),
        salidaAtras: aCentesimas(valores.atras),
        salidaAdelante: aCentesimas(valores.adelante),
        huboReinicio: valores.reinicio,
      },
      { modulo: BigInt(modulo), direccion, producto: lectura.nombre }
    );
    return { ok: true as const, galones };
  } catch (error) {
    return { ok: false as const, texto: error instanceof Error ? error.message : 'Valor inválido' };
  }
}

const montoCentesimas = (monto: string) => (MONTO_REGEX.test(monto.trim()) ? aCentesimas(monto.trim()) : null);

export function CerrarJornadaForm({
  jornadaId,
  lecturas,
  pagosRegistrados,
  modulo,
  direccion,
  conTotalizador,
  notas: notasIniciales,
  empleado,
  horarioFin,
  fechaSugerida,
}: {
  jornadaId: number;
  lecturas: LecturaAbierta[];
  /** Pagos guardados antes del cierre (versiones anteriores de la app); se suman a los nuevos. */
  pagosRegistrados: PagoRegistrado[];
  modulo: string;
  direccion: DireccionContador;
  conTotalizador: boolean;
  notas: string;
  empleado: string;
  /** Hora de fin del horario del empleado (null si no tiene) */
  horarioFin: string | null;
  fechaSugerida: string;
}) {
  const [estado, formAction, pending] = useActionState<EstadoFormulario, FormData>(cerrarJornadaAction, {});
  const [valores, setValores] = useState<Record<number, Valores>>(() =>
    Object.fromEntries(lecturas.map((l) => [l.combustibleId, { atras: '', adelante: '', reinicio: false }]))
  );
  const [fecha, setFecha] = useState(fechaSugerida);
  const [horaManual, setHoraManual] = useState('');
  const [totalizador, setTotalizador] = useState('');
  const [notas, setNotas] = useState(notasIniciales);
  const [pagos, setPagos] = useState<PagoNuevo[]>([]);
  const [siguienteClave, setSiguienteClave] = useState(1);

  const actualizar = (id: number, cambio: Partial<Valores>) =>
    setValores((prev) => ({ ...prev, [id]: { ...prev[id], ...cambio } }));

  const agregarPago = () => {
    setPagos((prev) => [...prev, { clave: siguienteClave, medio: 'EFECTIVO', monto: '', nota: '' }]);
    setSiguienteClave((n) => n + 1);
  };
  const cambiarPago = (clave: number, cambio: Partial<PagoNuevo>) =>
    setPagos((prev) => prev.map((p) => (p.clave === clave ? { ...p, ...cambio } : p)));
  const quitarPago = (clave: number) => setPagos((prev) => prev.filter((p) => p.clave !== clave));

  // Resumen en vivo: venta según contadores (galones x precio de la estación) vs. lo que entrega el empleado
  const calculos = lecturas.map((lectura) => ({
    lectura,
    resultado: calcularGalones(lectura, valores[lectura.combustibleId], modulo, direccion),
  }));
  const lecturasCompletas = calculos.every((c) => c.resultado?.ok);
  const sinPrecio = lecturas.filter((l) => l.precio === null).map((l) => l.nombre);
  const esperado =
    lecturasCompletas && sinPrecio.length === 0
      ? calculos.reduce(
          (total, { lectura, resultado }) =>
            total + (resultado?.ok ? calcularImporte(resultado.galones, aCentesimas(lectura.precio!)) : 0n),
          0n
        )
      : null;
  const declaradoPrevio = pagosRegistrados.reduce((total, p) => total + aCentesimas(p.monto), 0n);
  const declarado = pagos.reduce((total, p) => total + (montoCentesimas(p.monto) ?? 0n), declaradoPrevio);
  const diferencia = esperado === null ? null : esperado - declarado;
  const sinPagos = pagos.length === 0 && pagosRegistrados.length === 0;

  const soles = (centesimas: bigint) => formatoSoles(deCentesimas(centesimas));

  return (
    <form action={formAction} className="space-y-8">
      <input type="hidden" name="jornadaId" value={jornadaId} />
      <input
        type="hidden"
        name="pagos"
        value={JSON.stringify(pagos.map(({ medio, monto, nota }) => ({ medio, monto, nota })))}
      />

      {/* 1. Lecturas ACTUAL de cada producto */}
      <section aria-labelledby="paso-lecturas" className="space-y-4">
        <h3 id="paso-lecturas" className="text-base font-semibold text-fg">1. Lecturas de cierre</h3>
        <div className="grid gap-3 md:grid-cols-2">
          {calculos.map(({ lectura, resultado }) => {
            const v = valores[lectura.combustibleId];
            const id = lectura.combustibleId;
            return (
              <fieldset key={id} className="item p-3">
                <legend className="sr-only">{lectura.nombre}</legend>
                <div className="mb-2 flex items-center justify-between gap-2">
                  <p className="font-semibold">{lectura.nombre}</p>
                  {resultado?.ok && <span className="badge-success">{deCentesimas(resultado.galones)} gal</span>}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label htmlFor={`sa-${id}`} className="label">Atrás</label>
                    <input
                      id={`sa-${id}`}
                      name={`salidaAtras_${id}`}
                      inputMode="decimal"
                      value={v.atras}
                      onChange={(e) => actualizar(id, { atras: e.target.value })}
                      placeholder="ACTUAL"
                      className="field tabular-nums"
                      aria-describedby={`sa-h-${id}`}
                      required
                    />
                    <p id={`sa-h-${id}`} className="mt-1 tabular-nums text-xs text-muted">Anterior: {lectura.entradaAtras}</p>
                  </div>
                  <div>
                    <label htmlFor={`sd-${id}`} className="label">Adelante</label>
                    <input
                      id={`sd-${id}`}
                      name={`salidaAdelante_${id}`}
                      inputMode="decimal"
                      value={v.adelante}
                      onChange={(e) => actualizar(id, { adelante: e.target.value })}
                      placeholder="ACTUAL"
                      className="field tabular-nums"
                      aria-describedby={`sd-h-${id}`}
                      required
                    />
                    <p id={`sd-h-${id}`} className="mt-1 tabular-nums text-xs text-muted">Anterior: {lectura.entradaAdelante}</p>
                  </div>
                </div>
                {resultado && !resultado.ok && <p className="mt-2 text-xs font-medium text-danger">{resultado.texto}</p>}
                <label className="mt-2 flex items-center gap-2 text-xs text-muted">
                  <input
                    type="checkbox"
                    name={`reinicio_${id}`}
                    checked={v.reinicio}
                    onChange={(e) => actualizar(id, { reinicio: e.target.checked })}
                    className="check"
                  />
                  El contador pasó por 0 durante la jornada
                </label>
              </fieldset>
            );
          })}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="fecha" className="label">Fecha de cierre</label>
            <input
              id="fecha"
              name="fecha"
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="field"
              required
            />
            {horarioFin ? (
              <p className="mt-1 text-xs text-muted">
                Termina a las <b className="text-fg">{horarioFin}</b> según el horario de {empleado}.
              </p>
            ) : (
              <div className="mt-2">
                <label htmlFor="hora" className="label">{empleado} no tiene hora de fin registrada: hora de cierre</label>
                <input
                  id="hora"
                  name="hora"
                  type="time"
                  value={horaManual}
                  onChange={(e) => setHoraManual(e.target.value)}
                  className="field"
                  required
                />
              </div>
            )}
          </div>
          {conTotalizador && (
            <div>
              <label htmlFor="totalizadorSalida" className="label">Totalizador general de salida (opcional)</label>
              <input
                id="totalizadorSalida"
                name="totalizadorSalida"
                inputMode="decimal"
                value={totalizador}
                onChange={(e) => setTotalizador(e.target.value)}
                placeholder="0.00"
                className="field tabular-nums"
              />
            </div>
          )}
        </div>
      </section>

      {/* 2. Pagos que entrega el empleado: se agregan aquí y se guardan al cerrar */}
      <section aria-labelledby="paso-pagos" className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 id="paso-pagos" className="text-base font-semibold text-fg">2. Pagos entregados</h3>
          <button type="button" onClick={agregarPago} className="btn-ghost px-3 py-2">
            <Plus className="h-4 w-4" aria-hidden />Agregar pago
          </button>
        </div>

        {pagosRegistrados.length > 0 && (
          <ul className="divide-y divide-border bg-surface px-3 text-sm">
            {pagosRegistrados.map((pago) => (
              <li key={pago.id} className="flex items-center justify-between gap-2 py-2">
                <span>
                  {ETIQUETA_MEDIO[pago.medio as MedioPago] ?? pago.medio}
                  {pago.nota && <span className="text-muted"> ({pago.nota})</span>}
                  <span className="ml-2 text-xs text-muted">ya registrado</span>
                </span>
                <span className="flex items-center gap-2">
                  <span className="font-semibold tabular-nums">{formatoSoles(pago.monto)}</span>
                  {/* Usa el mismo <form>: formAction cambia la acción y formNoValidate evita exigir las lecturas */}
                  <button
                    type="submit"
                    name="pagoId"
                    value={pago.id}
                    formAction={eliminarPagoAction}
                    formNoValidate
                    className="p-1 text-muted hover:bg-danger-light hover:text-danger"
                    aria-label="Eliminar pago registrado"
                  >
                    <Trash2 className="h-4 w-4" aria-hidden />
                  </button>
                </span>
              </li>
            ))}
          </ul>
        )}

        {pagos.length === 0 ? (
          pagosRegistrados.length === 0 && (
            <p className="bg-surface px-4 py-6 text-center text-sm text-muted">
              Agrega cada pago que entregó {empleado}: efectivo, tarjeta, Yape, vales…
            </p>
          )
        ) : (
          <ul className="space-y-2">
            {pagos.map((pago, indice) => {
              const montoInvalido = pago.monto.trim() !== '' && (montoCentesimas(pago.monto) ?? 0n) <= 0n;
              return (
                <li key={pago.clave} className="grid gap-2 bg-surface p-3 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1.4fr)_auto] sm:items-start">
                  <div>
                    <label htmlFor={`pm-${pago.clave}`} className="label">Medio</label>
                    <select
                      id={`pm-${pago.clave}`}
                      value={pago.medio}
                      onChange={(e) => cambiarPago(pago.clave, { medio: e.target.value as MedioPago })}
                      className="field"
                    >
                      {MEDIOS.map(([valor, etiqueta]) => (
                        <option key={valor} value={valor}>{etiqueta}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor={`pmo-${pago.clave}`} className="label">Monto (S/)</label>
                    <input
                      id={`pmo-${pago.clave}`}
                      inputMode="decimal"
                      value={pago.monto}
                      onChange={(e) => cambiarPago(pago.clave, { monto: e.target.value })}
                      placeholder="0.00"
                      className="field tabular-nums"
                      aria-invalid={montoInvalido || undefined}
                      pattern="\d+([.,]\d{1,2})?"
                      required
                      // El primer campo del pago recién agregado recibe el foco para escribir de corrido
                      autoFocus={indice === pagos.length - 1 && pago.monto === ''}
                    />
                    {montoInvalido && <p className="mt-1 text-xs text-danger">Monto mayor que 0, con 2 decimales como máximo.</p>}
                  </div>
                  <div>
                    <label htmlFor={`pn-${pago.clave}`} className="label">Nota (opcional)</label>
                    <input
                      id={`pn-${pago.clave}`}
                      value={pago.nota}
                      onChange={(e) => cambiarPago(pago.clave, { nota: e.target.value })}
                      placeholder="Ej. número de operación"
                      maxLength={250}
                      className="field"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => quitarPago(pago.clave)}
                    className="justify-self-end p-2 text-muted hover:bg-danger-light hover:text-danger sm:mt-6"
                    aria-label={`Quitar pago ${indice + 1}`}
                  >
                    <Trash2 className="h-4 w-4" aria-hidden />
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {/* 3. Resumen y cierre */}
      <section aria-labelledby="paso-cierre" className="space-y-4">
        <h3 id="paso-cierre" className="text-base font-semibold text-fg">3. Revisar y cerrar</h3>

        <dl className="grid grid-cols-3 gap-px overflow-hidden bg-border text-center" aria-live="polite">
          <div className="bg-surface p-3">
            <dt className="text-xs text-muted">Venta según contadores</dt>
            <dd className="mt-0.5 font-semibold tabular-nums">{esperado === null ? '—' : soles(esperado)}</dd>
          </div>
          <div className="bg-surface p-3">
            <dt className="text-xs text-muted">Pagos</dt>
            <dd className="mt-0.5 font-semibold tabular-nums">{soles(declarado)}</dd>
          </div>
          <div className="bg-surface p-3">
            <dt className="text-xs text-muted">
              {diferencia === null ? 'Diferencia' : diferencia > 0n ? 'Faltante' : diferencia < 0n ? 'Sobrante' : 'Cuadrado'}
            </dt>
            <dd
              className={`mt-0.5 font-semibold tabular-nums ${
                diferencia === null ? '' : diferencia > 0n ? 'text-danger' : diferencia < 0n ? 'text-warning' : 'text-success'
              }`}
            >
              {diferencia === null ? '—' : soles(diferencia < 0n ? -diferencia : diferencia)}
            </dd>
          </div>
        </dl>
        {sinPrecio.length > 0 ? (
          <p className="text-xs text-danger">
            Sin precio vigente en esta estación para {sinPrecio.join(', ')}: regístralo en Productos y precios antes de cerrar.
          </p>
        ) : esperado === null ? (
          <p className="text-xs text-muted">La venta se calcula cuando completes las lecturas de todos los productos.</p>
        ) : null}
        {sinPagos && esperado !== null && esperado > 0n && (
          <p className="text-xs text-warning">No agregaste pagos: todo el importe quedará como faltante.</p>
        )}

        <textarea
          name="notas"
          value={notas}
          onChange={(e) => setNotas(e.target.value)}
          placeholder="Notas de la jornada (opcional)"
          aria-label="Notas"
          className="field min-h-20"
        />

        {estado.error && (
          <p role="alert" className="border-l-4 border-danger bg-danger-light px-3 py-2 text-sm text-danger">
            {estado.error}
          </p>
        )}

        <button type="submit" disabled={pending} className="btn-primary w-full py-3 text-base sm:w-auto">
          {pending ? 'Cerrando jornada…' : 'Cerrar jornada'}
        </button>
      </section>
    </form>
  );
}
