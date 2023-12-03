import * as T from './5-4. e_types'

const initialState: T.State = {}

export const reducer = (state: T.State = initialState, action: T.Actions) => {
    switch (action.type) {
        case '@listEntities/add':
            return {...state, [action.payload.uuid]: action.payload}
        case '@listEntities/remove': {
            const newState = {...state}
            delete newState[action.payload]
            return newState
        }
    }
    return state
}

// 그런데 엔티티의 리듀서를 구현할 때는 조금 생각이 필요합니다. 이에 관해 알아보겠습니다.
// 다음처럼 작성된 리듀서 코드에서 각 액션의 return state 부분을 수정하여 새로운 목록을 
// state에 저장하거나 state에서 특정 uuid를 가진 목록을 제거해야 합니다.

/* 기존 리듀서 코드
export const reducer = (state: T.State = initialState, action: T.Actions) => {
    switch (action.type) {
 
        case '@ListidEntities/add':
            return state    // 이 코드를 수정해야 함
        case '@ListidEntities/remove':
            return state    // 이 코드를 수정해야 함
    }
    return state
}
*/

// 먼저 목록을 생성하는 @listEntities/add 액션을 구현해 보겠습니다. 현재 새로운 목록은 다음처럼 action.payload에 담겨 있습니다.
// const list = action.payload
// const {uuid} = list

// 그런데 state는 Record<UUID, List> 타입의 엔티티이므로 다음처럼 state[uuid] = list 형태로 구현할 수 있습니다.
// 하지만 이 구현 방법은 리듀서의 입력 매개변숫값을 수정하는 것이므로 리듀서를 불순 함수로 만듭니다.
// 따라서 순수함수가 되려면 {...state, [uuid]: card} 형태로 구현해야 합니다.

// state[uuid] = list; return state    // 리듀서는 순수함수여야 하므로 잘못된 구현
// return {...state, [uuid]: list}     // 올바른 구현

// 이번에 목록을 제거하는 @listEntities/remove 액션을 구현해 보겠습니다. 
// 현재 제거할 목록의 uuid 값은 다음처럼 action.payload에 담겨 있습니다.
// const {uuid} = action.payload

// 타입스크립트에서 객체의 특정 속성을 삭제할 때는 다음처럼 특정 속성을 대상으로 delete 연산자를 사용합니다.
// 그런데 이 방식은 리듀서를 불순 함수로 만들므로 잘못된 구현입니다.

// delete state[uuid]; return state    // 리듀서는 순수함수여야 하므로 잘못된 구현

// 반면에 다음처럼 전개 연산자를 사용하여 깊은 복사 방식으로 새로운 상태를 만든 뒤 delete 연산자를 적용하면
// 리듀서의 매개변수 state 값을 바꾸지 않으므로 올바른 구현 방법이 됩니다.

// const newState = {...state}
// delete newState[uuid]
// return newState