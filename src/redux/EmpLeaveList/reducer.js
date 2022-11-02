import {
  EMPLOYEE_LEAVE_LIST_BY_ID_FAILUER,
  EMPLOYEE_LEAVE_LIST_BY_ID_REQUEST,
  EMPLOYEE_LEAVE_LIST_BY_ID_SUCCESS,
  EMPLOYEE_LEAVE_LIST_FAILUER,
  EMPLOYEE_LEAVE_LIST_REQUEST,
  EMPLOYEE_LEAVE_LIST_SUCCESS,
} from "./type";

const initialState = {
  loading: false,
  error: null,
  empLeaveList: [],
};
const empLeaveListReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_LEAVE_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case EMPLOYEE_LEAVE_LIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        empLeaveList: action.payload,
      };
    }
    case EMPLOYEE_LEAVE_LIST_FAILUER:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };

    default:
      return state;
  }
};

const empLeaveListByIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_LEAVE_LIST_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case EMPLOYEE_LEAVE_LIST_BY_ID_SUCCESS: {
      return {
        ...state,
        loading: false,
        empLeaveList: action.payload,
      };
    }
    case EMPLOYEE_LEAVE_LIST_BY_ID_FAILUER:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };

    default:
      return state;
  }
};

export { empLeaveListReducer, empLeaveListByIdReducer };
