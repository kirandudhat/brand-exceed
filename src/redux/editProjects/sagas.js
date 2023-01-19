import { all, takeEvery, put, call } from "redux-saga/effects";
import { editProjects } from "../../services/editProjectDetailsServices";
import { getProjectsListSagas } from "../projectsListing/sagas";
import { getViewProjectsDetailsSagas } from "../ViewProjects/sagas";
import { editProjectFailure, editProjectRequest, editProjectSuccess } from "./actions";
import { EDIT_PROJECTS } from "./types";
import { toast } from "react-toastify";


export function* editProjectDeatilsSaga( payload,id ) {
  
  yield put(editProjectRequest());

  try {
    const result = yield call(editProjects, payload);
    
    if (result.status == true) {
      yield put(editProjectSuccess({ ...payload }));
      // yield call(getProjectsListSagas)
      toast.success(result.message);
    
    } else {
      yield put(editProjectFailure(result));
      // toast("not edit");
    }
  } catch (error) {
    
    yield put(editProjectFailure(error.response.data));

    //   toast.error("Validation Error");
  }
}
export default function* editProjectSaga() {
  yield all([
    takeEvery(EDIT_PROJECTS, editProjectDeatilsSaga),
    
  ]);
}