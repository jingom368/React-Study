import * as Clock from './clock'
import * as Counter from './counter'
import * as R from './remoteUser'
import * as Cards from './cards'

export type AppState = {
    clock: Clock.State
    counter: Counter.State
    remoterUser: R.State
    cards: Cards.State
}

// 이 코드는 앱 수준 상태 AppState를 다시 clock, counter, remoteUser, cards라는 이름의 독립적을 동작하는 멤버 상태로 구성한 것입니다.
// 코드에서 AppState는 4개의 멤버 상태로 구성했으므로 이를 각각 처리하는 4개의 리듀서가 필요합니다.
// 그리고 앞서 만든 clock, counter와 같은 디텍터리 안에는 컴파일 오류가 없는 최소한으로 구현한 리듀서가 이미 있습니다.
