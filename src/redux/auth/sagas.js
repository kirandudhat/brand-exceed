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
  console.log("email, password",email, password);
  yield put(loginUserRequest());
  try {
    const result = yield call(userLogin, { email, password });
    if (result.status) {
      console.log("result",result)
      yield put(loginUserSuccess(result));
      yield history.push(`/admin/`);
      toast.success(result.msg);
    }
  } catch (error) {
    console.log("error",error)
    // const { message } = error.response.data;
    // toast.error(message);
    // yield put(loginUserFailure(error.response.data));
  }
}

export default function* authSaga() {
  yield all([takeEvery(AUTH_LOGIN, userLoginSaga)]);
}
