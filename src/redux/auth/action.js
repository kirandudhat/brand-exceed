import { AUTH_LOGIN_FAILURE, AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS } from "./types"

export const loginUserRequest = () => {
    return {
        type: AUTH_LOGIN_REQUEST
    }
}

export const loginUserSuccess = cred => {
    return {
        type: AUTH_LOGIN_SUCCESS,
        payload: cred
    }
}

export const loginUserFailure = error => {
    return {
        type: AUTH_LOGIN_FAILURE,
        payload: error
    }
}