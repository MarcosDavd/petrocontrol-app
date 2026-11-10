'use client';

import { useActionState, useState } from 'react';
import { aCentesimas, deCentesimas, type DireccionContador } from '@/lib/calculos';
import { calcularGalonesLectura } from '@/lib/jornada';
import { cerrarJornadaAction, type EstadoFormulario } from '../actions';

export type LecturaAbierta = {
  combustibleId: number;
  nombre: string;
  entradaAtras: string;
  entradaAdelante: string;
};

type Valores = { atras: string; adelante: string; reinicio: boolean };

function vistaPrevia(lectura: LecturaAbierta, valores: Valores, modulo: string, direccion: DireccionContador) {
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
    return { ok: true as const, texto: `${deCentesimas(galones)} gal` };
  } catch (error) {
    return { ok: false as const, texto: error instanceof Error ? error.message : 'Valor inválido' };
  }
}

export function CerrarJornadaForm({
  jornadaId,
  lecturas,
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

  const actualizar = (id: number, cambio: Partial<Valores>) =>
    setValores((prev) => ({ ...prev, [id]: { ...prev[id], ...cambio } }));

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="jornadaId" value={jornadaId} />

      <div className="grid gap-3 md:grid-cols-2">
        {lecturas.map((lectura) => {
          const v = valores[lectura.combustibleId];
          const preview = vistaPrevia(lectura, v, modulo, direccion);
          const id = lectura.combustibleId;
          return (
            <fieldset key={id} className="item p-3">
              <legend className="sr-only">{lectura.nombre}</legend>
              <div className="mb-2 flex items-center justify-between gap-2">
                <p className="font-semibold">{lectura.nombre}</p>
                {preview?.ok && <span className="badge-success">{preview.texto}</span>}
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
              {preview && !preview.ok && <p className="mt-2 text-xs font-medium text-danger">{preview.texto}</p>}
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

      <textarea
        name="notas"
        value={notas}
        onChange={(e) => setNotas(e.target.value)}
        placeholder="Notas (opcional)"
        aria-label="Notas"
        className="field min-h-20"
      />

      {estado.error && (
        <p role="alert" className="rounded-lg border border-danger/40 bg-danger-light px-3 py-2 text-sm text-danger">
          {estado.error}
        </p>
      )}

      <button type="submit" disabled={pending} className="btn-primary w-full sm:w-auto">
        {pending ? 'Cerrando…' : 'Cerrar jornada y calcular'}
      </button>
    </form>
  );
}
