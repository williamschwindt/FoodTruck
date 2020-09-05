import {EDIT_STORE_START, EDIT_STORE_SUCCESS, EDIT_STORE_FAILURE, 
    DELETE_STORE_START, DELETE_STORE_SUCCESS, DELETE_STORE_FAILURE,
    GET_STORE_START, GET_STORE_FAILURE, GET_STORE_SUCCESS, GET_STORES_FAILURE
} from '../actions/types'

const initialState = {
    isFetching: false,
    store: {},
    error: ''
}

export const storeReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_STORE_START :
            return {
                ...state,
                isFetching: true
            }
        case GET_STORE_SUCCESS :
            return {
                ...state,
                store: action.payload,
                isFetching: false
            }
        case GET_STORES_FAILURE :
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
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
        case DELETE_STORE_START:
            return {
                ...state,
                isFetching: true,
                }
        case DELETE_STORE_SUCCESS:
            return {
                ...state,
                store: action.payload,
                isFetching: false
            }
        case DELETE_STORE_FAILURE :
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        default :
            return state
    }
}