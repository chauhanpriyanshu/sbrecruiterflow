import { GET_CANDIDATES, GET_JOBS } from './actionTypes'
import { getJobsSuccess, getJobsFailure, getCandidatesSuccess, getCandidatesFailure } from './actions'
import { takeEvery, fork, put, all, call } from 'redux-saga/effects'
import { fetchCandidates, fetchJobs } from '../../services/recruiterService';

function* findJobs(action){
    try{
        const response = yield call (
            fetchJobs,
            action.payload.user
        )
        if(response.status === 200){
            yield put(getJobsSuccess(response.data))
        }
        else{
            yield put(getJobsFailure(response.data.message))
        }
    }
    catch(error){
        yield put(getJobsFailure("Something went wrong"))
    }
}

function* findCandidates(action){
    try{
        const response = yield call (
            fetchCandidates,
            action.payload.user
        )
        if(response.status === 200){
            yield put(getCandidatesSuccess(response.data))
        }
        else{
            yield put(getCandidatesFailure(response.data.message))
        }
    }
    catch(error){
        yield put(getCandidatesFailure("Something went wrong"))
    }
}

export function* watchGetJobs(){
    yield takeEvery(GET_JOBS, findJobs)
}

export function* watchGetCandidates(){
    yield takeEvery(GET_CANDIDATES, findCandidates)
}

function* RecruiterSaga(){
    yield all([
        fork(watchGetJobs),
        fork(watchGetCandidates)
    ])
}

export default RecruiterSaga