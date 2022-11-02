import { put } from "@redux-saga/core/effects";
import { all, takeEvery, call } from "redux-saga/effects";
import { getholidayListing } from "../../services/getHolidayListServices";
import {
  holidayListingFailure,
  holidayListingRequest,
  holidayListingSuccess,
} from "./action";
import { HOLIDAY_LIST } from "./types";

export function* getHolidayListSagas() {
  yield put(holidayListingRequest())
  try {
    const result = yield call(getholidayListing);
    
    if (result.status == true) {
      yield put(holidayListingSuccess(result.result));
      // toast.success(" Successfully")
    } else {
      yield put(holidayListingFailure(result));
      // toast("FailListing")
    }
  } catch (error) {
    yield put(holidayListingFailure(error.response.data));

    // toast.error("Validation Error listing")
  }
}

export default function* holidayListSaga() {
  yield all([takeEvery(HOLIDAY_LIST, getHolidayListSagas)]);
}
