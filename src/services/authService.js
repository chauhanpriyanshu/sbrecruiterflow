import API from './interceptor';

export function authenticateUser(payload){
    return API({
      method: 'POST',
      url: `/auth/login`,
      data: payload
    })
}