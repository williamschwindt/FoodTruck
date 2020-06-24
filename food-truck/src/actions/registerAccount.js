import axios from 'axios'

import { REGISTER_ACCOUNT_START, REGISTER_ACCOUNT_SUCCESS, REGISTER_ACCOUNT_FAILURE } from './types'

export const registerAccount = (body) => dispatch => {
    dispatch({ type: REGISTER_ACCOUNT_START })

    axios.post('https://food-truck-prod.herokuapp.com/api/auth/register', body)
    .then(res => {
        dispatch({ type: REGISTER_ACCOUNT_SUCCESS, payload: res })
    })
    .catch(err => {
        dispatch({ type: REGISTER_ACCOUNT_FAILURE, payload: err })
    })
}