export type AppState = {
    clock: Clock.State
    counter: Counter.State
    remoterUser: R.State
    cards: Cards.State  
}

// 이 코드는 앱 수준 상태 AppState를 다시 clock, counter, remoteUser, cards라는 이름의 독립적을 동작하는 멤버 상태로 구성한 것입니다.
// 코드에서 AppState는 4개의 멤버 상태로 구성했으므로 이를 각각 처리하는 4개의 리듀서가 필요합니다.
// 그리고 앞서 만든 clock, counter와 같은 디텍터리 안에는 컴파일 오류가 없는 최소한으로 구현한 리듀서가 이미 있습니다.

// 이제 src/store 디텍터리의 rootReducers.ts 파일을 다음처럼 구현합니다.
// 코드는 combine Reducers() 함수로 '상태 이름: 해당_리듀서' 형태의 조합을 모두 결합하여 새로운 루트 리듀서를 만듭니다.
// 앞서 combineReducers()의 매개변수 reducers는 ReducersMapObeject 타입이라고 했습니다.
// 이 타입 선언문에서 [Key in keyof State]: Reducer<State[Key], A> 부분을 고려해 보면,
// clock, counter 등의 멤버 상태는 모두 Appstate의 키이므로, [Key in keyof State] 조건을 만족합니다.
// 또한 각 키 설정값의 타입은 Reducer<State[key], A>, 즉 리듀서 함수여야 하므로 Clock.reducer를 설정해야 합니다.


