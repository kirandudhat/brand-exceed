import {
  CHANGE_STEP_VALUE_IN_EDIT,
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

const initialState = {
  loading: false,
  editBasicDetails: null,
  editEducationList: [],
  editExperienceList: [],
  editProjectList: [],
  bankList: null,
  error: "",
  steps: 0,
};

const editEmployeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_EMPLOYEE_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case EDIT_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,

        editBasicDetails: action.payload,
      };

    case EDIT_EMPLOYEE_FAILUER:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    case CHANGE_STEP_VALUE_IN_EDIT:
      return {
        ...state,
        steps: action.payload,
      };

    default:
      return state;
  }
};

const editEmpEducationReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_EMPLOYEE_EDUCATION_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case EDIT_EMPLOYEE_EDUCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        editEducationList: action.payload,
      };
    case EDIT_EMPLOYEE_EDUCATION_FAILUER:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };

    default:
      return state;
  }
};

const editEmpExperienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_EMPLOYEE_EXPERIENCE_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case EDIT_EMPLOYEE_EXPERIENCE_SUCCESS:
      return {
        ...state,
        loading: false,
        editExperienceList: action.payload,
      };
    case EDIT_EMPLOYEE_EXPERIENCE_FAILUER:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };

    default:
      return state;
  }
};

const editEmpProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_EMPLOYEE_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case EDIT_EMPLOYEE_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        editProjectList: action.payload,
      };
    case EDIT_EMPLOYEE_PROJECT_FAILUER:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };

    default:
      return state;
  }
};

const editEmpBankReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_EMPLOYEE_BANK_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case EDIT_EMPLOYEE_BANK_SUCCESS:
      return {
        ...state,
        loading: false,
        bankList: action.payload,
      };
    case EDIT_EMPLOYEE_BANK_FAILUER:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };

    default:
      return state;
  }
};

export {
  editEmployeeReducer,
  editEmpEducationReducer,
  editEmpExperienceReducer,
  editEmpProjectReducer,
  editEmpBankReducer,
};
