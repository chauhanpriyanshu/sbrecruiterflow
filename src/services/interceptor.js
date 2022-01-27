import axios from 'axios'
import store from './../store/index';

const baseURL = "https://jobs-api.squareboat.info/api/v1"

let primaryServer = axios.create({
    baseURL: baseURL,
    headers: {
        "content-Type": "application/json"
    }
})
primaryServer.interceptors.request.use(
    (response) => {
        const token = (store.getState().Auth.userDetails) ? store.getState().Auth.userDetails.data.token : null;
        if(token != null){
            response.headers.Authorization = `${token}`;
        }
        return response
    },
    (error) => {
        return error
    }
)

export default primaryServer;
