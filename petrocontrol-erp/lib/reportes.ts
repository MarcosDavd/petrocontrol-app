/** Valores monetarios en céntimos y galones en centésimas. */
export type JornadaResumenReporte = {
  importeEsperado: bigint;
  importeDeclarado: bigint;
  estacionId: number;
  empleadoId: number;
};

export type Acumulado = {
  jornadas: number;
  esperado: bigint;
  declarado: bigint;
  /** esperado - declarado: > 0 faltante, < 0 sobrante */
  diferencia: bigint;
};

const vacio = (): Acumulado => ({ jornadas: 0, esperado: 0n, declarado: 0n, diferencia: 0n });

function acumular(destino: Acumulado, jornada: JornadaResumenReporte) {
  destino.jornadas += 1;
  destino.esperado += jornada.importeEsperado;
  destino.declarado += jornada.importeDeclarado;
  destino.diferencia += jornada.importeEsperado - jornada.importeDeclarado;
}

/** Resume el cuadre de caja de jornadas cerradas: total, por estación y por empleado. */
export function calcularResumenReportes({ jornadas }: { jornadas: JornadaResumenReporte[] }) {
  const total = vacio();
  const porEstacion = new Map<number, Acumulado>();
  const porEmpleado = new Map<number, Acumulado>();

  for (const jornada of jornadas) {
    acumular(total, jornada);

    const estacion = porEstacion.get(jornada.estacionId) ?? vacio();
    acumular(estacion, jornada);
    porEstacion.set(jornada.estacionId, estacion);

    const empleado = porEmpleado.get(jornada.empleadoId) ?? vacio();
    acumular(empleado, jornada);
    porEmpleado.set(jornada.empleadoId, empleado);
  }

  return { total, porEstacion, porEmpleado };
}
