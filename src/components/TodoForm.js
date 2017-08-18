


import React, {Component} from 'react'

class TodoForm extends Component {

    render () {
        let input
        return (
        <div>
            <form onSubmit={ e => {
                e.preventDefault()
                this.props.handleSubmit(input.value)
                input.value = ''
                }}>
                <input type="text"
                    ref={(node) => { input=node } }
                    placeholder="agregar tareas"/>
                <button>Add</button>
            </form>
        </div>)
    }

}

export default TodoForm
