import {DELETE_STORE_START, DELETE_STORE_SUCCESS, DELETE_STORE_FAILURE} from './types'

import {AxiosWithAuth} from '../components/utils/AxiosWithAuth'

export const deleteStore = (storeId, fn, id) => dispatch => {
    dispatch({ type: DELETE_STORE_START })

    AxiosWithAuth()
    .delete(`https://food-truck-dev1.herokuapp.com/api/stores/${storeId}`)
    .then(res => {
        console.log(res.data)
        dispatch({ type: DELETE_STORE_SUCCESS, payload: res.data })
        fn(id)
    })
    .catch(err => {
        dispatch({ type: DELETE_STORE_FAILURE, payload: err })
    })
}