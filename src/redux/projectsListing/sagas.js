import { put } from "@redux-saga/core/effects";
import { all, takeEvery,  call } from 'redux-saga/effects'
import { projectsListing } from "../../services/empProjectsListServices";
import { ProjectsListingFailure, ProjectsListingRequest, projectsListingSuccess } from "./action";
import { VIEW_PROJECTS_LIST } from "./types";

export function* getProjectsListSagas(){
    yield put(ProjectsListingRequest())
    try{
        
        const result = yield call(projectsListing);
        
        if (result.status == true) {

            yield put(projectsListingSuccess(result.result));
            // toast.success(" Successfully")
        } else {

            yield put(ProjectsListingFailure(result))
            // toast("FailListing")
        }

    }catch(error){

        yield put(ProjectsListingFailure(error.response.data))

        // toast.error("Validation Error listing")

    }

}

export default function* projectsListSaga() {
    yield all([
        takeEvery(VIEW_PROJECTS_LIST, getProjectsListSagas),
    ])
}
