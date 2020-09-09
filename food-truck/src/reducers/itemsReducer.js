import { GET_ITEMS_START, GET_ITEMS_FAILURE, GET_ITEMS_SUCCESS } from '../actions/types'

const initialState = {
    isFetching: false,
    items: [],
    error: ''
}

export const itemsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ITEMS_START :
            return {
                ...state,
                isFetching: true
            }
        case GET_ITEMS_SUCCESS:
            return {
                ...state,
                items: action.payload,
                isFetching: false
            }
        case GET_ITEMS_FAILURE :
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default :
            return state
    }
}