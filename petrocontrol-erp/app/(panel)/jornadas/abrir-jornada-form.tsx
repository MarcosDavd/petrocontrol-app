'use client';

import { useActionState, useMemo, useState } from 'react';
import { CircleAlert, Info } from 'lucide-react';
import { abrirJornadaAction, type EstadoFormulario } from './actions';
import { hoyLima } from '@/lib/zona-horaria';

export type MaquinaOpcion = {
  id: number;
  nombre: string;
  estacionId: number;
  estacionNombre: string;
  ocupadaPor: string | null;
  productos: {
    combustibleId: number;
    nombre: string;
    previoAtras: string | null;
    previoAdelante: string | null;
  }[];
};

export type EmpleadoOpcion = {
  id: number;
  nombre: string;
  estacionId: number;
  horarioInicio: string | null;
  horarioFin: string | null;
};

function AvisoDiferencia({ previo, actual }: { previo: string | null; actual: string }) {
  if (previo === null || actual.trim() === '') return null;
  const diferencia = Number(actual.replace(',', '.')) - Number(previo);
  if (!Number.isFinite(diferencia) || Math.abs(diferencia) < 0.005) return null;
  return (
    <p className="mt-1 flex items-center gap-1 text-xs font-medium text-danger">
      <CircleAlert className="h-3.5 w-3.5 shrink-0" aria-hidden />
      {diferencia > 0 ? '+' : ''}
      {diferencia.toFixed(2)} gal respecto al cierre anterior ({previo})
    </p>
  );
}

function FilaProducto({ producto }: { producto: MaquinaOpcion['productos'][number] }) {
  const [atras, setAtras] = useState(producto.previoAtras ?? '');
  const [adelante, setAdelante] = useState(producto.previoAdelante ?? '');
  const id = producto.combustibleId;

  return (
    <fieldset className="item p-3">
      <legend className="sr-only">{producto.nombre}</legend>
      <p className="mb-2 font-semibold">{producto.nombre}</p>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label htmlFor={`ea-${id}`} className="label">Atrás</label>
          <input
            id={`ea-${id}`}
            name={`entradaAtras_${id}`}
            inputMode="decimal"
            value={atras}
            onChange={(e) => setAtras(e.target.value)}
            placeholder="0.00"
            className="field font-mono"
            required
          />
          <AvisoDiferencia previo={producto.previoAtras} actual={atras} />
        </div>
        <div>
          <label htmlFor={`ed-${id}`} className="label">Adelante</label>
          <input
            id={`ed-${id}`}
            name={`entradaAdelante_${id}`}
            inputMode="decimal"
            value={adelante}
            onChange={(e) => setAdelante(e.target.value)}
            placeholder="0.00"
            className="field font-mono"
            required
          />
          <AvisoDiferencia previo={producto.previoAdelante} actual={adelante} />
        </div>
      </div>
    </fieldset>
  );
}

export function AbrirJornadaForm({ maquinas, empleados }: { maquinas: MaquinaOpcion[]; empleados: EmpleadoOpcion[] }) {
  const [estado, formAction, pending] = useActionState<EstadoFormulario, FormData>(abrirJornadaAction, {});
  const [maquinaId, setMaquinaId] = useState('');
  // Campos controlados: React reinicia los no controlados al terminar la acción,
  // y así no se pierde lo escrito si el servidor devuelve un error.
  const [empleadoId, setEmpleadoId] = useState('');
  const [fecha, setFecha] = useState(() => hoyLima());
  const [horaManual, setHoraManual] = useState('');
  const [totalizador, setTotalizador] = useState('');
  const [notas, setNotas] = useState('');
  const maquina = maquinas.find((item) => String(item.id) === maquinaId);

  const empleadosEstacion = useMemo(
    () => (maquina ? empleados.filter((empleado) => empleado.estacionId === maquina.estacionId) : []),
    [empleados, maquina]
  );

  const empleado = empleadosEstacion.find((item) => String(item.id) === empleadoId);

  const estaciones = [...new Set(maquinas.map((m) => m.estacionNombre))];
  const sinHistorial = maquina?.productos.some((p) => p.previoAtras === null);

  return (
    <form action={formAction} className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="maquinaId" className="label">Máquina</label>
          <select
            id="maquinaId"
            name="maquinaId"
            className="field"
            value={maquinaId}
            onChange={(e) => {
              setMaquinaId(e.target.value);
              setEmpleadoId('');
            }}
            required
          >
            <option value="">Selecciona máquina</option>
            {estaciones.map((estacion) => (
              <optgroup key={estacion} label={estacion}>
                {maquinas
                  .filter((m) => m.estacionNombre === estacion)
                  .map((m) => (
                    <option key={m.id} value={m.id} disabled={m.ocupadaPor !== null || m.productos.length === 0}>
                      {m.nombre}
                      {m.ocupadaPor ? ` — en uso (${m.ocupadaPor})` : m.productos.length === 0 ? ' — sin productos' : ''}
                    </option>
                  ))}
              </optgroup>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="empleadoId" className="label">Empleado</label>
          <select
            id="empleadoId"
            name="empleadoId"
            className="field"
            value={empleadoId}
            onChange={(e) => setEmpleadoId(e.target.value)}
            required
            disabled={!maquina}
          >
            <option value="">{maquina ? 'Selecciona empleado' : 'Primero elige la máquina'}</option>
            {empleadosEstacion.map((empleado) => (
              <option key={empleado.id} value={empleado.id}>
                {empleado.nombre}
                {empleado.horarioInicio ? ` (${empleado.horarioInicio} – ${empleado.horarioFin ?? '—'})` : ''}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="fecha" className="label">Fecha de la jornada</label>
          <input
            id="fecha"
            name="fecha"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="field"
            required
            // La fecha por defecto se calcula en el navegador y puede diferir del render del servidor
            suppressHydrationWarning
          />
          {empleado?.horarioInicio ? (
            <p className="mt-1 text-xs text-muted">
              Inicia a las <b className="text-fg">{empleado.horarioInicio}</b> según el horario de {empleado.nombre}
              {empleado.horarioFin ? ` (${empleado.horarioInicio} – ${empleado.horarioFin})` : ''}.
            </p>
          ) : empleado ? (
            <div className="mt-2">
              <label htmlFor="hora" className="label">{empleado.nombre} no tiene horario registrado: hora de inicio</label>
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
          ) : (
            <p className="mt-1 text-xs text-muted">La hora se toma del horario de trabajo del empleado.</p>
          )}
        </div>
        <div>
          <label htmlFor="totalizadorEntrada" className="label">Totalizador general (opcional)</label>
          <input
            id="totalizadorEntrada"
            name="totalizadorEntrada"
            inputMode="decimal"
            value={totalizador}
            onChange={(e) => setTotalizador(e.target.value)}
            placeholder="0.00"
            className="field font-mono"
          />
        </div>
      </div>

      {maquina && (
        <div className="space-y-2">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-sm font-semibold text-fg">Lecturas ANTERIOR (cómo recibe la máquina)</h3>
          </div>
          {sinHistorial ? (
            <p className="flex items-start gap-2 rounded-lg bg-accent-light px-3 py-2 text-xs text-fg">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-warning" aria-hidden />
              Es la primera jornada registrada de esta máquina: ingresa los contadores tal como están.
            </p>
          ) : (
            <p className="flex items-start gap-2 rounded-lg bg-primary-light px-3 py-2 text-xs text-fg">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              Valores tomados del cierre (ACTUAL) de la jornada anterior. Si el contador real es distinto,
              corrígelo: la diferencia quedará registrada como alerta.
            </p>
          )}
          <div className="grid gap-2 md:grid-cols-2" key={maquinaId}>
            {maquina.productos.map((producto) => (
              <FilaProducto key={producto.combustibleId} producto={producto} />
            ))}
          </div>
        </div>
      )}

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

      <button type="submit" disabled={pending || !maquina} className="btn-primary w-full sm:w-auto">
        {pending ? 'Abriendo…' : 'Abrir jornada'}
      </button>
    </form>
  );
}
