import React, { Component } from 'react';
import '../styles/TodoList.css';
import Todo from './Todo';
import { connect } from 'react-redux';
import { updateTodo, editTodo, removeTodo } from '../actions/actionCreators.js';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleUpdate(id) {
    this.props.updateTodo(id);
  }

  handleEdit(id, time, task, img) {
    console.log('edit');
  }

  handleRemove(id) {
    this.props.removeTodo(id);
  }

  render() {
    const todos = this.props.todos.map(todo => (
      <Todo key={todo.id}
            handleUpdate={this.handleUpdate.bind(this, todo.id)}
            handleEdit={this.handleEdit.bind(this, todo.id)}
            handleRemove={this.handleRemove.bind(this, todo.id)}
            toggleEditForm={this.props.toggleEditForm}
            id={todo.id}
            time={todo.time}
            task={todo.task}
            img={todo.img}
            state={todo.state}  />
    ));

    return (
      <ul className="todo-list">
        {todos}
      </ul>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    todos: reduxState.todos
  };
}

export default connect(mapStateToProps, { updateTodo, editTodo, removeTodo })(TodoList);
