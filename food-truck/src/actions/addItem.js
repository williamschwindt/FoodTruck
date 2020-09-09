import { AxiosWithAuth } from '../components/utils/AxiosWithAuth'

import { ADD_ITEM_START, ADD_ITEM_FAILURE, ADD_ITEM_SUCCESS } from './types'

export const addItem =  (storeId, item, fn) => dispatch => {
    dispatch({ type: ADD_ITEM_START })

    return AxiosWithAuth()
    .post(`https://food-truck-dev1.herokuapp.com/api/stores/${storeId}/items`, item)
    .then(res => {
        console.log(res)
        dispatch({ type: ADD_ITEM_SUCCESS, payload: res })
        fn(storeId)
    })
    .catch(err => {
        dispatch({ type: ADD_ITEM_FAILURE, payload: err })
    })
}