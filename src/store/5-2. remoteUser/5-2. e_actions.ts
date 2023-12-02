import type * as T from './5-2. e_types'

export const setUser = (payload: T.State): T.SetuserAction => ({
    type: '@remoteUser/setUser',
    payload
})
export const changeEmail = (payload: string): T.ChangeEmailAction => ({
    type: '@remoteUser/changeEmail',
    payload
})
export const changeName = (payload: T.NameType): T.ChangeNameAction => ({
    type: '@remoteUser/changeName',
    payload
})
export const changePicture = (payload: T.PictureType): T.ChangePictureAction => ({
    type: '@remoteUser/changePicture',
    payload
})

// 그리고 src/store/remoteUser 디렉터리의 actions.ts 파일을 열고 다음처럼 코드를 작성합니다.
// RemoteUserTest.tsx 파일에 사용된 4개의 액션 생성기 함수입니다.

// ---------- GPT 4.0 ---------- //

// 네, 이 코드는 Redux에서 액션 생성 함수를 정의하는 부분입니다. setUser, changeEmail, changeName, changePicture라는 네 가지 함수를 정의하고 있습니다.

// import type * as T from './5-2. e_types':
// ./5-2. e_types 모듈에서 정의된 모든 타입을 T라는 별칭으로 임포트합니다.
// 이를 통해 이 모듈에서 정의된 타입들을 T.타입이름 형태로 사용할 수 있게 됩니다.

// export const setUser = (payload: T.State): T.SetuserAction => ({ type: '@remoteUser/setUser', payload }):
// setUser이라는 액션 생성 함수를 정의합니다. 이 함수는 payload라는 인자를 받아,
// type 속성이 '@remoteUser/setUser'이고 payload 속성이 인자로 받은 payload인 객체를 반환합니다.
// 이 객체는 T.SetuserAction 타입이므로, 이 타입에 정의된 대로 type 속성과 payload 속성을 가지고 있어야 합니다.

// export const changeEmail = (payload: string): T.ChangeEmailAction => ({ type: '@remoteUser/changeEmail', payload }):
// changeEmail 함수는 payload를 인자로 받아, type이 '@remoteUser/changeEmail'이고
// payload가 인자로 받은 payload인 액션 객체를 반환합니다. 이렇게 하면 사용자의 이메일을 변경할 수 있게 됩니다.

// export const changeName = (payload: T.NameType): T.ChangeNameAction => ({ type: '@remoteuser/changeName', payload }):
// changeName 함수는 payload를 인자로 받아, type이 '@remoteuser/changeName'이고
// payload가 인자로 받은 payload인 액션 객체를 반환합니다. 이렇게 하면 사용자의 이름을 변경할 수 있게 됩니다.

// export const changePicture = (payload: T.PictureType): T.ChagePictureAction => ({ type: '@remoteUser/changePicture', payload }):
// changePicture 함수는 payload를 인자로 받아, type이 '@remoteUser/changePicture'이고
// payload가 인자로 받은 payload인 액션 객체를 반환합니다. 이렇게 하면 사용자의 프로필 사진을 변경할 수 있게 됩니다.

// 이렇게 정의된 액션 생성 함수들은 디스패치 함수를 통해 호출되면,
// 해당 액션 객체를 생성하여 리듀서에 전달하게 됩니다. 이를 통해 상태를 업데이트하는 로직을 실행하게 됩니다.
