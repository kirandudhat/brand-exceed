import { all, takeEvery, put, call } from "redux-saga/effects";
import { editClients } from "../../services/editClientDetailsServices";
import { editClientFailure, editClientRequest, editClientSuccess } from "./action";
import { EDIT_CLIENT } from "./types";
import getClientListSagas from "../../redux/clientListing/sagas"
import { useParams } from "react-router-dom";
import history from "../../Utils/History/History";
import { toast } from "react-toastify";

export function* editClientsDeatilsSaga( payload ) {
  const params = new URLSearchParams(window.location.search) 
  let id = params.get('id')
  
  yield put(editClientRequest());
  
  try {
    const result = yield call(editClients, {payload,id}, );
  
    // if (result.status == true) {
      yield put(editClientSuccess(payload));

      history.push(`/survey`);
      toast.success('record update successfully');
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