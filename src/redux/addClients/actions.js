import { ADD_CLIENTS_FAILUER, ADD_CLIENTS_REQUEST, ADD_CLIENTS_SUCCESS } from "./types";

export const addClientRequest = () => {
    return {
      type: ADD_CLIENTS_REQUEST,
    };
  };
  export const addClientSuccess = (cred) => {
    return {
      type: ADD_CLIENTS_SUCCESS,
      payload: cred,
    };
  };
  export const addClientFailure = (error) => {
    return {
      type: ADD_CLIENTS_FAILUER,
      payload: error,
    };
  };