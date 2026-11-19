'use client';

import { useActionState, useState } from 'react';
import { ETIQUETA_MEDIO } from '@/lib/pagos';
import { agregarPagoAction, type EstadoFormulario } from '../actions';

/** Pago agregado después del cierre (uno que se olvidó o que se cargó mal y se vuelve a registrar). */
export function AgregarPagoForm({ jornadaId }: { jornadaId: number }) {
  // Campos controlados: si el servidor devuelve un error no se pierde lo escrito
  const [medio, setMedio] = useState('EFECTIVO');
  const [monto, setMonto] = useState('');
  const [nota, setNota] = useState('');

  const [estado, formAction, pending] = useActionState<EstadoFormulario, FormData>(async (previo, formData) => {
    const resultado = await agregarPagoAction(previo, formData);
    if (!resultado.error) {
      setMonto('');
      setNota('');
    }
    return resultado;
  }, {});

  return (
    <form action={formAction} className="mt-3 space-y-2">
      <input type="hidden" name="jornadaId" value={jornadaId} />
      <div className="grid gap-2 sm:grid-cols-[1fr_1fr_1fr_auto]">
        <select
          name="medio"
          aria-label="Medio de pago"
          className="field"
          value={medio}
          onChange={(e) => setMedio(e.target.value)}
          required
        >
          {Object.entries(ETIQUETA_MEDIO).map(([valor, etiqueta]) => (
            <option key={valor} value={valor}>{etiqueta}</option>
          ))}
        </select>
        <input
          name="monto"
          type="number"
          inputMode="decimal"
          step="0.01"
          min="0.01"
          placeholder="Monto (S/)"
          aria-label="Monto"
          className="field"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
          required
        />
        <input
          name="nota"
          placeholder="Nota (opcional)"
          aria-label="Nota"
          className="field"
          value={nota}
          onChange={(e) => setNota(e.target.value)}
        />
        <button type="submit" disabled={pending} className="btn-ghost">
          {pending ? 'Agregando…' : 'Agregar pago'}
        </button>
      </div>
      {estado.error && (
        <p role="alert" className="rounded-lg border border-danger/40 bg-danger-light px-3 py-2 text-sm text-danger">
          {estado.error}
        </p>
      )}
    </form>
  );
}
