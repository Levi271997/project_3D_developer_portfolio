import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // fs.watch throws EBUSY on files locked by OneDrive/AzureAD sync on Windows,
      // which crashes the dev server; polling is immune to that.
      usePolling: true,
      interval: 300,
    },
  },
})
