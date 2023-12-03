import type {Action} from 'redux'
import type {Card, UUID} from '../5-4. e_commonTypes'
export * from '../5-4. e_commonTypes'

export type State = Record<UUID, Card>

export type AddCardAction = Action<'@cardEntities/add'> & {
    payload: Card
}

export type RemoveCardAction = Action<'@cardEntities/remove'> & {
    payload: UUID
}

export type Actions = AddCardAction | RemoveCardAction

// 다음 src/store/cardEntities 디렉터리의 types.ts 파일은 엔티티 타입의 State를 선언하고 2개의 액션 타입을 선언하고 있습니다.
// 사실 이 내용은 List 타입 대신 Card 타입을 사용했을 뿐 앞서 구현한 listEntities의 내용과 같습니다.