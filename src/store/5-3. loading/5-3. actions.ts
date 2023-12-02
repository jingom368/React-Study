import type * as T from './5-3. e_types'

export const setLoading = (payload: T.State): T.SetLoadingAction => ({
    type: '@loading/setLoadingAction',
    payload
})

// 다음은 SetLoadingAction 타입 액션을 생성하는 setLoading 액션 생성기를 구현한 모습입니다.
