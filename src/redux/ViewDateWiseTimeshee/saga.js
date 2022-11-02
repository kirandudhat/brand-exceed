import { put } from "@redux-saga/core/effects";
import { all, takeEvery, call } from "redux-saga/effects";

import { toast } from "react-toastify";
import { dateWisetimeSheetListing } from "../../services/ViewDateWiseTimesheetservice";
import { viewDateWiseFailuer, viewDateWiseRequest, viewDateWiseSuccess } from "./action";
import { VIEW_DATEWISE_TIMESHEET } from "./types";


export function* getDateWiseTimesheetSagas({ payload }) {
  yield put(viewDateWiseRequest());
  try {
    
    const result = yield call(dateWisetimeSheetListing, payload);
    if (result.status == true) {
      yield put(viewDateWiseSuccess(result.result));
      toast.success(result.message);
    } else {
      yield put(viewDateWiseFailuer(result));
      toast(result.message);
    }
  } catch (error) {
    const { message } = error.response.data;
    toast.error(message);
    yield put(viewDateWiseFailuer(error.response.data));

  }
}
export default function* ViewDateWiseTimesheetSaga() {
    yield all([takeEvery(VIEW_DATEWISE_TIMESHEET, getDateWiseTimesheetSagas)]);
  
  }