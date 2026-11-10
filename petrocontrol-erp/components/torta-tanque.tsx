import type { NivelTanque } from '@/lib/inventario';

/** Color del arco según el nivel (tokens del tema, funcionan en claro y oscuro). */
const COLOR_ARCO: Record<NivelTanque, string> = {
  revisar: 'stroke-danger',
  bajo: 'stroke-danger',
  medio: 'stroke-accent',
  normal: 'stroke-primary',
};

/** Color del porcentaje escrito junto a la torta. */
export const COLOR_TEXTO_NIVEL: Record<NivelTanque, string> = {
  revisar: 'text-danger',
  bajo: 'text-danger',
  medio: 'text-warning',
  normal: 'text-fg',
};

/** Gráfico de torta en SVG: se pinta en el servidor, sin esperar a que cargue JavaScript. */
export function Torta({ porcentaje, nivel, grosor = 11 }: { porcentaje: number; nivel: NivelTanque; grosor?: number }) {
  const radio = 50 - grosor / 2 - 2;
  const circunferencia = 2 * Math.PI * radio;
  const lleno = (Math.max(0, Math.min(porcentaje, 100)) / 100) * circunferencia;
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90" aria-hidden>
      <circle cx="50" cy="50" r={radio} fill="none" strokeWidth={grosor} className="stroke-border" />
      {lleno > 0 && (
        <circle
          cx="50"
          cy="50"
          r={radio}
          fill="none"
          strokeWidth={grosor}
          strokeDasharray={`${lleno} ${circunferencia}`}
          className={COLOR_ARCO[nivel]}
        />
      )}
    </svg>
  );
}
