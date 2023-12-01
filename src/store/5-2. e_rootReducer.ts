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

// 이제 src/store 디텍터리의 rootReducers.ts 파일을 다음처럼 구현합니다.
// 코드는 combine Reducers() 함수로 '상태 이름: 해당_리듀서' 형태의 조합을 모두 결합하여 새로운 루트 리듀서를 만듭니다.
// 앞서 combineReducers()의 매개변수 reducers는 ReducersMapObeject 타입이라고 했습니다.
// 이 타입 선언문에서 [Key in keyof State]: Reducer<State[Key], A> 부분을 고려해 보면,
// clock, counter 등의 멤버 상태는 모두 Appstate의 키이므로, [Key in keyof State] 조건을 만족합니다.
// 또한 각 키 설정값의 타입은 Reducer<State[key], A>, 즉 리듀서 함수여야 하므로 Clock.reducer를 설정해야 합니다.

// combineReducers() 함수는 리덕스 관련 코드를 어떤 기계적인 패턴으로 구현할 수 있게 해줍니다.
// 이제 clock부터 차례로 AppState의 멤버 상태에 대응하는 리덕스 기능을 구현해 가면서 
// 이 기계적인 패턴의 코드를 어떻게 작성하는 지 알아보겠습니다.


// ---------- GPT 4.0 ---------- //

// 네, 이 코드는 Redux의 combineReducers를 사용하여 여러 개의 리듀서를 하나로 묶는 과정을 보여줍니다. 자세히 설명드리겠습니다.

// AppState 타입: AppState는 애플리케이션의 전체 상태를 나타내는 타입입니다. 
// 이 타입은 'clock', 'counter', 'remoteUser', 'cards'라는 네 가지 키를 가지고 있으며, 각 키는 각각의 상태를 나타냅니다.
// 리듀서 임포트: 각각의 상태를 관리하는 리듀서를 임포트합니다. 
// 이 리듀서들은 각각 'clock', 'counter', 'remoteUser', 'cards' 상태를 관리합니다.
// rootReducer 정의: combineReducers를 사용하여 여러 개의 리듀서를 하나로 묶습니다. 
// 이 함수는 객체 형태의 인자를 받습니다. 이 객체는 각 상태 키와 대응하는 리듀서를 가지고 있습니다. 
// 따라서 'clock', 'counter', 'remoteUser', 'cards' 각각의 상태에 대응하는 리듀서가 있습니다.

// 이렇게 정의된 rootReducer는 액션을 디스패치하면 해당 액션을 인자로 받아, 각 리듀서를 호출하여 상태를 업데이트하고, 
// 업데이트된 상태를 조합하여 반환합니다. 이를 통해 각각의 리듀서가 상태의 특정 부분을 관리하도록 할 수 있습니다.

// 따라서 이 코드는 애플리케이션의 상태를 'clock', 'counter', 'remoteUser', 'cards'라는 네 가지 부분으로 나누고, 
// 각 부분을 관리하는 리듀서를 정의하여, 이 리듀서들을 하나로 묶어 전체 상태를 관리하는 rootReducer를 만드는 과정을 보여줍니다. 
// 이렇게 하면 애플리케이션의 상태 관리를 좀 더 모듈화하고 체계적으로 할 수 있습니다.
