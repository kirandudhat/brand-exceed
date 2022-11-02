import { EMPLOYEE_LEAVE_LIST_BY_ID_FAILUER, EMPLOYEE_LEAVE_LIST_BY_ID_REQUEST, EMPLOYEE_LEAVE_LIST_BY_ID_SUCCESS, EMPLOYEE_LEAVE_LIST_FAILUER, EMPLOYEE_LEAVE_LIST_REQUEST, EMPLOYEE_LEAVE_LIST_SUCCESS } from "./type"

export const empLeaveListingRequest=()=>{
    return{
        type: EMPLOYEE_LEAVE_LIST_REQUEST
    }
}
export const empLeaveListingSuccess=(cred)=>{
    return{
        type: EMPLOYEE_LEAVE_LIST_SUCCESS,
        payload: cred

    }
}

export const empLeaveListingFailure=(error)=>{
    return{
        type: EMPLOYEE_LEAVE_LIST_FAILUER,
        payload: error

    }
}

export const empLeaveListingByIdRequest=()=>{
    return{
        type: EMPLOYEE_LEAVE_LIST_BY_ID_REQUEST
    }
}
export const empLeaveListingByIdSuccess=(cred)=>{
    return{
        type: EMPLOYEE_LEAVE_LIST_BY_ID_SUCCESS,
        payload: cred

    }
}

export const empLeaveListingByIdFailure=(error)=>{
    return{
        type: EMPLOYEE_LEAVE_LIST_BY_ID_FAILUER,
        payload: error

    }
}