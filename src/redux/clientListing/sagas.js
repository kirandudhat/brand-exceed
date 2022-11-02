import { put } from "@redux-saga/core/effects";
import { all, takeEvery,  call } from 'redux-saga/effects'
import { toast } from 'react-toastify';
import { clientListing } from "../../services/clientListingServices";
import { clientListingFailure, clientListingRequest, clientListingSuccess } from "./action";
import { CLIENT_LIST } from "./types";

export function* getClientListSagas(){
    yield put(clientListingRequest())
    try{
        
        const result = yield call(clientListing);
    
        if (result.status == true) {

            yield put(clientListingSuccess(result.result));
            // toast.success(" Successfully")
        } else {

            yield put(clientListingFailure(result))
            // toast("FailListing")
        }

    }catch(error){

        yield put(clientListingFailure(error.response.data))

        // toast.error("Validation Error listing")

    }

}

export default function* ClientListSaga() {
    yield all([
        takeEvery(CLIENT_LIST, getClientListSagas),
    ])
}
