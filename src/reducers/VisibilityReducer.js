


const visibilityReducer = (state='SHOW_TODOS', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY':
            return action.filter
        default:
            return state
    }
}

export default visibilityReducer
