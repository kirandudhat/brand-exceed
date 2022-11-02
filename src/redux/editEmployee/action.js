import { retry } from "@redux-saga/core/effects";
import {
  CHANGE_STEP_VALUE_IN_EDIT,
  EDIT_EMPLOYEE_BANK,
  EDIT_EMPLOYEE_BANK_FAILUER,
  EDIT_EMPLOYEE_BANK_REQUEST,
  EDIT_EMPLOYEE_BANK_SUCCESS,
  EDIT_EMPLOYEE_EDUCATION_FAILUER,
  EDIT_EMPLOYEE_EDUCATION_REQUEST,
  EDIT_EMPLOYEE_EDUCATION_SUCCESS,
  EDIT_EMPLOYEE_EXPERIENCE_FAILUER,
  EDIT_EMPLOYEE_EXPERIENCE_REQUEST,
  EDIT_EMPLOYEE_EXPERIENCE_SUCCESS,
  EDIT_EMPLOYEE_FAILUER,
  EDIT_EMPLOYEE_PROJECT_FAILUER,
  EDIT_EMPLOYEE_PROJECT_REQUEST,
  EDIT_EMPLOYEE_PROJECT_SUCCESS,
  EDIT_EMPLOYEE_REQUEST,
  EDIT_EMPLOYEE_SUCCESS,
} from "./types";

export const editEmployeeRequest = () => {
  return {
    type: EDIT_EMPLOYEE_REQUEST,
  };
};
export const editEmployeeSuccess = (cred) => {
  return {
    type: EDIT_EMPLOYEE_SUCCESS,
    payload: cred,
  };
};
export const editEmployeeFailure = (error) => {
  return {
    type: EDIT_EMPLOYEE_FAILUER,
    payload: error,
  };
};
export const changeStepValueInEdit = (payload) => {
  return {
    type: CHANGE_STEP_VALUE_IN_EDIT,
    payload,
  };
};
/////////////////////////////////////////////////////////////////////////////////
export const editEmpEducationRequest = () => {
  return {
    type: EDIT_EMPLOYEE_EDUCATION_REQUEST,
  };
};

export const editEmpEducationSuccess = (cred) => {
  return {
    type: EDIT_EMPLOYEE_EDUCATION_SUCCESS,
    payload: cred,
  };
};
export const editEmpEducationFailuer = (error) => {
  return {
    type: EDIT_EMPLOYEE_EDUCATION_FAILUER,
    payload: error,
  };
};
///////////////////////////////////////////////////////////
export const editEmpExperienceRequest = () => {
  return {
    type: EDIT_EMPLOYEE_EXPERIENCE_REQUEST,
  };
};

export const editEmpExperienceSuccess = (cred) => {
  return {
    type: EDIT_EMPLOYEE_EXPERIENCE_SUCCESS,
    payload: cred,
  };
};
export const editEmpExperienceFailuer = (error) => {
  return {
    type: EDIT_EMPLOYEE_EXPERIENCE_FAILUER,
    payload: error,
  };
};
/////////////////////////////////////////////
export const editEmpProjectRequest = () => {
  return {
    type: EDIT_EMPLOYEE_PROJECT_REQUEST,
  };
};

export const editEmpProjectSuccess = (cred) => {
  return {
    type: EDIT_EMPLOYEE_PROJECT_SUCCESS,
    payload: cred,
  };
};
export const editEmpProjectFailuer = (error) => {
  return {
    type: EDIT_EMPLOYEE_PROJECT_FAILUER,
    payload: error,
  };
};


export const editEmpBankRequest = () => {
  return {
    type: EDIT_EMPLOYEE_BANK_REQUEST,
  };
};

export const editEmpBankSuccess = (cred) => {
  return {
    type: EDIT_EMPLOYEE_BANK_SUCCESS,
    payload: cred,
  };
};
export const editEmpBankFailuer = (error) => {
  return {
    type: EDIT_EMPLOYEE_BANK_FAILUER,
    payload: error,
  };
};


