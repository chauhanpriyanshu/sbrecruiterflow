import { combineReducers } from "redux"

import Auth from "./auth/reducer";
import Recruiter from "./recruiter/reducer";

const rootReducer = combineReducers({
    Auth,
    Recruiter
})

export default rootReducer