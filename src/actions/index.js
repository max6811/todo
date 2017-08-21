


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
