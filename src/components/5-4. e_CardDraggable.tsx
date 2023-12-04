import type {FC, PropsWithChildren} from 'react'
import {Draggable} from 'react-beautiful-dnd'

export type CardDraggableProps = {
    draggableId: string
    index: number
}

export const CardDraggable: FC<PropsWithChildren<CardDraggableProps>> = ({
    draggableId,
    index,
    children
}) => {
    return (
        <Draggable draggableId={draggableId} index={index}>
            {provided => {
                return (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}>
                        {children}
                    </div>
                )
            }}
        </Draggable>
    )
}

// 그런데 이 컴포넌트는 사용법이 독특하므로 다음처럼 src/componenets 디렉터리에
// CardDraggable.tsx 파일을 만들고 여기에 새로 구현하겠습니다.

// 이 파일을 열고 다음과 같은 코드를 작성합니다.
// 여기서 draggabledId는 카드의 uuid.index는 카드가 담긴 배열에서의 특정 위치(즉, 색인)을 의미합니다.


// ---------- GPT 4.0 ---------- //

// Q.이거 무슨 말이야 도대체.. 알 수가 없어 아주 자세하고 세세하게 설명해줄래?

/*
네, 이해하기 어려운 부분에 대해 자세하게 설명해드리겠습니다.

이 코드는 react-beautiful-dnd라는 라이브러리를 사용하여 드래그 가능한 카드 컴포넌트를 만드는 것입니다.

1. import type {FC, PropsWithChildren} from 'react' : 
    React에서 제공하는 FC (Function Component)와 PropsWithChildren 타입을 가져옵니다. 
    PropsWithChildren는 자식 컴포넌트를 포함하는 props를 나타내는 타입입니다.
2. import {Draggable} from 'react-beautiful-dnd' : react-beautiful-dnd 라이브러리에서 Draggable 컴포넌트를 가져옵니다. 
    Draggable 컴포넌트는 그 안에 포함된 요소를 드래그 가능하게 만듭니다.
3. export type CardDraggableProps = {...} : CardDraggable 컴포넌트가 사용하는 props의 타입을 정의합니다. 
    draggableId는 드래그 가능한 항목을 식별하는 데 사용되고, index는 드래그 가능한 항목의 순서를 나타냅니다.
4. export const CardDraggable: FC<PropsWithChildren<CardDraggableProps>> = ({...}) => {...} : 
    CardDraggable라는 함수형 컴포넌트를 정의합니다. 이 컴포넌트는 PropsWithChildren<CardDraggableProps> 타입의 props를 받습니다.

5. <Draggable draggableId={draggableId} index={index}> {...} </Draggable> : 
    Draggable 컴포넌트를 사용하여 드래그 가능한 요소를 만듭니다. draggableId와 index props를 Draggable 컴포넌트에 전달합니다.

6. {provided => {...}} : Draggable 컴포넌트는 자식으로 함수를 받습니다. 이 함수는 provided라는 객체를 매개변수로 받습니다. 
    provided 객체는 react-beautiful-dnd 라이브러리가 제공하는 여러 가지 props와 함수를 포함하고 있습니다.

7. <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}> {...} 
    </div> : provided.innerRef를 이용하여 react-beautiful-dnd가 이 div 요소를 제어할 수 있게 합니다.
    또한 provided.draggableProps와 provided.dragHandleProps를 통해 드래그 동작을 제어하는 여러 가지 props를 이 div 요소에 적용합니다.

8. {children} : CardDraggable 컴포넌트가 받는 자식 요소들을 이 div 요소 안에 렌더링합니다.

이렇게 CardDraggable 컴포넌트는 react-beautiful-dnd 라이브러리를 사용하여 드래그 가능한 카드 요소를 생성하는 역할을 합니다.
*/


// Q. ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}> 그래서 궁금한게 이거였는데 이게 뭔데..

/*
react-beautiful-dnd 라이브러리의 Draggable 컴포넌트는 자식으로 함수를 받습니다. 
    이 함수는 하나의 인자, 이 경우 provided 객체를 받게 됩니다.

provided 객체는 react-beautiful-dnd 라이브러리에서 제공하는 여러 props와 함수를 포함하고 있습니다. 
    이들은 드래그 동작을 제어하고, 드래그 대상 요소에 필요한 속성을 제공하는 역할을 합니다.

1. provided.innerRef : 이는 react-beautiful-dnd가 드래그 대상 DOM 요소를 참조(reference)하고 제어할 수 있도록 하는 ref입니다. 
    이 ref를 드래그 대상 요소의 ref prop에 설정해주어야 합니다.

2. {...provided.draggableProps} : 이는 드래그 대상 요소에 필요한 여러 가지 props를 나타냅니다. 
    이들 props는 드래그 동작을 제어하고, 드래그 대상 요소의 스타일 및 동작을 설정하는데 사용됩니다. 
    {...provided.draggableProps} 형태로 드래그 대상 요소에 전달해야 합니다.

3. {...provided.dragHandleProps} : 이는 드래그 핸들 역할을 하는 요소에 필요한 props를 나타냅니다. 
    드래그 핸들이란 사용자가 드래그 동작을 시작할 수 있는 요소를 의미합니다. 
    예를 들어, 리스트 아이템을 드래그하기 위해 사용자가 클릭하고 드래그하는 특정 영역이 드래그 핸들이 될 수 있습니다. 
    {...provided.dragHandleProps} 형태로 드래그 핸들 요소에 전달해야 합니다.

따라서 <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}> 코드는 
    드래그 대상이 되는 div 요소를 설정하고, 이 div 요소에 드래그 동작을 제어하는 여러 가지 props를 적용하는 역할을 합니다.
*/

