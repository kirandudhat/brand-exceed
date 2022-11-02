import {
  SELECT_MONTHLY_TIMESHEET_FAILURE,
  SELECT_MONTHLY_TIMESHEET_REQUEST,
  SELECT_MONTHLY_TIMESHEET_SUCCESS,
  VIEW_MONTHLY_TIMESHEET_FAILURE,
  VIEW_MONTHLY_TIMESHEET_REQUEST,
  VIEW_MONTHLY_TIMESHEET_SUCCESS,
} from "./types";

const initialState = {
  loading: false,
  error: null,
  viewMonthlyTimeSheet: null,
  // selectMonthTimeSheet: null,
};

const viewMonthlyTimeSheetReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_MONTHLY_TIMESHEET_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case VIEW_MONTHLY_TIMESHEET_SUCCESS:
      return {
        ...state,
        loading: false,
        viewMonthlyTimeSheet: action.payload,
      };
    case VIEW_MONTHLY_TIMESHEET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };

    default:
      return state;
  }
};

// const selectMonthTimeSheetReducer = (state = initialState, action) => {
//   console.log("reducProject", action.payload);

//   switch (action.type) {
//     case SELECT_MONTHLY_TIMESHEET_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: null,
//       };
//     case SELECT_MONTHLY_TIMESHEET_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         selectMonthTimeSheet: action.payload,
//       };
//     case SELECT_MONTHLY_TIMESHEET_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload.message,
//       };

//     default:
//       return state;
//   }
// };
export default viewMonthlyTimeSheetReducer;
