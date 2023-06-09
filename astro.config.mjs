import { defineConfig } from 'astro/config';
import { astroImageTools } from 'astro-imagetools';

// https://astro.build/config
export default defineConfig({
    site: 'https://antoineweverbergh.be',
    integrations: [astroImageTools],
});
