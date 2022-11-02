import { ADD_DEVELOPER_PROJECTS_FAILUER, ADD_DEVELOPER_PROJECTS_REQUEST, ADD_DEVELOPER_PROJECTS_SUCCESS } from "./types";

export const addDeveloperProjectsRequest = () => {
    return {
      type: ADD_DEVELOPER_PROJECTS_REQUEST,
    };
  };
  export const addDeveloperProjectsSuccess = (cred) => {
    return {
      type: ADD_DEVELOPER_PROJECTS_SUCCESS,
      payload: cred,
    };
  };
  export const addDeveloperProjectsFailure = (error) => {
    return {
      type: ADD_DEVELOPER_PROJECTS_FAILUER,
      payload: error,
    };
  };