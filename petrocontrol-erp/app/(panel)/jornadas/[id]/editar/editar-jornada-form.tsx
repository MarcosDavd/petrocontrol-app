'use client';

import Link from 'next/link';
import { useActionState, useState } from 'react';
import { aCentesimas, deCentesimas, type DireccionContador } from '@/lib/calculos';
import { calcularGalonesLectura } from '@/lib/jornada';
import { editarJornadaAction, type EstadoFormulario } from '../../actions';

export type LecturaEditable = {
  combustibleId: number;
  nombre: string;
  entradaAtras: string;
  entradaAdelante: string;
  salidaAtras: string;
  salidaAdelante: string;
  reinicio: boolean;
};

export type EmpleadoOpcion = {
  id: number;
  nombre: string;
  horarioInicio: string | null;
  horarioFin: string | null;
  /** Máquina de otra jornada abierta del empleado (no se le puede asignar esta), o null. */
  enJornada: string | null;
};

/** Galones con las lecturas escritas (para ver el efecto de la corrección antes de guardar). */
function galones(l: LecturaEditable, modulo: string, direccion: DireccionContador) {
  try {
    return {
      ok: true as const,
      texto: `${deCentesimas(
        calcularGalonesLectura(
          {
            entradaAtras: aCentesimas(l.entradaAtras),
            entradaAdelante: aCentesimas(l.entradaAdelante),
            salidaAtras: aCentesimas(l.salidaAtras),
            salidaAdelante: aCentesimas(l.salidaAdelante),
            huboReinicio: l.reinicio,
          },
          { modulo: BigInt(modulo), direccion, producto: l.nombre }
        )
      )} gal`,
    };
  } catch (error) {
    return { ok: false as const, texto: error instanceof Error ? error.message : 'Valor inválido' };
  }
}

function CampoLectura({
  id,
  name,
  etiqueta,
  valor,
  onChange,
  original,
}: {
  id: string;
  name: string;
  etiqueta: string;
  valor: string;
  onChange: (valor: string) => void;
  original: string;
}) {
  const cambiado = valor.trim() !== original;
  return (
    <div>
      <label htmlFor={id} className="label">{etiqueta}</label>
      <input
        id={id}
        name={name}
        inputMode="decimal"
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        className={`field tabular-nums ${cambiado ? 'border-accent ring-2 ring-accent/30' : ''}`}
        aria-describedby={cambiado ? `${id}-antes` : undefined}
        required
      />
      {cambiado && (
        <p id={`${id}-antes`} className="mt-1 text-xs tabular-nums text-muted">Antes: {original}</p>
      )}
    </div>
  );
}

export function EditarJornadaForm({
  jornadaId,
  cerrada,
  empleados,
  empleadoId: empleadoInicial,
  fecha: fechaInicial,
  hora: horaInicial,
  fechaCierre: fechaCierreInicial,
  horaCierre: horaCierreInicial,
  totalizadorEntrada: totEntradaInicial,
  totalizadorSalida: totSalidaInicial,
  notas: notasIniciales,
  lecturas: lecturasIniciales,
  modulo,
  direccion,
}: {
  jornadaId: number;
  cerrada: boolean;
  empleados: EmpleadoOpcion[];
  empleadoId: number;
  fecha: string;
  hora: string;
  fechaCierre: string;
  horaCierre: string;
  totalizadorEntrada: string;
  totalizadorSalida: string;
  notas: string;
  lecturas: LecturaEditable[];
  modulo: string;
  direccion: DireccionContador;
}) {
  const [estado, formAction, pending] = useActionState<EstadoFormulario, FormData>(editarJornadaAction, {});
  const [empleadoId, setEmpleadoId] = useState(empleadoInicial);
  const [fecha, setFecha] = useState(fechaInicial);
  const [hora, setHora] = useState(horaInicial);
  const [fechaCierre, setFechaCierre] = useState(fechaCierreInicial);
  const [horaCierre, setHoraCierre] = useState(horaCierreInicial);
  const [totEntrada, setTotEntrada] = useState(totEntradaInicial);
  const [totSalida, setTotSalida] = useState(totSalidaInicial);
  const [notas, setNotas] = useState(notasIniciales);
  const [lecturas, setLecturas] = useState(lecturasIniciales);

  const empleado = empleados.find((e) => e.id === empleadoId);
  const cambiar = (combustibleId: number, cambio: Partial<LecturaEditable>) =>
    setLecturas((prev) => prev.map((l) => (l.combustibleId === combustibleId ? { ...l, ...cambio } : l)));
  const original = (combustibleId: number) => lecturasIniciales.find((l) => l.combustibleId === combustibleId)!;

  return (
    <form action={formAction} className="space-y-8">
      <input type="hidden" name="jornadaId" value={jornadaId} />

      <section aria-labelledby="ed-datos" className="space-y-3">
        <h3 id="ed-datos" className="text-base font-semibold text-fg">Datos de la jornada</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="ed-empleado" className="label">Empleado</label>
            <select
              id="ed-empleado"
              name="empleadoId"
              value={empleadoId}
              onChange={(e) => setEmpleadoId(Number(e.target.value))}
              className="field"
              required
            >
              {empleados.map((e) => (
                <option key={e.id} value={e.id} disabled={e.enJornada !== null}>
                  {e.nombre}
                  {e.enJornada ? ` (en jornada en ${e.enJornada})` : ''}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="ed-fecha" className="label">Fecha de inicio</label>
            <input id="ed-fecha" name="fecha" type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} className="field" required />
            {empleado?.horarioInicio ? (
              <p className="mt-1 text-xs text-muted">
                Empieza a las <b className="text-fg">{empleado.horarioInicio}</b> según el horario de {empleado.nombre}.
              </p>
            ) : (
              <div className="mt-2">
                <label htmlFor="ed-hora" className="label">Hora de inicio ({empleado?.nombre} no tiene horario)</label>
                <input id="ed-hora" name="hora" type="time" value={hora} onChange={(e) => setHora(e.target.value)} className="field" required />
              </div>
            )}
          </div>
          {cerrada && (
            <div>
              <label htmlFor="ed-fecha-cierre" className="label">Fecha de cierre</label>
              <input
                id="ed-fecha-cierre"
                name="fechaCierre"
                type="date"
                value={fechaCierre}
                onChange={(e) => setFechaCierre(e.target.value)}
                className="field"
                required
              />
              {empleado?.horarioFin ? (
                <p className="mt-1 text-xs text-muted">
                  Termina a las <b className="text-fg">{empleado.horarioFin}</b> según el horario de {empleado.nombre}.
                </p>
              ) : (
                <div className="mt-2">
                  <label htmlFor="ed-hora-cierre" className="label">Hora de cierre ({empleado?.nombre} no tiene horario)</label>
                  <input
                    id="ed-hora-cierre"
                    name="horaCierre"
                    type="time"
                    value={horaCierre}
                    onChange={(e) => setHoraCierre(e.target.value)}
                    className="field"
                    required
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <section aria-labelledby="ed-lecturas" className="space-y-3">
        <h3 id="ed-lecturas" className="text-base font-semibold text-fg">Lecturas de contadores</h3>
        <p className="text-sm text-muted">Los campos que cambies se marcan en amarillo y muestran el valor anterior.</p>
        <div className="grid gap-3 lg:grid-cols-2">
          {lecturas.map((l) => {
            const id = l.combustibleId;
            const antes = original(id);
            const preview = cerrada ? galones(l, modulo, direccion) : null;
            return (
              <fieldset key={id} className="item space-y-3 p-3">
                <legend className="sr-only">{l.nombre}</legend>
                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold">{l.nombre}</p>
                  {preview?.ok && <span className="badge-success">{preview.texto}</span>}
                </div>
                <div>
                  <p className="mb-1 text-xs font-medium text-muted">Anterior (cómo la recibió)</p>
                  <div className="grid grid-cols-2 gap-2">
                    <CampoLectura id={`ea-${id}`} name={`entradaAtras_${id}`} etiqueta="Atrás" valor={l.entradaAtras} original={antes.entradaAtras} onChange={(v) => cambiar(id, { entradaAtras: v })} />
                    <CampoLectura id={`ed-${id}`} name={`entradaAdelante_${id}`} etiqueta="Adelante" valor={l.entradaAdelante} original={antes.entradaAdelante} onChange={(v) => cambiar(id, { entradaAdelante: v })} />
                  </div>
                </div>
                {cerrada && (
                  <div>
                    <p className="mb-1 text-xs font-medium text-muted">Actual (cómo la dejó)</p>
                    <div className="grid grid-cols-2 gap-2">
                      <CampoLectura id={`sa-${id}`} name={`salidaAtras_${id}`} etiqueta="Atrás" valor={l.salidaAtras} original={antes.salidaAtras} onChange={(v) => cambiar(id, { salidaAtras: v })} />
                      <CampoLectura id={`sd-${id}`} name={`salidaAdelante_${id}`} etiqueta="Adelante" valor={l.salidaAdelante} original={antes.salidaAdelante} onChange={(v) => cambiar(id, { salidaAdelante: v })} />
                    </div>
                    <label className="mt-2 flex items-center gap-2 text-xs text-muted">
                      <input
                        type="checkbox"
                        name={`reinicio_${id}`}
                        checked={l.reinicio}
                        onChange={(e) => cambiar(id, { reinicio: e.target.checked })}
                        className="check"
                      />
                      El contador pasó por 0 durante la jornada
                    </label>
                    {preview && !preview.ok && <p className="mt-2 text-xs font-medium text-danger">{preview.texto}</p>}
                  </div>
                )}
              </fieldset>
            );
          })}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="ed-tot-entrada" className="label">Totalizador general de entrada (opcional)</label>
            <input id="ed-tot-entrada" name="totalizadorEntrada" inputMode="decimal" value={totEntrada} onChange={(e) => setTotEntrada(e.target.value)} className="field tabular-nums" />
          </div>
          {cerrada && (
            <div>
              <label htmlFor="ed-tot-salida" className="label">Totalizador general de salida (opcional)</label>
              <input id="ed-tot-salida" name="totalizadorSalida" inputMode="decimal" value={totSalida} onChange={(e) => setTotSalida(e.target.value)} className="field tabular-nums" />
            </div>
          )}
        </div>
      </section>

      <section className="space-y-4">
        <textarea
          name="notas"
          value={notas}
          onChange={(e) => setNotas(e.target.value)}
          placeholder="Notas de la jornada (opcional)"
          aria-label="Notas"
          className="field min-h-20"
        />

        {cerrada && (
          <p className="border-l-4 border-accent bg-accent-light px-3 py-2 text-sm text-fg">
            Al guardar se recalculan los galones, el precio (el vigente en la fecha de inicio), los importes, el stock de
            los tanques y el cuadre de caja. Los pagos se corrigen en el detalle de la jornada.
          </p>
        )}

        {estado.error && (
          <p role="alert" className="border-l-4 border-danger bg-danger-light px-3 py-2 text-sm text-danger">
            {estado.error}
          </p>
        )}

        <div className="flex flex-col-reverse gap-2 sm:flex-row">
          <Link href={`/jornadas/${jornadaId}`} className="btn-ghost">Cancelar</Link>
          <button type="submit" disabled={pending} className="btn-primary">
            {pending ? 'Guardando…' : 'Guardar cambios'}
          </button>
        </div>
      </section>
    </form>
  );
}
