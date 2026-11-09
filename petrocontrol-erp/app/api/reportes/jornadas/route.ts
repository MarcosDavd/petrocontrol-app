import { db } from '@/lib/db';
import { fechaParaArchivo, rangoFechas } from '@/lib/rango-fechas';
import { csvReporteJornadas } from '@/lib/reporte-jornadas';

/**
 * GET /api/reportes/jornadas?desde=YYYY-MM-DD&hasta=YYYY-MM-DD
 * Descarga en CSV las jornadas cerradas cuyo inicio está en el rango (ambos días incluidos).
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const { desde, hasta, inicio, fin } = rangoFechas(searchParams.get('desde'), searchParams.get('hasta'));

  const jornadas = await db.jornada.findMany({
    where: { estado: 'CERRADA', inicio: { gte: inicio, lte: fin } },
    include: {
      empleado: true,
      estacion: true,
      maquina: true,
      lecturas: { include: { combustible: true }, orderBy: { combustibleId: 'asc' } },
    },
    orderBy: [{ inicio: 'asc' }, { id: 'asc' }],
  });

  const nombre = `Reporte_de_jornadas_${fechaParaArchivo(desde)}_al_${fechaParaArchivo(hasta)}.csv`;

  return new Response(csvReporteJornadas(jornadas), {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="${nombre}"`,
      'Cache-Control': 'no-store',
    },
  });
}
