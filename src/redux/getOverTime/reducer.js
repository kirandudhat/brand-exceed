import { OVER_TIME_LIST_FAILURE, OVER_TIME_LIST_REQUEST, OVER_TIME_LIST_SUCCESS } from "./types"

const initialState = {
    loading: false,
    error: null,
    empOverTimelist: []
}
const empOverTimeReducer = (state = initialState, action) => {
    switch (action.type) {
        case OVER_TIME_LIST_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case OVER_TIME_LIST_SUCCESS: {

            return {
                ...state,
                loading: false,
                empOverTimelist: action.payload
            }
        }
        case OVER_TIME_LIST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.message,
            }

        default:
            return state
    }
}

export default empOverTimeReducer