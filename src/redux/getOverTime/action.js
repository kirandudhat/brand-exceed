import { OVER_TIME_LIST_FAILURE, OVER_TIME_LIST_REQUEST, OVER_TIME_LIST_SUCCESS } from "./types"

export const empOverTimeRequest=()=>{
    return{
        type: OVER_TIME_LIST_REQUEST
    }
}
export const empOverTimeSuccess=(cred)=>{
    return{
        type: OVER_TIME_LIST_SUCCESS,
        payload: cred

    }
}

export const empOverTimeFailure=(error)=>{
    return{
        type: OVER_TIME_LIST_FAILURE,
        payload: error

    }
}