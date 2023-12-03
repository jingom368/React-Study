// import {useCallback, useMemo} from 'react'
// import {useSelector, useDispatch} from 'react-redux'
import { useMemo, useRef } from 'react' // 추가 2
import { useDrop } from 'react-dnd' // 추가2
import {Title} from '../../components'
import CreateListForm from './5-4. e_CreateListForm'
import BoardList from '../5-4. BoardList'

// import type {AppState4} from '../../store'
// import type {List} from '../../store/5-4. e_commonTypes'
// import * as LO from '../../store/5-4. listidOrders' // 추가
// import * as L from '../../store/5-4. listEntities' // 추가

import {useLists} from '../../store/5-4. e_useLists'

export default function Board() {
    /*
    const dispatch = useDispatch()

    const lists = useSelector<AppState4, List[]>(({listidOrders, listEntities}) =>
        listidOrders.map(uuid => listEntities[uuid])
    )

    const onCreateList = useCallback(
        (uuid: string, title: string) => {
            // console.log('onCreateList', uuid, title)
            const list = {uuid, title}
            dispatch(LO.addListIdToOrders(list.uuid))
            dispatch(L.addList(list))
        },
        [dispatch]
    )

    const onRemoveList = useCallback(
        (listid: string) => () => {
            dispatch(L.removeList(listid))
            dispatch(LO.removeListidFromOrders(listid))
        },
        [dispatch]
    )
    */
   
    const divRef = useRef<HTMLDivElement>(null) // 추가 2
    const [, drop] = useDrop({
        accept: 'list'
    })
    drop(divRef)

    const {lists, onRemoveList, onCreateList, onMoveList} = useLists() // 추가 2

    const children = useMemo(
        () =>
            lists.map((list,index) => ( // 추가 2
                <BoardList
                    key={list.uuid}
                    list={list}
                    onRemoveList={onRemoveList(list.uuid)}
                    index={index} // 추가 2
                    onMoveList={onMoveList} // 추가 2
                />
            )),
        [lists, onRemoveList, onMoveList] // 추가 2
    )

    return (
        <section className="mt-4">
            <Title>Board</Title>
            <div className="flex flex-wrep p-2 mt-4">
                {children}
                <CreateListForm onCreateList={onCreateList} />
            </div>
        </section>
    )
}

// 실행결과는 보드에서 더하기 아이콘을 2번 눌러 2개의 목록을 생성했을 때 리덕스 로거가 콘솔 창에 출력한 내용입니다.
// listEntities와 listidOrders에 각각 2개의 목록 관련 내용이 담겨 있음을 확인할 수 있습니다.

// 다음은 src/pages/Board/index.tsx 파일에 BoardList 컴포넌트를 반영한 모습입니다.
// 여기까지 작성하면 이제 더하기 아이콘으로 새로운 목록을 만들고, 빼기 아이콘으로 목록을 삭제할 수 있습니다.

// 이제 src/pages/Board/index.tsx 파일은 useLists 훅 덕분에 코드가 다음처럼 간결해집니다.
