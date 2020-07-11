import { GET_STORES_START, GET_STORES_FAILURE, GET_STORES_SUCCESS } from '../actions/types'
import { ADD_STORE_FAILURE, ADD_STORE_SUCCESS, ADD_STORE_START } from '../actions/types'

const initialState = {
    isFetching: false,
    stores: [],
    error: ''
}

export const storesReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_STORES_START :
            return {
                ...state,
                isFetching: true
            }
        case GET_STORES_SUCCESS:
            return {
                ...state,
                stores: action.payload,
                isFetching: false
            }
        case GET_STORES_FAILURE :
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case ADD_STORE_START :
            return {
                ...state,
                isFetching: true
            }
        case ADD_STORE_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isFetching: false
            }
        case ADD_STORE_FAILURE :
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default :
            return state
    }
}