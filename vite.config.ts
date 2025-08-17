import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Check if we're in a GitHub Pages environment
const isGitHubPages = process.env.GITHUB_PAGES === 'true' || 
                     process.env.NODE_ENV === 'production' ||
                     process.env.CI === 'true'

console.log('Environment check:', {
  GITHUB_PAGES: process.env.GITHUB_PAGES,
  NODE_ENV: process.env.NODE_ENV,
  CI: process.env.CI,
  isGitHubPages
})

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
