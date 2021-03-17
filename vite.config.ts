import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import ssr from 'vite-plugin-ssr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), ssr()]
})
