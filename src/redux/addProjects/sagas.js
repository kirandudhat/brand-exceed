import { addProjects } from "../../services/addProjectsServices";
import { put } from "@redux-saga/core/effects";
import { all, takeEvery, call } from "redux-saga/effects";

import { toast } from "react-toastify";
import { addDeveloperProjectsFailure, addDeveloperProjectsRequest, addDeveloperProjectsSuccess } from "./actions";
import { ADD_DEVELOPER_PROJECTS } from "./types";
import { getViewProjectsDetailsSagas } from "../ViewProjects/sagas";
import { getProjectsListSagas } from "../projectsListing/sagas";

export function* addDeveloperProjectsSaga(payload ) {
    yield put(addDeveloperProjectsRequest());
    
  
    try {
        
      const result = yield call(addProjects, payload.payload);
      if (result.status == true) {
        yield put(addDeveloperProjectsSuccess({ ...payload }));
        // yield call(getProjectsListSagas)
        // toast.success(" Successfully");
      } else {
        yield put(addDeveloperProjectsFailure(result));
        toast(result.message);
      }
    } catch (error) {

      const { message } = error.response.data;
      toast.error(message);
      yield put(addDeveloperProjectsFailure(error.response.data));
  
    }
  }
  
  export default function* addProjectSaga() {
    yield all([
      takeEvery(ADD_DEVELOPER_PROJECTS, addDeveloperProjectsSaga),
      
    ]);
  }