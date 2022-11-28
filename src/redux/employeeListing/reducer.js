import {
  EMPLOYEE_LIST_FAILURE,
  EMPLOYEE_LIST_REQUEST,
  EMPLOYEE_LIST_SUCCESS,
} from "./types";

const initialState = {
  loading: false,
  error: null,
  employeeList: [],
  employeeListCount: null,
};
const empListReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case EMPLOYEE_LIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        employeeList: action.payload,
        // employeeListCount: action.payload.count,
      };
    }
    case EMPLOYEE_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };

    default:
      return state;
  }
};

export default empListReducer;
