import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // PWA : crée le manifest et un service worker au moment du build.
    // Il met en cache les fichiers statiques seulement, pas les appels à l'API.
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Roomiz',
        short_name: 'Roomiz',
        lang: 'fr',
        display: 'standalone',
        orientation: 'portrait',
        theme_color: '#2F6BFF',
        background_color: '#F5F8FF',
        start_url: '/',
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png' },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
})
