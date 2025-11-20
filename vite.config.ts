import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Update: add dev-server proxy so frontend requests to /api/* are forwarded
// to a backend server running on http://localhost:4000. If your backend
// listens on a different port, change the target below.
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false,
        // rewrite: (path) => path.replace(/^\/api/, '/api') // not needed here
      }
    }
  }
})
