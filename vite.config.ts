import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // 이 부분이 중요합니다! 슬래시 하나만 딱 남겨주세요.
})