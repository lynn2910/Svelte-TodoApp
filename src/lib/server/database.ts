const db: Map<string, Todo[]> = new Map();

interface Todo {
    id: String,
    title: String,
    description?: String,
    done: boolean
}

export function getTodos(userid: string): Todo[] {
    if (!db.get(userid)) {
        db.set(userid, []);
    }

    return db.get(userid)!
}

export function createTodo(userId: string, title: string, description: String | undefined = undefined) {
    const todos = getTodos(userId);

    console.log(title)

    todos.push({
        title, description,
        done: false,
        id: crypto.randomUUID()
    })
}

export function deleteTodo(userId: string, todoId: String) {
    const todos = getTodos(userId);
    const index = todos.findIndex(t => t.id === todoId);

    if (index !== -1) {
        todos.splice(index, 1)
    }
}