import axios from 'axios'

import { REGISTER_ACCOUNT_START, REGISTER_ACCOUNT_SUCCESS, REGISTER_ACCOUNT_FAILURE } from './types'

export const registerAccount = (body, fn, route) => dispatch => {
    dispatch({ type: REGISTER_ACCOUNT_START })

    axios.post('https://food-truck-dev1.herokuapp.com/api/auth/register', body)
    .then(res => {
        dispatch({ type: REGISTER_ACCOUNT_SUCCESS, payload: res })
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('userId', res.data.userId)
        fn(route)
    })
    .catch(err => {
        dispatch({ type: REGISTER_ACCOUNT_FAILURE, payload: err })
    })
}