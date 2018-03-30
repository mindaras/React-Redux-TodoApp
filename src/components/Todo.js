import React from 'react';
import '../styles/Todo.css';

const Todo = ({id, time, task, img, state, handleUpdate, handleEdit, handleRemove, toggleEditForm}) => {
  let show = false;

  function toggleShow(e) {
    let lastTodo, todo;
    // toggle icons on click when on mobile
    if (window.innerWidth <= 991) {
      e.target.classList.contains('todo-item') ? todo = e.target : todo = e.target.closest('.todo-item');
      if (todo.classList.contains('show')) {
        todo.classList.remove('show');
      } else {
        lastTodo = document.querySelector('.show');
        lastTodo ? lastTodo.classList.remove('show') : '';
        todo.classList.toggle('show');
      }
    }
  }

  return (
    <li className={state ? 'todo-item done' : 'todo-item'} onClick={toggleShow}>
      <div className="todo-item-col">
        <div className="todo-time">{time}</div>
        <p className="todo-text">{task}</p>
      </div>
      <div className="todo-item-col">
        <div className="todo-main-circle">
          <div className="todo-check" onClick={handleUpdate}></div>
          <div className="todo-edit" onClick={() => toggleEditForm(id, time, task, img)}></div>
          <div className="todo-bin" onClick={handleRemove}></div>
          <img src={img} className="todo-image" alt="todo" />
        </div>
      </div>
    </li>
  );
};

export default Todo;
