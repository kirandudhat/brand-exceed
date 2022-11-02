import { VIEW_DATEWISE_TIMESHEET_FAILURE, VIEW_DATEWISE_TIMESHEET_REQUEST, VIEW_DATEWISE_TIMESHEET_SUCCESS } from "./types"

export const viewDateWiseRequest=()=>{
    return{
        type: VIEW_DATEWISE_TIMESHEET_REQUEST
    }
}
export const viewDateWiseSuccess=(cred)=>{

    return{
        type: VIEW_DATEWISE_TIMESHEET_SUCCESS,
        payload:cred
    }
}

export const viewDateWiseFailuer=(error)=>{
    return{
        type: VIEW_DATEWISE_TIMESHEET_FAILURE,
        payload:error
    }
}
