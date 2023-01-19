import { all, takeEvery, put, call } from "redux-saga/effects";
import history from "../../Utils/History/History";
import { AUTH_LOGIN } from "./types";
import {
  loginUserFailure,
  loginUserRequest,
  loginUserSuccess,
} from "../auth/action";
import userLogin from "../../services/authServices";
import { toast } from "react-toastify";

export function* userLoginSaga({ payload }) {
  const { email, password } = payload;
  yield put(loginUserRequest());
  try {
    const result = yield call(userLogin, { email, password });
    if (result.status != 0) {
      yield put(loginUserSuccess(result));
      yield history.push(`/`);
      toast.success(result.msg);
    } else {
      yield put(loginUserFailure(result));
      toast.error(result.msg);

    }
  } catch (error) {
    console.log("error",error)
    // yield put(loginUserFailure(error.response.data));
  }
}

export default function* authSaga() {
  yield all([takeEvery(AUTH_LOGIN, userLoginSaga)]);
}
