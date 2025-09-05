// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://szekhelyszolgalat.github.io/szekhely-szolgalat-hu',
  base: '/',
  output: 'static',
  build: {
    format: 'directory'
  }
});
