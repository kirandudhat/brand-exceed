import { put } from "@redux-saga/core/effects";
import { all, takeEvery, call } from "redux-saga/effects";

import { toast } from "react-toastify";
import {
  addHolidaysFailure,
  addHolidaysRequest,
  addHolidaysSuccess,
} from "./action";
import { addHolidays } from "../../services/addHolidayServices";
import { ADD_HOLIDAYS } from "./types";
import { getHolidayListSagas } from "../holidayListing/sagas";

export function* addHolidaysSaga({ payload }) {
  yield put(addHolidaysRequest());

  try {
    const result = yield call(addHolidays, payload);
    if (result.status == true) {
      yield put(addHolidaysSuccess({ ...payload }));
      yield call(getHolidayListSagas)
      toast.success(result.message);
    } else {
      yield put(addHolidaysFailure(result));
      toast(result.message);
    }
  } catch (error) {
    const { message } = error.response.data;
    toast.error(message);
    yield put(addHolidaysFailure(error.response.data));

  }
}

export default function* holidaysSaga() {
  yield all([takeEvery(ADD_HOLIDAYS, addHolidaysSaga)]);
}
