import { redirect } from 'next/navigation';
import { getSessionFromCookies } from '@/lib/auth';
import { AppShell } from '@/components/app-shell';

export const dynamic = 'force-dynamic';

export default async function PanelLayout({ children }: { children: React.ReactNode }) {
  const session = await getSessionFromCookies();

  if (!session) {
    redirect('/login');
  }

  return <AppShell email={session.email}>{children}</AppShell>;
}
