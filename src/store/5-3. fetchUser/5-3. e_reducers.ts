import * as T from './5-3. e_types'

const initialState: T.State = {
    email: '',
    name: {title: '', first: '', last: ''},
    picture: {large: ''}
}

export const reducer = (state: T.State = initialState, action: T.Actions) => {
    switch (action.type) {
        case '@remoteUser/setUser':
            return action.payload
        case '@remoteUser/changeEmail':
            return {...state, email: action.payload}
        case '@remoteUser/changeName':
            return {...state, name: action.payload}
        case '@remoteUser/changePicture':
            return {...state, picture: action.payload}
    }
    return state // 필수
}

// 그리고 src/store/remoteUser 디렉터리의 reducers.ts 파일을 열고 다음처럼 코드를 작성합니다.
// 이 코드에서 주의 깊게 봐야 할 점은 초기 상탯값을 undefined나 null로 설정하면 안 된다는 것입니다.
// 이 때문에 initialState의 각 멤버 속성값을 빈 문자열로 설정하고 있습니다.

// 또한 자신의 액션만 처리하기는 하지만 return state 문을 구현하고 있습니다.
// VSCode 편집기는 이 코드가 불필요하다는 의미로 회색으로 표시하지만,
// 리듀서는 순수 함수여야 하므로 자신의 것이 아닌 액션이 유입될 때도 항상 자신의 현재 상태를 반환해 줘야 하기 때문입니다.

// ---------- GPT 4.0 ---------- //

// 네, 이 코드는 Redux에서 리듀서 함수를 정의하는 부분입니다.
// reducer라는 이름의 함수를 정의하고 있으며, 이 함수는 Redux 상태를 업데이트하는 로직을 담고 있습니다.

// const initialState: T.State = { email: '', name: {title: '', first: '', last: ''}, picture: {large: ''} }:
// 초기 상태를 정의합니다. 초기 상태는 T.State 타입이며, 사용자의 이메일, 이름, 프로필 사진 정보를
// 빈 문자열 또는 빈 객체로 초기화하고 있습니다.

// export const reducer = (state: T.State = initialState, action: T.Actions) => { ... }:
// 리듀서 함수를 정의합니다. 이 함수는 현재 상태(state)와 처리할 액션(action)을 인자로 받습니다.
//state의 기본값은 initialState로 설정되어 있습니다.

// switch (action.type) { ... }:
// 액션의 type에 따라 다른 로직을 수행합니다. @remoteUser/setUser, @remoteUser/changeEmail,
// @remoteuser/changeName, @remoteUser/changePicture 네 가지 액션에 대해 각각 다른 처리를 하고 있습니다.

// return action.payload, return {...state, email: action.payload}, 등:
// 각 액션에 대한 처리 결과를 새로운 상태로 반환합니다. 이를 통해 상태가 업데이트됩니다.

// return state:
// 어떤 액션에도 해당하지 않는 경우, 현재 상태를 그대로 반환합니다. 이를 통해 상태가 변경되지 않습니다.

// 이 리듀서 함수는 액션을 디스패치하면 호출되며, 액션의 종류와 payload에 따라 상태를 적절히 업데이트합니다.
// 이 업데이트된 상태는 Redux 스토어에 저장되며, 이 스토어의 상태는 애플리케이션에서 사용자 정보를 나타내는 데 사용됩니다.
