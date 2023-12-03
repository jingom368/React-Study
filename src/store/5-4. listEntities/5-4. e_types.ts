import type {Action} from 'redux'
import type {List} from '../5-4. e_commonTypes'
export * from '../5-4. e_commonTypes'

export type State = Record<string, List>

export type AddListAction = Action<'@listEntities/add'> & {
    payload: List
}

export type RemoveListAction = Action<'@listEntities/remove'> & {
    payload: string
}

export type Actions = AddListAction | RemoveListAction

// listEntities 멤버 상태는 앞서 commonTypes.ts 파일에 선언했던 List 타입 객체들을 엔티티 방식으로 저장하는 역할을 수행합니다.
// List 타입은 string 타입의 uuid 속성과 사용자가 특정 카드 목록의 용도를 쉽게 구분할 수 있도록 
// string 타입의 title 이라는 속성을 가지고 있습니다.

// List의 타입
// export type List = {
//     uuid: UUID
//     title: string
// }