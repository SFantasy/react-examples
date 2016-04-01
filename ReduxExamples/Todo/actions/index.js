var nextTodoId = 0;

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
    completed: false
  }
}

export const editTodo = (id, text) => {
  return {
    type: 'EDIT_TODO',
    id: id,
    text
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
