import React from 'react'
import { FaTrash , FaCheckCircle } from "react-icons/fa";
import {removeTodo , doneTodo} from '../Actions'
import {useDispatch} from 'react-redux'


function Todo({text , id , complete}) {

    const dispatch = useDispatch()

    return (
        <li className={complete ? "todo-done" : "todo"}>
            <span>{text}</span>
            <div className="icon">
                <FaTrash className="trash" onClick={() => dispatch(removeTodo(id))}/>
                <FaCheckCircle className="done" onClick={() => dispatch(doneTodo(id))} />
            </div>
        </li>
    )
}

export default Todo
