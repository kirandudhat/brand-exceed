import { EMPLOYEE_LIST_FAILURE, EMPLOYEE_LIST_REQUEST, EMPLOYEE_LIST_SUCCESS } from "./types"

export const empListingRequest=()=>{
    return{
        type: EMPLOYEE_LIST_REQUEST
    }
}
export const empListingSuccess=(cred)=>{
    return{
        type: EMPLOYEE_LIST_SUCCESS,
        payload: cred

    }
}

export const empListingFailure=(error)=>{
    return{
        type: EMPLOYEE_LIST_FAILURE,
        payload: error

    }
}