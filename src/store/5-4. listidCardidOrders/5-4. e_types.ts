import type {Action} from 'redux'
import * as CT from '../5-4. e_commonTypes'
export * from '../5-4. e_commonTypes'

export type State = Record<CT.UUID, CT.UUID[]>

export type SetListidCardids = Action<'@listidCardids/set'> & {
    payload: CT.ListidCardidS
}

export type RemoveListidAction = Action<'@listidCardids/remove'> & {
    payload: CT.UUID
}

export type PrependCardidToListidAction = Action<'@listidCardids/prependCardid'> & {
    payload: CT.ListidCardid
}

export type AppendCardidToListidAction = Action<'@listidCardids/appendCardid'> & {
    payload: CT.ListidCardid
}

export type RemoveCardidFromListidAction = Action<'@listidCardids/removeCardid'> & {
    payload: CT.ListidCardid
}
export type Actions =
    | SetListidCardids
    | RemoveListidAction
    | PrependCardidToListidAction
    | AppendCardidToListidAction
    | RemoveCardidFromListidAction

// listCardidOrders 멤버 상태 구현하기
/* 
카드는 각각 특정 목록에 소속되어 있으며 드래그 앤 드롭으로 순서를 바꿀 수 있습니다.
따라서 특정 목록이 어떤 카드를 어떤 순서로 가지고 있는지를 나타내는 정보가 필요합니다.
listidCardidOrders 멤버 상태는 Record<리스트_uuid, 카드_uuid[]> 타입의 엔티티를 가집니다.
다음은 src/listidCardidOrders 디렉터리의 types.ts 파일 내용입니다.
*/