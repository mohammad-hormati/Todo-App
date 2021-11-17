

export const loginOut = () => {
    return{
        type : 'LOGIN-OUT',
    }
}

let nextTodo = 0
export const addTodo = (text) => { 
    return{
        type : "ADD_TODO",
        text,
        id : nextTodo += 1
    }
}

export const logintodo =() => {
    return{
        type : "LOGINERROR"
    }
}

export const loginsuccess =() => {
    return{
        type : "LOGINSUCCESS"
    }
}

export const removeTodo =(id) => {
    return{
        type : "REMOVETODO",
        id
    }
}

export const doneTodo =(id) => {
    return{
        type : "DONETODO",
        id
    }
}