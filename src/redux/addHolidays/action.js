import { ADD_HOLIDAYS_FAILUER, ADD_HOLIDAYS_REQUEST, ADD_HOLIDAYS_SUCCESS } from "./types";

export const addHolidaysRequest = () => {
    return {
      type: ADD_HOLIDAYS_REQUEST,
    };
  };
  export const addHolidaysSuccess = (cred) => {
    return {
      type: ADD_HOLIDAYS_SUCCESS,
      payload: cred,
    };
  };
  export const addHolidaysFailure = (error) => {
    return {
      type: ADD_HOLIDAYS_FAILUER,
      payload: error,
    };
  };