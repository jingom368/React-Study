import React, {useCallback, useEffect, useState} from 'react'
import {useToggle} from '../hooks'
import * as D from '../data'
import {Avatar, Title} from '../components' // 변경
import {useSelector, useDispatch} from 'react-redux' // 추가
import {Button} from '../theme/daisyui' // 추가
import type {AppState2} from '../store' // 추가
import * as R from '../store/5-2. remoteUser' // 추가

export default function RemoteUserTest() {
    const dispatch = useDispatch() // 추가
    // const user = useSelector<AppState, R.State>(state => state.remoteUser) //  추가
    const user = useSelector<AppState2, R.State>(({remoteUser}) => remoteUser)

    const [loading, toggleLoading] = useToggle()
    const [error, setError] = useState<Error | null>(null)

    // const [randomuser, setRandomUser] = useState<D.IRandomUser | null>(null)

    // const getRandomUser = useCallback(() => {
    const getRemoteUser = useCallback(() => {
        toggleLoading()
        D.fetchRandomUser()
            // .then(setRandomUser)
            .then(user => dispatch(R.setUser(user)))
            .catch(setError)
            .finally(toggleLoading)
        // }, [toggleLoading])
    }, [dispatch, toggleLoading])

    const changeName = useCallback(() => {
        toggleLoading()
        D.fetchRandomUser()
            .then(user => dispatch(R.changeName(user.name)))
            .catch(setError)
            .finally(toggleLoading)
    }, [dispatch, toggleLoading])

    const changeEmail = useCallback(
        () => dispatch(R.changeEmail(D.randomEmail())),
        [dispatch]
    )

    const changePicture = useCallback(
        () => dispatch(R.changePicture({large: D.randomAvatar()})),
        [dispatch]
    )

    // useEffect(getRandomUser, [getRandomUser])
    useEffect(getRemoteUser, [getRemoteUser])

    return (
        <section className="mt-4">
            <Title>RemoteUserTest</Title>
            <div className="flex justify-center mt-4">
                <Button className="btn btn-sm btn-primary" onClick={getRemoteUser}>
                    get remote user
                </Button>
                <Button className="ml-4 btn btn-sm btn-accent" onClick={changeName}>
                    change name
                </Button>
                <Button className="ml-4 btn btn-sm btn-success" onClick={changeEmail}>
                    change email
                </Button>
                <Button className="ml-4 btn btn-sm btn-secondary" onClick={changePicture}>
                    change picture
                </Button>
            </div>

            {loading && (
                <div className="flex items-center justify-center">
                    <button className="btn-btn-circle loading"></button>
                </div>
            )}
            {error && (
                <div className="p-4 mt-4 bg-red-200">
                    <p className="text-3xl text-red-500 text-bold">{error.message}</p>
                </div>
            )}

            {/* {randomuser && ( */}
            <div className="flex justify-center p-4 mt-4">
                <Avatar src={user.picture.large} />
                <div className="ml-4">
                    <p className="text-xl text-bold">
                        {user.name.title} {user.name.first} {user.name.last}
                    </p>
                    <p className="italic text-gray-600">{user?.email}</p>
                </div>
            </div>
            {/* )} */}
        </section>
    )
}

// 앞서 리듀서는 순수 함수여야 한다고 했는데, 리듀서가 순수 함수려면 D.fetchRandomUser()와 같은
// Promise 객체로 동작하는 비동기 함수 호출 코드가 없어야 합니다. 따라서 D.fetchRandomUser() 호출과
// 관련 있는 loading이나 error와 같은 데이터들은 리덕스 관련 코드에서 제외해야 합니다.
// 결국 remoteUser 멤버 상태와 관련된 데이터는 user만 있게 됩니다.

// ---------- GPT 4.0 ---------- //

// Q. 위의 코드에 대한 아래가 설명인데 이게 무슨 말이야?

// 네, 그 부분은 Redux의 특징과 관련된 내용입니다.
// Redux에서는 상태를 변경하는 로직을 '리듀서'라는 순수 함수로 작성합니다.
// 순수 함수란, 동일한 입력에 대해 항상 동일한 결과를 반환하며, 외부 상태에 의존하지 않고, 외부 상태를 변경하지 않는 함수를 말합니다.

// D.fetchRandomUser()는 외부 API를 호출하여 데이터를 가져오는 비동기 함수입니다.
// 이는 네트워크 상태, 서버 상태 등 외부 상태에 따라 결과가 달라질 수 있고,
// 호출할 때마다 다른 결과를 가져올 수 있습니다. 따라서 이 함수는 순수 함수가 아닙니다.

// 이런 비동기 함수를 호출하고 그 결과를 처리하는 로직은 리듀서에서 다루지 않습니다.
// 대신, 이런 로직은 리덕스 미들웨어나 컴포넌트 내부에서 처리하게 됩니다.
// 이 코드에서는 컴포넌트 내부의 useCallback 훅에서 D.fetchRandomUser()를 호출하고 그 결과를 처리하고 있습니다.

// 그리고 이 비동기 함수 호출과 관련된 loading이나 error 상태도 리덕스 상태에서 관리하지 않습니다.
// 이 상태들은 외부 API 호출과 같은 비동기 작업의 상태를 다루는 것이므로,
// 이를 컴포넌트 내부 상태로 관리하게 됩니다. 이 코드에서는 useState와 useToggle 훅을 사용하여 이 상태들을 관리하고 있습니다.

// 따라서 이 코드에서는 'remoteUser' 상태와 관련된 데이터로 'user'만을 리덕스 상태로 관리하고 있습니다.
// 'user'는 API에서 가져온 사용자 정보를 담은 객체입니다. 이 객체는 액션을 통해 업데이트하고,
// 리듀서에서는 이를 순수 함수로 처리하므로, 리덕스의 원칙을 지키는 것이 가능합니다.

// Q. 이거 지금 const user = useSelector<AppState, R.State>({remoteUser} => remoteUser) //  추가 여기서 오류뜸 어떻게 해

// useSelector 훅은 Redux 저장소의 일부 상태를 선택하여 반환하는 함수입니다.
// useSelector를 사용할 때 첫 번째 매개변수로 상태 선택 함수를 전달해야 합니다.
// 이 함수는 전체 상태를 인수로 받고, 반환 값은 선택된 상태의 부분집합입니다.

// 현재 코드에서 문제가 되는 부분은 {remoteUser} => remoteUser입니다.
// 이 부분은 상태 선택 함수로, 전체 상태에서 remoteUser 부분을 선택하려는 의도로 보입니다.
// 하지만 현재 중괄호 {}로 인해 remoteUser가 객체의 속성으로 인식되어 오류가 발생하고 있습니다.

// 이를 수정하려면 중괄호 {}를 제거하고, 상태 객체의 remoteUser 속성을 정확히 선택하도록 코드를 수정해야 합니다.
// 아래와 같이 수정해보세요:
// const user = useSelector<AppState, R.State>((state) => state.remoteUser);
// 위의 코드에서 (state) => state.remoteUser는 상태 선택 함수로,
// 전체 상태 객체 state에서 remoteUser 속성을 선택하여 반환합니다. 이로 인해 user는 remoteUser 상태를 가리키게 됩니다.

// Q. 이거 어떻게 구동되는 건지 이해가 하나도 안가서 흐름이랑 코드랑 매칭 해서 아주 자세하게 설명해줄 수 있을까?

/* 
물론입니다. 아래에 각 부분의 역할을 아주 자세하게 설명하겠습니다.

1. 타입 정의 (5-2. e_types)
- State: 현재 상태를 나타내는 타입입니다. D.IRandomUser 타입을 사용하고 있으며, 이는 사용자 정보를 나타내는 타입입니다.
- SetuserAction, ChangeEmailAction, ChangeNameAction, ChangePictureAction: 
    각각의 액션을 나타내는 타입입니다. 각 타입은 고유한 type 속성과 payload를 가지고 있습니다.
- Actions: 가능한 모든 액션을 나타내는 타입입니다. 위에서 정의한 액션 타입들을 유니온(|)으로 연결하여 사용합니다.

2. 액션 생성 함수 (5-2. e_types)
- setUser, changeEmail, changeName, changePicture: 각각의 액션을 생성하는 함수입니다. 
    각 함수는 액션의 payload를 인자로 받고, 해당 type과 payload를 가진 액션 객체를 반환합니다.

3. 리듀서 함수 (5-2. e_types)
- reducer: 상태와 액션을 인자로 받아 새로운 상태를 반환하는 함수입니다. 
    액션의 type에 따라 다른 처리를 하며, 처리 결과를 새 상태로 반환합니다. 처리할 액션이 없는 경우 현재 상태를 그대로 반환합니다.

4. 컴포넌트 (RemoteUserTest)
- useDispatch와 useSelector 훅을 사용하여 액션을 디스패치하고 상태를 조회합니다.
- useEffect와 useCallback을 사용하여 비동기 작업을 처리합니다.
- getRemoteUser 함수는 useEffect에 의해 컴포넌트가 렌더링될 때 호출됩니다. 
    이 함수는 D.fetchRandomUser()를 호출하여 사용자 정보를 가져옵니다.
- 사용자 정보가 성공적으로 가져와지면, setUser 액션을 디스패치하여 상태를 업데이트합니다.
- changeName, changeEmail, changePicture 함수는 각각 이름, 이메일, 사진을 변경하는 액션을 디스패치합니다. 
    이 함수들은 버튼 클릭에 의해 호출됩니다.
- 상태가 업데이트되면 useSelector 훅에 의해 컴포넌트가 리렌더링됩니다. 이때 user는 새로 업데이트된 상태를 가리키게 됩니다.
- 이렇게 상태가 변경될 때마다 컴포넌트가 리렌더링되어 UI가 업데이트됩니다.

이런 식으로 Redux는 액션을 디스패치하는 방식으로 상태를 변경하고, 변경된 상태는 useSelector 훅을 통해 컴포넌트에서 사용됩니다. 
이렇게 하면 상태 변경 로직과 UI 로직이 분리되어 코드의 가독성과 유지보수성이 향상됩니다.
*/

// Q. 사용자 정보가 성공적으로 가져와지면, setUser 액션을 디스패치하여 상태를 업데이트합니다.
// 이 부분이 디스패치하여서 리듀서로 가서 액션 타입에 따라 업데이트 된다는 걸 의미하는 거지?
// 그리고 return {...state, picture: action.payload} 이렇게 return을 하는데 어떻게 기존의 상태에서 새로운 상태로 변경이 되는거야?

/*
네, 맞습니다. setUser 액션을 디스패치하면, 이 액션은 Redux 스토어로 전달되고, 
스토어는 이 액션을 현재 상태와 함께 리듀서 함수에 전달합니다. 
리듀서 함수는 액션의 type에 따라 상태를 업데이트하고, 그 결과를 새로운 상태로 반환합니다.

상태 업데이트 구문인 return {...state, picture: action.payload}에서, 
{...state}는 현재 상태의 모든 속성을 새 객체에 복사하는 것을 의미합니다. 
그리고 picture: action.payload는 picture 속성을 action.payload로 업데이트하는 것입니다.

따라서 이 구문은 현재 상태의 모든 속성을 복사한 새 객체를 생성하고, 
picture 속성만 action.payload로 업데이트한 새로운 상태를 반환합니다. 
이렇게 함으로써 기존 상태는 그대로 유지되며, 새로운 상태는 이전 상태와 다른 참조를 가지게 됩니다. 
이는 불변성을 유지하면서 상태를 업데이트하는 Redux의 원칙을 따릅니다.

이렇게 생성된 새로운 상태는 Redux 스토어에 저장되고, 
이후 useSelector 훅을 통해 컴포넌트에 전달되어 UI를 업데이트하는 데 사용됩니다.
*/

// Q. '이렇게 함으로써 기존 상태는 그대로 유지되며, 새로운 상태는 이전 상태와 다른 참조를 가지게 됩니다.
// 이는 불변성을 유지하면서 상태를 업데이트하는 Redux의 원칙을 따릅니다.
// 이렇게 생성된 새로운 상태는 Redux 스토어에 저장되고, 이후 useSelector 훅을 통해 컴포넌트에 전달되어 UI를 업데이트하는 데 사용됩니다.'
// 근데 여기서 궁금한 부분은 왜 기존 상태의 이미지가 뜨지 않고 새로 업데이트된 이미지만 뜨는지가 궁금해

/*
Redux는 애플리케이션의 상태를 단일한 저장소에서 관리합니다. 사진 변경 버튼을 누르면 changePicture 액션을 디스패치하고, 
이 액션은 리듀서에 의해 처리됩니다. 리듀서는 changePicture 액션을 받으면, picture 속성을 새로운 값으로 업데이트한 새로운 상태를 반환합니다.

이 새로운 상태는 기존 상태를 대체하게 됩니다. 즉, 기존 상태와 새로운 상태가 동시에 존재하지 않습니다. 
그래서 기존 상태의 사진이 아닌, 새로 업데이트된 사진만 렌더링되는 것입니다. 
Redux는 애플리케이션의 현재 상태를 항상 최신으로 유지하며, 이전 상태는 유지되지 않습니다.

만약 기존 상태의 사진도 유지하고 싶다면, 상태 구조를 변경하여 여러 사진을 저장하도록 해야 합니다. 
예를 들어, picture를 배열로 만들어 여러 사진을 저장하도록 할 수 있습니다. 
하지만 이런 방식은 상태 관리가 복잡해질 수 있으므로, 필요한 경우에만 사용하는 것이 좋습니다.
*/

// Q. 그니까 REDUX의 상태는 항상 새로운 상태가 들어오면 기존의 상태와 비교하여
// 다를 경우에 기존의 상태는 버리고 새로운 상태로 대체된다는 거를 의미하는 거지?

/*
네, 맞습니다. Redux의 상태는 불변성(Immutability)을 유지해야 합니다. 
즉, 상태를 직접 수정하는 것이 아니라, 새로운 상태를 생성하여 기존의 상태를 대체합니다.

이것은 Redux의 기본 원칙 중 하나이며, 이를 통해 상태의 변화를 명확하게 추적하고, 
성능 최적화를 돕는데 중요한 역할을 합니다. 이는 React의 렌더링 최적화와도 관련이 있습니다.

React는 상태가 바뀌었는지 판단할 때, 객체의 참조를 비교합니다. 즉, 상태의 불변성을 유지하면서 새로운 상태를 생성하면, 
React는 이를 새로운 상태로 인식하고 그에 따른 렌더링을 수행합니다. 이로 인해 UI는 항상 최신의 상태를 반영하게 됩니다.
*/

// Q. '상태의 변화를 명확하게 추적하고' 여기서 말하는 상태의 변화를 어디서 추적할 수 있는거야?

/*
Redux는 상태 변화를 추적하는 데 도움이 되는 여러 도구를 제공합니다.

개발 과정에서 가장 많이 사용되는 도구 중 하나는 Redux DevTools라는 브라우저 확장 프로그램입니다. 
이 도구를 사용하면 애플리케이션의 상태, 디스패치된 액션, 그리고 각 액션에 따른 상태 변화를 시간 순서대로 확인할 수 있습니다.

또한, 이 도구는 'time-traveling' 디버깅을 지원하여, 애플리케이션의 이전 상태로 "돌아갈" 수 있게 해줍니다. 
이는 애플리케이션의 버그를 찾고 수정하는 데 매우 유용합니다.

또한, Redux middleware를 사용하여 액션과 상태 변화를 로깅하거나, 서버에 보고하는 등 다양한 방식으로 상태 변화를 추적할 수 있습니다.

이렇게 Redux는 상태 변화를 명확하게 추적하는 데 도움이 되는 다양한 도구와 미들웨어를 제공합니다. 
이를 통해 개발자는 애플리케이션의 상태 관리를 보다 효과적으로 수행할 수 있습니다.
*/
