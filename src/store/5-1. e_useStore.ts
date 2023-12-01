import {configureStore} from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { rootReducer } from './5-1. rootReducer'

// configureStore 관련 코드는 다음처럼 useMemo 훅을 사용한
// useStore란 이름의 커스텀 훅 형태로 메모리 효율을 생각해서 구현합니다.

const initializeStore = () => {
    const store = configureStore({reducer: rootReducer, middleware: []})
    return store
}

export function useStore_b() {
    const store = useMemo(() => initializeStore(), [])
    return store
}

// 주어진 코드는 Redux 상태 관리 라이브러리를 사용하는 애플리케이션에서 
// 스토어를 초기화하는 함수와 이를 사용하는 훅(useStore)을 정의하고 있습니다.

// initializeStore 함수는 configureStore 함수를 호출하여 스토어를 초기화합니다. 
// configureStore 함수는 Redux Toolkit에서 제공하는 함수로, 
// 애플리케이션의 상태를 관리하기 위한 스토어를 생성하는 역할을 합니다. 이 함수는 reducer와 middleware를 인자로 받습니다.

// 여기서는 reducer와 middleware를 빈 배열([])로 설정하여 사용하고 있습니다. 
// reducer는 Redux에서 상태를 변경하는 로직을 포함하는 함수이며, middleware는 액션과 리듀서 사이에서 동작하는 중간 소프트웨어입니다.

// initializeStore 함수는 초기화된 스토어를 반환합니다.

// useStore 함수는 useMemo 훅을 사용하여 초기화된 스토어를 저장하고, 이를 반환하는 역할을 합니다. 
// useMemo는 특정 값이 변경되지 않는 한 이전에 계산된 값을 재사용하는 훅입니다. 
// 따라서 useStore 함수는 애플리케이션에서 스토어를 사용할 수 있도록 하는 역할을 합니다.

// 이 코드의 역할은 Redux를 사용하여 상태를 관리하는 애플리케이션에서 스토어를 초기화하고 사용할 수 있도록 하는 것입니다.