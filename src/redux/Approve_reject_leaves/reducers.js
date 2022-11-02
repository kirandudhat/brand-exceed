import {
  EMPLOYEE_STATUS_UPDATE_FAILURE,
  EMPLOYEE_STATUS_UPDATE_REQUEST,
  EMPLOYEE_STATUS_UPDATE_SUCCESS,
  LEAVE_STATUS_FAILURE,
  LEAVE_STATUS_REQUEST,
  LEAVE_STATUS_SUCCESS,
  REJECT_LEAVE_STATUS_FAILURE,
  REJECT_LEAVE_STATUS_REQUEST,
  REJECT_LEAVE_STATUS_SUCCESS,
} from "./type";

const initialState = {
  loading: false,
  error: null,
  payload: null,
};

const leaveStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case LEAVE_STATUS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LEAVE_STATUS_SUCCESS: {
      return {
        ...state,
        loading: false,

        payload: action.payload,
      };
    }
    case LEAVE_STATUS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };

    default:
      return state;
  }
};

const RejectleaveStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case REJECT_LEAVE_STATUS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case REJECT_LEAVE_STATUS_SUCCESS: {
      return {
        ...state,
        loading: false,

        payload: action.payload,
      };
    }
    case REJECT_LEAVE_STATUS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };

    default:
      return state;
  }
};
//EMPLOYEE STATUS UPDATE
const employeeStatusUpdateReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_STATUS_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case EMPLOYEE_STATUS_UPDATE_SUCCESS: {
      return {
        ...state,
        loading: false,

        payload: action.payload,
      };
    }
    case EMPLOYEE_STATUS_UPDATE_FAILURE:
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
  RejectleaveStatusReducer,
  leaveStatusReducer,
  employeeStatusUpdateReducer,
};
