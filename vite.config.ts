import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const HOSTNAME = process.env.GITHUB_CODESPACE_HOSTNAME

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
    cors: true,
    hmr: {
      protocol: 'wss',
      host: HOSTNAME,
    },
    origin: `https://${HOSTNAME}`,
  },
})
