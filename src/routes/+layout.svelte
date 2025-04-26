<script lang="ts">
	import '../app.css';
	import {base} from '$app/paths';
	import {locales, setLocale, getLocale} from '$lib/paraglide/runtime'

	let {children} = $props();

	let show_locales = $state(false)

	function localeButtonClicked(locale: string) {
		setLocale(locale as any, {reload: true});
		show_locales = false;
	}

	export const prerender = true;

	// function handleClickOutside(event: MouseEvent) {
	// 	const target = event.target as HTMLElement;
	// 	if (!target.closest('.language-selector')) {
	// 		show_locales = false;
	// 	}
	// }
	//
	// $effect(() => {
	// 	if (show_locales) {
	// 		document.addEventListener('click', handleClickOutside);
	// 	} else {
	// 		document.removeEventListener('click', handleClickOutside);
	// 	}
	//
	// 	return () => {
	// 		document.removeEventListener('click', handleClickOutside);
	// 	};
	// });
</script>

<nav class="w-1/4 min-w-96 mx-auto flex flex-row items-center justify-between mt-5 px-5 py-1 rounded-3xl border-2 border-gray-200">
    <a href="{base}/" class="text-lg font-bold select-none cursor-pointer">Todo</a>

    <div class="my-auto">
        <button onclick={() => show_locales = !show_locales} aria-label="languages" class="my-auto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                 class="fill-black p-2 my-auto hover:bg-gray-200 h-10 w-10 rounded cursor-pointer">
                <path d="m476-80 182-480h84L924-80h-84l-43-122H603L560-80h-84ZM160-200l-56-56 202-202q-35-35-63.5-80T190-640h84q20 39 40 68t48 58q33-33 68.5-92.5T484-720H40v-80h280v-80h80v80h280v80H564q-21 72-63 148t-83 116l96 98-30 82-122-125-202 201Zm468-72h144l-72-204-72 204Z"/>
            </svg>
        </button>
        {#if show_locales}
            <div class="absolute top-16 flex flex-row rounded-lg bg-white border-2 border-gray-200">
                {#each locales as locale}
                    <button class="py-2 px-3 hover:bg-gray-200 cursor-pointer"
                            onclick={() => localeButtonClicked(locale)}>{locale.toUpperCase()}</button>
                {/each}
            </div>
        {/if}
    </div>
</nav>

{@render children()}
