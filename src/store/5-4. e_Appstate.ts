import * as L from './5-4. listEntities'
import * as LO from './5-4. listidOrders'
import * as LC from './5-4. listidCardidOrders'
import * as C from './5-4. cardEntities'

export type AppState4 = {
    listEntities: L.State
    listidOrders: LO.State
    listidCardidOrders: LC.State
    cardEntities: C.State
}