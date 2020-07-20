import { combineReducers } from 'redux'

import { registerReducer } from './registerReducer'
import { loginReducer } from './loginReducer'
import { storesReducer } from './storesReducer'

export const rootReducer = combineReducers({
    registerReducer,
    storesReducer,
    loginReducer,
})