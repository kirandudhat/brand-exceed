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
import { getBasePath } from "../../Utils/common/routes";

export function* userLoginSaga({ payload }) {
  const { email, password } = payload;
  yield put(loginUserRequest());
  try {
    const result = yield call(userLogin, { email, password });
    if (result.status) {
      yield put(loginUserSuccess(result));
      yield history.push(`${getBasePath(result.result.role)}`);
      toast.success(result.message);
    }
  } catch (error) {
    const { message } = error.response.data;
    toast.error(message);
    yield put(loginUserFailure(error.response.data));
  }
}

export default function* authSaga() {
  yield all([takeEvery(AUTH_LOGIN, userLoginSaga)]);
}
