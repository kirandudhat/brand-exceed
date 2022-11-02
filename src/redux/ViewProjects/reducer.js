import { VIEW_PROJECTS_DETAILS_FAILUER, VIEW_PROJECTS_DETAILS_REQUEST, VIEW_PROJECTS_DETAILS_SUCCESS } from "./types";

const initialState = {
    loading: false,
    error: null,
    viewProjectData: null
  };
  
  const viewProjectsDeatilsReducer = (state = initialState, action) => {
  
  
    
    switch (action.type) {
      case VIEW_PROJECTS_DETAILS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case VIEW_PROJECTS_DETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          viewProjectData: action.payload,
        };
      case VIEW_PROJECTS_DETAILS_FAILUER:
        return {
          ...state,
          loading: false,
          error: action.payload.message,
        };
  
      default:
        return state;
    }
  };
  export default viewProjectsDeatilsReducer;
  