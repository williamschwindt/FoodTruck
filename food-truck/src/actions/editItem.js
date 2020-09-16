import {EDIT_ITEM_START, EDIT_ITEM_SUCCESS, EDIT_ITEM_FAILURE} from './types'

import {AxiosWithAuth} from '../components/utils/AxiosWithAuth'

export const editItem = (itemId, item) => dispatch => {
    dispatch({ type: EDIT_ITEM_START })

    AxiosWithAuth()
    .put(`https://food-truck-dev1.herokuapp.com/api/items/${itemId}`, item)
    .then(res => {
        console.log(res.data)
        dispatch({ type: EDIT_ITEM_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch({ type: EDIT_ITEM_FAILURE, payload: err })
    })
}