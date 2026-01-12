import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // 메인 페이지는 반드시 이 설정이어야 합니다!
})