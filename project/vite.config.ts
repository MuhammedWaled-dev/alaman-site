import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),

    // Brotli pre-compression for static assets
    // Cloudflare Pages serves Brotli dynamically, but pre-compressed files
    // reduce edge CPU usage if Cloudflare chooses them.
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      // Only compress JS/CSS/HTML — images are already compressed
      filter: /\.(js|css|html|json|svg)$/i,
      threshold: 1024, // bytes — don't compress tiny files
      deleteOriginFile: false,
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      filter: /\.(js|css|html|json|svg)$/i,
      threshold: 1024,
      deleteOriginFile: false,
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  build: {
    // Target modern browsers — enables smaller output with native ES modules
    target: 'es2020',

    // Disable source maps in production (no secrets in the bundle)
    sourcemap: false,

    // Increase the chunk warning threshold slightly (Tailwind + React is ~200 KB gzipped)
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // Hash-based filenames for long-lived caching on /assets/*
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',

        // Manual chunk splitting for better caching granularity
        manualChunks: (id) => {
          // React core — changes rarely, cache for a long time
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'react-vendor';
          }
          // React Router — changes occasionally
          if (id.includes('node_modules/react-router')) {
            return 'router';
          }
          // Lucide icons — large but stable
          if (id.includes('node_modules/lucide-react')) {
            return 'icons';
          }
        },
      },
    },

    // Minify with esbuild (default, fast)
    minify: 'esbuild',
  },

  esbuild: {
    drop: ['console', 'debugger'],
  },

  // During dev, optimizeDeps.exclude is no longer needed for lucide-react
  // since we're using Vite 5 which handles it correctly.
  optimizeDeps: {
    // Removed lucide-react exclusion — let Vite bundle it for tree-shaking
  },
});
