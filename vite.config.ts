import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/automate-awe/', // keep for GitHub Pages project site; use '/' if root domain
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
