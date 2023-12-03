import type * as T from './5-4. e_types'

export const SetListOrders = (payload: T.State): T.SetListidOrders => ({
    type: '@ListidOrders/set',
    payload
})

export const addListIdToOrders = (payload: T.UUID): T.AddListidToOrders => ({
    type: '@ListidOrders/add',
    payload
})

export const removeListidFromOrders = (payload: T.UUID): T.RemoveListidFromOrders => ({
    type: '@ListidOrders/remove',
    payload
})
