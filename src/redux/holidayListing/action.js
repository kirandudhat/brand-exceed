import { HOLIDAY_LIST_FAILUER, HOLIDAY_LIST_REQUEST, HOLIDAY_LIST_SUCCESS } from "./types"

export const holidayListingRequest=()=>{
    return{
        type: HOLIDAY_LIST_REQUEST
    }
}
export const holidayListingSuccess=(cred)=>{
    return{
        type: HOLIDAY_LIST_SUCCESS,
        payload: cred

    }
}

export const holidayListingFailure=(error)=>{
    return{
        type: HOLIDAY_LIST_FAILUER,
        payload: error

    }
}