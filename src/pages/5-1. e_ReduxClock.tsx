import {AppState_b} from '../store'
import {useSelector, useDispatch} from 'react-redux'
import {Div, Subtitle, Title} from '../components'
import {useInterval} from '../hooks'

export default function ReduxClock() {
    const today = useSelector<AppState_b, Date>(state => state.today)
    const dispatch = useDispatch() // 추가

    useInterval(() => {
        dispatch({type: 'setToday', today: new Date()})
    })

    return (
        <Div className="flex flex-col items-center justify-center mt-16">
            <Title className="text-5xl">ReduxClock</Title>
            <Title className="mt-4 text-3xl">{today.toLocaleTimeString()}</Title>
            <Subtitle className="mt-4 text-2xl">{today.toLocaleDateString()}</Subtitle>
        </Div>
    )
}

// ---------- GPT 3.5 ---------- //

// 이게 지금 돌아가는 원리가 전혀 이해가 안되는데 dispatch(), action, reducer, redux저장소 개념을 연결해서 자세하게 설명해줄래?

// 물론입니다! Redux는 JavaScript 애플리케이션의 상태를 관리하기 위한 라이브러리입니다.
// Redux를 사용하면 애플리케이션의 상태를 예측 가능하고 변화 추적이 가능한 단일 저장소에 저장하고 업데이트할 수 있습니다.
// Redux의 핵심 개념에 대해 자세히 설명드리도록 하겠습니다.

// 1. 액션 (Action):
// 액션은 애플리케이션에서 어떤 변화가 발생했는지를 나타내는 객체입니다.
// Redux에서는 액션을 생성하여 상태 변화를 일으킵니다.
// 액션은 일반적으로 type이라는 필수 속성을 가지며, 해당 액션이 어떤 종류의 액션인지를 식별합니다.
// 추가적인 데이터는 필요에 따라 속성으로 포함될 수 있습니다.

// 2. 리듀서 (Reducer):
// 리듀서는 현재 상태와 액션을 받아서 새로운 상태를 반환하는 순수한 함수입니다.
// 리듀서는 액션의 종류에 따라 상태를 어떻게 업데이트할지 결정합니다.
// 리듀서 함수는 이전의 상태를 변경하지 않고, 새로운 상태 객체를 생성하여 반환합니다.
// Redux 애플리케이션은 여러 개의 리듀서를 가질 수 있으며, 이들을 하나로 합쳐 루트 리듀서를 생성합니다.

// 3. 스토어 (Store):
// 스토어는 애플리케이션의 상태를 저장하고 관리하는 객체입니다.
// Redux 스토어는 단일 소스로서 애플리케이션의 상태를 보유합니다.
// 스토어는 액션을 디스패치(dispatch)하여 상태를 업데이트하고, 리듀서를 호출하여 새로운 상태를 생성합니다.
// 스토어는 상태에 대한 구독(subscribe)을 제공하여 상태 변화를 감지할 수 있습니다.

// 4. 디스패치 (Dispatch):
// 디스패치는 액션을 스토어에 전달하는 함수입니다.
// 디스패치를 통해 액션을 전달하면, 스토어는 리듀서를 호출하여 상태를 업데이트합니다.
// 액션이 디스패치되면, 해당 액션의 타입에 따라 적절한 리듀서가 호출되어 상태가 업데이트됩니다.

// 5. 커넥트 (Connect):
// 리액트 컴포넌트에서 Redux 스토어의 상태를 읽거나 디스패치를 사용하기 위해 connect 함수를 사용합니다.
// connect 함수는 컴포넌트를 Redux 스토어에 연결하여 상태 및 액션에 접근할 수 있게 해줍니다.

// 이제 제공해주신 코드를 바탕으로 작동 원리를 설명해드리겠습니다:

// ReduxClock 컴포넌트는 Redux 스토어의 상태를 읽고 디스패치하는 역할을 합니다.
// useSelector 훅을 사용하여 AppState 타입의 today 상태를 가져옵니다.
// useDispatch 훅을 사용하여 디스패치 함수를 가져옵니다.
// useInterval 커스텀 훅을 사용하여 일정 시간마다 액션을 디스패치합니다.
// dispatch({type: 'setToday', today: new Date()}) 코드는 setToday라는 액션을 디스패치하고, 현재 날짜를 전달합니다.
//     리듀서인 rootReducer는 setToday 액션을 처리하여 today 상태를 업데이트합니다.
// ReduxClock 컴포넌트는 today 상태를 UI에 표시합니다.
// 이렇게 Redux를 사용하면 상태의 중앙 집중화와 예측 가능한 상태 변화를 도모할 수 있습니다.
//     액션과 리듀서를 통한 상태 업데이트는 일관성 있고 추적 가능한 방식으로 이루어지며,
//     컴포넌트는 단순히 상태를 읽고 업데이트하는 역할을 수행합니다. 이를 통해 애플리케이션의 상태 관리를 효율적으로 할 수 있습니다.

// 흐름을 다시 한 번 상세하게 알려줄래?

// 1. ReduxClock 컴포넌트가 렌더링됩니다.
// 2. useSelector 훅을 사용하여 AppState 타입의 today 상태를 가져옵니다.
// 3. useDispatch 훅을 사용하여 디스패치 함수를 가져옵니다.
// 4. useInterval 커스텀 훅을 사용하여 일정 시간마다 액션을 디스패치합니다.
// 5. useInterval 훅은 지정된 시간 간격마다 콜백 함수를 호출합니다.
// 6. 콜백 함수에서는 dispatch({type: 'setToday', today: new Date()}) 코드를 실행하여 setToday 액션을 디스패치합니다.
//      이때, 현재 날짜를 today 속성에 담아 전달합니다.
// 7. 디스패치된 액션은 스토어로 전달됩니다.
// 8. 스토어는 리듀서 함수를 호출하고, 액션의 타입에 따라 적절한 처리를 수행합니다.
// 9. rootReducer 함수에서는 setToday 액션을 처리하고, 현재 상태를 복사한 후 today 속성을 업데이트하여 새로운 상태 객체를 반환합니다.
// 10. 스토어가 새로운 상태를 받아 저장합니다.
// 11. UI는 today 상태를 사용하여 시간과 날짜를 표시합니다.
// 12. 이후, 시간이 지남에 따라 useInterval 훅이 콜백 함수를 호출하고, 다시 액션이 디스패치되고 상태 업데이트가 반복됩니다.

// 이러한 흐름을 통해 Redux를 사용하여 상태가 업데이트되고, 이에 따라 UI가 변경되는 동적인 상태 관리가 이루어집니다.
// 액션은 상태 변화를 일으키는 동작을 나타내고, 리듀서는 액션에 따라 상태를 업데이트합니다.
// 스토어는 상태를 저장하고 관리하며, 컴포넌트는 상태를 읽고 디스패치하여 상태 변화를 트리거합니다.
// 이를 통해 애플리케이션의 상태 관리를 효율적으로 처리할 수 있습니다.

// 7. 디스패치된 액션은 스토어로 전달됩니다. & 10. 스토어가 새로운 상태를 받아 저장합니다.
// 이 부분은 내가 올려준 코드에서 보이지가 않는데 어떤 코드 부분에서 이런 흐름을 만들어내는거야?

// 코드에서 직접적으로 "스토어로 액션을 전달하고 스토어가 새로운 상태를 받아 저장한다"라는 부분을 확인할 수는 없습니다.
// 제가 설명한 부분은 Redux의 작동 방식을 기반으로 일반적인 흐름을 설명한 것입니다.
// Redux에서 액션은 dispatch 함수를 호출하여 전달됩니다.
// 이 dispatch 함수는 Redux 미들웨어 또는 Redux의 내부 동작에 의해 스토어로 액션을 전달하게 됩니다.
// 스토어는 액션을 받으면 리듀서 함수를 호출하고, 리듀서 함수는 액션의 타입에 따라 상태를 업데이트합니다.
// 그리고 업데이트된 상태는 스토어에 저장됩니다.

// 따라서, 코드상에서는 스토어로의 직접적인 액션 전달과 상태 저장 부분을 명시적으로 볼 수 없지만,
// Redux의 내부 동작에 의해 이러한 흐름이 이루어지게 됩니다.
// 코드에서는 dispatch 함수를 호출하여 액션을 전달하는 부분만 확인할 수 있습니다.
// 나머지 부분은 Redux의 내부 동작에 의해 처리되는 것입니다.

// 물론입니다! 나머지 부분이 코드의 어떤 부분에 해당하는지 설명해드리겠습니다.

// 7. 디스패치된 액션은 스토어로 전달됩니다.
// 이 부분은 Redux의 내부 동작에 해당합니다. 코드상에서는 직접적으로 확인할 수 없으며,
// dispatch 함수를 통해 액션을 전달하는 과정에서 Redux 미들웨어 또는 Redux의 내부 동작에 의해 액션이 스토어로 전달됩니다.

// 10. 스토어가 새로운 상태를 받아 저장합니다.
// 이 부분도 Redux의 내부 동작에 해당합니다. 리듀서 함수에서 새로운 상태를 반환하면, Redux는 이를 스토어에 저장합니다.
// 코드상에서는 직접적으로 확인할 수 없으며, Redux의 내부 동작에 의해 이루어집니다.

// 따라서, 코드에서는 7번과 10번에 해당하는 부분을 직접적으로 확인할 수는 없습니다.
// 이 부분은 Redux의 내부 동작에 의해 처리되는 것이며, Redux의 원리에 따라 액션이 스토어로 전달되고 상태가 업데이트되는 과정입니다.
// 코드에서는 해당 부분의 구체적인 구현은 보이지 않지만, Redux가 이러한 동작을 수행하도록 설계되어 있습니다.

// 이 흐름이랑 아래 코드랑 매칭해서 설명해줄 수 있을까?

//주어진 흐름과 코드의 각 부분을 매칭하여 설명해드리겠습니다.

// 1. ReduxClock 컴포넌트가 렌더링됩니다.
//      코드: export default function ReduxClock() { ... }
//      ReduxClock 컴포넌트는 Redux 상태를 사용하고, UI를 표시하는 역할을 합니다.

// 2. useSelector 훅을 사용하여 AppState 타입의 today 상태를 가져옵니다.
//      코드: const today = useSelector<AppState, Date>(state => state.today)
//      useSelector 훅을 사용하여 스토어의 상태에서 today 값을 가져옵니다.

// 3. useDispatch 훅을 사용하여 디스패치 함수를 가져옵니다.
//      코드: const dispatch = useDispatch()
//      useDispatch 훅을 사용하여 디스패치 함수를 가져옵니다.

// 4. useInterval 커스텀 훅을 사용하여 일정 시간마다 액션을 디스패치합니다.
//      코드: useInterval(() => { dispatch({type: 'setToday', today: new Date()}) })
//      useInterval 커스텀 훅을 사용하여 일정 시간마다 콜백 함수를 호출합니다.
//      콜백 함수 내에서 dispatch 함수를 호출하여 'setToday' 액션을 디스패치합니다.

// 7. 디스패치된 액션은 스토어로 전달됩니다.
//      코드: dispatch({type: 'setToday', today: new Date()})
//      dispatch 함수를 호출하여 'setToday' 액션을 스토어로 전달합니다.

// 8. 스토어는 리듀서 함수를 호출하고, 액션의 타입에 따라 적절한 처리를 수행합니다.
//      코드: export const rootReducer = (state: AppState = initialAppstate, action: Actions) => { ... }
//      rootReducer 함수가 액션의 타입에 따라 적절한 처리를 수행합니다.

// 9. rootReducer 함수에서는 setToday 액션을 처리하고, 현재 상태를 복사한 후 today 속성을 업데이트하여 새로운 상태 객체를 반환합니다.
//      코드: case 'setToday' : { return {...state, today: action.today} }
//      'setToday' 액션이 발생하면, 현재 상태를 복사한 후 today 속성을 업데이트하여 새로운 상태 객체를 반환합니다.

// 10. 스토어가 새로운 상태를 받아 저장합니다.
//      코드: return store
//      스토어는 리듀서 함수에서 반환한 새로운 상태를 받아 저장합니다.

// 11. UI는 today 상태를 사용하여 시간과 날짜를 표시합니다.
//      코드: <Title className="mt-4 text-3xl">{today.toLocaleTimeString()}</Title> <Subtitle className="mt-4 text-2xl">{today.toLocaleDateString()}</Subtitle>
//      UI는 today 상태를 사용하여 현재 시간과 날짜를 표시합니다.

// 12. 이후, 시간이 지남에 따라 useInterval 훅이 콜백 함수를 호출하고, 다시 액션이 디스패치되고 상태 업데이트가 반복됩니다.
//      코드: useInterval(() => { dispatch({type: 'setToday', today: new Date()}) })
//      useInterval 커스텀 훅은 일정 시간 간격으로 콜백 함수를 호출합니다.
//      를 통해 주기적으로 'setToday' 액션을 디스패치하여 상태를 업데이트합니다.

// 이렇게 주어진 흐름과 코드의 각 부분이 매칭됩니다. ReduxClock 컴포넌트가 렌더링되고,
// 상태와 액션을 조작하면서 시간과 날짜를 표시하는 동적인 UI를 구현합니다.

// ---------- GPT 4.0 ---------- //

// 네, 이해가 어려울 수 있는 부분이니 차근차근 설명드리겠습니다.

// 먼저 Redux는 JavaScript 애플리케이션의 상태를 관리하기 위한 라이브러리입니다. Redux는 상태변화를 예측 가능하게 만들어주는데,
// 이는 상태 업데이트 로직을 '액션'이라는 개념을 통해 중앙 집중화하고, 이 액션들은 순차적으로 실행됩니다.

// - Action : 액션은 상태를 변경시키는 요청을 나타내는 객체입니다. 주로 type 필드를 가지며, 이 필드는 액션의 종류를 나타내는 문자열입니다.
//      예를 들어, {type: 'setToday', today: new Date()}는 '오늘의 날짜'를 설정하는 액션을 나타냅니다.
// - Dispatch : dispatch는 스토어에 액션을 전달하는 함수입니다. dispatch({type: 'setToday', today: new Date()})라는 코드는
//      'setToday' 액션을 스토어에 전달하는 코드입니다. 이 액션은 스토어에 도달하면, 리듀서에 의해 처리됩니다.
// - Reducer : 리듀서는 액션을 처리하는 함수입니다. 스토어에 전달된 액션을 인자로 받아,
//      액션의 타입에 따라 상태를 어떻게 변경할지 결정합니다. 예를 들어, 'setToday' 액션을 처리하는 리듀서는 아래와 같습니다.
/* 
    switch (action.type) {
        case 'setToday' : {
            return {...state, today: action.today}
        }
    }
*/
// - Store : 스토어는 Redux 애플리존의 상태와 리듀서를 저장하는 객체입니다.
// 스토어는 dispatch 함수를 통해 액션을 받고, 리듀서를 사용하여 상태를 변경합니다.

// 이제 위의 코드에 대해 설명드리겠습니다.
// useSelector와 useDispatch는 Redux와 React를 함께 사용하기 위한 훅입니다.
// useSelector는 Redux 스토어의 상태를 가져오는 훅이며, useDispatch는 액션을 디스패치하는 함수를 가져오는 훅입니다.

// useInterval 훅은 일정 시간 간격으로 함수를 실행하는 역할을 합니다.
// 이 훅을 통해 일정 시간 간격으로 'setToday' 액션을 디스패치하고 있습니다.

// configureStore는 Redux 스토어를 생성하는 함수입니다. 이 함수를 통해 리듀서와 미들웨어를 설정하여 스토어를 생성합니다.

// rootReducer는 모든 액션을 처리하는 리듀서입니다. 이 리듀서는 'setToday' 액션을 처리하여 'today' 상태를 변경합니다.

// 이렇게 Redux는 액션, 디스패치, 리듀서, 스토어를 통해 상태를 관리합니다.
// 이들은 액션을 생성하고, 액션을 디스패치하며, 디스패치된 액션을 처리하고, 처리 결과를 저장하는 역할을 합니다.
// 이를 통해 Redux는 상태변화를 예측 가능하게 만듭니다.

// 네, 이 코드는 Redux를 사용해서 현재 시간을 관리하는 예제입니다.

// - 액션 타입 정의: 우선, SetTodayAction이라는 액션 타입을 정의하고 있습니다.
//      이 액션 타입은 'setToday'라는 타입 속성과 함께 'today'라는 날짜 데이터를 가집니다. 이 액션은 '오늘의 날짜'를 설정하는 역할을 합니다.
// - 상태 타입 정의: 그 다음으로 AppState라는 상태 타입을 정의합니다. 이 상태 타입은 'today'라는 날짜 데이터를 상태로 가집니다.
// - 스토어 생성: configureStore 함수를 사용해 Redux 스토어를 생성합니다.
//      이 스토어는 rootReducer를 사용해 상태를 관리합니다. 또한,
//      이 스토어는 useStore라는 커스텀 훅을 통해 메모이제이션되어 효율적으로 관리됩니다.
// - 리듀서 정의: rootReducer는 모든 액션을 처리하는 리듀서 함수입니다. 이 리듀서는 'setToday' 액션을 받아 'today' 상태를 갱신합니다.
// - 컴포넌트에서의 사용: ReduxClock 컴포넌트에서는 useSelector 훅을 사용해 'today' 상태를 가져오고,
//      useDispatch 훅을 사용해 'setToday' 액션을 디스패치합니다. 이 컴포넌트는 'today' 상태를 화면에 표시하고,
//      일정 시간 간격(useInterval 훅)으로 'setToday' 액션을 디스패치함으로써 'today' 상태를 갱신합니다.

// 따라서 이 코드는 Redux를 통해 '오늘의 날짜' 상태를 관리하고, 이 상태를 화면에 표시하는 역할을 합니다.
// 일정 시간 간격으로 '오늘의 날짜' 상태를 갱신하므로, 화면에는 항상 현재 시간이 표시됩니다

// 네, 이 코드의 전체적인 흐름에 대해 상세히 설명드리겠습니다.

// 1. 상태와 액션 타입 정의
//      코드가 시작되면서 먼저 AppState와 SetTodayAction이라는 타입들이 정의됩니다.
//      AppState는 우리가 관리하려는 상태의 모양을 나타내고, SetTodayAction은 '오늘의 날짜'를 설정하는 액션의 타입을 나타냅니다.
// 2. 스토어 생성
//      configureStore 함수를 통해 Redux 스토어가 생성됩니다. 여기서 스토어는 애플리케이션의 상태를 저장하고 관리하는 중요한 객체입니다.
//      스토어는 rootReducer를 사용하여 액션에 따라 상태를 변경합니다.
// 3. 초기 상태 설정
//      rootReducer에서 초기 상태 initialAppState가 설정됩니다. 이 초기 상태는 'today' 속성을 가지며,
//      이 속성의 값은 코드가 실행되는 시점의 날짜와 시간입니다.
// 4. 리듀서 정의
//      rootReducer는 액션의 타입에 따라 상태를 어떻게 변경할지를 정의합니다.
//      여기서는 'setToday' 액션에 대한 처리가 정의되어 있습니다. 'setToday' 액션을 받으면,
//      'today' 상태를 액션의 'today' 속성 값으로 갱신합니다.
// 5. 컴포넌트 렌더링
//      ReduxClock 컴포넌트가 렌더링됩니다. 이 컴포넌트는 useSelector 훅을 사용하여 'today' 상태를 가져와 화면에 표시합니다.
// 6. 액션 디스패치
//      ReduxClock 컴포넌트는 useInterval 훅을 통해 일정 시간 간격으로 'setToday' 액션을 디스패치합니다.
//      이 액션은 useDispatch 훅을 통해 디스패치되며, 디스패치된 액션은 스토어에 전달됩니다.
// 7. 상태 업데이트
//      스토어는 디스패치된 액션을 받아 rootReducer를 실행합니다.
//      rootReducer는 'setToday' 액션을 처리하고, 이에 따라 'today' 상태를 갱신합니다.
// 8. 컴포넌트 리렌더링
//      상태가 변경되면, 해당 상태를 사용하는 ReduxClock 컴포넌트가 다시 렌더링됩니다.
//      컴포넌트는 갱신된 'today' 상태를 가져와 화면에 표시합니다.

// 이 과정이 반복되면서, 'today' 상태는 일정 시간 간격으로 계속 갱신되고,
//      ReduxClock 컴포넌트는 항상 최신 'today' 상태를 화면에 표시하게 됩니다.
//      이렇게 Redux는 상태 관리를 중앙에서 효율적으로 수행하며, 컴포넌트는 이 상태를 사용하여 UI를 렌더링하는 역할을 합니다.

/* 
1. 상태와 액션 타입 정의
- AppState, SetTodayAction 타입이 정의되는 부분입니다.
    export type SetTodayAction = Action<'setToday'> & {
        today: Date
    }
    export type AppState = {
        today: Date
    }
2. 스토어 생성
- configureStore 함수가 호출되어 스토어가 생성되는 부분입니다.
    const initializeStore = () => {
        const store = configureStore({reducer: rootReducer, middleware: []})
        return store
    }
    export function useStore() {
        const store = useMemo(() => initializeStore(), [])
        return store
    }
3. 초기 상태 설정
- 초기 상태 initialAppState가 설정되는 부분입니다.
    const initialAppstate = {
        today: new Date()
    }
4. 리듀서 정의
- rootReducer에서 'setToday' 액션에 대한 처리가 정의되는 부분입니다.
    export const rootReducer = (state: AppState = initialAppstate, action: Actions) => {
        switch (action.type) {
            case 'setToday' : {
                return {...state, today: action.today}
            }
        }
        return state
    }
5. 컴포넌트 렌더링
- ReduxClock 컴포넌트에서 'today' 상태를 가져와 화면에 표시하는 부분입니다.
    const today = useSelector<AppState, Date>(state => state.today)
    return (
        <Div className="flex flex-col items-center justify-center mt-16">
            <Title className="text-5xl">ReduxClock</Title>
            <Title className="mt-4 text-3xl">{today.toLocaleTimeString()}</Title>
            <Subtitle className="mt-4 text-2xl">{today.toLocaleDateString()}</Subtitle>
        </Div>
    )
6. 액션 디스패치
- ReduxClock 컴포넌트에서 'setToday' 액션을 디스패치하는 부분입니다.
    const dispatch = useDispatch()
    useInterval(() => {
        dispatch({type: 'setToday', today: new Date()})
    })
7. 상태 업데이트
- rootReducer에서 'setToday' 액션을 처리하고, 상태를 갱신하는 부분입니다. 이 부분은 코드상에는 명시적으로 보이지 않지만, 
    디스패치된 액션에 따라 rootReducer가 호출되고 상태가 업데이트되는 과정이 진행됩니다.
8. 컴포넌트 리렌더링
- 상태가 변경되면, ReduxClock 컴포넌트가 다시 렌더링되는 부분입니다. 이 부분도 코드상에는 명시적으로 보이지 않지만, 
    상태가 변경되면 React는 해당 컴포넌트를 리렌더링합니다.

이렇게 각 부분이 서로 연결되면서 전체적인 흐름이 이루어지게 됩니다. 
1. 상태와 액션이 정의되고, 2. 이를 바탕으로 스토어가 생성되며, 
5. 컴포넌트는 스토어의 상태를 사용하여 렌더링하고, 6. 액션을 디스패치하여 상태를 업데이트하는 과정이 반복됩니다.
*/

// Q. rootReducer에서 'setToday' 액션을 처리하고, 상태를 갱신하는 부분입니다. 이 부분은 코드상에는 명시적으로 보이지 않지만,
// 디스패치된 액션에 따라 rootReducer가 호출되고 상태가 업데이트되는 과정이 진행됩니다.
// 여기서 도대체 무슨 일이 일어나는 건지 아주 자세히 알려줄 수 있어? 눈에 보이지 않으니까 이 부분을 이해하기가 어렵네

/*
네, 이 부분은 Redux 내부에서 일어나는 과정이라 직접적으로 코드상에 보이지 않아 이해하기 어려울 수 있습니다. 
이 과정을 좀 더 상세히 설명드리겠습니다.

먼저, 애플리케이션에서 dispatch 함수를 이용해 액션을 디스패치하면, 이 액션은 Redux 스토어로 전달됩니다. 
스토어는 이 액션을 받아서 현재의 상태와 함께 rootReducer 함수에 넘겨줍니다.
- dispatch(액션) -->  Redux 스토어(상태,액션) --> rootReducer

rootReducer 함수는 전달받은 액션의 타입에 따라 상태를 어떻게 변경할지를 결정합니다. 
이 코드에서는 'setToday' 액션을 받으면, 'today' 상태를 액션의 'today' 속성 값으로 갱신하도록 정의되어 있습니다.

export const rootReducer = (state: AppState = initialAppstate, action: Actions) => {
    switch (action.type) {
        case 'setToday' : {
            return {...state, today: action.today}
        }
    }
    return state
}

따라서 'setToday' 액션을 디스패치하면, 스토어는 rootReducer를 호출하여 'today' 상태를 액션의 'today' 값으로 갱신하게 됩니다.
이렇게 상태가 변경되면, Redux는 이 변경을 구독하고 있는 컴포넌트에게 상태 변경을 알려줍니다. 
이를 통해 해당 컴포넌트는 새로운 상태를 받아 다시 렌더링하게 됩니다.
이 예제에서는 'today' 상태를 사용하는 ReduxClock 컴포넌트가 다시 렌더링되어 화면에 최신 날짜와 시간을 표시하게 됩니다.

이와 같이 Redux는 액션 디스패치, 상태 변경, 컴포넌트 리렌더링 등의 과정을 통해 상태 관리를 수행하며, 
이 모든 과정은 Redux 내부에서 자동으로 처리됩니다. 
따라서 개발자는 상태와 액션, 리듀서만을 정의하고, useSelector와 useDispatch와 같은 훅을 사용하여 
상태를 불러오거나 액션을 디스패치하는 등의 작업에 집중할 수 있습니다.

Redux : 액션 디스패치, 상태 변경, 컴포넌트 리렌더링 
<-> 개발자 : 상태와 액션, 리듀저 정의 | useSelector와 useDispatch 훅 사용 : 상태를 불러오거나 액션을 디스패치
*/
