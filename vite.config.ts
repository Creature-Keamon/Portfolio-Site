import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from "vite-plugin-svgr";

const ReactCompilerConfig = {/* ... */ };

// https://vite.dev/config/
export default defineConfig({
  plugins: [svgr(),react({babel: {plugins: ['babel-plugin-react-compiler',ReactCompilerConfig]}})],
  base:'Portfolio-Site'
});
