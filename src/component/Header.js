import React from 'react'
//import actions
import { loginOut , loginsuccess } from '../Actions'
//react-redux tools
import { useSelector , useDispatch } from 'react-redux'
//import style
import './Header.css'


function Header() {

    const login = useSelector(state => state.Login)
    const dispatch = useDispatch();
    
    let handleLogin = () => {
        dispatch(loginOut())
        dispatch(loginsuccess())
    }

    return (
        <div className="header" >
            <span className="logo">
                ToDo App
            </span>
            <button className="btn" onClick={handleLogin} >
                {
                    login ? "LOG OUT" : "LOG IN"
                }
            </button>
        </div>
    )
}

export default Header
