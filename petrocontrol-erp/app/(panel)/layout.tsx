import { exigirUsuario, identificador, nombreVisible } from '@/lib/sesion';
import { AppShell } from '@/components/app-shell';

export const dynamic = 'force-dynamic';

export default async function PanelLayout({ children }: { children: React.ReactNode }) {
  // Con una contraseña temporal pendiente, el middleware ya solo deja entrar a /cuenta.
  const usuario = await exigirUsuario({ permitirCambioPendiente: true });

  return (
    <AppShell
      nombre={nombreVisible(usuario)}
      detalle={usuario.rol === 'EMPLEADO' ? identificador(usuario) : 'Administrador'}
      rol={usuario.rol}
      cambioPendiente={usuario.debeCambiarPassword}
    >
      {children}
    </AppShell>
  );
}
