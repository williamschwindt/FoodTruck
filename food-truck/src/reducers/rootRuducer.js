import { combineReducers } from 'redux'

import { registerReducer } from './registerReducer'
import { loginReducer } from './loginReducer'
import { storesReducer } from './storesReducer'
import { storeReducer } from './storeRuducer'
import { itemReducer } from './itemReducer'
import { itemsReducer } from './itemsReducer'
 
export const rootReducer = combineReducers({
    registerReducer,
    storesReducer,
    loginReducer,
    storeReducer,
    itemReducer,
    itemsReducer,
})