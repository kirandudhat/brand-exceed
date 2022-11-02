import {
  ADD_DEVELOPER_PROJECTS_FAILUER,
  ADD_DEVELOPER_PROJECTS_REQUEST,
  ADD_DEVELOPER_PROJECTS_SUCCESS,
} from "./types";

const initialState = {
  loading: false,

  error: null,
};

const addDeveloperProjectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DEVELOPER_PROJECTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_DEVELOPER_PROJECTS_SUCCESS: {
      return {
        ...state,
        loading: false,

        payload: action.payload,
      };
    }
    case ADD_DEVELOPER_PROJECTS_FAILUER:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };

    default:
      return state;
  }
};
export default addDeveloperProjectsReducer;
