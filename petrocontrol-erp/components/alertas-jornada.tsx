import { formatoNumero, formatoSoles } from '@/lib/formato';

type Num = { toString(): string } | null;

export type JornadaConAlertas = {
  diferenciaCaja: Num;
  diferenciaControl: Num;
  lecturas: { diferenciaApertura: Num; combustible?: { nombre: string } }[];
};

const TOLERANCIA = 0.004;
const n = (value: Num) => (value === null ? 0 : Number(value.toString()));

export function calcularAlertas(jornada: JornadaConAlertas) {
  const caja = n(jornada.diferenciaCaja);
  const control = n(jornada.diferenciaControl);
  const saltos = jornada.lecturas.filter((lectura) => Math.abs(n(lectura.diferenciaApertura)) > TOLERANCIA);

  const alertas: { tono: 'danger' | 'warning'; texto: string; detalle: string }[] = [];
  if (caja > TOLERANCIA) {
    alertas.push({ tono: 'danger', texto: `Faltante ${formatoSoles(caja)}`, detalle: 'Lo declarado es menor que lo vendido según contadores.' });
  } else if (caja < -TOLERANCIA) {
    alertas.push({ tono: 'warning', texto: `Sobrante ${formatoSoles(-caja)}`, detalle: 'Lo declarado es mayor que lo vendido según contadores.' });
  }
  if (saltos.length > 0) {
    // Por producto: sumar productos distintos (con signos distintos) ocultaría el problema
    const porProducto = saltos
      .map((lectura) => {
        const valor = n(lectura.diferenciaApertura);
        return `${lectura.combustible?.nombre ?? 'Producto'} ${valor > 0 ? '+' : ''}${formatoNumero(valor)} gal`;
      })
      .join(', ');
    alertas.push({
      tono: 'danger',
      texto: saltos.length === 1 ? `Salto de contador: ${porProducto}` : `Salto de contador en ${saltos.length} productos`,
      detalle: `${porProducto}. El ANTERIOR de esta jornada no coincide con el ACTUAL de la jornada previa de la máquina: si es positivo se despachó combustible sin registrar; si es negativo, revisa la digitación.`,
    });
  }
  if (Math.abs(control) > TOLERANCIA) {
    alertas.push({
      tono: 'warning',
      texto: `Totalizador ${control > 0 ? '+' : ''}${formatoNumero(control)} gal`,
      detalle: 'El totalizador general no coincide con la suma de los productos.',
    });
  }
  return alertas;
}

export function tieneAlertas(jornada: JornadaConAlertas) {
  return calcularAlertas(jornada).length > 0;
}

export function AlertasJornada({ jornada, compacto = false }: { jornada: JornadaConAlertas; compacto?: boolean }) {
  const alertas = calcularAlertas(jornada);

  if (alertas.length === 0) {
    return compacto ? <span className="badge-success">Sin alertas</span> : null;
  }

  if (compacto) {
    return (
      <span className="flex flex-wrap gap-1">
        {alertas.map((alerta) => (
          <span key={alerta.texto} className={alerta.tono === 'danger' ? 'badge-danger' : 'badge-warning'} title={alerta.detalle}>
            {alerta.texto}
          </span>
        ))}
      </span>
    );
  }

  return (
    <ul className="space-y-2">
      {alertas.map((alerta) => (
        <li
          key={alerta.texto}
          className={`rounded-lg border px-3 py-2 text-sm ${
            alerta.tono === 'danger' ? 'border-danger/40 bg-danger-light' : 'border-warning/40 bg-accent-light'
          }`}
        >
          <p className={`font-semibold ${alerta.tono === 'danger' ? 'text-danger' : 'text-warning'}`}>{alerta.texto}</p>
          <p className="text-xs text-fg">{alerta.detalle}</p>
        </li>
      ))}
    </ul>
  );
}
