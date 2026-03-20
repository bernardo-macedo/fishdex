import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['pwa-icon.svg'],
      manifest: {
        name: 'Fishdex',
        short_name: 'Fishdex',
        description: 'Your personal fishing journal',
        theme_color: '#0284c7',
        background_color: '#0f172a',
        display: 'standalone',
        orientation: 'portrait',
        scope: mode === 'production' ? '/fishdex/' : '/',
        start_url: mode === 'production' ? '/fishdex/' : '/',
        icons: [
          {
            src: 'pwa-icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  base: mode === 'production' ? '/fishdex/' : '/',
}))
