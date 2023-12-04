import type {FC, PropsWithChildren} from 'react'
import { Droppable } from 'react-beautiful-dnd'

export type CardDroppableProps = {
    droppableId: string
}

export const CardDroppable: FC<PropsWithChildren<CardDroppableProps>> = ({
    droppableId,
    children
}) => {
    return (
        <Droppable droppableId={droppableId}>
            {provided => (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className='flex flex-col p-2'>
                {children}
                {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}

// 이번에 react-beautiful-dnd 패키지의 Droppable 컴포넌트를 이용하여 CardDroppable 컴포넌트를 만들어 보겠습니다.
// react-beautiful-dnd 패키지는 다음 Droppable 컴포넌트를 제공합니다.

// 그런데 이 컴포넌트 또한 사용법이 독특하므로 다음처럼 src/components 디렉터리에
// CardDroppable.tsx 파일을 만들고 여기에 새로 구현하겠습니다.

// 이 파일을 열고 다음과 같은 코드를 작성합니다. 
// 여기서 droppableId는 목록의 uuid를 설정하는 속성입니다.


// ---------- GPT 4.0 ---------- //

// Q. 아주 자세하고 세세하게 설명해줄래?

/*
이 코드는 react-beautiful-dnd 라이브러리를 사용하여 드롭 가능한 영역을 만드는 컴포넌트인 CardDroppable를 생성합니다.

1. import type {FC, PropsWithChildren} from 'react' : React에서 제공하는 FC (Function Component)와 PropsWithChildren 타입을 가져옵니다. 
    PropsWithChildren는 자식 컴포넌트를 포함하는 props를 나타내는 타입입니다.
2. import {Droppable} from 'react-beautiful-dnd' : react-beautiful-dnd 라이브러리에서 Droppable 컴포넌트를 가져옵니다. 
    Droppable 컴포넌트는 드래그된 항목을 놓을 수 있는 영역을 생성합니다.
3. export type CardDroppableProps = {...} : CardDroppable 컴포넌트가 사용하는 props의 타입을 정의합니다. 
    droppableId는 드롭 가능한 영역을 식별하는 데 사용됩니다.
4. export const CardDroppable: FC<PropsWithChildren<CardDroppableProps>> = ({...}) => {...} : 
    CardDroppable라는 함수형 컴포넌트를 정의합니다. 이 컴포넌트는 PropsWithChildren<CardDroppableProps> 타입의 props를 받습니다.

5. <Droppable droppableId={droppableId}> {...} </Droppable> : 
    Droppable 컴포넌트를 사용하여 드롭 가능한 영역을 만듭니다. droppableId prop를 Droppable 컴포넌트에 전달합니다.
6. {provided => {...}} : Droppable 컴포넌트는 자식으로 함수를 받습니다. 이 함수는 provided라는 객체를 매개변수로 받습니다. 
    provided 객체는 react-beautiful-dnd 라이브러리가 제공하는 여러 가지 props와 함수를 포함하고 있습니다.
7. <div {...provided.droppableProps} ref={provided.innerRef} className='flex flex-col p-2'> {...} 
    {provided.placeholder} </div> : provided.droppableProps를 이용하여 드롭 가능한 영역에 필요한 여러 가지 props를 적용하고, 
    provided.innerRef를 이용하여 react-beautiful-dnd가 이 div 요소를 제어할 수 있게 합니다. 
    provided.placeholder는 드래그 중인 항목이 드롭될 위치를 보여주는 역할을 합니다.
8. {children} : CardDroppable 컴포넌트가 받는 자식 요소들을 이 div 요소 안에 렌더링합니다.
이렇게 CardDroppable 컴포넌트는 react-beautiful-dnd 라이브러리를 사용하여 드롭 가능한 영역을 생성하는 역할을 합니다.
*/