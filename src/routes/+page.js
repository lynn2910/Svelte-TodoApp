// Client-side data loading for static deployment
export const prerender = true;

export function load() {
    // This is a placeholder for static prerendering
    // The actual data will be loaded client-side in the +page.svelte component
    return {
        todos: []
    };
}