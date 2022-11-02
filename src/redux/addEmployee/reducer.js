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

const initialState = {
  loading: false,
  educationList: [],
  experienceList: [],
  projectList: [],
  error: null,
  steps: 0,
};

const addEmployeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_EMPLOYEE_SUCCESS: {
      

      return {
        ...state,
        loading: false,

        payload: action.payload,
      };
    }
    case ADD_EMPLOYEE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    case CHANGE_STEP_VALUE:
      return {
        ...state,
        steps: action.payload,
      };

    default:
      return state;
  }
};

const addEducationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EDUCATION_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_EDUCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        educationList: [action.payload],
      };
    case ADD_EDUCATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};

const addExperienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPERIENCE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_EXPERIENCE_SUCCESS:
      return {
        ...state,
        loading: false,
        experienceList: action.payload,
      };
    case ADD_EXPERIENCE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};

const addProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        projectList: action.payload,
      };
    case ADD_PROJECT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};

const addBankReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BANK_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_BANK_SUCCESS:
      return {
        ...state,
        loading: false,
        payload: action.payload,
      };
    case ADD_BANK_FAILURE:
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
  addEmployeeReducer,
  addEducationReducer,
  addExperienceReducer,
  addProjectReducer,
  addBankReducer,
};
