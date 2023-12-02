import type * as T from './5-3. types'

export const setErrorMessage = (payload: T.State): T.SetErrorMessageAction => ({
    type: '@errorMessage/setErrorMessage',
    payload
})