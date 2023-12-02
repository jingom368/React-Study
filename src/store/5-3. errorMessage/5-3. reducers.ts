import * as T from './5-3. types'

const initialState: T.State = ''

export const reducer = (state: T.State = initialState, action: T.Actions) => {
    switch (action.type) {
        case '@errorMessage/setErrorMessage':
            return action.payload
    }
    return state
}
