import {
  ADD_BANK_FAILURE,
  ADD_BANK_REQUEST,
  ADD_BANK_SUCCESS,
  ADD_EDUCATION_FAILURE,
  ADD_EDUCATION_REQUEST,
  ADD_EDUCATION_SUCCESS,
  ADD_EMPLOYEE_FAILURE,
  ADD_EMPLOYEE_REQUEST,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EXPERIENCE_FAILURE,
  ADD_EXPERIENCE_REQUEST,
  ADD_EXPERIENCE_SUCCESS,
  ADD_PROJECT_FAILURE,
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_SUCCESS,
  CHANGE_STEP_VALUE,
} from "./types";

export const addEmployeeRequest = () => {
  return {
    type: ADD_EMPLOYEE_REQUEST,
  };
};
export const addEmployeeSuccess = (cred) => {
  return {
    type: ADD_EMPLOYEE_SUCCESS,
    payload: cred,
  };
};
export const addEmployeeFailure = (error) => {
  return {
    type: ADD_EMPLOYEE_FAILURE,
    payload: error,
  };
};
export const changeStepValue = (payload) => {
  return {
    type: CHANGE_STEP_VALUE,
    payload,
  };
};

export const addEducationRequest = () => {
  return {
    type: ADD_EDUCATION_REQUEST,
  };
};
export const addEducationSuccess = (cred) => {
  return {
    type: ADD_EDUCATION_SUCCESS,
    payload: cred,
  };
};
export const addEducationFailure = (error) => {
  return {
    type: ADD_EDUCATION_FAILURE,
    payload: error,
  };
};

export const addExperienceRequest = () => {
  return {
    type: ADD_EXPERIENCE_REQUEST,
  };
};
export const addExperienceSuccess = (cred) => {
  return {
    type: ADD_EXPERIENCE_SUCCESS,
    payload: cred,
  };
};
export const addExperienceFailure = (error) => {
  return {
    type: ADD_EXPERIENCE_FAILURE,
    payload: error,
  };
};

export const addProjectRequest = () => {
  return {
    type: ADD_PROJECT_REQUEST,
  };
};
export const addProjectSuccess = (cred) => {
  return {
    type: ADD_PROJECT_SUCCESS,
    payload: cred,
  };
};
export const addProjectFailure = (error) => {
  return {
    type: ADD_PROJECT_FAILURE,
    payload: error,
  };
};

export const addBankRequest = () => {
  return {
    type: ADD_BANK_REQUEST,
  };
};
export const addBankSuccess = (cred) => {
  return {
    type: ADD_BANK_SUCCESS,
    payload: cred,
  };
};
export const addBankFailure = (error) => {
  return {
    type: ADD_BANK_FAILURE,
    payload: error,
  };
};
