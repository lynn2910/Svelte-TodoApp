<script lang="ts">
	import {enhance} from "$app/forms";
	import Todo from "../components/Todo.svelte";
	import {m} from '$lib/paraglide/messages';


	const todos = $state([]);
</script>

<div class="flex flex-col mt-24 items-center content-center w-fit mx-auto h-screen gap-5">
    <h1 class="font-bold text-2xl mb-6">{m.title()}</h1>

    <form method="POST"
          onsubmit={() => console.log('Hello')} use:enhance
          class="flex flex-row items-center content-center">

        <label class="flex flex-row gap-1">
            <span class="font-semibold w-36 my-auto">{m["add_input.label"]()}</span>
            <input
                    name="title"
                    placeholder={m["add_input.placeholder"]()}
                    autocomplete="off"
                    class="h-10 py-2 px-3 rounded-lg"
            />
        </label>
    </form>

    <ul class="w-full">
        {#each todos as todo (todo.id)}
            <li>
                <Todo {todo}></Todo>
            </li>
        {/each}
    </ul>
</div>