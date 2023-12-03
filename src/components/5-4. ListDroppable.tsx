import type {FC} from 'react'
import {useRef} from 'react'
import type { DivProps } from './3-3. Div'
import {useDrop} from 'react-dnd'

export type ListDropableProps = DivProps & {}

export const ListDroppable: FC<ListDropableProps> = ({...props}) => {
    const divRef = useRef<HTMLDivElement>(null)
    const [, drop] = useDrop({
        accept: 'list'
    })
    drop(divRef)
    return <div ref={divRef} {...props} />
}

// 그런데 react-dnd 패키지의 기능을 자세히 알고 있어야 하는 코드들을 그대로 노출하는 것은 좋은 생각이 아닙니다.
// 이제 react-dnd 관련 코드들을 ListDroppable이란 컴포넌트로 옮겨 놓겠습니다.


// ---------- GPT 4.0 ---------- //

// Q. 머선 말인지 자세하게 알려주겠어?

/*
먼저, 이 코드는 React와 react-dnd 라이브러리를 사용해 작성된 것으로 보입니다.

1. export type ListDropableProps = DivProps & {} : ListDropableProps라는 타입을 정의하고 있습니다. 
    이 타입은 DivProps와 빈 객체를 합친 타입입니다. DivProps는 HTML div 요소의 프로퍼티를 나타내는 타입일 것으로 보입니다.
2. export const ListDroppable: FC<ListDropableProps> = ({...props}) => {...} : 
    ListDroppable이라는 함수형 컴포넌트를 정의하고 있습니다. 이 컴포넌트는 ListDropableProps 타입의 props를 받습니다.
3. const divRef = useRef<HTMLDivElement>(null) : divRef라는 ref 객체를 생성합니다. 
    이 ref는 HTMLDivElement에 연결되며, 이 컴포넌트가 DOM에 렌더링될 때 해당 DOM 요소를 참조할 수 있게 합니다.
4. const [, drop] = useDrop({ accept: 'list' }) : useDrop 훅을 사용하여 드롭될 수 있는 영역을 정의합니다. 
    accept 프로퍼티는 이 영역에서 드롭을 받아들일 수 있는 항목의 타입을 나타냅니다. 
    여기서는 'list'라는 타입의 항목만 드롭을 받아들일 수 있습니다.
5. drop(divRef) : drop 함수에 divRef를 전달하여, 이 div 요소가 드롭을 받아들이는 영역이라는 것을 명시합니다.
6. return <div ref={divRef} {...props} /> : 최종적으로, 드롭을 받아들일 수 있는 div 요소를 렌더링합니다. 
    이 div 요소는 divRef를 ref로 갖습니다. 또한, ListDroppable 컴포넌트가 받는 모든 props를 이 div 요소에 전달합니다.

이렇게 ListDroppable 컴포넌트는 드롭을 받아들일 수 있는 div 요소를 렌더링하는 역할을 합니다. 
    이 컴포넌트 내부에서 드롭되는 항목의 처리 로직은 따로 정의되지 않았으므로, 
    이 컴포넌트를 사용하는 측에서 드롭 이벤트를 핸들링할 로직을 추가해야 합니다.
*/