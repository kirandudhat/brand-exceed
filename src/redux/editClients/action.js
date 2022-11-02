import {  EDIT_CLIENT_FAILURE, EDIT_CLIENT_REQUEST, EDIT_CLIENT_SUCCESS } from "./types";

export const editClientRequest = () => {
    return {
      type: EDIT_CLIENT_REQUEST,
    };
  };
  export const editClientSuccess = (cred) => {
    return {
      type: EDIT_CLIENT_SUCCESS,
      payload: cred,
    };
  };
  export const editClientFailure = (error) => {
    return {
      type: EDIT_CLIENT_FAILURE,
      payload: error,
    };
  };