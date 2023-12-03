import {combineReducers} from 'redux'
import * as L from './5-4. listEntities'
import * as LO from './5-4. listidOrders'
import * as LC from './5-4. listidCardidOrders'
import * as C from './5-4. cardEntities'

export const rootReducer = combineReducers({
    listEntities: L.reducer,
    listidOrders: LO.reducer,
    listidCardidOrders: LC.reducer,
    cardEntities: C.reducer
})
