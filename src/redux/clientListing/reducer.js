import { CLIENT_LIST_FAILUER, CLIENT_LIST_REQUEST, CLIENT_LIST_SUCCESS } from "./types"

const initialState = {
    loading: false,
    error: null,
    clientList: []
}
const clientListReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLIENT_LIST_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case CLIENT_LIST_SUCCESS: {

            return {
                ...state,
                loading: false,
                clientList: action.payload.rows
            }
        }
        case CLIENT_LIST_FAILUER:
            return {
                ...state,
                loading: false,
                error: action.payload.message,
            }

        default:
            return state
    }
}

export default clientListReducer