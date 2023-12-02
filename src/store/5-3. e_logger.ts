import {Action, Dispatch} from 'redux'

export default function logger<S = any>({getState}: {getState: () => S}) {
    return (next: Dispatch) => (action: Action) => {
        console.log('state berfore next', getState())
        console.log('action', action)
        const returnedAction = next(action)
        console.log('state after next', getState())
        return returnedAction
    }
}

// 이제 logger라는 이름의 미들웨어를 만들업 보면서 미들웨어의 동작 원리를 좀 더 알아보겠습니다.
// logger.ts 파일을 열고 다음과 같은 코드를 작성합니다.
// 코드는 리덕스 저장소에 유입되는 액션과 리듀서들이 유입한 액션을 결합해
// 새로운 앱 상태를 콘솔 창에 출력하는 기능을 구현한 것입니다.

// 우선 getState() 함수는 현재 리덕스 저장소에 담긴 모든 상탯값을 가져옵니다.
// 그 다음 코드 next() 함수를 호출하기 전과 후로 구분됩니다.
// next() 함수를 호출하기 전에 현재 저장소의 상태와 유입된 액션을 콘솔 창에 출력하고,
// next() 함수 호출로 내용이 변경된 저장소의 상태를 콘솔 창에 출력합니다.
// 미들웨어는 반드시 next() 함수 호출로 얻은 반환값(예에서는 returnedAction)을 다시 반환해야 합니다.


// ---------- GPT 4.0 ---------- //

/*
이 코드는 Redux 미들웨어인 logger를 정의하는 코드입니다. 이 미들웨어는 액션이 디스패치되는 과정을 로깅하는 역할을 합니다.

export default function logger<S = any>({getState}: {getState: () => S}) {...}: 외부로 공개되는 logger 함수를 정의합니다. 
이 함수의 인자는 getState 함수를 포함하는 객체입니다. getState 함수는 현재 스토어의 상태를 반환합니다.

return (next: Dispatch) => ...: logger 함수는 함수를 반환합니다. 이 반환된 함수는 next라는 인자를 받습니다. 
next는 다음 미들웨어에 액션을 전달하는 함수입니다. 만약 다음 미들웨어가 없다면, next는 리듀서에 액션을 전달합니다.
(action: Action) => {...}: next를 인자로 받는 함수는 다시 함수를 반환합니다. 
이 반환된 함수는 action이라는 인자를 받습니다. action은 디스패치된 액션 객체입니다.

이제 이 함수 내부에서 실제 로깅 작업을 수행합니다.
console.log('state berfore next', getState()): 액션이 디스패치되기 전의 스토어 상태를 출력합니다.
console.log('action', action): 디스패치된 액션 객체를 출력합니다.
const returnedAction = next(action): next 함수를 호출하여 액션을 다음 미들웨어 혹은 리듀서로 전달하고, 
그 결과를 returnedAction에 저장합니다.

console.log('state after next', getState()): 액션이 디스패치된 후의 스토어 상태를 출력합니다.
return returnedAction: next(action)의 결과를 반환합니다.
따라서, 이 logger 미들웨어는 액션이 디스패치되는 과정에서 스토어의 상태 변화와 액션 객체를 콘솔에 출력하여, 
액션의 디스패치 과정을 추적하고 디버깅하는데 도움을 줍니다.

이해가 되셨나요? 혹시 추가로 궁금한 점이 있으시다면 언제든지 질문해주세요.
*/