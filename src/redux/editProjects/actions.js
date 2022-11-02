import { EDIT_PROJECTS_FAILURE, EDIT_PROJECTS_REQUEST, EDIT_PROJECTS_SUCCESS } from "./types";

export const editProjectRequest = () => {
    return {
      type: EDIT_PROJECTS_REQUEST,
    };
  };
  export const editProjectSuccess = (cred) => {
    return {
      type: EDIT_PROJECTS_SUCCESS,
      payload: cred,
    };
  };
  export const editProjectFailure = (error) => {
    return {
      type: EDIT_PROJECTS_FAILURE,
      payload: error,
    };
  };