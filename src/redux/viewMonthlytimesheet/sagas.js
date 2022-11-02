import { put } from "@redux-saga/core/effects";
import { all, takeEvery, call } from "redux-saga/effects";

import { toast } from "react-toastify";
import {
  MonthlytimeSheetListing,
  selectedMonthlytimeSheetListing,
} from "../../services/ViewMonthlytimeServices";
import {
  selectMonthFailuer,
  selectMonthSuccess,
  viewMonthlyFailuer,
  viewMonthlyRequest,
  viewMonthlySuccess,
} from "./action";
import { VIEW_MONTHLY_TIMESHEET } from "./types";
export function* getMothlyTimesheetSagas({ payload }) {
  yield put(viewMonthlyRequest());

  try {
    const result = yield call(MonthlytimeSheetListing, payload);

    if (result.status == true) {
      yield put(viewMonthlySuccess(result.result));
      // toast.success(" Successfully");
    } else {
      yield put(viewMonthlyFailuer(result));
      toast("FailListing");
    }
  } catch (error) {
    const { message } = error.response.data;
    toast.error(message);
    yield put(viewMonthlyFailuer(error.response.data));

  }
}

// export function* selectMothTimesheetSagas({ payload }) {
//   // yield put(viewProjectsRequest());

//   try {
//     const result = yield call(selectedMonthlytimeSheetListing, payload);

//     if (result.status == true) {
//       yield put(selectMonthSuccess(result.result));
//       toast.success(" Successfully");
//     } else {
//       yield put(selectMonthFailuer(result));
//       toast("FailListing");
//     }
//   } catch (error) {
//     yield put(selectMonthFailuer(error.response.data));

//     toast.error("Validation Error listing");
//   }
// }

export default function* ViewMonthlyTimesheetSaga() {
  yield all([takeEvery(VIEW_MONTHLY_TIMESHEET, getMothlyTimesheetSagas)]);
  // yield all([takeEvery(SELECT_MONTHLY_TIMESHEET, selectMothTimesheetSagas)]);
}
