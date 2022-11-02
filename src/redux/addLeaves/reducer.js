import { ADD_LEAVES_FAILUER, ADD_LEAVES_REQUEST, ADD_LEAVES_SUCCESS } from "./types";

const initialState = {
    loading: false,
  
    error: null,
  };
  
  const addLeavesReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_LEAVES_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case ADD_LEAVES_SUCCESS: {
        return {
          ...state,
          loading: false,
  
          payload: action.payload,
        };
      }
      case ADD_LEAVES_FAILUER:
        return {
          ...state,
          loading: false,
          error: action.payload.message,
        };
  
      default:
        return state;
    }
  };
  export default addLeavesReducer;
  