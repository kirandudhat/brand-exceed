import { put } from "@redux-saga/core/effects";
import { all, takeEvery, call } from "redux-saga/effects";

import { toast } from "react-toastify";
import {
  addOverTimeFailure,
  addOverTimeRequest,
  addOverTimeSheetFailure,
  addOverTimeSuccess,
  addTimeSheetFailure,
  addTimeSheetRequest,
  addTimeSheetSuccess,
} from "./action";
import {
  addOverTime,
  addTimeSheets,
} from "../../services/addTimeSheetServices";
import { ADD_OVERTIME, ADD_TIMESHEET } from "./types";

export function* addTimeSheetSaga({ payload }) {
  yield put(addTimeSheetRequest());

  try {
    const result = yield call(addTimeSheets, payload);
    if (result.status == true) {
      yield put(addTimeSheetSuccess({ ...payload }));
      toast.success(result.message);
    } else {
      yield put(addTimeSheetFailure(result));
      toast(result.message);
    }
  } catch (error) {
    const { message } = error.response.data;
    toast.error(message);
    yield put(addTimeSheetFailure(error.response.data));

  }
}
///overtime saga
export function* addOverTimeSheetSaga({ payload }) {
  yield put(addOverTimeRequest());

  try {
    const result = yield call(addOverTime, payload);
    if (result.status == true) {
      yield put(addOverTimeSuccess({ ...payload }));
      toast.success(result.message);
    } else {
      yield put(addOverTimeSheetFailure(result));
      toast(result.message);
    }
  } catch (error) {
    const { message } = error.response.data;
    toast.error(message);
    yield put(addOverTimeSheetFailure(error.response.data));

  }
}

export default function* addEmployeeTimesheetSaga() {
  yield all([
    takeEvery(ADD_TIMESHEET, addTimeSheetSaga),
    takeEvery(ADD_OVERTIME, addOverTimeSheetSaga),
  ]);
}
