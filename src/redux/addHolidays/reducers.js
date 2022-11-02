import { ADD_HOLIDAYS_FAILUER, ADD_HOLIDAYS_REQUEST, ADD_HOLIDAYS_SUCCESS } from "./types";

const initialState = {
    loading: false,
  
    error: null,
  };
  
  const addHolidaysReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_HOLIDAYS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case ADD_HOLIDAYS_SUCCESS: {
        return {
          ...state,
          loading: false,
  
          payload: action.payload,
        };
      }
      case ADD_HOLIDAYS_FAILUER:
        return {
          ...state,
          loading: false,
          error: action.payload.message,
        };
  
      default:
        return state;
    }
  };
  export default addHolidaysReducer;
  