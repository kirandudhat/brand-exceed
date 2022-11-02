import { SELECT_MONTHLY_TIMESHEET_FAILURE, SELECT_MONTHLY_TIMESHEET_REQUEST, SELECT_MONTHLY_TIMESHEET_SUCCESS, VIEW_MONTHLY_TIMESHEET_FAILURE, VIEW_MONTHLY_TIMESHEET_REQUEST, VIEW_MONTHLY_TIMESHEET_SUCCESS } from "./types"

export const viewMonthlyRequest=()=>{
    return{
        type: VIEW_MONTHLY_TIMESHEET_REQUEST
    }
}
export const viewMonthlySuccess=(cred)=>{

    return{
        type: VIEW_MONTHLY_TIMESHEET_SUCCESS,
        payload:cred
    }
}

export const viewMonthlyFailuer=(error)=>{
    return{
        type: VIEW_MONTHLY_TIMESHEET_FAILURE,
        payload:error
    }
}


export const selectMonthRequest=()=>{
    return{
        type: SELECT_MONTHLY_TIMESHEET_REQUEST
    }
}
export const selectMonthSuccess=(cred)=>{

    return{
        type: SELECT_MONTHLY_TIMESHEET_SUCCESS,
        payload:cred
    }
}

export const selectMonthFailuer=(error)=>{
    return{
        type: SELECT_MONTHLY_TIMESHEET_FAILURE,
        payload:error
    }
}