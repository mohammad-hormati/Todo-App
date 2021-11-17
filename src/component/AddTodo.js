import React ,{useState} from 'react'
import { useDispatch , useSelector} from 'react-redux'
import {addTodo , logintodo} from '../Actions'
import './AddTodo.css'

function AddTodo() {
    const [value, setValue] = useState('')
    const login = useSelector(state => state.Login)
    const error = useSelector(state => state.ErrorReducer)
    const dispatch = useDispatch()

    let handleChange = e => {
        setValue(e.target.value)
    }

    let handleSubmit = e => {
        e.preventDefault()
        if (login) {
            dispatch(addTodo(value))
            setValue('')
        } else {
            dispatch(logintodo())
            setValue('')
        }
    }

    return (
        <div className="add-todo" >
            <form onSubmit={handleSubmit} >
                <input type="text" value={value} onChange={handleChange} />
                <button type="submit" >ADD</button>
            </form>
            <div className="error">
                {
                    error ? <span>Please LOG IN</span> : ""
                }
            </div>
        </div>
    )
}

export default AddTodo
