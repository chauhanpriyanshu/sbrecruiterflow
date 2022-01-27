import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGIN_USER_INIT,
    STORE_INIT
} from './actionTypes'

const initialState = {
    userDetails: null,
    setLoginSuccess: false,
    setLoginFailure: false
}

const Auth = (state = initialState, action) => {
    switch (action.type) {
        case STORE_INIT:
            return{
                ...state,
                userDetails: null,
                setLoginSuccess: false,
                setLoginFailure: false
            }
        case LOGIN_USER:
            return {
                ...state,
                setLoginSuccess: false,
                setLoginFailure: false,
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                setLoginSuccess: true,
                setLoginFailure: false,
                userDetails: action.payload
            }
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                setLoginSuccess: false,
                setLoginFailure: true
            }
        case LOGIN_USER_INIT:
            return {
                ...state,
                setLoginSuccess: false,
                setLoginFailure: false,
            }
        default:
            return state
    }
}

export default Auth