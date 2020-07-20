import axios from 'axios'

import { LOGIN_ACCOUNT_START, LOGIN_ACCOUNT_SUCCESS, LOGIN_ACCOUNT_FAILURE } from './types'

export const loginAccount = (body, fn) => dispatch => {
    dispatch({ type: LOGIN_ACCOUNT_START })

    axios.post('https://food-truck-dev1.herokuapp.com/api/auth/login', body)
    .then(res => {
        dispatch({ type: LOGIN_ACCOUNT_SUCCESS, payload: res })
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('userId', res.data.userId)
        fn(`${res.data.userType}/home`)
    })
    .catch(err => {
        dispatch({ type: LOGIN_ACCOUNT_FAILURE, payload: err })
    })
}