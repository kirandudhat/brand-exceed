import { put } from "@redux-saga/core/effects";
import { all, takeEvery,  call } from 'redux-saga/effects'
import { EMPLOYEE_LEAVE_LIST, EMPLOYEE_LEAVE_LIST_BY_ID } from "./type";
import { empLeaveListing, empLeaveListingById } from "../../services/EmpLeaveListing";
import { empLeaveListingByIdFailure, empLeaveListingByIdRequest, empLeaveListingByIdSuccess, empLeaveListingFailure, empLeaveListingRequest, empLeaveListingSuccess } from "./action";

export function* getEmpLeaveListSagas(){
    yield put(empLeaveListingRequest())
    try{
        
        const result = yield call(empLeaveListing);
        
        if (result.status == true) {

            yield put(empLeaveListingSuccess(result.result));
            // toast.success(" Successfully")
        } else {

            yield put(empLeaveListingFailure(result))
            // toast("FailListing")
        }

    }catch(error){

        yield put(empLeaveListingFailure(error.response.data))

        // toast.error("Validation Error listing")

    }

}
export function* getEmpLeaveListByIdSagas({payload}){
    yield put(empLeaveListingByIdRequest())
    try{
        
        const result = yield call(empLeaveListingById,payload);
        
        if (result.status == true) {

            yield put(empLeaveListingByIdSuccess(result.result));
            // toast.success(" Successfully")
        } else {

            yield put(empLeaveListingByIdFailure(result))
            // toast("FailListing")
        }

    }catch(error){

        yield put(empLeaveListingByIdFailure(error.response.data))

        // toast.error("Validation Error listing")

    }

}

export default function* empLeaveListSaga() {
    yield all([
        takeEvery(EMPLOYEE_LEAVE_LIST, getEmpLeaveListSagas),
        takeEvery(EMPLOYEE_LEAVE_LIST_BY_ID, getEmpLeaveListByIdSagas),
    ])
}
