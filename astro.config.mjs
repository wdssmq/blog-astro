import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    redirects: {
        '/page/1': '/'
    },
	integrations: [mdx(), sitemap()],
});
