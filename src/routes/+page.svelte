<script>
    import Todo from "../components/Todo.svelte";
    import {m} from '$lib/paraglide/messages';
    import { getTodos, createTodo } from "$lib/staticData";
    import { onMount } from "svelte";

    let todos = [];
    let newTodoTitle = "";

    onMount(() => {
        todos = getTodos();
    });

    function handleSubmit(event) {
        event.preventDefault();
        if (newTodoTitle.trim()) {
            createTodo(newTodoTitle);
            newTodoTitle = "";
            // Refresh todos
            todos = getTodos();
        }
    }
</script>

<div class="flex flex-col mt-24 items-center content-center w-fit mx-auto h-screen gap-5">
    <h1 class="font-bold text-2xl mb-6">{m.title()}</h1>

    <form on:submit={handleSubmit} class="flex flex-row items-center content-center">
        <label class="flex flex-row gap-1">
            <span class="font-semibold w-36 my-auto">{m["add_input.label"]()}</span>
            <input
                    bind:value={newTodoTitle}
                    placeholder={m["add_input.placeholder"]()}
                    autocomplete="off"
                    class="h-10 py-2 px-3 rounded-lg"
            />
        </label>
        <button type="submit" class="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add
        </button>
    </form>

    <ul class="w-full">
        {#each todos as todo (todo.id)}
            <li>
                <Todo {todo}></Todo>
            </li>
        {/each}
    </ul>
</div>
