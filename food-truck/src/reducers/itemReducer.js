import { ADD_ITEM_START, ADD_ITEM_SUCCESS, ADD_ITEM_FAILURE,
    EDIT_ITEM_START, EDIT_ITEM_SUCCESS, EDIT_ITEM_FAILURE, 
    DELETE_ITEM_START, DELETE_ITEM_SUCCESS, DELETE_ITEM_FAILURE,
} from '../actions/types'

const initialState = {
    isFetching: false,
    item: {},
    error: ''
}

export const itemReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM_START :
            return {
                ...state,
                isFetching: true
            }
        case ADD_ITEM_SUCCESS:
            return {
                ...state,
                item: action.payload,
                isFetching: false
            }
        case ADD_ITEM_FAILURE :
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case EDIT_ITEM_START:
            return {
                ...state,
                isFetching: true
            }
        case EDIT_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                item: action.payload
            }
        case EDIT_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case DELETE_ITEM_START:
            return {
                ...state,
                isFetching: true
            }
        case DELETE_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                store: action.payload
            }
        case DELETE_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default :
            return state
    }
}