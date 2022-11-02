import { put } from "@redux-saga/core/effects";
import { all, takeEvery, call } from "redux-saga/effects";

import { toast } from "react-toastify";
import { viewProjectsFailuer, viewProjectsRequest, viewProjectsSuccess } from "./action";
import { viewProjectServices } from "../../services/viewEmpPrjectsServices";
import { VIEW_PROJECTS_DETAILS } from "./types";


export function* getViewProjectsDetailsSagas({ payload }) {
  yield put(viewProjectsRequest());
  try {
    
    const result = yield call(viewProjectServices, payload);
      
    if (result.status == true) {
      yield put(viewProjectsSuccess(result.result));
      // toast.success(" Successfully");
    } else {
      yield put(viewProjectsFailuer(result));
      toast("FailListing");
    }
  } catch (error) {
    const { message } = error.response.data;
    toast.error(message);
    yield put(viewProjectsFailuer(error.response.data));

  }
}

export default function* ViewProjectSaga() {
  yield all([takeEvery(VIEW_PROJECTS_DETAILS, getViewProjectsDetailsSagas)]);
}
