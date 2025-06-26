import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd()) // load .env file

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: env.VITE_BE_URL, // pastikan nama variabel diawali VITE_
          changeOrigin: true,
          secure: false,
        },
      },
      host: true, // This is crucial for Docker
      port: 5173, // Make sure this matches your desired port
      // If you're encountering issues with hot module reloading in Docker,
      // you might also need:
      // watch: {
      //   usePolling: true,
      // },
      strictPort: true, // Optional: Fails if port is already in use
      allowedHosts: true,
    },
  }

})
