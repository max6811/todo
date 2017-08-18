

import axios from 'axios'
const URL='http://45.55.152.195:15000/api'

export const AddTodo = (name) => {
    // return axios.post(URL + '/todos', {name:name}).then(res => res.data)
    return axios.post(URL + '/todos', {name}).then(res => res.data)
}
