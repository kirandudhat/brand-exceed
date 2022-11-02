import { all, takeEvery, put, call } from "redux-saga/effects";
import { editClients } from "../../services/editClientDetailsServices";
import { editClientFailure, editClientRequest, editClientSuccess } from "./action";
import { EDIT_CLIENT } from "./types";
import getClientListSagas from "../../redux/clientListing/sagas"

export function* editClientsDeatilsSaga( payload,id ) {
  
  yield put(editClientRequest());
  
  try {
    const result = yield call(editClients, payload);
    
    if (result.status == true) {
      yield put(editClientSuccess({ ...payload }));
    //  yield call(getClientListSagas)
    
    } else {
      yield put(editClientFailure(result));
      // toast("not edit");
    }
  } catch (error) {
    
    yield put(editClientFailure(error.response.data));

    //   toast.error("Validation Error");
  }
}
export default function* editClientsSaga() {
  yield all([
    takeEvery(EDIT_CLIENT, editClientsDeatilsSaga),
    
  ]);
}