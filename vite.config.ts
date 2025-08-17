import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'

export default defineConfig({
  plugins: [react()],
  base: '/automate-awe/',                // (GH Pages) keep or set to '/' if custom domain
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
