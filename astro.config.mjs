// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://szekhelyszolgalat.github.io/szekhely-szolgalat-hu',
  output: 'static',

  build: {
    format: 'directory'
  },

  integrations: [sitemap()]
});