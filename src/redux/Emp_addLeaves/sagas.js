import { put } from "@redux-saga/core/effects";
import { all, takeEvery, call } from "redux-saga/effects";

import { toast } from "react-toastify";
import { ADD_LEAVES } from "./types";
import { addLeavesFailure, addLeavesRequest, addLeavesSuccess } from "./action";
import { addLeaves } from "../../services/addLeavesServices";
import { getEmpLeaveListSagas } from "../../redux/EmpLeaveList/sagas";
export function* addLeavesSaga({ payload }) {
  yield put(addLeavesRequest());

  try {
    const result = yield call(addLeaves, payload);
    if (result.status == true) {
      yield put(addLeavesSuccess({ ...payload }));
      yield call(getEmpLeaveListSagas);
      toast.success(result.message);
    } else {
      yield put(addLeavesFailure(result));
      toast(result.message);
    }
  } catch (error) {
    const { message } = error.response.data;
    toast.error(message);
    yield put(addLeavesFailure(error.response.data));

  }
}

export default function* emp_add_leavesSaga() {
  yield all([takeEvery(ADD_LEAVES, addLeavesSaga)]);
}
