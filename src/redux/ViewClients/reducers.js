import {
  VIEW_CLIENTS_DETAILS_FAILUER,
  VIEW_CLIENTS_DETAILS_REQUEST,
  VIEW_CLIENTS_DETAILS_SUCCESS,
} from "./types";

const initialState = {
  loading: false,
  error: null,
  viewClientsData: null,
};

const viewClientsDeatilsReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_CLIENTS_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case VIEW_CLIENTS_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        viewClientsData: action.payload,
      };
    case VIEW_CLIENTS_DETAILS_FAILUER:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };

    default:
      return state;
  }
};
export default viewClientsDeatilsReducer;
