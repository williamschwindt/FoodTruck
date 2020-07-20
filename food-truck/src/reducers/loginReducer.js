import { LOGIN_ACCOUNT_START, LOGIN_ACCOUNT_SUCCESS, LOGIN_ACCOUNT_FAILURE } from '../actions/types'

const initialState = {
    isFetching: false,
    user: {},
    error: ''
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_ACCOUNT_START :
            return {
                ...state,
                isFetching: true
            }
        case LOGIN_ACCOUNT_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isFetching: false
            }
        case LOGIN_ACCOUNT_FAILURE :
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default :
            return state
    }
}