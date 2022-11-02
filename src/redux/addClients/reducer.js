import { ADD_CLIENTS_FAILUER, ADD_CLIENTS_REQUEST, ADD_CLIENTS_SUCCESS } from "./types";

const initialState = {
    loading: false,
  
    error: null,
  };
  
  const addClientReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_CLIENTS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case ADD_CLIENTS_SUCCESS: {
        return {
          ...state,
          loading: false,
  
          payload: action.payload,
        };
      }
      case ADD_CLIENTS_FAILUER:
        return {
          ...state,
          loading: false,
          error: action.payload.message,
        };
  
      default:
        return state;
    }
  };
  export default addClientReducer;