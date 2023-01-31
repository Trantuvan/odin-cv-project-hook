import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default ({ mode }) => {
  const generateScopedName = mode === 'production' ? '[hash:base64:2]' : '[local]_[hash:base64:2]';

  return defineConfig({
    base: '/odin-cv-project-hook/',
    plugins: [react(), { ...eslint({ cache: true, fix: true }), apply: 'build' }],
    server: {
      open: true,
      port: 3000,
      host: true,
    },
    css: {
      modules: {
        localsConvention: 'camelCase',
        generateScopedName: generateScopedName,
      },
    },
  });
};
