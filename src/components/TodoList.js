import React, {Component} from 'react'
import TodoItem from './TodoItem'
class TodoList extends Component {

    componentDidMount = () => {
        this.props.loadTodos()
    }

    render() {
        console.log(this.props);
        return (
            <div className="contenido">
                <ul>
                    {
                        // this.props.todos.map(todo => <TodoItem key={todo.id} id={todo.id} name={todo.name} /> )
                        this.props.todos.map(todo =>
                            <TodoItem key={todo.id}
                                {...todo}
                                handleUpdate={this.props.handleUpdate}
                                handleDelete={this.props.handleDelete} /> )
                    }
                </ul>
            </div>
        )
    }

}

export default TodoList
