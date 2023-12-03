import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppState4 } from '../store'
import type {Card, UUID} from '../store/5-4. e_commonTypes'
import * as C from '../store/5-4. cardEntities'
import * as LC from '../store/5-4. listidCardidOrders'
import * as D from '../data'

export const useCards = (listid: UUID) => {
    const dispatch = useDispatch()
    const cards = useSelector<AppState4, Card[]>(({cardEntities, listidCardidOrders}) => 
        listidCardidOrders[listid].map(uuid => cardEntities[uuid])
    )

    const onPrependCard = useCallback(() => {
        const card = D.makeRandomCard()
        dispatch(C.addCard(card))
        dispatch(LC.prependCardidToListidAction({listid, cardid: card.uuid}))
    }, [dispatch, listid])

    const onAppendCard = useCallback(() => {
        const card = D.makeRandomCard()
        dispatch(C.addCard(card))
        dispatch(LC.appendCardidToListidAction({listid, cardid: card.uuid}))
    }, [dispatch, listid])

    const onRemoveCard = useCallback(
        (uuid: UUID) => () => {
            dispatch(C.removeCard(uuid))
            dispatch(LC.removeCardidFromListidAction({listid: listid, cardid: uuid}))
        },
        [dispatch, listid]
    )
    return {cards, onPrependCard, onAppendCard, onRemoveCard}
}

/* useCards 커스텀 훅 만들기
앞서 useLists 커스텀 훅 제작으로 Board의 내용이 간결해졌습니다.
이제 useCards 커스텀 훅을 작성하여 카드 관련 코드가 간결해지도록 하겠습니다.
먼저 다음 명령으로 src/store 디렉터리에 useCards.ts 파일을 생성합니다.

그리고 useCards.ts 파일을 다음처럼 구현합니다.
*/