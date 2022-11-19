import { all, takeEvery, put, call } from "redux-saga/effects";
import { editClients } from "../../services/editClientDetailsServices";
import { editClientFailure, editClientRequest, editClientSuccess } from "./action";
import { EDIT_CLIENT } from "./types";
import getClientListSagas from "../../redux/clientListing/sagas"
import { useParams } from "react-router-dom";

export function* editClientsDeatilsSaga( payload ) {
  console.log("payload",payload)
  const params = new URLSearchParams(window.location.search) 
  let id = params.get('id')
  console.log("params",params , id)
  
  yield put(editClientRequest());
  
  try {
    const result = yield call(editClients, {...payload,id}, );
  
    // if (result.status == true) {
      yield put(editClientSuccess(payload));
    //  yield call(getClientListSagas)
    
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