import {useDispatch, useSelector} from 'react-redux'
import * as E from '../store/5-3. errorMessage'
import * as D from '../data'
import type {AppState3} from '../store'
import {useCallback} from 'react'
import {Title} from '../components'
import {Button} from '../theme/daisyui'

export default function ErrorMessageTest() {
    const dispatch = useDispatch()
    const errorMessage = useSelector<AppState3, E.State>(({errorMessage}) => errorMessage)
    // const loading = useSelector<AppState, L.State>(({loading}) => loading)

    //const doTimeLoading = useCallback(() => {
    // dispatch<any>(L.doTimeLoading(5000))
    const generateErrorMessage = useCallback(() => {
        dispatch<any>(E.generateErrorMessage(D.randomSentence()))
    }, [dispatch])

    return (
        <section className="mt-4">
            <Title>LoadingTest</Title>
            <div className="mt-4">
                <div className="flex justify-center mt-4">
                    <Button
                        className="btn btn-sm btn-primary"
                        onClick={generateErrorMessage}>
                        generate error message
                    </Button>
                </div>
                {/* {loading && ( */}
                {errorMessage && (
                    <div className="flex items-center justify-center bg-red-200">
                        <button className="text-2xl text-red-600 text-bold">
                            error: {errorMessage}
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

// 이번엔 오류 메세지를 출력하는 errorMessage 멤버 상태를 구현해 보겠습니다.
// Error는 자바스크립트 엔진이 기본으로 제공하는 타입입니다.
// 리액트 개발에서 Error 타입 객체는 Promise 타입 객체를 처리하는 코드와
// try~catch 구문을 사용하는 코드애서 흔히 만날 수 있습니다.
// 보통 리액트 개발에서 Error 객체는 다음처럼 Error | null 타입 상태로 구현합니다.

// const [error, setError] = useState<Error | null>(null)
// {error && <p>{error.message}</p> }

// 하지만 리덕스 상태로서 Error 타입은 이처럼 null 값일 수 있는 형태로 구현하는 것은 바람직하지 않습니다.
// 사실 UI 관점에서만 보면 Error 타입이 제공하는 모든 정보가 필요한 것이 아니라 오직 message 속성에 담긴 오류 메시지만 필요합니다.
// 따라서 다음처럼 오류 메시지의 길이가 0보다 큰 지 판단하는 코드를 만드는 것이 바람직합니다.

// const errorMessage = useSelector(state => state.errorMessage)
// {errorMessage.length && <p>{errorMessage}</p>}

// ---------- GPT 4.0 ---------- //

/*
이 코드는 Redux와 React를 사용하여 에러 메시지를 관리하는 예제입니다. 
사용자가 버튼을 클릭하면 에러 메시지를 생성하고, 그 메시지를 화면에 표시하는 기능을 구현하고 있습니다.

코드의 흐름은 다음과 같습니다:

1. 사용자가 "generate error message" 버튼을 클릭하면 generateErrorMessage 함수가 호출됩니다. 
    이 함수는 dispatch 함수를 인자로 받는 함수를 반환합니다. dispatch 함수는 Redux store에 액션을 디스패치하는 역할을 합니다.
2. generateErrorMessage 함수는 먼저 setErrorMessage('') 액션을 디스패치하여 에러 메시지를 초기화합니다. 
    그리고 Error 객체를 생성하여 에러 메시지를 설정하고, 이를 setErrorMessage(e.message) 액션의 페이로드로 사용하여 디스패치합니다.
3. 디스패치된 setErrorMessage 액션은 Redux reducer에 의해 처리됩니다. reducer는 액션의 타입에 따라 상태를 업데이트합니다. 
    여기서는 setErrorMessage 액션의 payload를 새로운 상태로 설정하여, 에러 메시지를 업데이트합니다.
4. 에러 메시지가 바뀌면, useSelector 훅이 반환하는 값도 바뀝니다. 
    useSelector는 Redux store의 상태를 조회하는 역할을 합니다. 여기서는 에러 메시지를 조회하고 있습니다.
5. useSelector가 반환하는 값이 바뀌면, 그 값을 사용하고 있는 컴포넌트가 리렌더링됩니다. 
    여기서는 에러 메시지에 따라 에러 메시지를 표시하거나 숨깁니다.

따라서, 이 코드는 사용자의 버튼 클릭에 따라 에러 메시지를 업데이트하고, 그
    상태에 따라 에러 메시지를 표시하거나 숨기는 기능을 구현하고 있습니다.

*/
