import type {FC} from 'react'
import type {List} from '../../store/5-4. e_commonTypes'
import type {MoveFunc} from '../../components' // 추가 2

import {useMemo} from 'react' // 추가
import {Div} from '../../components' // 추가
import {CardDroppable} from '../../components' // 추가 3
import {Icon} from '../../theme/daisyui'
import {ListDraggable} from '../../components' // 추가 2
import ListCard from '../5-4. ListCard' // 추가
import {useCards} from '../../store/5-4. e_useCards' // 추가

export type BoardListProps = {
    list: List
    onRemoveList?: () => void
    index: number // 추가 2
    onMoveList: MoveFunc // 추가 2
}
const BoardList: FC<BoardListProps> = ({
    list,
    onRemoveList,
    index, // 추가 2
    onMoveList, // 추가 2
    ...props
}) => {
    const {cards, onPrependCard, onAppendCard, onRemoveCard} = useCards(list.uuid)

    const children = useMemo(
        () =>
            cards.map((card, index) => (
                <ListCard
                    key={card.uuid}
                    card={card}
                    onRemove={onRemoveCard(card.uuid)}
                    draggableId={card.uuid} // 추가 3
                    index={index} // 추가 3
                />
            )),
        [cards, onRemoveCard]
    )

    return (
        <ListDraggable id={list.uuid} index={index} onMove={onMoveList}>
            <Div
                {...props}
                className="p-2 m-2 border bg-gray-300 rounded-lg"
                minWidth="13rem">
                <div className="flex justify-between mb-2">
                    <p className="w-32 text-sm font-bold underline line-clamp-1">
                        {list.title}
                    </p>
                </div>
                <div className="flex justify-between ml-2">
                    <Icon
                        name="remove"
                        className="btn-error btn-xs"
                        onClick={onRemoveList}
                    />
                    <div className="flex">
                        <Icon
                            name="post_add"
                            className="btn-success btn-xs"
                            onClick={onPrependCard}
                        />
                        <Icon
                            name="playlist_add"
                            className="ml-2 btn-success btn-xs"
                            onClick={onAppendCard}
                        />
                    </div>
                </div>
                {/* <div className="flex flex-col p-2">{children}</div> 삭제3 */}
                <CardDroppable droppableId={list.uuid}>{children}</CardDroppable> 추가 3
            </Div>
        </ListDraggable>
    )
}
export default BoardList

/* BoardList 컴포넌트 구현하기
앞에서 목록을 생성하는 기능을 만드르었는데 이번에는 이 목록을 다음 그림처럼 화면에 표시하고
빼기 아이콘을 눌렀을 때 해당 목록을 제거하는 BoardList 컴포넌트를 만들겠습니다.
*/

/*
이제  BoardList 컴포넌트를 Board 컴포넌트에 적용할 차례인데, 그 전에 리스트 엔티티를 배열로 바꾸는 방법을 알아보겠습니다.
listEntities 객체에 담긴 목록을 화면에 보이게 하려면 다음처럼 listEntities의 타입 Record<UUID, List>가 아니라,
List[] 타입 배열로 바꿔줘야 합니다.

import type {AppState} from '../store'
import type {List} from '../store/commonTypes'
import * as L from '../store/listEntities'

const lists = useSelector<AppState, List[]>(({listEntities}) => ???)

그런데 각 목록의 순서는 다음처럼 listidOrders에 담겨 있습니다.

import * as LO from '../store/listidOrders'
const listidOrders = useSeletcor<AppState, LO.State>(({listidOrders}) => listidOrders)

결국 List[] 타입 배열은 다음처럼 listidOrders를 통해 uuid의 순서를 결정한 다음,
각 uuid에 해당하는 목록을 listEntities에서 얻어올 수 있습니다.

const lists = useSelector<AppState, List[]>(({listidOrders, listEntities}) =>
    listidOrders.map(uuid => listEntities[uuid])    
)
*/

// 다음 src/pages/BoardList/index.tsx 파일 내용은 useCards 훅을 호출하여
// 카드 기능 구현에 필요한 cards와 onPrependCard 등의 함수를 얻고 있습니다.
// 여기까지 구현했으면 목록에서 카드를 추가하고 삭제할 수 있습니다.

// 다음은 src/pages/BoardList/index.tsx 파일에 ListDraggable 컴포넌트를 반영한 것으로,
// ListDraggable이 요구하는 index와 onMoveList 함수를 Board로부터 받기 위해 이 2개의 속성을 추가로 설정하고 있습니다.

// 이제 다음처럼 BoardList 컴포넌트에 CardDroppable 컴포넌트를 적용합니다.
