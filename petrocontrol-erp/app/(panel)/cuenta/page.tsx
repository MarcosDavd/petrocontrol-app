import { KeyRound } from 'lucide-react';
import { getSessionFromCookies } from '@/lib/auth';
import { PageHeader } from '@/components/page-header';
import { CambiarContrasenaForm } from './cambiar-contrasena-form';

export const metadata = { title: 'Mi cuenta' };

export default async function CuentaPage() {
  const session = await getSessionFromCookies();

  return (
    <div className="space-y-6">
      <PageHeader title="Mi cuenta" description={session?.email} />
      <section className="card max-w-lg">
        <h2 className="card-title"><KeyRound className="h-5 w-5 text-primary" aria-hidden />Cambiar contraseña</h2>
        <CambiarContrasenaForm />
      </section>
    </div>
  );
}
