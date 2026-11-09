import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'GL-App · Grifos Lim',
    short_name: 'GL-App',
    description: 'Gestión de estaciones de combustible Grifos Lim.',
    start_url: '/home',
    display: 'standalone',
    background_color: '#F8F8F6',
    theme_color: '#0F6B34',
    lang: 'es',
    icons: [
      { src: '/brand/app-icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/brand/app-icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/brand/app-icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
