import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap  from 'vite-plugin-sitemap';

const routes = [
  '/', '/about', '/contact', '/projects', '/services',
  '/blog', '/team', '/privacy-policy', '/terms-of-service',
  '/cookie-policy', '/legal-notice', '/imprint', '/faq'
];

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://studio.lunim.io',
      dynamicRoutes: routes,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
