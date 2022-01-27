import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGIN_USER_INIT,
    STORE_INIT
} from './actionTypes'

export const loginUser = (user, history) => {
    return{
        type: LOGIN_USER,
        payload: { user, history }
    }
}
export const loginUserSuccess = (data) => {
    return{
        type: LOGIN_USER_SUCCESS,
        payload: data
    }
}
export const loginUserFailure = (data) => {
    return{
        type: LOGIN_USER_FAILURE,
        payload: data
    }
}
export const loginUserInit = (data) => {
    return{
        type: LOGIN_USER_INIT,
        payload: data
    }
}

export const storeInit = (data) => {
    return{
        type: STORE_INIT,
        payload: data
    }
}