import {configureStore} from '@reduxjs/toolkit'
import {useMemo} from 'react'
import {rootReducer} from './6-1. e_rootReducer'
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

export function useStore1() {
    const store = useMemo(() => initializeStore(), [])
    return store
}
