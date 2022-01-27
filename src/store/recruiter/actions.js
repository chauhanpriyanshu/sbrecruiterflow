import { GET_JOBS, GET_JOBS_SUCCESS, GET_JOBS_FAILURE, GET_JOBS_INIT, GET_CANDIDATES, GET_CANDIDATES_SUCCESS, GET_CANDIDATES_FAILURE, GET_CANDIDATES_INIT } from './actionTypes';

export const getJobs = (user, history) => {
    return{
        type: GET_JOBS,
        payload: { user, history }
    }
}
export const getJobsSuccess = (data) => {
    return{
        type: GET_JOBS_SUCCESS,
        payload: data
    }
}
export const getJobsFailure = (data) => {
    return{
        type: GET_JOBS_FAILURE,
        payload: data
    }
}
export const getJobsInit = (data) => {
    return{
        type: GET_JOBS_INIT,
        payload: data
    }
}

export const getCandidates = (user, history) => {
    return{
        type: GET_CANDIDATES,
        payload: { user, history }
    }
}
export const getCandidatesSuccess = (data) => {
    return{
        type: GET_CANDIDATES_SUCCESS,
        payload: data
    }
}
export const getCandidatesFailure = (data) => {
    return{
        type: GET_CANDIDATES_FAILURE,
        payload: data
    }
}
export const getCandidatesInit = (data) => {
    return{
        type: GET_CANDIDATES_INIT,
        payload: data
    }
}