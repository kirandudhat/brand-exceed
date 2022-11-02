import { DELETE_HOLIDAY_FAILURE, DELETE_HOLIDAY_REQUEST, DELETE_HOLIDAY_SUCCESS } from "./type"

const initialState = {
    loading: false,
    error: null,
    isDeleted: false,
}
const deleteHolidayReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_HOLIDAY_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case DELETE_HOLIDAY_SUCCESS: {

            return {
                ...state,
                loading: false,
                error:null,
                isDeleted: true
            }
        }
        case DELETE_HOLIDAY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.message,
            }

        default:
            return state
    }
}

export default deleteHolidayReducer