import { combineReducers } from 'redux'
import * as Clock from './clock'
import * as Counter from './counter'
import * as R from './remoteUser'
import *  as Cards from './cards'
// import type {Action} from 'redux'
// import type {AppState} from './5-2. e_Appstate'

// export const rootReducer = (state: AppState, action: Action) => state

export const rootReducer = combineReducers({
    clock: Clock.reducer,
    counter: Counter.reducer,
    remoteUser: R.reducer,
    cards: Cards.reducer
})

// combineReducers() 함수는 리덕스 관련 코드를 어떤 기계적인 패턴으로 구현할 수 있게 해줍니다.
// 이제 clock부터 차례로 AppState의 멤버 상태에 대응하는 리덕스 기능을 구현해 가면서 
// 이 기계적인 패턴의 코드를 어떻게 작성하는 지 알아보겠습니다.

