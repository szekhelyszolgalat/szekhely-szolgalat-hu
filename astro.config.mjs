// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://szekhelyszolgalat.github.io',
  base: '/szekhely-szolgalat-hu',
  output: 'static',
  build: {
    format: 'directory'
  }
});
