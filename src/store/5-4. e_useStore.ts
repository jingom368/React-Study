import {configureStore} from '@reduxjs/toolkit'
import {useMemo} from 'react'
import {rootReducer} from './5-4. e_rootReducer'
// import logger from './5-3. e_logger'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// configureStore 관련 코드는 다음처럼 useMemo 훅을 사용한
// useStore란 이름의 커스텀 훅 형태로 메모리 효율을 생각해서 구현합니다.

const useLogger = process.env.NODE_ENV !== 'production'

const initializeStore = () => {
    const middleware: any[] = [thunk]
    if (useLogger) {
        middleware.push(logger)
    }

    const store = configureStore({reducer: rootReducer, middleware})
    return store
}

export function useStore4() {
    const store = useMemo(() => initializeStore(), [])
    return store
}

// 이제 이렇게 만든 로거 미들웨어를 리덕스 저장소에 적용하는 방법을 알아보겠습니다.
// 05-1 절에서는 src/store 디렉터리의 useStore.ts 파일에 configureStore() 함수를 호출하는 코드를 다음처럼 작성했는데,
// configureStore() 함수의 매개변수는 middleware란 이름의 선택 속성을 가지고 있습니다.

// const initializeStore = () => {
//     const store = configureStore({reducer: rootReducer, middleware: []})
//     return store
// }

// 따라서 빈 배열 []을 설정한 middleware 속성에 다음처럼 logger 미들웨어를 추가하면 될 것 같습니다.
// 그런데 이 코드는 logger 미들웨어가 개발할 때만 필요하다는 것을 간과하고 있습니다.
// 만약 이런 형태로 구현한 소스를 실제로 서비스한다면 해킹 위험뿐만 아니라 성능이 떨어지는 문제도 생깁니다.

// 따라서 개발 모드일 때에만 기록하도록 해야 하는데 Node.js 환경에서 개발 모드인지는
// process.env.Node_ENV 속성이 'production'으로 설정되었는지로 판단합니다.
// 이처럼 개발 모드일 때에만 기록하도록 하면 잠재적인 해킹이나 성능 문제를 해결할 수 있습니다.

// ---------- GPT 4.0 ---------- //

/*
이 코드는 Redux store를 초기화하고, 필요에 따라 로거 미들웨어를 추가하는 과정을 구현하고 있습니다. 
이를 useStore라는 커스텀 훅으로 만들어, 메모리 효율을 고려한 구현을 하고 있습니다.

import {configureStore} from '@reduxjs/toolkit'...: 필요한 모듈과 함수를 임포트합니다. 
configureStore는 Redux Toolkit의 함수로, store를 생성합니다.

const useLogger = process.env.NODE_ENV !== 'production': useLogger라는 상수를 설정합니다. 
이는 현재 환경이 'production'이 아닐 경우에만 로거 미들웨어를 사용하도록 결정합니다.

const initializeStore = () => {...}: initializeStore라는 함수를 정의합니다. 이 함수는 Redux store를 초기화하는 역할을 합니다.
const middleware: any[] = []: 미들웨어를 담을 빈 배열을 생성합니다.
if (useLogger) { middleware.push(logger) }: useLogger가 true일 경우, 로거 미들웨어를 배열에 추가합니다.
const store = configureStore({reducer: rootReducer, middleware}): configureStore를 사용하여 store를 생성합니다. 
이 때, 리듀서로 rootReducer를 사용하고, 미들웨어로 위에서 구성한 middleware를 사용합니다.
return store: 생성된 store를 반환합니다.

export function useStore() {...}: useStore라는 커스텀 훅을 정의하고 내보냅니다. 
이 훅은 useMemo를 사용하여 store의 재생성을 최소화하며, 메모리 사용 효율을 높입니다.

const store = useMemo(() => initializeStore(), []): useMemo를 사용하여 initializeStore 함수의 결과를 메모이제이션합니다. 
빈 배열을 의존성 배열로 전달하므로, store는 컴포넌트가 처음 렌더링될 때 한 번만 생성되고, 이후에는 재생성되지 않습니다.

return store: 생성된 store를 반환합니다.

즉, 이 코드는 Redux store를 초기화하고, 필요에 따라 로거 미들웨어를 추가하는 작업을 수행하며, 
이를 useStore라는 커스텀 훅으로 제공합니다.
*/


// 먼저 useStore.ts 파일의 middlewares 배열에 thunk를 삽입해 줍니다.
// 이로써 썽크 미들웨어는 로거 미들웨어와 함께 동작합니다.