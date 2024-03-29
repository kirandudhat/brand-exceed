import { put } from "@redux-saga/core/effects";
import { all, takeEvery, call } from "redux-saga/effects";

import { toast } from "react-toastify";
import {
  addClientFailure,
  addClientRequest,
  addClientSuccess,
} from "./actions";
import { addClients } from "../../services/addClientServices";
import { ADD_CLIENTS } from "./types";
import getClientListSagas from "../../redux/clientListing/sagas";
import history from "../../Utils/History/History";

export function* addClientsSaga(payload) {
  
  yield put(addClientRequest());

  try {
    const result = yield call(addClients, payload.payload);
    // if (result.status == true) {
      yield put(addClientSuccess(payload ));
      if(payload.payload.id){

        history.push(`/survey/CreateSurveyForm?id=${payload.payload.id}`);
      }else{

        history.push(`/survey/CreateSurveyForm?id=${result.data.id}`);
      }
      toast.success(result.msg);
    // } else {
    //   yield put(addClientFailure(result));
    //   toast(result.message);
    // }
  } catch (error) {
    const { message } = error.response.data;
    toast.error(message);
    yield put(addClientFailure(error.response.data));

  }
}

export default function* addClientSaga() {
  yield all([takeEvery(ADD_CLIENTS, addClientsSaga)]);
}
