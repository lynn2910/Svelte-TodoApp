import * as db from '$lib/server/database.js';
import { base } from '$app/paths';

export function load({cookies}) {
    let id = cookies.get('userid');

    if (!id) {
        id = crypto.randomUUID();
        cookies.set('userid', id, {path: base || '/'});
    }

    return {
        todos: db.getTodos(id)
    };
}

export const actions = {
    create: async ({cookies, request}) => {
        const data = await request.formData();
        db.createTodo(cookies.get('userid')!, data.get('title')!.toString());
    },
    delete: async ({cookies, request}) => {
        const data = await request.formData();
        db.deleteTodo(cookies.get('userid')!, data.get('id')!.toString());
    }
};
