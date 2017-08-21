


const todoReducer = (state=[], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state,
                 {id:action.id,
                  name: action.name,
                  active:action.active}]
        default:
            return state
    }
}

export default todoReducer
