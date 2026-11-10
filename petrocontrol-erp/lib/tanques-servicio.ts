import { db } from './db';
import { estadoTanque, type TanqueResumen } from './inventario';

/** Todos los tanques con su stock teórico (suma de todos sus movimientos) y estado. */
export async function obtenerResumenTanques(): Promise<TanqueResumen[]> {
  const [tanques, stock] = await Promise.all([
    db.tanque.findMany({
      include: { estacion: true, combustible: true },
      orderBy: [{ estacionId: 'asc' }, { combustibleId: 'asc' }],
    }),
    db.movimientoStock.groupBy({ by: ['tanqueId'], _sum: { galones: true } }),
  ]);

  const stockPorTanque = new Map(stock.map((s) => [s.tanqueId, Number(s._sum.galones ?? 0)]));

  return tanques.map((tanque) => {
    const stockActual = stockPorTanque.get(tanque.id) ?? 0;
    const capacidad = Number(tanque.capacidad);
    const minimo = Number(tanque.minimo);
    return {
      id: tanque.id,
      producto: tanque.combustible.nombre,
      estacion: tanque.estacion.nombre,
      estacionId: tanque.estacionId,
      stock: stockActual,
      capacidad,
      minimo,
      ...estadoTanque(stockActual, capacidad, minimo),
    };
  });
}

/** El tanque necesita atención: stock negativo o por debajo del mínimo. */
export const necesitaAtencion = (t: Pick<TanqueResumen, 'nivel'>) => t.nivel === 'revisar' || t.nivel === 'bajo';
