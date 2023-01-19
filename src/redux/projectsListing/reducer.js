import { VIEW_PROJECTS_LIST_FAILUER, VIEW_PROJECTS_LIST_REQUEST, VIEW_PROJECTS_LIST_SUCCESS } from "./types"

const initialState = {
    loading: false,
    error: null,
    projectsList: []
}
const ProjectsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case VIEW_PROJECTS_LIST_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case VIEW_PROJECTS_LIST_SUCCESS: {
            return {
                ...state,
                loading: false,
                projectsList: action.payload
            }
        }
        case VIEW_PROJECTS_LIST_FAILUER:
            return {
                ...state,
                loading: false,
                error: action.payload.message,
            }

        default:
            return state
    }
}

export default ProjectsListReducer