import { AxiosWithAuth } from '../components/utils/AxiosWithAuth'

import { GET_ITEMS_START, GET_ITEMS_FAILURE, GET_ITEMS_SUCCESS } from './types'

export const getItems = (storeId) => dispatch => {
    dispatch({ type: GET_ITEMS_START })

    AxiosWithAuth()
    .get(`https://food-truck-dev1.herokuapp.com/api/stores/${storeId}/items`)
    .then(res => {
        console.log(res.data)
        dispatch({ type: GET_ITEMS_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch({ type: GET_ITEMS_FAILURE, payload: err })
    })
}