import {ADD_MANUAL_LEAVES_FAILUER, ADD_MANUAL_LEAVES_REQUEST, ADD_MANUAL_LEAVES_SUCCESS } from "./types";

export const addManualLeavesRequest = () => {
    return {
      type: ADD_MANUAL_LEAVES_REQUEST,
    };
  };
  export const addManualLeavesSuccess = (cred) => {
    return {
      type: ADD_MANUAL_LEAVES_SUCCESS,
      payload: cred,
    };
  };
  export const addManualLeavesFailure = (error) => {
    return {
      type: ADD_MANUAL_LEAVES_FAILUER,
      payload: error,
    };
  };