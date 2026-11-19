import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

/**
 * Política de contenido: la app solo carga recursos propios (las fuentes de next/font se sirven
 * desde el mismo dominio). Next necesita 'unsafe-inline' para sus scripts de hidratación si no se
 * usan nonces; en desarrollo React además usa eval para mostrar los errores del servidor.
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // Nadie puede mostrar la app dentro de un iframe (evita que engañen al usuario para hacer clic)
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "same-origin" },
  // La app no usa cámara, micrófono, ubicación ni pagos del navegador
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
  // Solo HTTPS durante 1 año (los navegadores ignoran este encabezado en http://localhost)
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  experimental: {
    // La caché en disco de Turbopack (activada por defecto desde Next 16.3) reutilizaba el CSS
    // compilado de globals.css aunque el archivo cambiara: Netlify conserva .next/cache entre
    // despliegues y publicaba estilos antiguos (cards redondas, badges en mayúsculas).
    // Se desactiva para que el CSS de Tailwind se compile siempre desde el código actual.
    turbopackFileSystemCacheForBuild: false,
    turbopackFileSystemCacheForDev: false,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
