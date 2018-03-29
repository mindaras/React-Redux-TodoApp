import React from 'react';
import '../styles/Todo.css';

const Todo = ({id, time, task, img, state, handleUpdate, handleEdit, handleRemove, toggleEditForm}) => (
  <li className={state ? 'todo-item done' : 'todo-item'}>
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

export default Todo;
