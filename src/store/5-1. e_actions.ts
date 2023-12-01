import type {Action} from 'redux'

export type SetTodayAction = Action<'setToday'> & {
    today: Date
}
export type Actions = SetTodayAction

// 네, 이 코드는 JavaScript의 서브셋인 TypeScript에서 사용되는 코드 일부입니다. 
// Redux라는 JavaScript 라이브러리를 사용하여 상태 관리를 구현하는 데 사용됩니다. 
// 여기서 상태란 어플리케이션의 상태나 데이터를 의미합니다.

// import type {Action} from 'redux'는 Redux 패키지에서 Action 타입을 가져오는 코드입니다. 
// Redux에서 Action은 어플리케이션에서 실행되는 모든 행동을 나타내며, 
// 이는 주로 사용자의 상호작용에 응답하여 상태를 변경하는 데 사용됩니다.

// export type SetTodayAction = Action & { today: Date }는 새로운 타입인 SetTodayAction을 정의하는 코드입니다. 
// 이는 기존의 Action 타입과 함께 'today'라는 이름의 Date 타입의 필드를 추가로 가진 새로운 타입을 만들어냅니다.

// 이 새로운 타입, SetTodayAction은 앱의 '오늘의 날짜'를 설정하는 액션을 나타낼 수 있습니다. 
// 예를 들어, 사용자가 캘린더에서 특정 날짜를 선택하면, 이 액션 타입을 사용하여 선택된 날짜를 상태에 저장할 수 있습니다.


// 네, 이 코드도 TypeScript에서 사용되는 Redux 관련 코드입니다.
// import type {Action} from 'redux'는 여전히 Redux 패키지에서 Action 타입을 가져오는 코드입니다.
// export type SetTodayAction = Action<'setToday'> & { today: Date }는 
// 조금 수정된 새로운 타입인 SetTodayAction을 정의하는 코드입니다. 
// 이번에는 Action 타입을 'setToday'라는 문자열 리터럴 타입과 함께 사용하고 있습니다. 
// 이는 Action 객체가 가지는 type 속성의 값이 'setToday'라는 문자열임을 명시적으로 선언한 것입니다.
// 그리고 여전히 'today'라는 이름의 Date 타입의 필드를 추가로 가지고 있습니다. 이를 통해 '오늘의 날짜'를 설정하는 액션을 나타냅니다.

// export type Actions = SetTodayAction은 Actions라는 새로운 타입을 선언하고, 
// 이 타입은 SetTodayAction의 타입을 가진다는 것을 나타냅니다. 
// 이는 앱에서 발생할 수 있는 모든 액션 타입을 통합하여 관리할 수 있는 방식으로, 
// 앞으로 추가될 다른 액션 타입들은 이 Actions 타입에 추가될 수 있습니다. 
// 이렇게 함으로써 액션 생성자나 리듀서에서 처리해야 하는 액션의 타입을 효과적으로 관리할 수 있습니다.




