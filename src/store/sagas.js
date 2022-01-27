import { all, fork } from "redux-saga/effects"

import AuthSaga from "./auth/saga";
import RecruiterSaga from "./recruiter/saga";

export default function* rootSaga() {
    yield all([
      fork(AuthSaga),
      fork(RecruiterSaga)
    ])
}