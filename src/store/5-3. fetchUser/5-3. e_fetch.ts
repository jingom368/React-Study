import { Dispatch } from 'redux'
import * as L from '../5-3. loading'
import * as E from '../5-3. errorMessage'
import * as D from '../../data'
import { changeEmail, changeName, changePicture, setUser } from './5-3. e_actions'

export const getRemoteUser = () => (dispatch: Dispatch) => {
    dispatch(L.setLoading(true))
    dispatch(E.setErrorMessage(''))
    D.fetchRandomUser()
        .then(user => dispatch(setUser(user)))
        .catch((e: Error) => E.setErrorMessage(e.message))
        .finally(() => dispatch(L.setLoading(false)))
}

export const changeNameByFetching = () => (dispatch: Dispatch) => {
    dispatch(L.setLoading(true))
    dispatch(E.setErrorMessage(''))
    D.fetchRandomUser()
        .then(user => dispatch(changeName(user.name)))
        .catch((e: Error) => E.setErrorMessage(e.message))
        .finally(() => dispatch(L.setLoading(false)))
}
export const changeEmailByFetching = () => (dispatch: Dispatch) => {
    dispatch(L.setLoading(true))
    dispatch(E.setErrorMessage(''))
    D.fetchRandomUser()
        .then(user => dispatch(changeEmail(user.email)))
        .catch((e: Error) => E.setErrorMessage(e.message))
        .finally(() => dispatch(L.setLoading(false)))
}
export const changePictureByFetching = () => (dispatch: Dispatch) => {
    dispatch(L.setLoading(true))
    dispatch(E.setErrorMessage(''))
    D.fetchRandomUser()
        .then(user => dispatch(changePicture(user.picture)))
        .catch((e: Error) => E.setErrorMessage(e.message))
        .finally(() => dispatch(L.setLoading(false)))
}

// 5-2 절에서 RemoteUserTest 컴포넌트는 다음과 같은 형태로 구현했습니다.
// 이번 절에서 살펴본 리덕스 미들웨어를 사용해 RemoteUserTest 컴포넌트와
// 똑같이 동작하는 fetchUser라는 멤버 상태를 구현해 보겠습니다.

// 앞서 5-2 절의 GetRemoteUser.tsx 파일은 getRemoteUser와 changeName 콜백 함수에서 D.fetchRandomUser 함수를 호출하고 있습니다.
// 이제 이 콜백 함수의 내용을 fetch.ts 파일에 다음처럼 구현합니다. 코드는 리액트 훅을 사용하는 부분을 모두 썽크 액션 형태로 바꾼 다음,
// useState 훅 호출로 얻은 세터 함수들의 호출 코드를 loading과 errorMessage 멤버 상태의 액션들을 dispatch하는 방식으로 바꾸었습니다.
// 다만 changeName이란 액션의 이름이 서로 중복되므로 changeName 대신 changeNameByFetching이란 이름의 함수를 내보내고 있습니다.