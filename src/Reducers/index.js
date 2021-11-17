import { combineReducers } from 'redux';
import Login from './Login'
import TodoReducer from './Todo';
import ErrorReducer from './Error';



const allReducer = combineReducers({
    Login,
    TodoReducer,
    ErrorReducer

})

export default allReducer