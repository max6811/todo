


export const AddTodoAction = (id, name, active) => {
    // return {
    //     type: 'ADD_TODO',
    //     id:id,
    //     name:name,
    //     active:active
    // }
    return {
        type: 'ADD_TODO',
        id,
        name,
        active
    }
}

export const UpdateTodoAction = (id, active) => {
    // return {
    //     type: 'UPDATE_TODO',
    //     id:id,
    //     active:active
    // }
    //
    return {
        type: 'UPDATE_TODO',
        id,
        active
    }
}

export const DeleteTodoAction = (id) => {
    return {
        type: 'DELETE_TODO',
        id
    }
}

export const LoadTodosAction = (todos) => {
    return {
        type: 'LOAD_TODOS',
        todos
    }
}
