import type {Action} from 'redux'
import type {UUID} from '../5-4. e_commonTypes'
export * from '../5-4. e_commonTypes'

export type State = UUID[]

export type SetListidOrders = Action<'@ListidOrders/set'> & {
    payload: State
}

export type AddListidToOrders = Action<'@ListidOrders/add'> & {
    payload: UUID
}

export type RemoveListidFromOrders = Action<'@ListidOrders/remove'> & {
    payload: UUID
}

export type Actions = SetListidOrders | AddListidToOrders | RemoveListidFromOrders


// listOrders 멤버 상태는 생성한 목록의 uuid값을 배열로 담아 웹 페이지에 어떤 순서로 표시할것인지를 결정하는 역할을 합니다.
// src/store/listidOrders 디렉터리의 types.ts 파일을 열고 다음과 같은 코드를 작성합니다.
// 코드는 목록의 uuid 값을 담은 배열을 상태로 설정하고 있습니다. 
// 또한 목록은 아무 때나 생성할 수 있고, 드래그 앤 드롭으로 순서를 변경할 수 있고, 삭제할 수 있으므로
// 이런 상황에 대응하는 3가지 액션을 정의합니다.