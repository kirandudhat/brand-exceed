import { VIEW_PROJECTS_LIST_FAILUER, VIEW_PROJECTS_LIST_REQUEST, VIEW_PROJECTS_LIST_SUCCESS } from "./types"

export const ProjectsListingRequest=()=>{
    return{
        type: VIEW_PROJECTS_LIST_REQUEST
    }
}
export const projectsListingSuccess=(cred)=>{
    return{
        type: VIEW_PROJECTS_LIST_SUCCESS,
        payload: cred

    }
}

export const ProjectsListingFailure=(error)=>{
    return{
        type: VIEW_PROJECTS_LIST_FAILUER,
        payload: error

    }
}