import type {FC} from 'react'
import {useRef} from 'react'
import type { DivProps } from './3-3. Div'
import {useDrag, useDrop} from 'react-dnd'
import type {Identifier} from 'dnd-core'

export type MoveFunc = (dragIndex: number, hoverIndex: number) => void

export type ListDraggableProps = DivProps & {
    id: any
    index: number
    onMove: MoveFunc
}

interface DragItem {
    index: number
    id: string
    type: string
}

export const ListDraggable: FC<ListDraggableProps> = ({
    id,
    index,
    onMove,
    style,
    className,
    ...props
}) => {
    const ref= useRef<HTMLDivElement>(null)
    const [{handlerId}, drop] = useDrop<DragItem, void, {handlerId: Identifier | null}>({
        accept: 'list',
        collect(moniter) {
            return {
                handlerId: moniter.getHandlerId()
            }
        },
        hover(item: DragItem) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index

            if (dragIndex === hoverIndex) {
                return
            }
            onMove(dragIndex, hoverIndex)
            item.index = hoverIndex
        }
    })
    
    const [{isDragging}, drag] = useDrag({
        type: 'list',
        item: () => {
            return {id, index}
        },
        collect: (monitor: any) => ({
            isDragging: monitor.isDragging()
        })
    })

    const opacity = isDragging ? 0 : 1
    drag(drop(ref))
    return (
        <div
            ref={ref}
            {...props}
            className={[className, 'cursor-move'].join(' ')}
            style={{...style, opacity}}
            data-handler-id={handlerId}
        />
    )
}



/* react-dnd의 useDrop 훅 알아보기
이제 react-dnd 패키지의 기능으로 보드에서 목록을 드래그 앤 드롭으로 옮기는 기능을 구현하겠습니다.
react-dnd 패키지는 다음처럼 useDrop 훅을 제공합니다.

useDrop 훅의 기본 사용법은 다음처럼 튜플 타입 반환값에서 두 번째 멤버인 drop 함수를 얻는 것입니다.
참고로 accept는 'card', 'list' 등 드래그 앤 드롭 대상을 구분하는 용도로 사용할 문자열입니다.

useDrop 훅 기본 사용법 
const [, drop] = useDrop(() => ({
    accept: 'card'
}))

그리고 이 drop 함수를 드롭을 원하는 HTML 요소의 ref에 설정해 줍니다.
<div ref={(node) => drop(node)} />

또는 다음처럼 drop 함수를 호출하는 방식으로 구현할 수도 있습니다.

const divRef = useRef<HTMLdivElement>(null)
drop(divRef)
*/

/* react-dnd의 useDrag 훅 알아보기
react-dnd는 다음처럼 useDrag 훅도 제공합니다.

useDrag 훅 임포트
import {useDrag} from 'react-dnd'

useDrag 훅 사용법은 다음과 같은 샘플 코드에서 찾을 수 있습니다. 
그런데 이 절에서 사용하는 드래그 앤 드롭 기능을 구현하려면 useDrop과 useDrag 훅을 함께 사용해야 합니다.

Sortable/Simple의 Card.js 샘플 코드
const [{ isDragging }, drag] = useDrag({
    type: 'card',
    item: () => {
        return {id, index}
    },
    collect: (moniter: any) => ({
        isDragging: monitor.isDragging(),
    }),
})

const opacity = isDragging ? 0 : 1
drag(ref)
return (
    <div ref={ref} style={{ ...style, opacity }} data-handler-id={handlerid}>
        {text}
    </div>
)

// ListDraggable 컴포넌트 구현하기
이제 앞에서 본 Card.js 샘플 코드를 바탕으로 ListDraggable 컴포넌트를 만들겠습니다.
먼저 다음 명령으로 src/components 디렉터리에 ListDraggable.tsx 파일을 생성합니다.
*/


// ---------- GPT 4.0 ---------- //

// Q. 와 이거 진짜 무슨 말인지 하나도 모르겠거든 한줄 한줄 정확하고 명확하고 상세하고 자세하게 설명해줄래?

/*
네, 이 코드는 React와 react-dnd 라이브러리를 이용하여 리스트 항목을 드래그 앤 드롭으로 
    이동할 수 있게 만드는 컴포넌트입니다. 코드를 한 줄씩 자세히 설명드리겠습니다.

1. import type {FC} from 'react' : React에서 Function Component 타입을 가져옵니다.
2. import {useRef} from 'react' : React의 useRef 훅을 가져옵니다. useRef는 변경 가능한 ref 객체를 반환하며, 
    이 객체의 .current 프로퍼티는 초기화 시 전달된 인수로 초기화됩니다.
3. import type { DivProps } from './3-3. Div' : Div 컴포넌트의 프로퍼티 타입을 가져옵니다.
4. import {useDrag, useDrop} from 'react-dnd' : react-dnd 라이브러리에서 useDrag, useDrop 훅을 가져옵니다. 
    이 두 훅은 드래그 앤 드롭 기능을 구현하는 데 사용됩니다.
5. import type {Identifier} from 'dnd-core' : dnd-core에서 Identifier 타입을 가져옵니다.
6. export type MoveFunc = (dragIndex: number, hoverIndex: number) => void : 
    드래그 항목과 호버 항목의 인덱스를 인수로 받는 함수의 타입을 정의합니다. 
    이 함수는 드래그 항목이 드롭되는 위치를 결정하는 데 사용됩니다.

7. export type ListDraggableProps = DivProps & { id: any, index: number, onMove: MoveFunc } : 
    ListDraggable 컴포넌트의 프로퍼티 타입을 정의합니다. DivProps와 함께 id, index, onMove 프로퍼티를 가집니다.
8. interface DragItem { index: number, id: string, type: string } : 드래그 항목의 인터페이스를 정의합니다. 
    각 항목은 index, id, type 프로퍼티를 가집니다.
9. export const ListDraggable: FC<ListDraggableProps> = 
    ({ id, index, onMove, style, className, ...props }) => {...} : ListDraggable 컴포넌트를 정의합니다. 
    이 컴포넌트는 id, index, onMove, style, className, 그리고 나머지 props를 프로퍼티로 받습니다.

10. const ref= useRef<HTMLDivElement>(null) : ref 객체를 생성합니다. 
    이 ref는 드래그 가능한 항목의 DOM 노드를 참조하기 위해 사용됩니다.
11. const [{handlerId}, drop] = useDrop<DragItem, void, {handlerId: Identifier | null}>({...}) : 
    useDrop 훅을 사용하여 드롭 대상을 정의합니다. 이 훅은 드롭 대상의 상태와 드롭 함수를 반환합니다.

12. accept: 'list' : 이 컴포넌트가 'list' 타입의 드래그 항목만 받아들일 수 있음을 나타냅니다.
13. collect(moniter) { return { handlerId: moniter.getHandlerId() } } : 
    collect 함수는 컴포넌트의 props에 주입할 수 있는 속성을 반환합니다. 여기서는 핸들러 ID만 반환합니다.

14. hover(item: DragItem) {...} : hover 함수는 드래그 항목이 드롭 대상 위에 있을 때 호출됩니다.
    드래그 항목과 호버 항목의 인덱스를 비교하여 두 인덱스가 같지 않을 경우 onMove 함수를 호출하여 드래그 항목의 위치를 변경합니다.

15. const [{isDragging}, drag] = useDrag({...}) : useDrag 훅을 사용하여 드래그 소스를 정의합니다. 
    이 훅은 드래그 중인지 여부와 드래그 함수를 반환합니다.
16. type: 'list' : 이 컴포넌트의 드래그 항목 타입이 'list'임을 나타냅니다.
17. item: () => { return {id, index} } : 드래그 항목 객체를 반환하는 함수입니다. 
    이 객체는 드래그 항목의 ID와 인덱스를 포함합니다.
18. collect: (monitor: any) => ({ isDragging: monitor.isDragging() }) : 
    collect 함수는 컴포넌트의 props에 주입할 수 있는 속성을 반환합니다. 여기서는 드래그 중인지 여부만 반환합니다.
19. const opacity = isDragging ? 0 : 1 : 드래그 중일 경우 투명도를 0으로, 그렇지 않을 경우 1로 설정합니다.
20. drag(drop(ref)) : drag 함수와 drop 함수를 이용하여 ref를 드래그 가능하고 드롭 가능하게 만듭니다.
21. <div ref={ref} {...props} className={[className, 'cursor-move'].join(' ')} 
    style={{...style, opacity}} data-handler-id={handlerId} /> : 이 컴포넌트의 렌더링 부분입니다. 
    드래그 가능한 div 요소를 반환합니다. 이 요소는 ref, props, className, style, 그리고 핸들러 ID를 속성으로 가집니다.

    이렇게 이 컴포넌트는 드래그 앤 드롭을 이용하여 리스트 항목의 순서를 변경하는 기능을 제공합니다.
*/


// Q. 14. 14. hover(item: DragItem) {...} : hover 함수는 드래그 항목이 드롭 대상 위에 있을 때 호출됩니다.
//    드래그 항목과 호버 항목의 인덱스를 비교하여 두 인덱스가 같지 않을 경우 onMove 함수를 호출하여 드래그 항목의 위치를 변경합니다.
// 여기 부분이 이해가 잘 안가..

/*
좋습니다, 좀 더 상세히 설명해드리겠습니다.

hover(item: DragItem) {...} 함수는 드래그 중인 항목이 호버 중인 항목 위에 있을 때 호출되는 콜백 함수입니다. 
이 함수는 드래그 항목의 정보를 인자로 받습니다.

if (!ref.current) { return } : 이 부분은 ref.current가 유효한 값인지 확인합니다. 
    ref.current는 드래그 가능한 HTML 요소를 참조하고 있습니다.

const dragIndex = item.index : 드래그하는 항목의 인덱스를 dragIndex에 저장합니다.
const hoverIndex = index : 현재 호버 중인 항목의 인덱스를 hoverIndex에 저장합니다.

if (dragIndex === hoverIndex) { return } : 드래그하는 항목과 호버하는 항목이 같은 항목이라면 함수를 종료합니다. 
    즉, 자기 자신 위에 드래그하고 있을 경우는 아무런 동작도 하지 않습니다.

onMove(dragIndex, hoverIndex) : 드래그하는 항목과 호버하는 항목이 다른 경우, 
    onMove 함수를 호출하여 드래그하는 항목의 위치를 변경합니다. 
    onMove 함수는 드래그 항목의 인덱스와 호버 항목의 인덱스를 인자로 받아, 
    두 항목의 위치를 바꾸는 역할을 합니다.

item.index = hoverIndex : 마지막으로 드래그 항목의 인덱스를 호버 항목의 인덱스로 변경합니다. 
    이렇게 하면 드래그 항목이 새로운 위치로 이동한 것으로 간주됩니다.

이렇게 hover 함수는 드래그 중인 항목이 다른 항목 위에 있을 때 그 항목의 위치를 변경하는 역할을 합니다.
*/


// Q. const hoverIndex = index : 현재 호버 중인 항목의 인덱스를 hoverIndex에 저장합니다.
// 왜 이게 index가 호버 중인 항목의 index야?


/*
hover 함수가 호출되는 시점은 드래그 중인 항목(DragItem)이 다른 항목 위에 위치할 때입니다. 
    이 때 hover 함수에 전달되는 item은 드래그 중인 항목을 나타냅니다.

hover 함수가 호출되는 컴포넌트는 useDrop 훅을 사용하여 드롭 대상으로 설정된 컴포넌트입니다. 
    이 컴포넌트의 index 프로퍼티는 드래그 중인 항목이 현재 호버하고 있는 대상 항목의 위치를 나타내는 인덱스입니다.

따라서 const hoverIndex = index 구문에서 index는 드래그 중인 항목이 호버하고 있는 대상 항목의 인덱스를 나타냅니다. 
    이 값을 hoverIndex에 저장함으로써 이후 로직에서 활용하게 됩니다.
*/

// Q. item.index = hoverIndex : 마지막으로 드래그 항목의 인덱스를 호버 항목의 인덱스로 변경합니다.
// 이렇게 하면 드래그 항목이 새로운 위치로 이동한 것으로 간주됩니다.

// 이거 드래그 항목의 인덱스를 호버 항목의 인덱스로 변경하는데
// 그럼 호버 항목의 인덱스는 안바뀌는거야?

/*
네, 맞습니다. hover 함수 내에서는 드래그 항목의 인덱스만 변경하고 있으며, 호버 항목의 인덱스는 변경되지 않습니다.

item.index = hoverIndex 구문은 드래그 항목이 호버 항목 위치로 이동했다는 것을 표현하기 위한 것입니다. 
    이렇게 드래그 항목의 인덱스를 변경하면, 드래그 항목은 이후 로직에서 호버 항목 위치로 간주되게 됩니다.

그러나 실제로 드래그 항목과 호버 항목의 위치를 바꾸는 로직은 onMove 함수 내부에서 수행됩니다. 
    이 함수에서 드래그 항목과 호버 항목의 인덱스를 인자로 받아, 두 항목의 위치를 실제로 바꾸는 작업을 수행하게 됩니다.

따라서 hover 함수에서는 드래그 항목이 호버 항목 위치로 이동하였다는 것을 표시하기 위해 드래그 항목의 인덱스만 변경하고, 
    실제로 두 항목의 위치를 바꾸는 것은 onMove 함수에서 수행하게 됩니다.
*/



// 그럼 호버 항목의 인덱스는 안바뀌는거야?
// 이거 예로 들면 어떻게 인덱스가 바뀌는거야 0 1 2 3 숫자를 예로 들어서 설명해줘


/*
네, 좋습니다. 숫자를 사용해서 예를 들어 설명해드리겠습니다.
가령, 우리가 다루고 있는 리스트가 [0, 1, 2, 3] 이라고 가정해 보겠습니다.
이제 1번 인덱스의 항목을 드래그해서 3번 인덱스로 이동시키려고 합니다.

1. 드래그 시작: dragIndex는 1이 됩니다. (드래그하는 항목)
2. 드래그 이동: hoverIndex는 3이 됩니다. (드래그하여 놓은 위치의 항목)
3. onMove(dragIndex, hoverIndex)를 호출합니다. 이 때 dragIndex는 1, hoverIndex는 3입니다.
4. newOrders 배열을 생성하는 과정에서, 인덱스 1 (드래그 항목)은 인덱스 3의 값으로, 
    인덱스 3 (호버 항목)은 인덱스 1의 값으로 변경합니다. 그 외의 항목은 값이 그대로 유지됩니다. 
    따라서 newOrders는 [0, 3, 2, 1]이 됩니다.
5. item.index = hoverIndex 구문에서 드래그 항목의 인덱스를 호버 항목의 인덱스로 변경합니다. 
    이렇게 하면 드래그 항목이 새로운 위치로 이동한 것으로 간주됩니다. 이 때 item.index는 3이 됩니다.
6. dispatch(LO.SetListOrders(newOrders))에서 SetListOrders 액션을 디스패치하여 
    listidOrders의 값이 새로운 순서(newOrders)로 변경되도록 합니다.

따라서 최종적으로 리스트는 [0, 3, 2, 1] 순서로 변경되며, 드래그 항목의 인덱스는 3으로 변경됩니다. 
    호버 항목의 인덱스는 함수 내에서 직접 변경하지 않습니다.
이렇게 드래그 항목의 인덱스를 변경하는 것은 드래그 항목이 새로운 위치로 이동했다는 것을 나타내는 것이며, 
    실제로 항목의 위치를 변경하는 것은 onMove 함수에서 수행합니다.
*/

// Q. 이 때 변경된 item.index는 3은 무슨 의미가 있는 거야?

/*
item.index = hoverIndex에서 item.index를 변경하는 것은 드래그 중인 항목(item)이 
    새로운 위치(hoverIndex)로 이동했다는 것을 표시하기 위함입니다.

    즉, item.index = 3은 원래 드래그하던 항목이 이제 3번 인덱스에 위치하게 되었다는 것을 의미합니다.

이렇게 item.index를 hoverIndex로 변경함으로써, 드래그 앤 드롭 작업이 계속 진행되는 동안 
    드래그 중인 항목이 현재 어느 위치에 있는지를 정확히 추적할 수 있게 됩니다.

예를 들어, 사용자가 드래그 항목을 계속 움직여 다른 위치 위로 드래그할 경우, 
    hover 함수는 그 위치의 index에 따라 계속해서 호출되고 이때마다 item.index는 새로운 hoverIndex로 업데이트됩니다.

따라서 item.index는 드래그 항목이 현재 어느 위치에 있는지를 가리키는 역할을 합니다.
*/