import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  // مسیر Repository در GitHub Pages
  base: '/PCOS-app/',

  plugins: [
    vue(),

    VitePWA({
      registerType: 'autoUpdate',

      manifest: {
        name: 'PCOS Smart App',
        short_name: 'PCOS Smart',
        description: 'سیستم هوشمند مدیریت و پیش‌بینی سندرم تخمدان پلی‌کیستیک',

        theme_color: '#0b1f3a',
        background_color: '#0b1f3a',

        display: 'standalone',
        orientation: 'portrait',

        icons: [
          {
            src: '/PCOS-app/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/PCOS-app/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/PCOS-app/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
