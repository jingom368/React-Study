import {AppState} from '../store'
import {useSelector, useDispatch} from 'react-redux'
import {Title} from '../components'
import {useInterval} from '../hooks'
import * as C from '../store/clock'

export default function ReduxClock() {
    // const today = useSelector<AppState, Date>(state => state.today)
    const clock = useSelector<AppState, C.State>(state => state.clock)
    const dispatch = useDispatch()

    // useInterval(() => {dispatch({type: 'setToday', today: new Date()})})
    useInterval(() => dispatch(C.setClock(new Date())))

    return (
        <section className="mt-4">
            <Title>ClockTest</Title>
            <div className="flex flex-col items-center mt-4">
                <p className="text-2xl text-blue-600 text-bold">
                    {clock.toLocaleTimeString()}
                </p>
                <p className="text-lg text-blue-600 text-bold">
                    {clock.toLocaleDateString()}
                </p>
            </div>
        </section>
    )
}

// 이제 지금까지 만든 src/store/clock 디렉터리의 리덕스 기능을 테스트하고자
// src/pages 디텍터리의 ClockTest.tsx 파일을 다음처럼 작성합니다.
// 이 코드는 AppState의 clock 속성값을 화면에 출력하므로 useSelector의 타입 변수들을 <AppState, C.State>로 설정합니다.
// 그리하여 state의 clock 등 4개이 멤버 상태 가운데 clock만 useSelector로 꺼냅니다.

// ---------- GPT 4.0 ---------- //

// Q. 이거 어떻게 구동되는 건지 이해가 하나도 안가서 흐름이랑 코드랑 매칭 해서 아주 자세하게 설명해줄 수 있을까?

/* 
네, 이 코드는 Redux와 React-Redux를 이용하여 시계 애플리케이션을 만드는 부분입니다. 
총 4가지 주요 부분으로 나눌 수 있습니다: 액션 타입 정의, 액션 생성 함수 정의, 리듀서 정의, 
그리고 React 컴포넌트에서 이들을 사용하는 부분입니다. 이를 순서대로 살펴보겠습니다.

1. 액션 타입 정의(5-2. e_types):
State는 Date 타입으로 정의되며, SetClockAction은 @clock/setClock 타입의 액션과 payload 속성을 가진 객체의 타입입니다. 
여기서 payload는 State 타입, 즉 Date 타입의 값을 가집니다. Actions는 현재 SetClockAction 한 가지 타입만을 가지고 있습니다.

2. 액션 생성 함수 정의(5-2. e_actions):
setClock 함수는 Date 타입의 payload를 인자로 받아, type이 @clock/setClock이고 payload가 인자로 받은 Date 값인 액션 객체를 반환합니다.

3. 리듀서 정의(5-2. e_reducers):
reducer 함수는 state와 action을 인자로 받아, 액션의 type에 따라 상태를 변경합니다. 
@clock/setClock 타입의 액션에 대해, 액션의 payload를 새로운 상태로 반환합니다. 그 외의 액션에 대해서는 현재 상태를 그대로 반환합니다.

4. React 컴포넌트에서의 사용(ReduxClock 컴포넌트):
useSelector를 통해 현재 'clock' 상태를 가져옵니다. useDispatch를 통해 디스패치 함수를 가져옵니다. 
useInterval 훅을 통해 일정 간격으로 C.setClock(new Date()) 액션을 디스패치합니다. 
이로써 현재 시간을 업데이트하게 됩니다. 그리고 이 시간을 화면에 표시합니다.

이렇게 동작하는 이유는, Redux가 액션을 디스패치하면 이를 받은 리듀서가 상태를 업데이트하고, 
이 업데이트된 상태가 React 컴포넌트에 즉시 반영되기 때문입니다. useSelector 훅을 사용하여 'clock' 상태를 가져오면, 
이 상태가 변경될 때마다 컴포넌트가 자동으로 리렌더링되어 화면에 새로운 시간이 표시되게 됩니다. 
이와 같이 Redux와 React-Redux는 상태 관리와 UI 갱신을 자동으로 연결해주어, 우리가 사이클을 명시적으로 관리하지 않아도 되게 합니다.

*/