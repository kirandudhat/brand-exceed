import { put } from "@redux-saga/core/effects";
import { employeeListing } from "../../services/empListServices";
import { all, takeEvery, call } from "redux-saga/effects";
import {
  empListingFailure,
  empListingRequest,
  empListingSuccess,
} from "./action";
import { EMPLOYEE_LIST } from "./types";

export function* getEmployeeListSagas() {
  yield put(empListingRequest());
  try {
    const result = yield call(employeeListing);

    if (result.status == true) {
      yield put(empListingSuccess(result.result));
      // toast.success(" Successfully");
    } else {
      yield put(empListingFailure(result));
      // toast("FailListing")
    }
  } catch (error) {
    yield put(empListingFailure(error.response.data));

    // toast.error("Validation Error listing")
  }
}

export default function* empListSaga() {
  yield all([takeEvery(EMPLOYEE_LIST, getEmployeeListSagas)]);
}
