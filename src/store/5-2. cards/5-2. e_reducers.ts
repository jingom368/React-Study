import * as T from './5-2. e_types'

const initialState: T.State = []

export const reducer = (state: T.State = initialState, action: T.Actions) => {
    switch (action.type) {
        case '@cards/addCard':
            return [action.payload, ...state]
        case '@cards/removeCard':
            return state.filter(card => card.uuid !== action.payload)
    }
    return state
}
    
    // 마지막으로 src/store/cards/ 디렉터리의 reducers.ts 파일을 열고 다음처럼 코드를 작성합니다.
// 그리고 웹 브라우저를 확인해 보면 사용자 카들르 추가, 삭제하는 기능을 확인할 수 있습니다.
// 이 리듀서는 앞서 만든 2개 액션의 배열 상태를 변경합니다.
// 리듀서는 순수 함수여야 하므로 addCard 액션에는 배열에 적용하는 비구조화 할당 구문으로 새로운 배열을 만들고,
// removeCard 액션에는 filter() 메서드로 특정 카드의 uuid 값이 아닌 카드만으로 새로운 배열을 만듭니다.

// ---------- GPT 4.0 ---------- //

// 이 코드는 Redux에서 사용하는 리듀서 함수를 정의하고 있습니다. 
// 리듀서는 현재 상태와 디스패치된 액션을 인자로 받아, 새로운 상태를 반환하는 순수 함수입니다.

// import * as T from './5-2. e_types'
// 상대 경로 './5-2. e_types'의 모듈에서 모든 내보낸 값을 가져와 T라는 이름으로 사용합니다.
// const initialState: T.State = []
// 초기 상태를 빈 배열로 정의하고 있습니다. 초기 상태의 타입은 T.State로, 이는 Card 객체의 배열을 의미합니다.

//export const reducer = (state: T.State = initialState, action: T.Actions) => { ... }
// 리듀서 함수를 정의하고 내보냅니다. 
// 리듀서는 현재 상태(state)와 액션(action)을 인자로 받습니다. 현재 상태의 기본값은 initialState입니다.

//switch (action.type) { ... }
//액션의 type 속성을 기준으로 분기 처리를 합니다.

// case '@cards/addCard': return [action.payload, ...state]
// 액션의 타입이 '@cards/addCard'일 때, 새로운 상태를 반환합니다. 
// 새로운 상태는 action.payload와 기존 상태를 합친 새 배열입니다. 즉, 새 카드를 상태의 맨 앞에 추가합니다.

// case '@cards/removeCard': return state.filter(card => card.uuid !== action.payload)
// 액션의 타입이 '@cards/removeCard'일 때, 새로운 상태를 반환합니다. 
// 새로운 상태는 기존 상태에서 특정 카드를 제거한 새 배열입니다. 제거할 카드는 action.payload와 uuid가 일치하는 카드입니다.

//return state
// 액션의 타입이 위의 두 경우가 아닐 때, 기존 상태를 그대로 반환합니다. 이는 Redux에서 요구하는 기본 동작입니다. 
//모든 가능한 액션에 대해 처리를 해주지 않으면, Redux는 기존 상태를 그대로 반환하도록 합니다.

// 이 코드는 Redux의 리듀서를 정의하는 코드로, 액션에 따라 상태를 어떻게 업데이트할지를 정의하고 있습니다. 
// 이를 통해 애플리케이션의 상태 변화를 관리합니다.




