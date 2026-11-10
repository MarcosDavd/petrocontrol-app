import { partesLima, sumarDias } from './zona-horaria';

/** Períodos (en días) disponibles para el historial de stock. */
export const PERIODOS = [30, 60, 90] as const;

export type NivelTanque = 'revisar' | 'bajo' | 'medio' | 'normal';

export const ETIQUETA_NIVEL: Record<NivelTanque, string> = {
  revisar: 'Revisar',
  bajo: 'Bajo mínimo',
  medio: 'Bajo 30 %',
  normal: 'Normal',
};

/** Tanque con su stock teórico y estado, listo para mostrar. */
export type TanqueResumen = {
  id: number;
  producto: string;
  estacion: string;
  estacionId: number;
  stock: number;
  capacidad: number;
  minimo: number;
  porcentaje: number;
  libre: number;
  nivel: NivelTanque;
};

/** Estado de un tanque a partir de su stock teórico. */
export function estadoTanque(stock: number, capacidad: number, minimo: number) {
  const porcentaje = capacidad > 0 ? Math.max(0, Math.min((stock / capacidad) * 100, 100)) : 0;
  const nivel: NivelTanque =
    stock < 0 ? 'revisar' : stock <= minimo ? 'bajo' : porcentaje < 30 ? 'medio' : 'normal';
  return { porcentaje, nivel, libre: Math.min(capacidad, Math.max(0, capacidad - stock)) };
}

export type PuntoHistorial = { fecha: string; stock: number };

/**
 * Stock al cierre de cada día entre `desde` y `hasta` (fechas "YYYY-MM-DD" en hora de Perú).
 * `stockInicial` es el stock antes del inicio de `desde`; los movimientos fuera del rango se ignoran.
 */
export function historialStock(
  stockInicial: number,
  movimientos: { fecha: Date; galones: number }[],
  desde: string,
  hasta: string
): PuntoHistorial[] {
  const porDia = new Map<string, number>();
  for (const movimiento of movimientos) {
    const dia = partesLima(movimiento.fecha).fecha;
    porDia.set(dia, (porDia.get(dia) ?? 0) + movimiento.galones);
  }

  const puntos: PuntoHistorial[] = [];
  let stock = stockInicial;
  for (let dia = desde; dia <= hasta; dia = sumarDias(dia, 1)) {
    stock += porDia.get(dia) ?? 0;
    // Redondeo a centésimas para evitar arrastrar errores de coma flotante
    puntos.push({ fecha: dia, stock: Math.round(stock * 100) / 100 });
  }
  return puntos;
}
