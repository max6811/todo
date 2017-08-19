import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Footer from './components/Footer'
import {AddTodo, loadTodos, updateTodo, deleteTodo } from './services/TodoService'

class App extends Component {
  state = {
    todos: []
  }

  handleSubmit = (value) => {
    AddTodo(value).then(todo => {
        let todos = [...this.state.todos, {...todo}]
        console.log(todos);
        this.setState({todos})
    })
  }

 componentDidMount = () => {
    //  loadTodos.then(todos => setState({todos:todos}))
    loadTodos().then(todos => {
        this.setState({todos})
    })
 }

 handleUpdate = (id, active) => {
    updateTodo(id, active).then(data => {
        loadTodos().then(todos => {
            this.setState({todos})
        })
    })
 }

 handleDelete = (id) => {
     console.log(id);
     deleteTodo(id).then(res => {
         console.log(res);
        loadTodos().then(todos => {
            this.setState({todos})
        })
     })
 }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Proyecto TODO</h2>
        </div>
        <div>
            <TodoForm handleSubmit={this.handleSubmit} />
            <TodoList handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} todos={this.state.todos}   />
            <Footer />
        </div>
      </div>
    );
  }
}

export default App;
