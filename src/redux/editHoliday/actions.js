import { EDIT_HOLIDAYS_FAILURE, EDIT_HOLIDAYS_REQUEST, EDIT_HOLIDAYS_SUCCESS } from "./type";

export const editHolidayRequest = () => {
    return {
      type: EDIT_HOLIDAYS_REQUEST,
    };
  };
  export const editHolidaySuccess = (cred) => {
    return {
      type: EDIT_HOLIDAYS_SUCCESS,
      payload: cred,
    };
  };
  export const editHolidayFailure = (error) => {
    return {
      type: EDIT_HOLIDAYS_FAILURE,
      payload: error,
    };
  };