

const TodoReducer = (todos = [] , action ) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                 ...todos ,
                {
                    id : action.id , 
                    text : action.text,
                    complete : false
                }
            ]
        case "REMOVETODO":
             return todos.filter(todo => todo.id !== action.id)
        case "DONETODO":
            return todos.map(todo => {
                return (todo.id === action.id) 
                    ? {...todo ,  complete : !todo.complete}
                    :todo
            })
        default:
            return todos
    }
}

export default TodoReducer