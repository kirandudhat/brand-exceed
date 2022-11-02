import { EDIT_PROJECTS_FAILURE, EDIT_PROJECTS_REQUEST, EDIT_PROJECTS_SUCCESS } from "./types";

const initialState = {
    loading: false,
    editProjectDetails: null,
    error: "",

  };
  
  const editProjectsReducer = (state = initialState, action) => {
    switch (action.type) {
      case EDIT_PROJECTS_REQUEST:
        return {
          ...state,
          loading: true,
          error: "",
        };
      case EDIT_PROJECTS_SUCCESS:
        return {
          ...state,
          loading: false,
  
          editProjectDetails: action.payload,
        };
  
      case EDIT_PROJECTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.message,
        };  
      default:
        return state;
    }
  };
  export default editProjectsReducer
  