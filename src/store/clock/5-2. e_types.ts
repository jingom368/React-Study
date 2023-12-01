import type {Action} from 'redux'

export type State = Date

export type SetClockAction = Action<'@clock/setClock'> & {
    payload: State
}

export type Actions = SetClockAction

// 먼저 Appstate의 clock 멤버 상태에 대한 타입을 선언하겠습니다. 
// src/store/clock 디텍터리의 types.ts 파일을 열고 다음처럼 코드를 작성합니다.
// 코드는 AppState.clock의 타입을 any가 아닌 Date로 변경합니다.
// 그리고 Action<'@clock/setClock'> 타입과 payload라는 속성이 있는 '이름 없는 타입'의 교집합으로 액션을 선언합니다.
// 그런데 @clock/이나 payload라는 이름이 좀 생소합니다.
// 이 이름은 리덕스 커뮤니티에서 관행으로 사용하는 타입과 변수 이름입니다.
// 왜 이런 이름을 사용하는지는 잠시 후에 알아보겠습니다.

// ---------- GPT 4.0 ---------- //

// 네, 이 코드는 Redux에서 액션과 상태를 타입으로 정의하는 부분입니다. 각 부분을 자세히 설명드리겠습니다.

// import type {Action} from 'redux':
// Redux에서 제공하는 Action 타입을 임포트합니다. 
// Action 타입은 Redux 액션 객체의 가장 기본적인 형태를 나타내며, type 속성을 가지고 있습니다.
// export type State = Date:
// State 타입을 Date로 정의합니다. 이는 해당 상태가 날짜 정보를 관리한다는 것을 의미합니다.

// export type SetClockAction = Action<'@clock/setClock'> & { payload: State }:
// SetClockAction 타입은 '@clock/setClock' 타입의 액션과 payload라는 추가적인 속성을 가진 객체의 타입입니다. 
// & 연산자는 두 개의 타입을 조합하여 새로운 타입을 만드는 타입스크립트의 연산자입니다. 
// 여기서 payload는 액션이 실행될 때 전달되는 데이터를 담는 필드로, State 타입 즉, Date 타입의 값을 가지게 됩니다.

// export type Actions = SetClockAction:
// Actions 타입은 현재 SetClockAction 한 가지 타입만을 가지고 있습니다. 
// 이후에 다른 액션 타입이 추가되면 | 연산자를 사용하여 추가할 수 있습니다. 
// 예를 들어, ResetClockAction이라는 새로운 액션 타입이 추가되면 
// Actions 타입은 SetClockAction | ResetClockAction으로 정의될 수 있습니다.

// 이 코드를 통해 우리는 'clock' 상태를 관리하기 위한 액션 타입과 상태 타입을 정의하고 있습니다. 
// 이렇게 타입을 정의함으로써 리듀서 함수나 액션 생성 함수에서 이 타입들을 사용하여 코드의 안정성을 높일 수 있습니다.