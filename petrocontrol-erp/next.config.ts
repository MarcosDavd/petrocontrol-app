import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
