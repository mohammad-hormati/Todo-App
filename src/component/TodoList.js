import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'
import './TodoList.css'


function TodoList() {

    const todos = useSelector(state => state.TodoReducer)
    const login = useSelector(state => state.Login)


    return (
        <ul className="todo-list">
            {
                todos.map(todo => (
                    login ? <Todo key={todo.id} text={todo.text} id={todo.id} complete={todo.complete} /> : ""
                ))
            }
        </ul>
    )
}

export default TodoList
