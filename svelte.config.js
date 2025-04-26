import {mdsvex} from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [vitePreprocess(), mdsvex()],
    kit: {
        adapter: adapter({
            fallback: '404.html'
        }),
        paths: {
            base: process.argv.includes('dev') ? '' : 'Svelte-TodoApp'
        }
    },
    extensions: ['.svelte', '.svx']
};

export default config;
