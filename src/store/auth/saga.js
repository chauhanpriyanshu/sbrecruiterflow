import { LOGIN_USER } from './actionTypes'
import { loginUserSuccess, loginUserFailure } from './actions'
import { takeEvery, fork, put, all, call } from 'redux-saga/effects'
import { authenticateUser } from '../../services/authService';

function* login(action){
    try{
        const response = yield call (
            authenticateUser,
            action.payload.user
        )
        if(response.status === 200){
            console.log(response.data)
            yield put(loginUserSuccess(response.data.data))
        }
        else{
            yield put(loginUserFailure(response.data.message))
        }
    }
    catch(error){
        yield put(loginUserFailure("Something went wrong"))
    }
}

export function* watchLogin(){
    yield takeEvery(LOGIN_USER, login)
}

function* AuthSaga(){
    yield all([
        fork(watchLogin)
    ])
}

export default AuthSaga