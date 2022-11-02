import { put } from "@redux-saga/core/effects";
import { all, takeEvery,  call } from 'redux-saga/effects'
import { OVER_TIME_LIST } from "./types";
import { empOvertimeListing } from "../../services/OverTimeServices";
import { empOverTimeFailure, empOverTimeRequest, empOverTimeSuccess } from "./action";

export function* getEmpOverTimeSagas({payload}){
    yield put(empOverTimeRequest())
    try{
         
        const result = yield call(empOvertimeListing,payload);
        
        if (result.status == true) {

            yield put(empOverTimeSuccess(result.result));
            // toast.success(" Successfully")
        } else {

            yield put(empOverTimeFailure(result))
            // toast("FailListing")
        }

    }catch(error){

        yield put(empOverTimeFailure(error.response.data))

        // toast.error("Validation Error listing")

    }

}

export default function* empOverTimeSaga() {
    yield all([
        takeEvery(OVER_TIME_LIST, getEmpOverTimeSagas),
    ])
}
