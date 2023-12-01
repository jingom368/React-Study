import {configureStore} from '@reduxjs/toolkit'
import {useMemo} from 'react'
import {rootReducer} from './5-2. e_rootReducer'

// configureStore 관련 코드는 다음처럼 useMemo 훅을 사용한
// useStore란 이름의 커스텀 훅 형태로 메모리 효율을 생각해서 구현합니다.

const initializeStore = () => {
    const store = configureStore({reducer: rootReducer, middleware: []})
    return store
}

export function useStore() {
    const store = useMemo(() => initializeStore(), [])
    return store
}
