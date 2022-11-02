import { EDIT_HOLIDAYS_FAILURE, EDIT_HOLIDAYS_REQUEST, EDIT_HOLIDAYS_SUCCESS } from "./type";

const initialState = {
    loading: false,
    editHolidayList: null,
    error: "",

  };
  
  const editHolidayReducer = (state = initialState, action) => {
    switch (action.type) {
      case EDIT_HOLIDAYS_REQUEST:
        return {
          ...state,
          loading: true,
          error: "",
        };
      case EDIT_HOLIDAYS_SUCCESS:
        return {
          ...state,
          loading: false,
  
          editHolidayList: action.payload,
        };
  
      case EDIT_HOLIDAYS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.message,
        };  
      default:
        return state;
    }
  };
  export default editHolidayReducer
 