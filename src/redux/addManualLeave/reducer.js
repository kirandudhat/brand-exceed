import { ADD_MANUAL_LEAVES_FAILUER, ADD_MANUAL_LEAVES_REQUEST, ADD_MANUAL_LEAVES_SUCCESS } from "./types";

const initialState = {
    loading: false,
    error: null,
  };
  
  const addManualLeavesReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_MANUAL_LEAVES_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case ADD_MANUAL_LEAVES_SUCCESS: {
        return {
          ...state,
          loading: false,
  
          payload: action.payload,
        };
      }
      case ADD_MANUAL_LEAVES_FAILUER:
        return {
          ...state,
          loading: false,
          error: action.payload.message,
        };
  
      default:
        return state;
    }
  };
  export default addManualLeavesReducer;