import {
  VIEW_EMPLOYEE_FAILUER,
  VIEW_EMPLOYEE_REQUEST,
  VIEW_EMPLOYEE_SUCCESS,
} from "./types";

const initialState = {
  loading: false,
  error: null,
  viewEmpData: null
};

const viewEmployeeDeatilsReducer = (state = initialState, action) => {

  
  switch (action.type) {
    case VIEW_EMPLOYEE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case VIEW_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,
        viewEmpData: action.payload,
      };
    case VIEW_EMPLOYEE_FAILUER:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };

    default:
      return state;
  }
};
export default viewEmployeeDeatilsReducer;
