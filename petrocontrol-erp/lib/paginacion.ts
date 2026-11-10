/** Cálculo de paginación: normaliza la página pedida (de la URL) al rango válido. */
export function paginar(total: number, paginaPedida: unknown, porPagina: number) {
  const totalPaginas = Math.max(1, Math.ceil(total / porPagina));
  const numero = Math.trunc(Number(paginaPedida));
  const pagina = Number.isFinite(numero) ? Math.min(Math.max(numero, 1), totalPaginas) : 1;
  const skip = (pagina - 1) * porPagina;
  return {
    pagina,
    totalPaginas,
    skip,
    take: porPagina,
    /** Posición (1-based) del primer y último elemento mostrados; 0 si no hay elementos. */
    desde: total === 0 ? 0 : skip + 1,
    hasta: Math.min(skip + porPagina, total),
  };
}
