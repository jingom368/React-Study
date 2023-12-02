import type {Action} from 'redux'

export type State = number

export type SetCounterAction = Action<'@counter/setCounter'> & {
    payload: State
}

export type Actions = SetCounterAction

// 먼저 src/store/counter 디렉터리의 types.ts 파일을 열고 다음처럼 코드를 작성합니다.
// 이 코드에서는 State 타입을 number로 하고 SetCounterAction 타입을 선언합니다.
// 그리고 @counter 접두사와 payload 변수명을 사용합니다.
// 현재 State 타입은 number이므로 payload라는 이름 대신 
// operand아 같은 이름이 더 적합해 보일 수도 있겠지만 여전히 payload라는 이름을 고수하겠습니다. 

// ---------- GPT 4.0 ---------- //


// 네, 이 코드는 Redux에서 액션과 상태를 타입으로 정의하는 부분입니다. 각 부분을 자세히 설명드리겠습니다.

// import type {Action} from 'redux':
// Redux에서 제공하는 Action 타입을 임포트합니다. 
// Action 타입은 Redux 액션 객체의 가장 기본적인 형태를 나타내며, type 속성을 가지고 있습니다.

// export type State = number:
// State 타입을 number로 정의합니다. 이는 해당 상태가 숫자 정보를 관리한다는 것을 의미합니다.

// export type SetCounterAction = Action<'@counter/setCounter'> & { payload: State }:
// SetCounterAction 타입은 '@counter/setCounter' 타입의 액션과 payload라는 추가적인 속성을 가진 객체의 타입입니다. 
// & 연산자는 두 개의 타입을 조합하여 새로운 타입을 만드는 타입스크립트의 연산자입니다. 
// 여기서 payload는 액션이 실행될 때 전달되는 데이터를 담는 필드로, State 타입 즉, number 타입의 값을 가지게 됩니다.

// export type Actions = SetCounterAction:
// Actions 타입은 현재 SetCounterAction 한 가지 타입만을 가지고 있습니다. 
// 이후에 다른 액션 타입이 추가되면 | 연산자를 사용하여 추가할 수 있습니다. 
// 예를 들어, ResetCounterAction이라는 새로운 액션 타입이 추가되면 
// Actions 타입은 SetCounterAction | ResetCounterAction으로 정의될 수 있습니다.

//이 코드를 통해 우리는 'counter' 상태를 관리하기 위한 액션 타입과 상태 타입을 정의하고 있습니다. 
// 이렇게 타입을 정의함으로써 리듀서 함수나 액션 생성 함수에서 이 타입들을 사용하여 코드의 안정성을 높일 수 있습니다.




