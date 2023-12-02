import * as L from './5-3. loading'
import * as E from './5-3. errorMessage'
import * as F from './5-3. fetchUser'

export type AppState = {
    loading: L.State
    errorMessage: E.State
    fetchUser: F.State
}