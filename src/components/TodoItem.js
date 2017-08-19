
import React, {PropTypes} from 'react'
const TodoItem = (props) => (
    <li onClick={ (e) => {
        e.preventDefault()
        props.handleUpdate(props.id, props.active)
    }}
    style={{textDecoration: props.active ? 'line-through': ''}}
    >
    {props.name} { '     '}
    <a className="delete" onClick={(e) => {
        e.preventDefault()
        props.handleDelete(props.id)
    }}>
        X
    </a>
    </li>
)
// const TodoItem = (props) => {
//     return (<li>{props.name}</li>)
// }
TodoItem.propTypes = {
    handleUpdate: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired
}

export default TodoItem
