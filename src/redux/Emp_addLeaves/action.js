import {ADD_LEAVES_FAILUER, ADD_LEAVES_REQUEST, ADD_LEAVES_SUCCESS } from "./types";

export const addLeavesRequest = () => {
    return {
      type: ADD_LEAVES_REQUEST,
    };
  };
  export const addLeavesSuccess = (cred) => {
    return {
      type: ADD_LEAVES_SUCCESS,
      payload: cred,
    };
  };
  export const addLeavesFailure = (error) => {
    return {
      type: ADD_LEAVES_FAILUER,
      payload: error,
    };
  };