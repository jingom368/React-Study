import type * as T from './5-2. e_types'

export const setClock = (payload: T.State): T.SetClockAction => ({
    
    type: '@clock/setClock',
    payload
})

// 이제 setClockAction 타입의 액션 객체를 생성하는 setClock이란 '액션 생성기(action creator)'를 만들어 보겠습니다.
// src/store/clock 디텍터리의 actions.ts 파일을 열고 다음처럼 코드를 작성합니다.
// 참고로 코드에서 setClock은 매개변수 payload의 타입을 설정할 수 있게 해주므로
// {type: '@clock/setClock', payload} 형태의 코드에서 발생할 수 있는 타입 오류를 미연에 방지해 주는 효과가 있습니다.

// ---------- GPT 4.0 ---------- //

// 네, 이 코드는 Redux에서 액션 생성 함수를 정의하는 부분입니다. 
// setClock이라는 함수는 T.State 타입의 payload를 인자로 받아, 
// T.SetClockAction 타입의 액션 객체를 반환합니다. 이를 자세히 설명드리겠습니다.

// import type * as T from './5-2. e_types':
// ./5-2. e_types 모듈에서 정의된 모든 타입을 T라는 별칭으로 임포트합니다. 
// 이를 통해 이 모듈에서 정의된 타입들을 T.타입이름 형태로 사용할 수 있게 됩니다.
// export const setClock = (payload: T.State): T.SetClockAction => ({ type: '@clock/setClock', payload }):
// setClock이라는 액션 생성 함수를 정의합니다. 이 함수는 payload라는 인자를 받아, 
// type 속성이 '@clock/setClock'이고 payload 속성이 인자로 받은 payload인 객체를 반환합니다. 
// 이 객체는 T.SetClockAction 타입이므로, 이 타입에 정의된 대로 type 속성과 payload 속성을 가지고 있어야 합니다.

// 여기서 payload는 T.State 타입, 즉 Date 타입의 값을 가지므로, 
// setClock 함수는 Date 타입의 값을 인자로 받아 'clock' 상태를 설정하는 액션 객체를 생성합니다.

// 이렇게 액션 생성 함수를 통해 우리는 상태 변경을 위한 액션 객체를 쉽게 생성할 수 있습니다. 
// 이 액션 객체는 디스패치 함수를 통해 리듀서에 전달되어 상태 변경을 트리거합니다.