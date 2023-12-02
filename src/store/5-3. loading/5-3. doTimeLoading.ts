import { Dispatch } from "redux";
import { setLoading } from "./5-3. actions";

export const doTimeLoading = 
    (duration: number = 3 * 1000) => 
    (dispatch: Dispatch) => {
        dispatch(setLoading(true)) // action {type: '@loading/setLoadingAction', payload: true}
        const timerId = setTimeout(() => {
            clearTimeout(timerId)
            dispatch(setLoading(false)) // action {type: '@loading/setLoadingAction', payload: false}
        }, duration)
    }

    

// 흔히 볼 수 있는 UI지만 버튼을 누르면 로딩 화면이 나타나다
// 3초가 지나면 자동으로 사라지도록 구현했습니다.

// 이 기능을 구현하려면 다음과 같은 코드를 LoadingTest 컴포넌트에 구현해야 하며,
// 만약 다른 컴포넌트에도 이 기능을 추가하고 싶다면 이 코드를 계속 반복해서 작성해야 합니다.
// 또한 duration을 임의로 설정하려고 하면 컴포넌트마다 일일이 코드를 수정해야 합니다.

/*
    const duration = 3 * 1000
    const dispatch = useDispatch()
    const doTimeLoading = useCallback(() => {
        dispatch(setLoading(true))
        const timerId = setTimeout(() => {
            clearTimeout(timerId)
            dispatch(setLoading(false))
        }, duration)
    }, [])
*/

// 하지만 다음처럼 doTimeLoading 함수를 썽크 액션을 반환하는 형태로 구현하면 
// 컴포넌트마다 발생하는 코드 중복을 막을 수 있습니다.

// export const doTimeLoading = (duration: number = 3 * 1000) => 썽크_액션

// 이제 이렇게 동작하는 doTimeLoading 썽크 액션을 src/store/loading 디렉터리에 구현하겠습니다.
// 먼저 src/store/loading 디렉터리에 doTimeLoading.ts 이름의 파일을 생성합니다.

// 그리고 앞서 본 코드를 doTimeLoading 함수 내부에 다음처럼 작성합니다. 
// 코드는 setTimeout 함수를 호출하기 전에 매개변수로 setLoading(ture) 액션을 수신한 dispatch 함수로 리덕스 저장소에 보냅니다.
// 그리고 duration 만큼 시간이 경과되어 setTimeout 호출 때 설정한 콜백 함수가 동작하면,
// 이번에 setLoading(false) 액션을 다시 리덕스 저장소에 보내 로딩 상태를 true에서 false로 변경하는 내용입니다.


// ---------- GPT 4.0 ---------- //

// Q. 여기서  () => () => {} 이런 구문이 어떻게 성립할 수가 있는거지? 무슨 함수야 이게?

/*
사용자님께서 질문 주신 구문은 자바스크립트와 타입스크립트에서 사용되는 고차함수(high-order function)라는 개념입니다. 
고차함수란 함수를 인자로 받거나 함수를 결과로 반환하는 함수를 의미합니다.

여기서 doTimeLoading은 고차함수입니다. 이 함수는 '함수를 반환하는 함수'입니다.

export const doTimeLoading = 
    (duration: number = 3 * 1000) => 
    (dispatch: Dispatch) => {
        // 생략...
    }
위의 코드에서 doTimeLoading은 duration을 인자로 받아서 새로운 함수를 반환합니다. 
이 반환된 함수는 다시 dispatch를 인자로 받아서 로직을 수행합니다.

이런 형태의 함수는 특히 리덕스에서 미들웨어를 사용할 때 많이 보게 됩니다. 
위의 코드는 리덕스 미들웨어인 'redux-thunk'를 사용할 때의 전형적인 패턴입니다.

'redux-thunk'는 액션 생성자가 함수를 반환할 수 있게 해줍니다. 이 반환된 함수는 나중에 스토어에 의해 호출되며, 
이 때 dispatch와 getState를 인자로 받습니다. 이를 통해 비동기 작업을 수행하거나 여러번 디스패치를 할 수 있게 됩니다.

위의 doTimeLoading 함수에서도 setLoading(true)와 setLoading(false)를 디스패치하는 것을 볼 수 있습니다. 
이는 로딩 상태를 시작하고 일정 시간 후에 로딩 상태를 끝내는 작업을 수행합니다.

요약하자면, () => () => {} 형태의 함수는 고차함수로, 함수를 반환하는 함수입니다. 
이는 특히 비동기 로직을 다룰 때나 함수의 실행을 제어할 필요가 있을 때 유용하게 사용됩니다.
*/