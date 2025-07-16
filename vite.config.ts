// vite.config.ts

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

// __dirname replacement for ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // use @ to reference src/
    },
  },
  build: {
    outDir: 'dist', // output folder for production build
    sourcemap: false, // optional: disable source maps in production
  },
})

