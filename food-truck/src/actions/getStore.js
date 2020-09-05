import { AxiosWithAuth } from '../components/utils/AxiosWithAuth'

import { GET_STORE_START, GET_STORE_FAILURE, GET_STORE_SUCCESS } from './types'

export const getStore = (userId, storeId) => dispatch => {
    dispatch({ type: GET_STORE_START })

    AxiosWithAuth()
    .get(`https://food-truck-dev1.herokuapp.com/api/users/${userId}/stores/${storeId}`)
    .then(res => {
        console.log(res.data)
        dispatch({ type: GET_STORE_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch({ type: GET_STORE_FAILURE, payload: err })
    })
}