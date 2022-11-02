import { VIEW_DATEWISE_TIMESHEET_FAILURE, VIEW_DATEWISE_TIMESHEET_REQUEST, VIEW_DATEWISE_TIMESHEET_SUCCESS } from "./types";

const initialState = {
    loading: false,
    error: null,
    viewDateWiseTimeSheet: null,
  };
  
  const viewDateWiseTimeSheetReducer = (state = initialState, action) => {
    
  
    
    switch (action.type) {
      case VIEW_DATEWISE_TIMESHEET_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case VIEW_DATEWISE_TIMESHEET_SUCCESS:
        return {
          ...state,
          loading: false,
          viewDateWiseTimeSheet: action.payload,
        };
      case VIEW_DATEWISE_TIMESHEET_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.message,
        };
  
      default:
        return state;
    }
  };

export default viewDateWiseTimeSheetReducer