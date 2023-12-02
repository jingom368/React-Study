import type {Actions} from './5-1. e_actions'
import type {AppState1} from './5-1. Appstate'

const initialAppstate = {
    today: new Date()
}
export const rootReducer = (state: AppState1 = initialAppstate, action: Actions) => {
    // const newState = {...prevState} // 깊은 복사 필요
    // return newState
    switch (action.type) {
        case 'setToday' : {
            return {...state, today: action.today}
        }
    }
    return state // 필수
}