'use client';

import { useId, useState } from 'react';

/** Horario de trabajo: hora de inicio y hora de fin. Envía `horarioInicio` y `horarioFin` (HH:MM). */
export function SelectorHorario({ inicio: inicioInicial = '', fin: finInicial = '' }: { inicio?: string; fin?: string }) {
  const id = useId();
  const [inicio, setInicio] = useState(inicioInicial);
  const [fin, setFin] = useState(finInicial);

  return (
    <div className="grid grid-cols-2 gap-3 sm:col-span-2">
      <div>
        <label htmlFor={`${id}-inicio`} className="label">Hora de inicio</label>
        <input
          id={`${id}-inicio`}
          name="horarioInicio"
          type="time"
          value={inicio}
          onChange={(e) => setInicio(e.target.value)}
          className="field"
          required
        />
      </div>
      <div>
        <label htmlFor={`${id}-fin`} className="label">Hora de fin</label>
        <input
          id={`${id}-fin`}
          name="horarioFin"
          type="time"
          value={fin}
          onChange={(e) => setFin(e.target.value)}
          className="field"
          required
        />
      </div>
      {inicio && fin && fin <= inicio && (
        <p className="col-span-2 text-xs text-muted">La hora de fin es al día siguiente (el horario cruza la medianoche).</p>
      )}
    </div>
  );
}
