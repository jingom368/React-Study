import * as T from './5-2. e_types'

const initialState: T.State = 0

export const reducer = (state: T.State = initialState, action: T.Actions) => {
    // console.log('counter : ' + action.type)
    switch (action.type) {
        case '@counter/setCounter':
            return state + action.payload
    }
    return state
}

// 이제 src/store/counter 디렉터리의 reducers.ts 파일을 다음처럼 구현합니다.
// 현재 T.State 타입은 실제로는 number이고 action.payload는 더하기 연산자의 피연산자로 동작하므로
// 과거 상태에 action.payload를 더하면 앞서 본 CounterTest 컴포넌트의 구현 내용을 만족합니다.

// ---------- GPT 4.0 ---------- //

// 네, 이 코드는 Redux에서 리듀서를 정의하는 부분입니다.
// 리듀서는 상태와 액션을 인자로 받아 새로운 상태를 반환하는 함수입니다. 이를 자세히 설명드리겠습니다.

// import * as T from './5-2. e_types':
// ./5-2. e_types 모듈에서 정의된 모든 타입을 T라는 별칭으로 임포트합니다.
// 이를 통해 이 모듈에서 정의된 타입들을 T.타입이름 형태로 사용할 수 있게 됩니다.

// const initialState: T.State = 0:
// 초기 상태를 정의합니다. T.State 타입 즉, number 타입의 0을 초기 상태로 설정합니다.

// export const reducer = (state: T.State = initialState, action: T.Actions) => {...}:
// 리듀서를 정의합니다. 이 함수는 state와 action을 인자로 받아, switch 문을 통해 액션의 type에 따라 다른 로직을 수행합니다.

// case '@counter/setCounter': return state + action.payload:
// 액션의 타입이 '@counter/setCounter'인 경우, 현재 상태(state)에 액션의 payload를 더한 값을 새로운 상태로 반환합니다.
// 이는 'counter' 상태를 payload만큼 증가시키거나 감소시키는 것을 의미합니다. payload가 양수면 증가, 음수면 감소하게 됩니다.

// return state: 액션의 타입이 '@counter/setCounter'이 아닌 경우, 현재 상태를 그대로 반환합니다.
// 이는 알려지지 않은 액션에 대해 상태를 변경하지 않는다는 것을 의미합니다.

// 이렇게 정의된 reducer 함수는 액션이 디스패치되면 이를 받아 상태를 업데이트하고, 업데이트된 상태를 반환합니다.
// 이를 통해 우리는 액션에 따라 상태를 변경하는 로직을 관리할 수 있습니다.
