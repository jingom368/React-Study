import * as T from './5-2. e_types'

const initialState: T.State = new Date()

export const reducer = (state: T.State = initialState, action: T.Actions) => {
    // console.log('clock : ' + action.payload)
    switch (action.type) {
        case '@clock/setClock':
            return action.payload
    }
    return state
}

// 이제 src/store/clock 디텍터리의 reducers.ts 파일을 다음처럼 작성합니다.
// 앞서 types.ts 파일의 State 타입은 실제로는 Date이므로 다음 코드에서 Date 클래스의 인스턴스를 초깃값으로 설정하는 것은 당연합니다.
// 또한 action.payload의 타입인 State 또한 Date이므로 action의 payload값을 그대로 반환하는 것도 타당합니다.

// ---------- GPT 4.0 ---------- //

// 네, 이 코드는 Redux에서 리듀서를 정의하는 부분입니다.
// 리듀서는 상태와 액션을 인자로 받아 새로운 상태를 반환하는 함수입니다. 이를 자세히 설명드리겠습니다.

// import * as T from './5-2. e_types': ./5-2. e_types 모듈에서 정의된 모든 타입을 T라는 별칭으로 임포트합니다.
// 이를 통해 이 모듈에서 정의된 타입들을 T.타입이름 형태로 사용할 수 있게 됩니다.

// const initialState: T.State = new Date(): 초기 상태를 정의합니다. T.State 타입 즉,
// Date 타입의 new Date() 인스턴스를 초기 상태로 설정합니다.
// export const reducer = (state: T.State = initialState, action: T.Actions) => {...}: 리듀서를 정의합니다.
// 이 함수는 state와 action을 인자로 받아, switch 문을 통해 액션의 type에 따라 다른 로직을 수행합니다.

// case '@clock/setClock': return action.payload: 액션의 타입이 '@clock/setClock'인 경우,
// 액션의 payload를 새로운 상태로 반환합니다. 이는 'clock' 상태를 payload의 값, 즉 Date 인스턴스로 설정하는 것을 의미합니다.
// return state: 액션의 타입이 '@clock/setClock'이 아닌 경우, 현재 상태를 그대로 반환합니다.
// 이는 알려지지 않은 액션에 대해 상태를 변경하지 않는다는 것을 의미합니다.

// 이렇게 정의된 reducer 함수는 액션이 디스패치되면 이를 받아 상태를 업데이트하고,
// 업데이트된 상태를 반환합니다. 이를 통해 우리는 액션에 따라 상태를 변경하는 로직을 관리할 수 있습니다.
