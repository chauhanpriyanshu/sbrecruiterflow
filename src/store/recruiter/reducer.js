import { STORE_INIT } from '../auth/actionTypes';
import { GET_JOBS, GET_JOBS_SUCCESS, GET_JOBS_FAILURE, GET_JOBS_INIT, GET_CANDIDATES, GET_CANDIDATES_SUCCESS, GET_CANDIDATES_FAILURE, GET_CANDIDATES_INIT } from './actionTypes';

const initialState = {
    jobs: null,
    getJobsSuccess: false,
    getJobsFailure: false,

    candidates: null,
    getCandidatesSuccess: false,
    getCandidatesFailure: false
}

const Recruiter = (state = initialState, action) => {
    switch (action.type) {
        case STORE_INIT:
            return{
                ...state,
                jobs: null,
                getJobsSuccess: false,
                getJobsFailure: false,
            
                candidates: null,
                getCandidatesSuccess: false,
                getCandidatesFailure: false
            }

        case GET_JOBS:
            return {
                ...state,
                getJobsSuccess: false,
                getJobsFailure: false,
            }
        case GET_JOBS_SUCCESS:
            return {
                ...state,
                jobs: action.payload,
                getJobsSuccess: true,
                getJobsFailure: false,
            }
        case GET_JOBS_FAILURE:
            return {
                ...state,
                getJobsSuccess: false,
                getJobsFailure: true
            }
        case GET_JOBS_INIT:
            return {
                ...state,
                getJobsSuccess: false,
                getJobsFailure: false,
            }

        case GET_CANDIDATES:
            return {
                ...state,
                getCandidatesSuccess: false,
                getCandidatesFailure: false
            }
        case GET_CANDIDATES_SUCCESS:
            return {
                ...state,
                candidates: action.payload,
                getCandidatesSuccess: true,
                getCandidatesFailure: false
            }
        case GET_CANDIDATES_FAILURE:
            return {
                ...state,
                getCandidatesSuccess: false,
                getCandidatesFailure: true
            }
        case GET_CANDIDATES_INIT:
            return {
                ...state,
                getCandidatesSuccess: false,
                getCandidatesFailure: false
            }

        default:
            return state
    }
}

export default Recruiter