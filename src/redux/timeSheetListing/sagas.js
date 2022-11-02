import { put } from "@redux-saga/core/effects";
import { all, takeEvery,  call } from 'redux-saga/effects'
import { toast } from 'react-toastify';
import { VIEW_TIMESHEET } from "./types";
import { timeSheetListing } from "../../services/empTimeSheetListServices";
import { timeSheetListingFailure, timeSheetListingRequest, timeSheetListingSuccess } from "./action";

export function* getTimeSheetSagas(){
    yield put(timeSheetListingRequest())
    try{
        
        const result = yield call(timeSheetListing);
    
        if (result.status == true) {

            yield put(timeSheetListingSuccess(result.result));
            // toast.success(" Successfully")
        } else {

            yield put(timeSheetListingFailure(result))
            // toast("FailListing")
        }

    }catch(error){

        yield put(timeSheetListingFailure(error.response.data))

        // toast.error("Validation Error listing")

    }

}

export default function* timeSheetSaga() {
    yield all([
        takeEvery(VIEW_TIMESHEET, getTimeSheetSagas),
    ])
}
