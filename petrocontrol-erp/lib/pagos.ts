export type MedioPago = 'EFECTIVO' | 'TARJETA' | 'TRANSFERENCIA' | 'DESCUENTO';

/** Nombre de cada medio de pago tal como lo ve el usuario (en el orden de los selectores). */
export const ETIQUETA_MEDIO: Record<MedioPago, string> = {
  EFECTIVO: 'Efectivo',
  TARJETA: 'Tarjeta',
  TRANSFERENCIA: 'Transferencia / Yape / Plin',
  DESCUENTO: 'Descuento / vale',
};

export type PagoResumenInput = {
  medio: MedioPago | string;
  monto: bigint;
};

const mediosPago: MedioPago[] = ['EFECTIVO', 'TARJETA', 'TRANSFERENCIA', 'DESCUENTO'];

export function calcularResumenPagos(pagos: PagoResumenInput[]) {
  const porMedio = mediosPago.reduce<Record<MedioPago, bigint>>((acc, medio) => {
    acc[medio] = 0n;
    return acc;
  }, {
    EFECTIVO: 0n,
    TARJETA: 0n,
    TRANSFERENCIA: 0n,
    DESCUENTO: 0n,
  });

  for (const pago of pagos) {
    const medio = mediosPago.includes(pago.medio as MedioPago) ? (pago.medio as MedioPago) : 'DESCUENTO';
    porMedio[medio] += pago.monto;
  }

  const total = Object.values(porMedio).reduce((sum, value) => sum + value, 0n);

  return {
    total,
    porMedio,
  };
}
