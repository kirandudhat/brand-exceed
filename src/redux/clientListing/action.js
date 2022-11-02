import { CLIENT_LIST_FAILUER, CLIENT_LIST_REQUEST, CLIENT_LIST_SUCCESS } from "./types"

export const clientListingRequest=()=>{
    return{
        type: CLIENT_LIST_REQUEST
    }
}
export const clientListingSuccess=(cred)=>{
    return{
        type: CLIENT_LIST_SUCCESS,
        payload: cred

    }
}

export const clientListingFailure=(error)=>{
    return{
        type: CLIENT_LIST_FAILUER,
        payload: error

    }
}