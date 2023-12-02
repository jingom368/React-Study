import type * as T from './5-2. e_types'

export const setCounter = (payload: T.State): T.SetCounterAction => ({
    type: '@counter/setCounter',
    payload
})

export const increaseCounter = () => setCounter(1)
export const decreaseCounter = () => setCounter(-1)

// 그리고 src/store/counter 디렉터리의 actions.ts 파일에 액션 생성기를 다음처럼 구현합니다.
// setCounter(1)란 이름보다는 더 의미가 분명한 increaseCounter와 같은 도움 액션 생성기를 추가로 만들어 두었습니다.

// ---------- GPT 4.0 ---------- //

// 네, 이 코드는 Redux에서 액션 생성 함수를 정의하는 부분입니다. 
// setCounter, increaseCounter, decreaseCounter라는 세 가지 함수를 정의하고 있습니다.

// import type * as T from './5-2. e_types':
// ./5-2. e_types 모듈에서 정의된 모든 타입을 T라는 별칭으로 임포트합니다. 
// 이를 통해 이 모듈에서 정의된 타입들을 T.타입이름 형태로 사용할 수 있게 됩니다.

// export const setCounter = (payload: T.State): T.SetCounterAction => ({ type: '@counter/setCounter', payload }):
// setCounter이라는 액션 생성 함수를 정의합니다. 
// 이 함수는 payload라는 인자를 받아, type 속성이 '@counter/setCounter'이고 payload 속성이 인자로 받은 payload인 객체를 반환합니다. 
// 이 객체는 T.SetCounterAction 타입이므로, 이 타입에 정의된 대로 type 속성과 payload 속성을 가지고 있어야 합니다. 
// 여기서 payload는 T.State 타입, 즉 number 타입의 값을 가집니다.

// export const increaseCounter = () => setCounter(1):
// increaseCounter 함수는 setCounter 함수를 호출하여 payload를 1로 설정하는 액션 객체를 생성합니다. 
// 이렇게 하면 'counter' 상태가 1 증가하게 됩니다.

// export const decreaseCounter = () => setCounter(-1):
// decreaseCounter 함수는 setCounter 함수를 호출하여 payload를 -1로 설정하는 액션 객체를 생성합니다. 
// 이렇게 하면 'counter' 상태가 1 감소하게 됩니다.

// 이렇게 액션 생성 함수를 통해 우리는 상태 변경을 위한 액션 객체를 쉽게 생성할 수 있습니다. 
// 이 액션 객체는 디스패치 함수를 통해 리듀서에 전달되어 상태 변경을 트리거합니다.