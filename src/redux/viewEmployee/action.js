import { VIEW_EMPLOYEE_FAILUER, VIEW_EMPLOYEE_REQUEST, VIEW_EMPLOYEE_SUCCESS } from "./types"

export const viewEmployeeRequest=()=>{
    return{
        type: VIEW_EMPLOYEE_REQUEST
    }
}
export const viewEmployeeSuccess=(cred)=>{
    
    return{
        type: VIEW_EMPLOYEE_SUCCESS,
        payload:cred
    }
}

export const viewEmployeeFailuer=(error)=>{
    return{
        type: VIEW_EMPLOYEE_FAILUER,
        payload:error
    }
}