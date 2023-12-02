import {Dispatch} from 'redux'
import {setErrorMessage} from './5-3. actions'

export const generateErrorMessage =
    (errorMessage: string = 'some error occured') =>
    (dispatch: Dispatch) => {
        dispatch(setErrorMessage(''))
        try {
            throw new Error(errorMessage)
        } catch (e) {
            if (e instanceof Error) dispatch(setErrorMessage(e.message))
        }
    }

// 그리고 generateErrorMessage 썽크 액션을 다음처럼 구현합니다.
// try~catch 구문으로 Error 타입 객체를 throw하는 형태로 Error 객체를 만듭니다.
// 참고로 if 문은 타입스크립트 컴파일 오류를 피하기 위해 필요합니다.
