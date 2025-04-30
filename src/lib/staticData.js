// Static data for GitHub Pages deployment
export const todos = [
  {
    id: '1',
    title: 'Learn Svelte',
    completed: true
  },
  {
    id: '2',
    title: 'Build a Todo App',
    completed: true
  },
  {
    id: '3',
    title: 'Deploy to GitHub Pages',
    completed: false
  }
];

// Client-side "database" operations
let localTodos = [...todos];

// Load todos from localStorage if available
if (typeof window !== 'undefined') {
  try {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      localTodos = JSON.parse(storedTodos);
    } else {
      // Initialize localStorage with default todos
      localStorage.setItem('todos', JSON.stringify(localTodos));
    }
  } catch (e) {
    console.error('Error accessing localStorage:', e);
  }
}

// Save todos to localStorage
function saveTodos() {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('todos', JSON.stringify(localTodos));
    } catch (e) {
      console.error('Error saving to localStorage:', e);
    }
  }
}

export function getTodos() {
  return localTodos;
}

export function createTodo(title) {
  const newTodo = {
    id: crypto.randomUUID(),
    title,
    completed: false
  };
  localTodos = [...localTodos, newTodo];
  saveTodos();
  return newTodo;
}

export function deleteTodo(id) {
  localTodos = localTodos.filter(todo => todo.id !== id);
  saveTodos();
}

export function toggleTodo(id) {
  localTodos = localTodos.map(todo => 
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  saveTodos();
}