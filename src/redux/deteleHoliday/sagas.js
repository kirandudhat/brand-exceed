import { put } from "@redux-saga/core/effects";
import { all, takeEvery,  call } from 'redux-saga/effects'
import { toast } from 'react-toastify';
import { deleteholiday } from "../../services/deleteHolidayServices";
import { deleteHolidayFailure, deleteHolidaySuccess } from "./action";
import { DELETE_HOLIDAY } from "./type";
import { getEmployeeListSagas } from "../employeeListing/sagas";

export function* deleteHolidaySagas({payload}){
    try{
         
        const result = yield call(deleteholiday,payload);
        
        if (result.status == true) {

            yield put(deleteHolidaySuccess(result.result));
            yield call(getEmployeeListSagas())  
            toast.success(" Successfully")
        } else {

            yield put(deleteHolidayFailure(result))
            // toast("FailListing")
        }

    }catch(error){

        yield put(deleteHolidayFailure(error.response.data))

        // toast.error("Validation Error listing")

    }

}

export default function* deleteholidaySaga() {
    yield all([
        takeEvery(DELETE_HOLIDAY, deleteHolidaySagas),
    ])
}
