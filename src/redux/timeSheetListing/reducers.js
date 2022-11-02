import { VIEW_TIMESHEET_FAILURE, VIEW_TIMESHEET_REQUEST, VIEW_TIMESHEET_SUCCESS } from "./types"

const initialState = {
    loading: false,
    error: null,
    timeSheetList: []
}
const timeSheetListReducer = (state = initialState, action) => {
    switch (action.type) {
        case VIEW_TIMESHEET_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case VIEW_TIMESHEET_SUCCESS: {

            return {
                ...state,
                loading: false,
                timeSheetList: [action.payload]
            }
        }
        case VIEW_TIMESHEET_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.message,
            }

        default:
            return state
    }
}

export default timeSheetListReducer