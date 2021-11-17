

const Login = (state = false , action) => {
    switch (action.type) {
        case 'LOGIN-OUT':
            return !state
        default:
            return state;
    }
}

export default Login