import { NextResponse } from 'next/server';

/** La petición viene de un `<form>` HTML (no de un `fetch` con JSON). */
export function esFormulario(request: Request) {
  return !(request.headers.get('content-type') ?? '').includes('application/json');
}

/**
 * URL a la que volver tras un error de formulario: la página de origen (Referer) con `?error=`.
 * Solo se acepta un Referer del mismo origen; si no hay o es de otro sitio, se usa `respaldo`.
 */
export function urlConError(urlPeticion: string, referer: string | null, mensaje: string, respaldo = '/home') {
  const base = new URL(urlPeticion);
  let destino = new URL(respaldo, base);
  if (referer) {
    try {
      const origen = new URL(referer);
      if (origen.origin === base.origin) destino = origen;
    } catch {
      // Referer mal formado: se usa el respaldo
    }
  }
  destino.searchParams.set('error', mensaje);
  return destino;
}

/**
 * Respuesta de error para rutas que reciben formularios y JSON.
 * - JSON: `{ error }` con el status indicado (como antes).
 * - Formulario: vuelve a la página de origen con el mensaje, que el panel muestra como aviso.
 */
export function responderError(request: Request, mensaje: string, status: number) {
  if (!esFormulario(request)) return NextResponse.json({ error: mensaje }, { status });
  return NextResponse.redirect(urlConError(request.url, request.headers.get('referer'), mensaje), 303);
}
