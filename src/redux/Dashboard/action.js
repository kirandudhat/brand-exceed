import { DASHBOARD_FAILURE, DASHBOARD_REQUEST, DASHBOARD_SUCCESS } from "./types"

export const dashBoardRequest=()=>{
    return{
        type:DASHBOARD_REQUEST
    }
}
export const dashBoardSucess=(cred)=>{
    return{
        type:DASHBOARD_SUCCESS,
        payload:cred
    }
}
export const dashBoardFailure=(error)=>{
    return{
        type:DASHBOARD_FAILURE,
        payload:error
    }
}