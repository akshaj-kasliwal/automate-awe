import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Determine base path based on environment
const isGitHubPages = process.env.GITHUB_PAGES === 'true' || process.env.NODE_ENV === 'production'
const base = isGitHubPages ? '/automate-awe/' : '/'

export default defineConfig({
  plugins: [react()],
  base,
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
