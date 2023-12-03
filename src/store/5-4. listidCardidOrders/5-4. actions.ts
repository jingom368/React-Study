import type * as T from './5-4. e_types'

export const setListidCardids = (payload: T.ListidCardidS) : T.SetListidCardids => ({
    type: '@listidCardids/set',
    payload
}) 

export const removeListid = (payload: string) : T.RemoveListidAction => ({
    type: '@listidCardids/remove',
    payload
})

export const prependCardidToListidAction = (
    payload: T.ListidCardid
) : T.PrependCardidToListidAction => ({
        type: '@listidCardids/prependCardid',
        payload
    })

export const appendCardidToListidAction = (
    payload: T.ListidCardid
) : T.AppendCardidToListidAction => ({
        type: '@listidCardids/appendCardid',
        payload
    })

export const removeCardidFromListidAction = (
    payload: T.ListidCardid
) : T.RemoveCardidFromListidAction => ({
        type: '@listidCardids/removeCardid',
        payload
    })