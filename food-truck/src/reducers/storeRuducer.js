import {EDIT_STORE_START, EDIT_STORE_SUCCESS, EDIT_STORE_FAILURE} from '../actions/types'

const initialState = {
    isFetching: false,
    store: {},
    error: ''
}

export const storeReducer = (state = initialState, action) => {
    switch(action.type) {
        case EDIT_STORE_START :
            return {
                ...state,
                isFetching: true
            }
        case EDIT_STORE_SUCCESS:
            return {
                ...state,
                store: action.payload,
                isFetching: false
            }
        case EDIT_STORE_FAILURE :
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        default :
            return state
    }
}