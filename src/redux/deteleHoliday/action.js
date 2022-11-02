import { DELETE_HOLIDAY_FAILURE, DELETE_HOLIDAY_REQUEST, DELETE_HOLIDAY_SUCCESS } from "./type"

export const deleteHolidayRequest=()=>{
    return{
        type: DELETE_HOLIDAY_REQUEST
    }
}
export const deleteHolidaySuccess=(cred)=>{
    return{
        type: DELETE_HOLIDAY_SUCCESS,
        payload: cred

    }
}

export const deleteHolidayFailure=(error)=>{
    return{
        type: DELETE_HOLIDAY_FAILURE,
        payload: error

    }
}