import React, { Component } from 'react';
import './styles/App.css';
import Container from './components/Container';
import Form from './components/Form';
import { connect } from 'react-redux';
import { addTodo, editTodo } from './actions/actionCreators';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.toggleAddForm = this.toggleAddForm.bind(this);
    this.toggleEditForm = this.toggleEditForm.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      form: {
        show: false,
        type: null,
        time: '',
        task: '',
        img: ''
      },
      editValues : {
        time: '',
        task: '',
        img: ''
      },
      editId: null
    }
  }

  toggleAddForm() {
    this.setState({form: {show: true, type: 'add'}});
  }

  toggleEditForm(id, time, task, img) {
    this.setState({
      form: {show: true, type: 'edit', time, task, img},
      editId: id
    });
  }

  toggleForm() {
    this.setState({
      form: {show: false, type: null, time: '', task: '', img: ''},
      editId: null
    });
  }

  handleAdd() {
    const {time, task, img} = this.state.form;
    this.props.addTodo(time, task, img);
    this.toggleForm();
  }

  handleEdit() {
    const id = this.state.editId,
          {time, task, img} = this.state.form;
    this.props.editTodo(id, time, task, img);
    this.toggleForm();
  }

  handleChange(name, val) {
    let form = {...this.state.form};
    form[name] = val;
    this.setState({form});
  }

  render() {
    return (
      <div className="App">
        <Form state={this.state.form.show}
              toggleForm={this.toggleForm}
              handleAdd={this.handleAdd}
              handleEdit={this.handleEdit}
              handleChange={this.handleChange}
              type={this.state.form.type}
              time={this.state.form.time}
              task={this.state.form.task}
              img={this.state.form.img} />
        <Container toggleAddForm={this.toggleAddForm} toggleEditForm={this.toggleEditForm} />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    todos: reduxState.todos
  }
}

export default connect(mapStateToProps, { addTodo, editTodo })(App);
