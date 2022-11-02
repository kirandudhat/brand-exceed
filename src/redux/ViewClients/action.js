
import { VIEW_CLIENTS_DETAILS_FAILUER, VIEW_CLIENTS_DETAILS_REQUEST, VIEW_CLIENTS_DETAILS_SUCCESS } from "./types"

export const viewClientsRequest=()=>{
    return{
        type: VIEW_CLIENTS_DETAILS_REQUEST
    }
}
export const viewClientsSuccess=(cred)=>{

    return{
        type: VIEW_CLIENTS_DETAILS_SUCCESS,
        payload:cred
    }
}

export const viewClientsFailuer=(error)=>{
    return{
        type: VIEW_CLIENTS_DETAILS_FAILUER,
        payload:error
    }
}