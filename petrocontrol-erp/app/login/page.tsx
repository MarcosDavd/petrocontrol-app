'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
        throw new Error(data.error || 'Correo o contraseña incorrectos. Revisa los datos e inténtalo de nuevo.');
      }

      router.push('/home');
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudo conectar con el servidor. Inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-dvh flex-col bg-background">
      {/* Techo del grifo: bloque grafito con el borde tricolor de la marca */}
      <header className="relative bg-gl-grafito pb-12 pt-[max(2.5rem,env(safe-area-inset-top))] sm:pb-14 sm:pt-14">
        <div className="mx-auto flex w-full max-w-md flex-col items-center px-4 text-center">
          <img src="/brand/logo-fondo-oscuro.svg" alt="Grifos Lim" className="h-28 w-auto sm:h-36" />
        </div>

        <div className="absolute inset-x-0 bottom-0 flex h-3 sm:h-4" aria-hidden>
          <span className="flex-[5] bg-gl-verde" />
          <span className="flex-[3] bg-gl-amarillo" />
          <span className="flex-[2] bg-gl-rojo" />
        </div>
      </header>

      {/* Formulario: cuelga bajo el techo, como una isla de surtidores */}
      <div className="mx-auto w-full max-w-md flex-1 px-4 pb-10">
        <section
          aria-labelledby="titulo-login"
          className="rounded-b-2xl border border-t-0 border-border bg-surface px-6 pb-7 pt-6 sm:px-8 sm:pb-8 sm:pt-7"
        >
          <h1 id="titulo-login" className="text-xl font-semibold tracking-tight text-fg">
            Iniciar sesión
          </h1>

          <form className="mt-5 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-fg">
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                autoCapitalize="none"
                spellCheck={false}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="field py-3"
                placeholder="tu@correo.com"
                aria-invalid={error ? true : undefined}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-fg">
                Contraseña
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="field py-3 pr-12"
                  aria-invalid={error ? true : undefined}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                  aria-pressed={showPassword}
                  className="absolute inset-y-0 right-0 flex w-12 items-center justify-center rounded-r-lg text-muted transition-colors hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" aria-hidden /> : <Eye className="h-5 w-5" aria-hidden />}
                </button>
              </div>
            </div>

            {error ? (
              <div
                role="alert"
                className="border-l-4 border-danger bg-danger-light px-3 py-2.5 text-sm text-danger"
              >
                {error}
              </div>
            ) : null}

            <button type="submit" disabled={isLoading} aria-busy={isLoading} className="btn-primary w-full py-3.5 text-base">
              {isLoading ? 'Ingresando…' : 'Ingresar'}
            </button>
          </form>
        </section>

        <p className="mt-6 text-center text-xs text-muted">© {new Date().getFullYear()} Grifos Lim</p>
      </div>
    </main>
  );
}
