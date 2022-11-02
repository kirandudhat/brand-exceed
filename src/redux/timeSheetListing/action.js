import { VIEW_TIMESHEET_FAILURE, VIEW_TIMESHEET_REQUEST, VIEW_TIMESHEET_SUCCESS } from "./types"

export const timeSheetListingRequest=()=>{
    return{
        type: VIEW_TIMESHEET_REQUEST
    }
}
export const timeSheetListingSuccess=(cred)=>{
    return{
        type: VIEW_TIMESHEET_SUCCESS,
        payload: cred

    }
}

export const timeSheetListingFailure=(error)=>{
    return{
        type: VIEW_TIMESHEET_FAILURE,
        payload: error

    }
}