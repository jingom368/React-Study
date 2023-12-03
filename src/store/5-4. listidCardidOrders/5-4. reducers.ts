import * as T from './5-4. e_types'

const initialState: T.State = {}

export const reducer = (state: T.State = initialState, action: T.Actions) => {
    switch (action.type) {
        case '@listidCardids/set':
            return {...state, [action.payload.listid]: action.payload.cardids}
        case '@listidCardids/remove': {
            const newState = {...state}
            delete newState[action.payload]
            return newState
        }
        case '@listidCardids/prependCardid': {
            const cardids = state[action.payload.listid]
            return {...state, [action.payload.listid]: [action.payload.cardid, ...cardids]}
        }
        case '@listidCardids/appendCardid': {
            const cardids = state[action.payload.listid]
            return {...state, [action.payload.listid]: [...cardids, action.payload.cardid]}
        }
        case '@listidCardids/removeCardid': {
            const cardids = state[action.payload.listid]
            return {
                ...state,
                [action.payload.listid]: cardids.filter(id => id !== action.payload.cardid)
            }
        }
    }
    return state
}

/* 
이제 왜 이런 액션들이 필요한지 리듀서를 구현하면서 알아보겠습니다.
먼저 @listidCardids/set 액션은 목록에 추가할 카드 uuid의 순서를 목록 uuid에 한꺼번에 설정하려고 할 때 사용합니다.

- 카드 uuid 배열을 일괄 설정하기
state[목록_uuid] = [카드_uuid]

@listidCardids/remove 액션은 lists에서 특정 목록이 삭제되면 listidCardids 쪽에서도 이에 맞추어
state[삭제된_리스트_uuid] 부분을 삭제해 메모리가 낭비되지 않게 합니다.

그리고 @listCardids/prependCardid 액션은 다음 코드 형태로 특정 목록이 이미 가지고 있는 
카드 uuid들 앞에 새로운 카드 uuid를 삽입하는 용도입니다.

const cardIds = state[리스트_uuid]    // 기존 카드_uuid들
return {...state, [리스트_uuid]: [새_카드_uuid, ...cardIds]}

@listCardids/appendCardid 액션은 다음 코드 형태로 특정 목록이 이미 가지고 있는 
카드 uuid들 맨 뒤에 새로운 카드 uuid를 삽입하는 용도입니다.

const cardIds = state[리스트_uuid]    // 기존 카드_uuid들
return {...state, [리스트_uuid]: [...cardIds, 새_카드_uuid]}

@listCardids/removeCardid 액션은 cards쪽에서 특정 카드가 삭제될 때 이에 맞추어 카드가 속해 잇는 목록의 
카드 순서를 기억하는 배열에서도 삭제된 카드의 uuid를 지우는 용도입니다.

const cardIds = state[리스트_uuid]    // 기존 카드_uuid들
return {
    ...state,    // listidCardids 상태 보존
    [action.payload.listid] : cardIds.fileter(id => id !== 제거할_카드_uuid)
}
*/


// ---------- GPT 4.0 ---------- //

// Q. 이게 왜 이런 역할을 하는건데 코드랑 같이 자세히 설명해 주면 안될까?

/*
'@listidCardids/set': 이 액션은 특정 리스트에 카드들을 설정합니다. 즉, 특정 리스트에 어떤 카드들이 있는지 상태를 설정하는 역할을 합니다. 
    액션의 payload에는 리스트의 ID(listid)와 카드의 ID들(cardids)이 들어있습니다.
'@listidCardids/set': 이 액션은 return {...state, [action.payload.listid]: action.payload.cardids} 코드를 통해 작동합니다. 
    여기서 ...state은 현재 상태를 복사하고, [action.payload.listid]은 액션의 payload에서 listid를 키로 사용하며, 
    action.payload.cardids는 해당 키에 연결된 카드 ID 배열을 값으로 설정합니다. 
    즉, 특정 리스트(listid)에 카드들(cardids)을 설정(set)하는 역할을 합니다.

'@listidCardids/remove': 이 액션은 특정 리스트를 제거하는 역할을 합니다. 액션의 payload에는 제거할 리스트의 ID가 들어있습니다.
'@listidCardids/remove': 이 액션은 delete newState[action.payload] 코드를 통해 작동합니다. 
    newState은 현재 상태의 복사본이며, action.payload는 제거할 리스트의 ID입니다. 
    이 코드는 newState에서 해당 리스트 ID를 키로 가지는 항목을 제거합니다.

'@listidCardids/prependCardid': 이 액션은 특정 리스트의 가장 앞에 새로운 카드를 추가하는 역할을 합니다. 
    액션의 payload에는 카드를 추가할 리스트의 ID와 추가할 카드의 ID가 들어있습니다.
'@listidCardids/prependCardid': 이 액션은 
    return {...state, [action.payload.listid]: 
        [action.payload.cardid, ...cardids]} 코드를 통해 작동합니다. 
    여기서 ...state은 현재 상태를 복사하고, [action.payload.listid]는 액션의 payload에서 listid를 키로 사용합니다. 
    [action.payload.cardid, ...cardids]는 해당 리스트의 카드 ID 배열 앞에 새 카드 ID를 추가합니다.
    즉, 특정 리스트(listid)의 가장 앞에 카드(cardid)를 추가하는 역할을 합니다.

'@listidCardids/appendCardid': 이 액션은 특정 리스트의 가장 뒤에 새로운 카드를 추가하는 역할을 합니다. 
    액션의 payload에는 카드를 추가할 리스트의 ID와 추가할 카드의 ID가 들어있습니다.
'@listidCardids/prependCardid': 이 액션은 
    return {...state, [action.payload.listid]: 
        [action.payload.cardid, ...cardids]} 코드를 통해 작동합니다. 
    여기서 ...state은 현재 상태를 복사하고, [action.payload.listid]는 액션의 payload에서 listid를 키로 사용합니다. 
    [action.payload.cardid, ...cardids]는 해당 리스트의 카드 ID 배열 앞에 새 카드 ID를 추가합니다. 
    즉, 특정 리스트(listid)의 가장 앞에 카드(cardid)를 추가하는 역할을 합니다.

'@listidCardids/removeCardid': 이 액션은 특정 리스트에서 특정 카드를 제거하는 역할을 합니다. 
    액션의 payload에는 카드를 제거할 리스트의 ID와 제거할 카드의 ID가 들어있습니다
'@listidCardids/removeCardid': 이 액션은 
    return {...state, [action.payload.listid]: 
        cardids.filter(id => id !== action.payload.cardid)} 코드를 통해 작동합니다. 
    여기서 ...state은 현재 상태를 복사하고, [action.payload.listid]는 액션의 payload에서 listid를 키로 사용합니다. 
    cardids.filter(id => id !== action.payload.cardid)는 해당 리스트의 카드 ID 배열에서 특정 카드 ID를 제거합니다. 
    즉, 특정 리스트(listid)에서 특정 카드(cardid)를 제거하는 역할을 합니다.

이렇게 각 액션은 Redux 상태를 업데이트하는 특정 작업을 수행하도록 설계되어 있습니다. 
    액션 타입에 따라 reducer가 이 작업을 수행하므로, 액션 타입과 관련 코드를 이해하는 것이 중요합니다.
*/