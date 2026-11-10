import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Pencil } from 'lucide-react';
import { db } from '@/lib/db';
import { PageHeader } from '@/components/page-header';
import { formatoFechaHora } from '@/lib/formato';
import { partesLima } from '@/lib/zona-horaria';
import { EditarJornadaForm } from './editar-jornada-form';

export const metadata = { title: 'Editar jornada' };

/** Valor guardado → texto del campo (vacío si no hay). */
const texto = (valor: { toString(): string } | null) => (valor === null ? '' : valor.toString());

export default async function EditarJornadaPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const jornadaId = Number(id);
  if (!Number.isInteger(jornadaId) || jornadaId <= 0) notFound();

  const jornada = await db.jornada.findUnique({
    where: { id: jornadaId },
    include: {
      empleado: true,
      maquina: true,
      estacion: true,
      lecturas: { include: { combustible: true }, orderBy: { combustibleId: 'asc' } },
    },
  });
  if (!jornada) notFound();

  // Empleados de la estación: los activos y el actual (aunque ya esté inactivo)
  const [empleados, otrasAbiertas] = await Promise.all([
    db.empleado.findMany({
      where: { estacionId: jornada.estacionId, OR: [{ activo: true }, { id: jornada.empleadoId }] },
      orderBy: { nombre: 'asc' },
      select: { id: true, nombre: true, horarioInicio: true, horarioFin: true },
    }),
    // Un empleado no puede tener dos jornadas abiertas: solo importa al editar una jornada abierta
    jornada.estado === 'ABIERTA'
      ? db.jornada.findMany({ where: { estado: 'ABIERTA', id: { not: jornada.id } }, include: { maquina: true } })
      : Promise.resolve([]),
  ]);

  const cerrada = jornada.estado === 'CERRADA';
  const inicio = partesLima(jornada.inicio);
  const fin = jornada.fin ? partesLima(jornada.fin) : null;

  return (
    <div className="space-y-6">
      <Link href={`/jornadas/${jornada.id}`} className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-primary">
        <ArrowLeft className="h-4 w-4" aria-hidden /> Volver a la jornada
      </Link>

      <PageHeader
        title="Editar jornada"
        description={`${jornada.maquina.nombre} en ${jornada.estacion.nombre}. ${cerrada ? 'Cerrada' : 'Abierta'}, iniciada el ${formatoFechaHora(jornada.inicio)}`}
      />

      <section className="card">
        <h2 className="card-title"><Pencil className="h-5 w-5 text-primary" aria-hidden />Corregir datos</h2>
        <EditarJornadaForm
          jornadaId={jornada.id}
          cerrada={cerrada}
          empleados={empleados.map((e) => ({
            ...e,
            enJornada: otrasAbiertas.find((j) => j.empleadoId === e.id)?.maquina.nombre ?? null,
          }))}
          empleadoId={jornada.empleadoId}
          fecha={inicio.fecha}
          hora={inicio.hora}
          fechaCierre={fin?.fecha ?? ''}
          horaCierre={fin?.hora ?? ''}
          totalizadorEntrada={texto(jornada.totalizadorEntrada)}
          totalizadorSalida={texto(jornada.totalizadorSalida)}
          notas={jornada.notas ?? ''}
          modulo={jornada.maquina.moduloContador.toString()}
          direccion={jornada.maquina.direccionProductos}
          lecturas={jornada.lecturas.map((l) => ({
            combustibleId: l.combustibleId,
            nombre: l.combustible.nombre,
            entradaAtras: texto(l.entradaAtras),
            entradaAdelante: texto(l.entradaAdelante),
            salidaAtras: texto(l.salidaAtras),
            salidaAdelante: texto(l.salidaAdelante),
            reinicio: l.huboReinicio,
          }))}
        />
      </section>
    </div>
  );
}
