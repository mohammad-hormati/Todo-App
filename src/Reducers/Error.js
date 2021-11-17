

const ErrorReducer = (state = false , action) => {
    switch (action.type) {
        case "LOGINERROR":
            return state = true
        case "LOGINSUCCESS":
            return state = false
        default:
            return state
    }
}

export default ErrorReducer