export const ADD_TODO = 'ADD_TODO',
             UPDATE_TODO = 'UPDATE_TODO',
             EDIT_TODO = 'EDIT_TODO',
             REMOVE_TODO = 'REMOVE_TODO';

export function addTodo(time, task, img) {
  return {
    type: ADD_TODO,
    time,
    task,
    img
  }
}

export function updateTodo(id) {
  return {
    type: UPDATE_TODO,
    id
  }
}

export function editTodo(id, time, task, img) {
  return {
    type: EDIT_TODO,
    id,
    time,
    task,
    img
  }
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  }
}
