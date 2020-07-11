import { AxiosWithAuth } from '../components/utils/AxiosWithAuth'

import { GET_STORES_START, GET_STORES_FAILURE, GET_STORES_SUCCESS } from './types'

export const getStores = (userId) => dispatch => {
    dispatch({ type: GET_STORES_START })

    AxiosWithAuth()
    .get(`https://food-truck-dev1.herokuapp.com/api/users/${userId}/stores`)
    .then(res => {
        console.log(res.data)
        dispatch({ type: GET_STORES_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch({ type: GET_STORES_FAILURE, payload: err })
    })
}