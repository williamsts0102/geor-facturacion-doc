import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  sitemap: true,
  site: 'https://joel2010.github.io',
  integrations: [mdx(), sitemap()],
  outDir: 'dist',
  publicDir: 'public',
  output: 'static',
    base: '/geor-ecommerce-docs',
});
