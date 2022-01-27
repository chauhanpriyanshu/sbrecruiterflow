import API from './interceptor';

export function fetchJobs(payload){
    return API({
      method: 'GET',
      url: `/recruiters/jobs?page=${payload.page}`,
      data: payload
    })
}

export function fetchCandidates(payload){
    return API({
      method: 'GET',
      url: `/recruiters/jobs/${payload.job_id}/candidates`,
      data: payload
    })
}