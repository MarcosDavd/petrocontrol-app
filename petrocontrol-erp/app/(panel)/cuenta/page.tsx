import { KeyRound, TriangleAlert } from 'lucide-react';
import { exigirUsuario, identificador, nombreVisible } from '@/lib/sesion';
import { PageHeader } from '@/components/page-header';
import { CambiarContrasenaForm } from './cambiar-contrasena-form';

export const metadata = { title: 'Mi cuenta' };

export default async function CuentaPage() {
  const usuario = await exigirUsuario({ permitirCambioPendiente: true });
  const ingreso = identificador(usuario);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Mi cuenta"
        description={`${nombreVisible(usuario)}${ingreso && ingreso !== nombreVisible(usuario) ? ` · ingresa como ${ingreso}` : ''}`}
      />

      {usuario.debeCambiarPassword && (
        <p role="alert" className="flex max-w-lg items-start gap-2 border-l-4 border-warning bg-accent-light px-4 py-3 text-sm text-fg">
          <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-warning" aria-hidden />
          Estás usando una contraseña temporal. Elige una nueva para seguir usando la app.
        </p>
      )}

      <section className="card max-w-lg">
        <h2 className="card-title"><KeyRound className="h-5 w-5 text-primary" aria-hidden />Cambiar contraseña</h2>
        <CambiarContrasenaForm temporal={usuario.debeCambiarPassword} />
      </section>
    </div>
  );
}
