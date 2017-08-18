import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Footer from './components/Footer'
import {AddTodo} from './services/TodoService'

class App extends Component {
  state = {
    todos: [
        {id:1, name: "Aprender React"},
        {id:2, name: "Aprender Redux"},
        {id:3, name: "Aprender JS"},
        {id:4, name: "Aprender ES6"},
        {id:5, name: "Aprender HTML"}
    ]
  }

  handleSubmit = (value) => {
    AddTodo(value).then(todo => {
        let todos = [...this.state.todos, {...todo}]
        console.log(todos);
        this.setState({todos})
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
            <TodoList todos={this.state.todos}   />
            <Footer />
        </div>
      </div>
    );
  }
}

export default App;
