


const todoReducer = (state=[], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state,
                 {id:action.id,
                  name: action.name,
                  active:action.active}]
        case 'UPDATE_TODO':
            return state.map(todo=> {
                if(todo.id != action.id) {
                    return todo
                }
                return {
                    ...todo,
                    active: action.active
                }
                // return {
                //     id: todo.id,
                //     name: todo.name,
                //     active: action.active
                // }
            })
        case 'DELETE_TODO':
            return state.filter(todo => todo.id != action.id)
        case 'LOAD_TODOS':
            return [...state, ...action.todos]
        default:
            return state
    }
}

export default todoReducer
