'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Credenciales inválidas');
      }

      router.push('/home');
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocurrió un error inesperado');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-background px-4 py-10">
      {/* Franja de marca superior */}
      <div className="absolute inset-x-0 top-0 flex h-1.5" aria-hidden>
        <span className="flex-1 bg-gl-verde" />
        <span className="flex-1 bg-gl-amarillo" />
        <span className="flex-1 bg-gl-rojo" />
      </div>

      <div className="w-full max-w-sm sm:max-w-md">
        <div className="mb-6 flex flex-col items-center text-center sm:mb-8">
          <picture>
            <source srcSet="/brand/isotipo-blanco.svg" media="(prefers-color-scheme: dark)" />
            <img src="/brand/isotipo.svg" alt="Grifos Lim" className="h-20 w-auto sm:h-24" />
          </picture>
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-fg sm:text-3xl">GL-App</h1>
          <p className="mt-1 text-sm text-muted">Gestión de estaciones · Grifos Lim</p>
        </div>

        <div className="card p-6 sm:p-8">
          <h2 className="mb-6 text-lg font-semibold text-fg">Iniciar sesión</h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="label text-sm">
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="field py-3"
                placeholder="tu@correo.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="label text-sm">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="field py-3"
                placeholder="••••••••"
                required
              />
            </div>

            {error ? (
              <div role="alert" className="rounded-lg border border-danger/40 bg-danger-light px-3 py-2 text-sm text-danger">
                {error}
              </div>
            ) : null}

            <button type="submit" disabled={isLoading} className="btn-primary w-full py-3 text-base">
              {isLoading ? 'Iniciando sesión...' : 'Ingresar'}
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-muted">© {new Date().getFullYear()} Grifos Lim</p>
      </div>
    </main>
  );
}
