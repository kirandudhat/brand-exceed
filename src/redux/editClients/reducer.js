import { EDIT_CLIENT_FAILURE, EDIT_CLIENT_REQUEST, EDIT_CLIENT_SUCCESS } from "./types";

const initialState = {
    loading: false,
    editClientsDetails: null,
    error: "",

  };
  
  const editClientsReducer = (state = initialState, action) => {
    switch (action.type) {
      case EDIT_CLIENT_REQUEST:
        return {
          ...state,
          loading: true,
          error: "",
        };
      case EDIT_CLIENT_SUCCESS:
        return {
          ...state,
          loading: false,
  
          editClientsDetails: action.payload,
        };
  
      case EDIT_CLIENT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.message,
        };  
      default:
        return state;
    }
  };
  export default editClientsReducer
 