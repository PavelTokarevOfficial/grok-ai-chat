import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: "/grok-ai-chat",
  plugins: [vue()],
})
