import { AxiosWithAuth } from '../components/utils/AxiosWithAuth'

import { ADD_STORE_START, ADD_STORE_FAILURE, ADD_STORE_SUCCESS } from './types'

export const addStore = (userId, store, fn) => dispatch => {
    dispatch({ type: ADD_STORE_START })

    return AxiosWithAuth()
    .post(`https://food-truck-dev1.herokuapp.com/api/users/${userId}/stores`, store)
    .then(res => {
        console.log(res)
        dispatch({ type: ADD_STORE_SUCCESS, payload: res })
        fn(userId)
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: ADD_STORE_FAILURE, payload: err })
    })
}