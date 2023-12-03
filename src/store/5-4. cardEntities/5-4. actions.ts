import type * as T from './5-4. e_types'

export const addCard = (payload: T.Card): T.AddCardAction => ({
    type: '@cardEntities/add',
    payload
})

export const removeCard = (payload: T.UUID): T.RemoveCardAction => ({
    type: '@cardEntities/remove',
    payload
})