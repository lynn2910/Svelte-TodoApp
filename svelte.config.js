import {mdsvex} from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [vitePreprocess(), mdsvex()],
    kit: {
        adapter: adapter({
            fallback: '404.html',
            precompress: false,
            strict: true
        }),
        paths: {
            base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
        },
        prerender: {
            handleHttpError: ({ path, referrer, message }) => {
                // Ignore 404 errors for data files when prerendering
                if (path.endsWith('.json') && message.includes('404')) {
                    return;
                }
                throw new Error(message);
            }
        }
    },
    extensions: ['.svelte', '.svx']
};

export default config;
