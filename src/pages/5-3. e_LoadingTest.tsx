import {useDispatch, useSelector} from 'react-redux'
import * as L from '../store/5-3. loading'
import type {AppState3} from '../store'
import {useCallback} from 'react'
import {Title} from '../components'
import {Button} from '../theme/daisyui'

export default function LoadingTest() {
    const dispatch = useDispatch()
    const loading = useSelector<AppState3, L.State>(({loading}) => loading)

    const doTimeLoading = useCallback(() => {
        dispatch<any>(L.doTimeLoading(5000))
    }, [dispatch])

    return (
        <section className="mt-4">
            <Title>LoadingTest</Title>
            <div className="mt-4">
                <div className="flex justify-center mt-4">
                    <Button
                        className="btn-sm btn-primary"
                        onClick={doTimeLoading}
                        disabled={loading}>
                        do time loading
                    </Button>
                </div>
                {loading && (
                    <div className="flex items-center justify-center">
                        <button className="btn btn-circle loading"></button>
                    </div>
                )}
            </div>
        </section>
    )
}

// 그리고 doTimeLoading 함수를 테스트하고자 src/pages 디렉터리의 LoadingTest.tsx 파일을 다음처럼 작성합니다.
// 코드의 전체 구조는 지금까지 구현해 보았던 리덕스 컴포넌트 사용 패턴 그대로지만,
// 일반 액션이 아니라 썽크 액션을 dispatch로 리덕스 저장소에 보내는 점이 다릅니다.
// 참고로 dispatch<any>는 type 속성이 없는 액션이라는 타입스크립트 오류를 막는 방법입니다.

// ---------- GPT 4.0 ---------- //

// Q. 이거 어떻게 구동되는 건지 이해가 하나도 안가서 흐름이랑 코드랑 매칭 해서 아주 자세하게 설명해줄 수 있을까?

/*
이 코드는 Redux와 React를 사용하여 로딩 상태를 관리하는 예제입니다. Redux는 애플리케이션의 상태를 관리하는 라이브러리이며, 
React는 사용자 인터페이스를 구축하는 라이브러리입니다. 이 두 라이브러리를 함께 사용하여, 
사용자가 버튼을 클릭하면 일정 시간 동안 로딩 아이콘이 표시되는 기능을 구현하고 있습니다.

코드의 흐름은 다음과 같습니다:

1. 사용자가 "do time loading" 버튼을 클릭하면 doTimeLoading 함수가 호출됩니다. 
    이 함수는 dispatch 함수를 인자로 받는 함수를 반환합니다. dispatch 함수는 Redux store에 액션을 디스패치하는 역할을 합니다.

2. doTimeLoading 함수는 먼저 setLoading(true) 액션을 디스패치하여 로딩 상태를 시작합니다. 
    그리고 setTimeout 함수를 사용하여 일정 시간 후에 setLoading(false) 액션을 디스패치하여 로딩 상태를 종료하는 타이머를 설정합니다.

3. 디스패치된 setLoading 액션은 Redux reducer에 의해 처리됩니다. reducer는 액션의 타입에 따라 상태를 업데이트합니다. 
    여기서는 setLoading 액션의 payload를 새로운 상태로 설정하여, 로딩 상태를 업데이트합니다.

4. 로딩 상태가 바뀌면, useSelector 훅이 반환하는 값도 바뀝니다. 
    useSelector는 Redux store의 상태를 조회하는 역할을 합니다. 여기서는 로딩 상태를 조회하고 있습니다.

5. useSelector가 반환하는 값이 바뀌면, 그 값을 사용하고 있는 컴포넌트가 리렌더링됩니다. 
    여기서는 로딩 상태에 따라 로딩 아이콘이 표시되거나 숨겨집니다.

따라서, 이 코드는 사용자의 버튼 클릭에 따라 로딩 상태를 업데이트하고, 
그 상태에 따라 로딩 아이콘이 표시되거나 숨겨지는 기능을 구현하고 있습니다.

이해가 되셨나요? 혹시 추가로 궁금한 점이 있으시다면 언제든지 질문해주세요.
*/

// Q. dispatch<any>(L.doTimeLoading(1000)) 이거 왜 any 붙인건지 이해가 안돼 자세하게 설명해줘?

/*
dispatch<any>(L.doTimeLoading(1000))에서 <any>는 TypeScript의 타입 주석입니다. 
    이는 dispatch 함수가 받아들일 수 있는 액션의 타입을 지정합니다.

일반적으로 dispatch 함수는 Redux 액션 객체를 인자로 받습니다. 하지만 이 경우 L.doTimeLoading(1000)은 함수를 반환하는 함수입니다. 
이는 thunk 패턴을 사용한 것으로, 비동기 작업을 수행하거나, 현재 상태에 따라 다른 액션을 디스패치해야 할 때 유용합니다.

<any>를 사용하여 dispatch 함수가 이러한 함수도 받아들일 수 있도록 했습니다. 
이렇게 하면 dispatch 함수를 통해 L.doTimeLoading(1000)를 호출할 수 있습니다.

하지만 <any>를 사용하는 것은 타입 검사를 우회하는 것이므로, 가능하다면 좀 더 구체적인 타입을 사용하는 것이 좋습니다. 
예를 들어, redux-thunk 라이브러리를 사용하고 있다면 ThunkDispatch 타입을 사용할 수 있습니다. 
이 타입은 thunk 함수를 디스패치할 수 있는 dispatch 함수의 타입을 정의합니다.

이해가 되셨나요? 혹시 추가로 궁금한 점이 있으시다면 언제든지 질문해주세요.
*/

// Q. dispatch<ThunkDispatch> 이렇게 써도 된다는 말이지?

/* 
dispatch<ThunkDispatch>라고 작성하는 것은 TypeScript의 타입 주석을 사용하는 것이지만, 
    ThunkDispatch는 Redux-Thunk 라이브러리에서 제공하는 타입이므로 정확한 사용 방법은 Dispatch<ThunkAction>입니다.

ThunkAction은 비동기 작업이나 여러 개의 액션을 디스패치하는 등의 복잡한 작업을 수행하는 함수를 나타내는 타입입니다. 
    Dispatch는 Redux의 액션을 디스패치하는 함수의 타입입니다.

따라서, Dispatch<ThunkAction>은 ThunkAction 타입의 함수를 디스패치하는 dispatch 함수의 타입을 나타냅니다. 
    이를 사용하면, dispatch 함수를 통해 ThunkAction 타입의 함수를 디스패치할 수 있습니다.

그러나 이렇게 타입을 지정하려면 ThunkAction의 정확한 타입 인자를 제공해야 합니다. 
    ThunkAction의 타입 인자에는 반환값의 타입, Redux 스토어의 상태 타입, 
    추가적인 파라미터 타입, 디스패치될 수 있는 액션 타입 등이 필요합니다.

예를 들어, ThunkAction<void, RootState, unknown, Action<string>>와 같이 타입을 지정할 수 있습니다. 
이는 Thunk 함수가 아무런 값을 반환하지 않고(void), Redux 스토어의 상태 타입이 RootState, 
추가적인 파라미터가 없음(unknown), 디스패치될 수 있는 액션의 타입이 Action<string>임을 나타냅니다.

이해가 되셨나요? 혹시 추가로 궁금한 점이 있으시다면 언제든지 질문해주세요.
*/
