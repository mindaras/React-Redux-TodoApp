import React from 'react';
import '../styles/Container.css';
import TodoList from './TodoList';

const Container = ({toggleAddForm, toggleEditForm}) => (
  <div className="container">
    <header className="header">Todo App</header>
    <TodoList toggleEditForm={toggleEditForm} />
    <div className="add-button" onClick={toggleAddForm}>+</div>
  </div>
);

export default Container;
