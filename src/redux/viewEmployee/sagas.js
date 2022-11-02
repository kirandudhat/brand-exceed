import { put } from "@redux-saga/core/effects";
import { all, takeEvery, call } from "redux-saga/effects";
import {
  viewEmployeeFailuer,
  viewEmployeeRequest,
  viewEmployeeSuccess,
} from "./action";
import { VIEW_EMPLOYEE_DETAILS } from "./types";
import { toast } from "react-toastify";
import { viewEmployee } from "../../services/viewEmpServices";

export function* getViewEmpDetailsSagas({ payload }) {
  yield put(viewEmployeeRequest());
  try {
    
    const result = yield call(viewEmployee, payload);
      
    if (result.status == true) {
      yield put(viewEmployeeSuccess(result.result));
      // toast.success(" Successfully");
    } else {
      yield put(viewEmployeeFailuer(result));
      toast("FailListing");
    }
  } catch (error) {
    yield put(viewEmployeeFailuer(error.response.data));

    // toast.error("Validation Error listing");
  }
}

export default function* ViewEmpSaga() {
  yield all([takeEvery(VIEW_EMPLOYEE_DETAILS, getViewEmpDetailsSagas)]);
}
