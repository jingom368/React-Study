import {useDispatch, useSelector} from 'react-redux'
import type {AppState2} from '../store'
import {useCallback} from 'react'
import {Icon} from '../theme/daisyui'
import {Subtitle, Title} from '../components'
import * as C from '../store/5-2. counter'

export default function CounterTest() {
    const dispatch = useDispatch()

    const counter = useSelector<AppState2, C.State>(({counter}) => counter)
    const increase = useCallback(() => dispatch(C.increaseCounter()), [dispatch])
    const decrease = useCallback(() => dispatch(C.decreaseCounter()), [dispatch])

    return (
        <section className="mt-4">
            <Title>CounterTest</Title>
            <div className="flex justify-center p-4 mt-4">
                <div className="flex items-center justify-around w-1/3 text-blue-500 text-bold">
                    <Icon name="add_circle" onClick={increase} />
                    <Subtitle>{counter}</Subtitle>
                    <Icon name="remove_circle" onClick={decrease} />
                </div>
            </div>
        </section>
    )
}

// ---------- GPT 4.0 ---------- //

// Q. 이거 어떻게 구동되는 건지 이해가 하나도 안가서 흐름이랑 코드랑 매칭 해서 아주 자세하게 설명해줄 수 있을까?

/*
네, 이 코드는 Redux와 React-Redux를 이용하여 카운터 애플리케이션을 만드는 부분입니다. 
총 4가지 주요 부분으로 나눌 수 있습니다: 액션 타입 정의, 액션 생성 함수 정의, 리듀서 정의, 
그리고 React 컴포넌트에서 이들을 사용하는 부분입니다. 이를 순서대로 살펴보겠습니다.

1. 액션 타입 정의(5-2. e_types):
State는 number 타입으로 정의되며, SetCounterAction은 @counter/setCounter 타입의 액션과 payload 속성을 가진 객체의 타입입니다. 
여기서 payload는 State 타입, 즉 number 타입의 값을 가집니다. Actions는 현재 SetCounterAction 한 가지 타입만을 가지고 있습니다.

2. 액션 생성 함수 정의(5-2. e_actions):
setCounter, increaseCounter, decreaseCounter 세 가지 함수를 정의합니다. 
setCounter는 payload를 인자로 받아, type이 @counter/setCounter이고 payload가 인자로 받은 payload인 액션 객체를 반환합니다. 
increaseCounter는 setCounter를 호출하여 payload를 1로 설정하는 액션 객체를 생성합니다. 
decreaseCounter는 setCounter를 호출하여 payload를 -1로 설정하는 액션 객체를 생성합니다.

3. 리듀서 정의(5-2. e_reducers):
reducer 함수는 state와 action을 인자로 받아, 액션의 type에 따라 상태를 변경합니다. 
@counter/setCounter 타입의 액션에 대해, 현재 상태(state)에 액션의 payload를 더한 값을 새로운 상태로 반환합니다.

4. React 컴포넌트에서의 사용(CounterTest 컴포넌트):
useSelector를 통해 현재 'counter' 상태를 가져옵니다. useDispatch를 통해 디스패치 함수를 가져옵니다. 
useCallback을 통해 increase와 decrease라는 함수를 정의합니다. 
이 함수들은 각각 C.increaseCounter()와 C.decreaseCounter() 액션을 디스패치하는 역할을 합니다. 
이렇게 하면 카운터 상태가 증가하거나 감소하게 됩니다. 그리고 이 상태를 화면에 표시합니다.

이렇게 동작하는 이유는, Redux가 액션을 디스패치하면 이를 받은 리듀서가 상태를 업데이트하고, 
이 업데이트된 상태가 React 컴포넌트에 즉시 반영되기 때문입니다. useSelector 훅을 사용하여 'counter' 상태를 가져오면, 
이 상태가 변경될 때마다 컴포넌트가 자동으로 리렌더링되어 화면에 새로운 카운터 값이 표시되게 됩니다. 
이와 같이 Redux와 React-Redux는 상태 관리와 UI 갱신을 자동으로 연결해주어, 우리가 사이클을 명시적으로 관리하지 않아도 되게 합니다.
*/
