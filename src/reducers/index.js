

import { combineReducers } from 'redux';
import todoReducer from './todoReducer'

const TodoApp = combineReducers(
    {todos:todoReducer}
)

export default TodoApp
