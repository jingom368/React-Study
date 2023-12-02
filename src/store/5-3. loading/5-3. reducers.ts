import * as T from './5-3. e_types'

const initialState: T.State = false

export const reducer = (state: T.State = initialState, action: T.Actions) => {
    switch (action.type) {
        case '@loading/setLoadingAction':
            return action.payload
    }
    return state
}

// 다음은 SetLoadingAction 타입 액션에 대한 리듀서를 구현한 모습입니다.
// 여기까지는 사실 거의 기계적으로 구현할 수 있는 형태입니다.
// 리덕스 씽크 미들웨어를 사용하는 액션을 구현해 보겠습니다.
