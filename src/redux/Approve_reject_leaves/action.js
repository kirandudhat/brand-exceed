import { EMPLOYEE_STATUS_UPDATE_FAILURE, EMPLOYEE_STATUS_UPDATE_REQUEST, EMPLOYEE_STATUS_UPDATE_SUCCESS, LEAVE_STATUS_FAILURE, LEAVE_STATUS_REQUEST, LEAVE_STATUS_SUCCESS, REJECT_LEAVE_STATUS_FAILURE, REJECT_LEAVE_STATUS_REQUEST, REJECT_LEAVE_STATUS_SUCCESS } from "./type";

export const leaveStatusRequest = () => {
    return {
      type: LEAVE_STATUS_REQUEST,
    };
  };
  export const leaveStatusSuccess = (cred) => {
    return {
      type: LEAVE_STATUS_SUCCESS,
      payload: cred,
    };
  };
  export const leaveStatusFailure = (error) => {
    return {
      type: LEAVE_STATUS_FAILURE,
      payload: error,
    };
  };

  export const rejectleaveStatusRequest = () => {
    return {
      type: REJECT_LEAVE_STATUS_REQUEST,
    };
  };
  export const rejectleaveStatusSuccess = (cred) => {
    return {
      type: REJECT_LEAVE_STATUS_SUCCESS,
      payload: cred,
    };
  };
  export const rejectleaveStatusFailure = (error) => {
    return {
      type: REJECT_LEAVE_STATUS_FAILURE,
      payload: error,
    };
  };
  ///employee Status 
  export const employeeStatusUpdateRequest = () => {
    return {
      type: EMPLOYEE_STATUS_UPDATE_REQUEST,
    };
  };
  export const employeeStatusUpdateSuccess = (cred) => {
    return {
      type: EMPLOYEE_STATUS_UPDATE_SUCCESS,
      payload: cred,
    };
  };
  export const employeeStatusUpdateFailure = (error) => {
    return {
      type: EMPLOYEE_STATUS_UPDATE_FAILURE,
      payload: error,
    };
  };
