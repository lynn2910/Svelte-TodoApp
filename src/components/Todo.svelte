<script>
    import { deleteTodo, toggleTodo } from "$lib/staticData";

    const {todo} = $props();

    function handleDelete() {
        deleteTodo(todo.id);
        // Force a re-render
        window.location.reload();
    }

    function handleToggle() {
        toggleTodo(todo.id);
        // Force a re-render
        window.location.reload();
    }
</script>

<div class="flex flex-row w-full items-center justify-between content-center min-w-56 mb-2 hover:bg-gray-200 py-2 px-3 rounded">
    <span class={todo.completed ? "line-through text-gray-500" : ""}>{todo.title}</span>
    <div class="flex flex-row">
        <button on:click={handleToggle} aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                 class="cursor-pointer fill-gray-500 hover:fill-green-800 p-2 h-10 w-10">
                <path d={todo.completed 
                    ? "M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" 
                    : "M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"} />
            </svg>
        </button>
        <button on:click={handleDelete} aria-label="Delete todo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                 class="cursor-pointer fill-gray-500 hover:fill-red-800 p-2 h-10 w-10">
                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
            </svg>
        </button>
    </div>
</div>
