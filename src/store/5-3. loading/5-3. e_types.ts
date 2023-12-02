import type {Action} from 'redux'

export type State = boolean

export type SetLoadingAction = Action<'@loading/setLoadingAction'> & {
    payload: State
}

export type Actions = SetLoadingAction

// 로딩 UI 구현하기
// 웹 앱이 데이터를 원격지 섭버에서 가져올 때는 현재 작업이 진행 중이라는 것을 사용자에게 알려 주는 로딩(loading) UI가 필요합니다.
// 그런데 로딩이 필요한 모든 웹 페이지에 반복해서 구현하는 것은 조금 번거롭습니다.

// 이런 번거로운 코드 작성을 줄일 수 있도록 loading이라는 멤버 속성을 구현해 보겠습니다.
// loading 디렉터리의 types.ts 파일을 열고 다음처럼 작성합니다.
// 현재 로딩 중인지만 판별하면 되므로 로딩 상태는 boolean 타입으로 충분합니다.
