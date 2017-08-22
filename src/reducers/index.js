

import { combineReducers } from 'redux';
import todoReducer from './todoReducer'
import visibilityReducer from './VisibilityReducer'

const TodoApp = combineReducers(
    {
        todos:todoReducer,
        filter_visibility:visibilityReducer
    }
)

export default TodoApp
