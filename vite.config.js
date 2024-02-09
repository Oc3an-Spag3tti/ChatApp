import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Add '.js' to the list of extensions
    extensions: ['.js', '.jsx']
  }
  
})
