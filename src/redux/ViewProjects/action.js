import {
  VIEW_PROJECTS_DETAILS_FAILUER,
  VIEW_PROJECTS_DETAILS_REQUEST,
  VIEW_PROJECTS_DETAILS_SUCCESS,
} from "./types";

export const viewProjectsRequest = () => {
  return {
    type: VIEW_PROJECTS_DETAILS_REQUEST,
  };
};
export const viewProjectsSuccess = (cred) => {
  return {
    type: VIEW_PROJECTS_DETAILS_SUCCESS,
    payload: cred,
  };
};

export const viewProjectsFailuer = (error) => {
  return {
    type: VIEW_PROJECTS_DETAILS_FAILUER,
    payload: error,
  };
};
