

import axios from 'axios'
const URL='http://45.55.152.195:15000/api'

export const AddTodo = (name) => {
    // return axios.post(URL + '/todos', {name:name}).then(res => res.data)
    return axios.post(URL + '/todos', {name}).then(res => res.data)
}

export const loadTodos = () => {
    return axios.get(URL + '/todos').then(res => res.data)
}

export const updateTodo = (id, active) => {
    return axios.patch(URL + '/todos/' + id, {active: !active}).then(res => res.data)
}

export const deleteTodo = (id) => {
    return axios.delete(URL + '/todos/'+id).then(res => res)
}
