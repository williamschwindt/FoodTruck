import {EDIT_STORE_START, EDIT_STORE_SUCCESS, EDIT_STORE_FAILURE} from './types'

import {AxiosWithAuth} from '../components/utils/AxiosWithAuth'

export const editStore = (storeId, store) => dispatch => {
    dispatch({ type: EDIT_STORE_START })

    AxiosWithAuth()
    .put(`https://food-truck-dev1.herokuapp.com/api/stores/${storeId}`, store)
    .then(res => {
        console.log(res.data)
        dispatch({ type: EDIT_STORE_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch({ type: EDIT_STORE_FAILURE, payload: err })
    })
}