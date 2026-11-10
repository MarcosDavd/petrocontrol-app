'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { LogOut, Menu, X } from 'lucide-react';
import { NAV_GROUPS, NAV_ITEMS } from './nav-items';
import { AvisoError } from './aviso-error';

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/home" className="flex items-center gap-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/isotipo-blanco.svg" alt="" className={compact ? 'h-8 w-auto' : 'h-10 w-auto'} />
      <span className="leading-tight">
        <span className="block text-base font-bold tracking-tight text-sidebar-text">GL-App</span>
        {!compact && <span className="block text-xs text-sidebar-muted">Grifos Lim</span>}
      </span>
    </Link>
  );
}

function NavLinks({ pathname, onNavigate }: { pathname: string; onNavigate?: () => void }) {
  return (
    <nav className="flex-1 space-y-6 overflow-y-auto px-3 py-4" aria-label="Principal">
      {NAV_GROUPS.map((group) => (
        <div key={group.title}>
          <p className="px-3 pb-1.5 text-xs font-medium text-sidebar-muted">
            {group.title}
          </p>
          <ul className="space-y-1">
            {group.items.map(({ href, label, icon: Icon }) => {
              const active = pathname === href || pathname.startsWith(`${href}/`);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={onNavigate}
                    aria-current={active ? 'page' : undefined}
                    className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                      active
                        ? 'bg-gl-verde text-white shadow-sm'
                        : 'text-sidebar-text/85 hover:bg-sidebar-hover hover:text-sidebar-text'
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 shrink-0 ${active ? 'text-gl-amarillo' : 'text-sidebar-muted group-hover:text-sidebar-text'}`}
                      aria-hidden
                    />
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

function UserFooter({ email, onNavigate }: { email: string; onNavigate?: () => void }) {
  return (
    <div className="border-t border-white/10 p-3">
      <Link
        href="/cuenta"
        onClick={onNavigate}
        title="Mi cuenta y contraseña"
        className="flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-sidebar-hover"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-gl-amarillo text-sm font-bold uppercase text-gl-grafito">
          {email.charAt(0)}
        </span>
        <span className="min-w-0 flex-1 leading-tight">
          <span className="block truncate text-sm text-sidebar-text">{email}</span>
          <span className="block text-xs text-sidebar-muted">Mi cuenta</span>
        </span>
      </Link>
      <form action="/api/auth/logout" method="POST">
        <button
          type="submit"
          className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-muted transition hover:bg-sidebar-hover hover:text-white"
        >
          <LogOut className="h-5 w-5" aria-hidden />
          Cerrar sesión
        </button>
      </form>
    </div>
  );
}

/** Borde tricolor del "techo del grifo": mismas proporciones que en el login (5/3/2). */
function BrandStripe({ className = 'h-1' }: { className?: string }) {
  return (
    <div className={`flex w-full ${className}`} aria-hidden>
      <span className="flex-[5] bg-gl-verde" />
      <span className="flex-[3] bg-gl-amarillo" />
      <span className="flex-[2] bg-gl-rojo" />
    </div>
  );
}

export function AppShell({ email, children }: { email: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const current = NAV_ITEMS.find((item) => pathname === item.href || pathname.startsWith(`${item.href}/`));

  // Cerrar el menú móvil con Escape y bloquear el scroll de fondo mientras está abierto
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="min-h-dvh lg:pl-64">
      {/* Sidebar fija (escritorio) */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col bg-sidebar lg:flex">
        <BrandStripe className="h-1.5" />
        <div className="px-6 py-5">
          <BrandMark />
        </div>
        <NavLinks pathname={pathname} />
        <UserFooter email={email} />
      </aside>

      {/* Barra superior (móvil / tablet) */}
      <header className="sticky top-0 z-30 bg-sidebar pt-[env(safe-area-inset-top)] lg:hidden">
        <div className="flex h-14 items-center justify-between gap-3 px-4">
          <BrandMark compact />
          {current && (
            <span className="truncate text-sm font-medium text-sidebar-muted sm:hidden">{current.label}</span>
          )}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="rounded-lg p-2 text-sidebar-text transition hover:bg-sidebar-hover"
            aria-label="Abrir menú"
            aria-expanded={open}
            aria-controls="menu-movil"
          >
            <Menu className="h-6 w-6" aria-hidden />
          </button>
        </div>
        <BrandStripe className="h-1.5" />
      </header>

      {/* Menú lateral deslizable (móvil / tablet) */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity lg:hidden ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setOpen(false)}
        aria-hidden
      />
      <aside
        id="menu-movil"
        className={`fixed inset-y-0 left-0 z-50 flex w-72 max-w-[85vw] flex-col bg-sidebar pt-[env(safe-area-inset-top)] transition-transform duration-200 lg:hidden ${
          open ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        }`}
        aria-label="Menú"
        inert={!open}
      >
        <BrandStripe />
        <div className="flex items-center justify-between px-5 py-4">
          <BrandMark />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 text-sidebar-muted transition hover:bg-sidebar-hover hover:text-white"
            aria-label="Cerrar menú"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>
        <NavLinks pathname={pathname} onNavigate={() => setOpen(false)} />
        <UserFooter email={email} onNavigate={() => setOpen(false)} />
      </aside>

      <main className="mx-auto w-full max-w-7xl px-4 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:px-6 sm:py-8 lg:px-8">
        <Suspense fallback={null}>
          <AvisoError />
        </Suspense>
        {children}
      </main>
    </div>
  );
}
