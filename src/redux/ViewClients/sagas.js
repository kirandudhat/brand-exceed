import { put } from "@redux-saga/core/effects";
import { all, takeEvery, call } from "redux-saga/effects";

import { toast } from "react-toastify";
import { VIEW_PROJECTS_DETAILS } from "../ViewProjects/types";
import { viewClientServices } from "../../services/ViewClientsServices";
import {
  viewClientsFailuer,
  viewClientsRequest,
  viewClientsSuccess,
} from "./action";
import { VIEW_CLIENTS_DETAILS } from "./types";

export function* getViewClientsDetailsSagas({ payload }) {
  yield put(viewClientsRequest());
  try {
    const result = yield call(viewClientServices, payload);

    if (result.status == true) {
      yield put(viewClientsSuccess(result.result));
      // toast.success(" Successfully");
    } else {
      yield put(viewClientsFailuer(result));
      toast("FailListing");
    }
  } catch (error) {
    const { message } = error.response.data;
    toast.error(message);
    yield put(viewClientsFailuer(error.response.data));

  }
}

export default function* ViewClientSaga() {
  yield all([takeEvery(VIEW_CLIENTS_DETAILS, getViewClientsDetailsSagas)]);
}
