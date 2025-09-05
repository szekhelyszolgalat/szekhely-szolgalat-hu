// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://szekhelyszolgalat.github.io/szekhely-szolgalat-hu',
  base: '/szekhely-szolgalat-hu',
  output: 'static',
  build: {
    format: 'directory'
  }
});
