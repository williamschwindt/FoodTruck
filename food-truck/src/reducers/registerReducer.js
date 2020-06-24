import { REGISTER_ACCOUNT_START, REGISTER_ACCOUNT_SUCCESS, REGISTER_ACCOUNT_FAILURE } from '../actions/types'

const initialState = {
    isFetching: false,
    user: {},
    error: ''
}

export const registerReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_ACCOUNT_START :
            return {
                ...state,
                isFetching: true
            }
        case REGISTER_ACCOUNT_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isFetching: false
            }
        case REGISTER_ACCOUNT_FAILURE :
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default :
            return state
    }
}