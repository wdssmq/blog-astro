import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import { usrConfig } from './src/consts.ts';

// https://astro.build/config
export default defineConfig({
    site: usrConfig.site?.url || 'http://example.com',
    redirects: {
        '/page/1': '/',
    },
    integrations: [mdx(), sitemap()],
});
