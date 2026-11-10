'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { CircleAlert, X } from 'lucide-react';

/**
 * Muestra el error que dejó una ruta de la API al rechazar un formulario (`?error=` en la URL).
 * Al cerrarlo se quita el parámetro sin recargar ni mover el scroll.
 */
export function AvisoError() {
  const parametros = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const mensaje = parametros.get('error');

  if (!mensaje) return null;

  const cerrar = () => {
    const resto = new URLSearchParams(parametros.toString());
    resto.delete('error');
    const query = resto.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  return (
    <div role="alert" className="mb-6 flex items-start gap-3 border-l-4 border-danger bg-danger-light px-4 py-3 text-sm text-danger">
      <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
      <p className="min-w-0 flex-1">
        <span className="font-semibold">No se guardaron los cambios. </span>
        {mensaje}
      </p>
      <button
        type="button"
        onClick={cerrar}
        aria-label="Cerrar aviso"
        className="-m-1 p-1 text-danger/80 transition-colors hover:text-danger focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danger"
      >
        <X className="h-4 w-4" aria-hidden />
      </button>
    </div>
  );
}
