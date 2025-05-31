import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  root: 'client',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'client/src'),
      '@assets': resolve(__dirname, 'client/src/public'),
    },
  },
  server: {
    port: 5173,
    host: '0.0.0.0',
  },
})