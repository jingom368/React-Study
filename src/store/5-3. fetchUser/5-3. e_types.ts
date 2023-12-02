import type {Action} from 'redux'
import * as D from '../../data'

export type State = D.IRandomUser

export type SetuserAction = Action<'@remoteUser/setUser'> & {
    payload: D.IRandomUser
}

export type ChangeEmailAction = Action<'@remoteUser/changeEmail'> & {
    payload: string
}

export type NameType = {
    title: string
    first: string
    last: string
}

export type ChangeNameAction = Action<'@remoteUser/changeName'> & {
    payload: NameType
}

export type PictureType = {
    large: string
} 

export type ChangePictureAction = Action<'@remoteUser/changePicture'> & {
    payload: PictureType
}

export type Actions = 
    | SetuserAction
    | ChangeEmailAction
    | ChangeNameAction
    | ChangePictureAction

// 이제 src/store/remoteUser 디렉터리의 types.ts 파일을 열고 다음처럼 코드를 작성합니다.
// 리듀서가 순수 하마수여야 하므로 remoteUser의 타입은 D.IrandomUser가 돼야 합니다.
// 그런데 코드에서 NameType이나 PictureType을 선언하고 있는데, 
// 이는 src/data/fetchRandomUser.ts 파일에 이름이 없는 타입들의 구체적인 내용이 필요하기 때문입니다.
// 리덕스를 사용하다보면 이처럼 구현에 필요한 타입들을 추가로 선언해 주어야 할 때가 종종 발생합니다.

// ---------- GPT 4.0 ---------- //

// 네, 이 코드는 Redux 액션과 상태를 TypeScript 타입으로 정의하는 부분입니다. 각 부분을 자세히 설명드리겠습니다.

// import type {Action} from 'redux':
// Redux에서 제공하는 Action 타입을 임포트합니다. 
// Action 타입은 Redux 액션 객체의 가장 기본적인 형태를 나타내며, type 속성을 가지고 있습니다.

// export type State = D.IRandomUser:
// State 타입을 D.IRandomUser로 정의합니다. 이는 해당 상태가 D.IRandomUser 타입의 사용자 정보를 관리한다는 것을 의미합니다.
// export type SetUserAction = Action<'@remoteUser/setUser'> & { payload: D.IRandomUser }:
// SetUserAction 타입은 '@remoteUser/setUser' 타입의 액션과 payload라는 추가적인 속성을 가진 객체의 타입입니다. 
// 여기서 payload는 액션이 실행될 때 전달되는 데이터를 담는 필드로, D.IRandomUser 타입의 사용자 정보를 가지게 됩니다.

// ChangeEmailAction, ChangeNameAction, ChangePictureAction:
// 각각 이메일, 이름, 사진을 변경하는 액션의 타입을 정의합니다. 
// 각 액션 타입은 액션의 type과 payload를 가지며, payload는 변경할 정보를 가지게 됩니다.

// export type Actions = SetUserAction | ChangeEmailAction | ChangeNameAction | ChangePictureAction:
// Actions 타입은 위에서 정의한 네 가지 액션 타입 중 하나를 가질 수 있습니다. 
// 이를 통해 리듀서 함수에서는 이 네 가지 액션 중 어떤 액션을 처리해야 할지를 알 수 있습니다.

// 이 코드를 통해 우리는 사용자 정보를 관리하기 위한 액션 타입과 상태 타입을 정의하고 있습니다. 
// 이렇게 타입을 정의함으로써 리듀서 함수나 액션 생성 함수에서 이 타입들을 사용하여 코드의 안정성을 높일 수 있습니다.


// Q. payload: D.IRandomUser 왜 얘는 이렇게 설정한 걸까?

// payload: D.IRandomUser는 액션 객체에 추가적인 데이터를 전달하는 역할을 합니다. 
// D.IRandomUser는 사용자 정보를 나타내는 타입입니다. 
// 따라서 payload: D.IRandomUser는 사용자 정보를 담은 객체를 액션 객체에 전달한다는 것을 의미합니다.

// 특정 액션에 따라 상태를 변경할 때, 단순히 액션의 종류(type)만으로는 충분하지 않을 때가 있습니다. 
// 예를 들어, 사용자 정보를 설정(setUser)하는 액션을 처리할 때는 새로 설정할 사용자 정보가 필요하겠죠. 
// 이런 경우에는 액션 객체에 payload라는 추가적인 필드를 두어 필요한 데이터를 함께 전달합니다.

// 따라서 setUser 액션 생성 함수에서는 payload: D.IRandomUser를 통해 새로 설정할 사용자 정보를 액션 객체에 담아 리듀서에 전달하게 됩니다. 
// 그리고 리듀서에서는 이 payload를 사용하여 사용자 정보 상태를 업데이트하게 됩니다.