import { ADD_OVERTIME_FAILURE, ADD_OVERTIME_REQUEST, ADD_OVERTIME_SUCCESS, ADD_TIMESHEET_FAILURE, ADD_TIMESHEET_REQUEST, ADD_TIMESHEET_SUCCESS } from "./types";

const initialState = {
    loading: false,
  
    error: null,
  };
  const addTimeSheetReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TIMESHEET_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case ADD_TIMESHEET_SUCCESS: {
        return {
          ...state,
          loading: false,
  
          payload: action.payload,
        };
      }
      case ADD_TIMESHEET_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.message,
        };
  
      default:
        return state;
    }
  };
  
  const addOverTimeReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_OVERTIME_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case ADD_OVERTIME_SUCCESS: {
        return {
          ...state,
          loading: false,
  
          payload: action.payload,
        };
      }
      case ADD_OVERTIME_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.message,
        };
  
      default:
        return state;
    }
  };
  
  export {addTimeSheetReducer,addOverTimeReducer};
  