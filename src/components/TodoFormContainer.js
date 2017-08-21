

import {connect} from 'react-redux'
import {AddTodoAction } from '../actions'
import {AddTodo} from '../services/TodoService'
import TodoForm from './TodoForm'

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (value) => {
                console.log(value);
                AddTodo(value).then(todo => {
                    dispatch(
                        AddTodoAction(todo.id, todo.name, todo.active)
                    )

                    console.log('done')
                    }
                )
        }
    }
}


const TodoFormContainer = connect(
 null,
  mapDispatchToProps
)(TodoForm);

export default TodoFormContainer
