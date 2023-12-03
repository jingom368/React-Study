import * as T from './5-4. e_types'

const initialState: T.State = []

export const reducer = (state: T.State = initialState, action: T.Actions) => {
    switch (action.type) {
        case '@ListidOrders/set':
            return action.payload
        case '@ListidOrders/add':
            return [...state, action.payload]
        case '@ListidOrders/remove':
            return state.filter(uuid => uuid !== action.payload)
    }
    return state
}
