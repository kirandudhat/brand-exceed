import {
  HOLIDAY_LIST_FAILUER,
  HOLIDAY_LIST_REQUEST,
  HOLIDAY_LIST_SUCCESS,
} from "./types";

const initialState = {
  loading: false,
  error: null,
  holidayList: [],
};
const holidayListReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOLIDAY_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case HOLIDAY_LIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        holidayList: action.payload,
      };
    }
    case HOLIDAY_LIST_FAILUER:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };

    default:
      return state;
  }
};

export default holidayListReducer;
