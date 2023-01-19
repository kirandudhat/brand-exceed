import { put } from "@redux-saga/core/effects";
import { all, takeEvery, call } from "redux-saga/effects";
import { toast } from "react-toastify";
import {
  EMPLOYEE_STATUS_UPDATE,
  LEAVE_STATUS,
  REJECT_LEAVE_STATUS,
} from "./type";
import {
  employeeStatusUpdateFailure,
  employeeStatusUpdateRequest,
  employeeStatusUpdateSuccess,
  leaveStatusFailure,
  leaveStatusRequest,
  leaveStatusSuccess,
  rejectleaveStatusFailure,
  rejectleaveStatusRequest,
  rejectleaveStatusSuccess,
} from "./action";
import {
  empStatusUpdate,
  leaveStatus,
  RejectleaveStatus,
} from "../../services/Approve_rejectLeaveServicers";
import { employeeListing } from "../../services/empListServices";
import { empLeaveListing } from "../../services/EmpLeaveListing";

//// Accept leave
export function* leaveStatusSaga({ payload }) {
  yield put(leaveStatusRequest());
  try {
    const result = yield call(leaveStatus, payload);
    if (result.status == true) {
      yield put(leaveStatusSuccess({ ...payload }));
      yield call(empLeaveListing);
      toast.success(result.message);
    } else {
      yield put(leaveStatusFailure(result));
    }
  } catch (error) {
    const { message } = error.response.data;
    toast.error(message);
    yield put(leaveStatusFailure(error.response.data));
  }
}
/// React Leave Saga
export function* RejectleaveStatusSaga({ payload }) {
  yield put(rejectleaveStatusRequest());

  try {
    const result = yield call(RejectleaveStatus, payload);
    if (result.status == true) {
      yield put(rejectleaveStatusSuccess({ ...payload }));
      yield call(empLeaveListing);
      toast.success(result.message);
    } else {
      yield put(rejectleaveStatusFailure(result));
      toast(result.message);
    }
  } catch (error) {
    const { message } = error.response.data;
    toast.error(message);
    yield put(rejectleaveStatusFailure(error.response.data));
  }
}
// EMPLOYEE  STATUS UPDATE saga
export function* employeeStatusUpdateSaga({ payload }) {
  yield put(employeeStatusUpdateRequest());

  try {
    const result = yield call(empStatusUpdate, payload);
    if (result.status == true) {
      yield call(employeeListing);
      toast.success(result.message);
    } else {
      yield put(employeeStatusUpdateFailure(result));
    }
  } catch (error) {
    const { message } = error.response.data;
    toast.error(message);
    yield put(employeeStatusUpdateFailure(error.response.data));
  }
}

export default function* LeaveStatuaUpdateSaga() {
  yield all([
    takeEvery(LEAVE_STATUS, leaveStatusSaga),
    takeEvery(REJECT_LEAVE_STATUS, RejectleaveStatusSaga),
    takeEvery(EMPLOYEE_STATUS_UPDATE, employeeStatusUpdateSaga),
  ]);
}
