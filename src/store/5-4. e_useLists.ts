import {useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import type {AppState4} from './5-4. e_Appstate'
import type {List} from './5-4. e_commonTypes'
import * as LO from './5-4. listidOrders'
import * as L from './5-4. listEntities'
import * as C from './5-4. cardEntities'
import * as LC from './5-4. listidCardidOrders'

export const useLists = () => {
    const dispatch = useDispatch()

    const lists = useSelector<AppState4, List[]>(({listidOrders, listEntities}) =>
        listidOrders.map(uuid => listEntities[uuid])
    )
    const listidCardidOrders = useSelector<AppState4, LC.State>(
        ({listidCardidOrders}) => listidCardidOrders
    )

    const listidOrders = useSelector<AppState4, LO.State>(({listidOrders}) => listidOrders) // 추가 2

    const onCreateList = useCallback(
        (uuid: string, title: string) => {
            const list = {uuid, title}
            dispatch(LO.addListIdToOrders(uuid))
            dispatch(L.addList(list))
            dispatch(LC.setListidCardids({listid: list.uuid, cardids: []}))
        },
        [dispatch]
    )

    const onRemoveList = useCallback(
        (listid: string) => () => {
            listidCardidOrders[listid].forEach(cardid => {
                dispatch(C.removeCard(cardid))
            })
            dispatch(LC.removeListid(listid))
            dispatch(L.removeList(listid))
            dispatch(LO.removeListidFromOrders(listid))
        },
        [dispatch, listidCardidOrders]
    )

    const onMoveList = useCallback( // 추가 2
        (dragIndex: number, hoverIndex: number) => {
            const newOrders = listidOrders.map((item, index) => 
                index === dragIndex
                ? listidOrders[hoverIndex]
                : index === hoverIndex
                ? listidOrders[dragIndex]
                : item
            )
            dispatch(LO.SetListOrders(newOrders))
        },
        [dispatch, listidOrders]
    )

    return {lists, onCreateList, onRemoveList, onMoveList} // 추가 2
}

/* 리덕스 기능을 커스텀 훅으로 만들기
그런데 Board 컴포넌트는 현재 리덕스 기능을 그대로 구현하고 있어서 코드가 복잡합니다.
좀 더 간결하게 하고자 src/store 디렉터리에 useLists.ts 파일을 만들겠습니다.
*/

// ---------- GPT 4.0 ---------- //

// Q. onRemoveList에서 괄호 하나 중간에 왜 더 넣어서 구현한건지 이해 못하겠어..
/*
이 코드는 useCallback 훅을 사용하여 onCreateList와 onRemoveList 두 개의 콜백 함수를 생성하고 있습니다. 
    이 함수들은 각각 리스트를 생성하고 제거하는 동작을 수행합니다.

onRemoveList 함수는 다음과 같은 구조를 가지고 있습니다.

const onRemoveList = useCallback(
    (listid: string) => () => {
        // 함수 본문
    },
    [dispatch]
);

이 함수는 고차 함수(higher-order function)입니다. 즉, 함수를 반환하는 함수입니다. 
    여기서 (listid: string) => () => {...}는 먼저 listid를 인자로 받는 함수를 정의하고, 
    이 함수는 다시 함수를 반환합니다. 반환되는 함수가 실제로 리스트를 제거하는 동작을 수행합니다.

이런 구조를 사용하는 이유는 onRemoveList 함수를 이벤트 핸들러로 사용할 때 특정 리스트의 ID를 미리 지정해둘 수 있기 때문입니다. 
    예를 들어, 다음과 같이 사용할 수 있습니다.

<button onClick={onRemoveList(myListId)}>Remove List</button>
위 코드에서 myListId는 제거하려는 리스트의 ID입니다. 
    onClick 이벤트가 발생하면 onRemoveList(myListId)가 호출되어 함수를 반환하고, 
    이 반환된 함수가 실제로 리스트를 제거하는 동작을 수행합니다.

이렇게 고차 함수를 사용하면 각 버튼이 각기 다른 리스트를 제거하도록 설정할 수 있습니다. 
    각 버튼은 고유한 listid를 가지고 있고, 이 listid에 해당하는 리스트를 제거하는 함수를 onClick 핸들러로 가집니다.
*/

// 이제 앞서 제작한 useLists 훅에 cardEntities와 listidCardidOrders 기능을 다음처럼 반영하겠습니다.



// Q. onMoveList 와 이거 진짜 무슨 말인지 하나도 모르겠거든 한줄 한줄 정확하고 명확하고 상세하고 자세하게 설명해줄래?

/* 
네, 이 코드는 React의 useCallback 훅을 사용하여 onMoveList라는 함수를 메모이징(재사용)합니다. 
    이 함수는 드래그 앤 드롭으로 리스트 항목의 순서를 변경할 때 호출됩니다. 코드를 한 줄씩 상세히 설명드리겠습니다.

1. const onMoveList = useCallback((dragIndex: number, hoverIndex: number) => {...}, [dispatch, listidOrders]) : 
    useCallback 훅을 사용하여 onMoveList 함수를 메모이징합니다. 이 훅은 첫 번째 인자로 함수를, 
    두 번째 인자로 의존성 배열을 받습니다. 의존성 배열에 있는 값이 변경되면, 새로운 함수를 생성하고 메모이징합니다.
2. const newOrders = listidOrders.map((item, index) => {...}) : 
    listidOrders 배열을 순회하며 새로운 newOrders 배열을 생성합니다. 
    map 함수는 배열의 각 항목에 대해 주어진 함수를 호출하고, 그 결과로 새 배열을 생성합니다.
3. index === dragIndex ? listidOrders[hoverIndex] : index === hoverIndex ? listidOrders[dragIndex] : 
    item : 이 부분은 삼항 연산자를 사용하여 배열의 새 순서를 결정합니다. 
    현재 항목의 인덱스가 드래그하는 항목의 인덱스와 같다면, 호버하는 항목의 값을 사용합니다. 
    현재 항목의 인덱스가 호버하는 항목의 인덱스와 같다면, 드래그하는 항목의 값을 사용합니다. 
    그 외의 경우에는 현재 항목의 값을 그대로 사용합니다.
4. dispatch(LO.SetListOrders(newOrders)) : dispatch 함수를 사용하여 SetListOrders 액션을 디스패치합니다. 
    이 액션의 페이로드로 newOrders 배열을 전달합니다. dispatch는 Redux의 함수로, 액션을 디스패치하여 상태를 변경하는 역할을 합니다.

    따라서, 이 코드는 드래그 앤 드롭으로 리스트 항목의 순서를 변경할 때, 
    새로운 순서를 생성하고 그 순서를 Redux 스토어에 디스패치하는 역할을 합니다.
*/

/*
물론이죠, 좀 더 자세히 설명드리겠습니다.

이 코드는 배열의 두 요소의 위치를 바꾸는 로직입니다. 
드래그하려는 항목(dragIndex)과 드래그하여 놓은 위치의 항목(hoverIndex)의 위치를 서로 바꿉니다.

코드를 조금 더 자세히 살펴봅시다:

index === dragIndex ? listidOrders[hoverIndex] : ... : 
    이 부분은 현재 순회하고 있는 항목의 인덱스가 드래그하려는 항목의 인덱스와 같은지 확인합니다. 
    만약 같다면, 드래그하려는 항목의 위치에 드래그하여 놓은 위치의 항목(hoverIndex)의 값을 넣습니다.
index === hoverIndex ? listidOrders[dragIndex] : ... : 
    이 부분은 현재 순회하고 있는 항목의 인덱스가 드래그하여 놓은 위치의 항목의 인덱스와 같은지 확인합니다. 
    만약 같다면, 드래그하여 놓은 항목의 위치에 드래그하려는 항목(dragIndex)의 값을 넣습니다.
... : item : 위의 두 경우가 아니라면, 현재 항목의 값을 그대로 유지합니다.
즉, 이 로직은 드래그하려는 항목(dragIndex)과 드래그하여 놓은 위치의 항목(hoverIndex)의 값을 서로 바꾸고, 
그 외의 항목들은 그대로 유지합니다. 이렇게 해서 드래그 앤 드롭으로 항목의 순서를 변경하는 것을 구현하고 있는 것입니다.
*/



// Q. hover(item: DragItem) 하고 const onMoveList 
// 이 부분 연결해서 아주 상세하게 설명해줄 수 있을까? 무슨 흐름인지 파악하기가 힘드네

/*
물론입니다, 두 부분의 코드 흐름을 연결하여 설명드리겠습니다.

hover 함수는 드래그 중인 항목이 다른 항목 위에 위치할 때 호출됩니다. 이 때 hover 함수에 전달되는 item은 드래그 중인 항목을 나타냅니다.
const dragIndex = item.index에서 드래그 중인 항목의 인덱스를 dragIndex에 저장합니다.
const hoverIndex = index에서 현재 호버 중인 항목의 인덱스를 hoverIndex에 저장합니다.
if (dragIndex === hoverIndex) { return }에서 드래그 항목과 호버 항목이 같은 경우 함수를 종료합니다. 
    즉, 드래그 항목이 자신의 위치에 머무를 경우 아무런 작업도 수행하지 않습니다.
위의 경우가 아니라면, onMove(dragIndex, hoverIndex)를 호출하여 드래그 항목의 위치를 변경합니다. 
    이 때 onMove 함수에 드래그 항목의 인덱스와 호버 항목의 인덱스를 전달합니다.
item.index = hoverIndex에서 마지막으로 드래그 항목의 인덱스를 호버 항목의 인덱스로 변경합니다. 
    이렇게 하면 드래그 항목이 새로운 위치로 이동한 것으로 간주됩니다.
이제 onMoveList 함수로 넘어가 보겠습니다.

onMoveList 함수는 드래그 항목의 위치를 변경할 때 호출됩니다. 
    이 함수는 드래그 항목의 인덱스(dragIndex)와 호버 항목의 인덱스(hoverIndex)를 인자로 받습니다.
const newOrders = listidOrders.map((item, index) => {...})에서 listidOrders 배열을 순회하며 새로운 newOrders 배열을 생성합니다.
map 함수 내부에서 드래그 항목과 호버 항목의 위치를 바꿉니다. 
    현재 항목의 인덱스가 드래그 항목의 인덱스와 같으면 호버 항목의 값을, 
    현재 항목의 인덱스가 호버 항목의 인덱스와 같으면 드래그 항목의 값을 사용합니다. 
    그 외의 경우에는 현재 항목의 값을 그대로 사용합니다.
dispatch(LO.SetListOrders(newOrders))에서 SetListOrders 액션을 디스패치하여 
    listidOrders의 값이 새로운 순서(newOrders)로 변경되도록 합니다.
이렇게 hover 함수와 onMoveList 함수가 함께 작동하여 드래그 앤 드롭으로 항목의 순서를 변경하는 기능을 구현하게 됩니다.
*/