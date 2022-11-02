import { DASHBOARD_FAILURE, DASHBOARD_REQUEST, DASHBOARD_SUCCESS } from "./types";

const initialState={
    loading:null,
    error:null
}
export const dasboardReducer=(state = initialState, action)=>{
    switch (action.type) {
        case DASHBOARD_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
              };
        case DASHBOARD_SUCCESS:
            
                return {
                    ...state,
                    loading: false,
                    payload:action.payload
                  };
            
                  case DASHBOARD_FAILURE:
            
                    return {
                        ...state,
                        loading: false,
                        error:action.payload
                      };
                   
        default:
            return state
    }

}