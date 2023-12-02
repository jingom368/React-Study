import {combineReducers} from 'redux'
import * as L from './5-3. loading'
import * as E from './5-3. errorMessage'
import * as F from './5-3. fetchUser'

export const rootReducer = combineReducers({
    loading: L.reducer,
    errorMessage: E.reducer,
    fetchUser: F.reducer
})
