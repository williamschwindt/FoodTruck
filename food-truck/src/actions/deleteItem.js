import {DELETE_ITEM_START, DELETE_ITEM_SUCCESS, DELETE_ITEM_FAILURE} from './types'

import {AxiosWithAuth} from '../components/utils/AxiosWithAuth'

export const deleteItem = (itemId, fn, id) => dispatch => {
    dispatch({ type: DELETE_ITEM_START })

    AxiosWithAuth()
    .delete(`https://food-truck-dev1.herokuapp.com/api/items/${itemId}`)
    .then(res => {
        console.log(res.data)
        dispatch({ type: DELETE_ITEM_SUCCESS, payload: res.data })
        fn(id)
    })
    .catch(err => {
        dispatch({ type: DELETE_ITEM_FAILURE, payload: err })
    })
}