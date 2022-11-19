import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
} from './types';

const initialState = {
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case AUTH_LOGIN_SUCCESS: {
      // const {email, password} = action.payload;
      console.log("action.payload",action.payload);
      return {
        ...state,
        loading: false,
        payload: action.payload.data,
      };
    }
    case AUTH_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };

    default:
      return state;
  }
};

export default authReducer;
