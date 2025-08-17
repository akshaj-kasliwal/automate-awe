// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc' // ← use the SWC plugin

export default defineConfig({
  plugins: [react()],
  base: '/automate-awe/', // keep if deploying to GitHub Pages under /automate-awe/
})
