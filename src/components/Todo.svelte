<script>
    import {enhance} from "\$app/forms";

    const {todo} = $props()
</script>

<div class="flex flex-row w-full items-center justify-between content-center min-w-56 mb-2 hover:bg-gray-200 py-2 px-3 rounded">
    <span>{todo.title}</span>
    <form method="POST" action="?/delete" use:enhance>
        <input type="hidden" name="id" value={todo.id}/>
        <button aria-label="Mark as complete">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                 class="cursor-pointer fill-gray-500 hover:fill-red-800 p-2 h-10 w-10">
                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
            </svg>
        </button>
    </form>
</div>