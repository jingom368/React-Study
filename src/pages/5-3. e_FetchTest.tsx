import {useCallback, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Avatar, Title} from '../components'
import {Button} from '../theme/daisyui'
import type {AppState3} from '../store'
import * as F from '../store/5-3. fetchUser' // 추가
// import * as L from '../store/5-3. loading'
// import * as E from '../store/5-3. errorMessage'
// import * as D from '../data'

export default function FetchTest() {
    const dispatch = useDispatch()
    // const loading = useSelector<AppState, L.State>(({loading}) => loading)
    // const errorMessage = useSelector<AppState, E.State>(({errorMessage}) => errorMessage)
    // const fetchUser = useSelector<AppState, F.State>(({fetchUser}) => fetchUser)
    const {
        loading,
        errorMessage,
        fetchUser: user
    } = useSelector<AppState3, AppState3>(state => state)

    // const user = useSelector<AppState, R.State>(({remoteUser}) => remoteUser)
    // const [loading, toggleLoading] = useToggle()
    // const [error, setError] = useState<Error | null>(null)

    const getRemoteUser = useCallback(() => {
        dispatch<any>(F.getRemoteUser())
    }, [dispatch])
    //        toggleLoading()
    //        D.fetchRandomUser()
    //            .then(user => dispatch(R.setUser(user)))
    //            .catch(setError)
    //            .finally(toggleLoading)
    //    }, [dispatch, toggleLoading])

    const changeName = useCallback(() => {
        dispatch<any>(F.changeNameByFetching())
    }, [dispatch])
    //     toggleLoading()
    //     D.fetchRandomUser()
    //         .then(user => dispatch(R.changeName(user.name)))
    //         .catch(setError)
    //         .finally(toggleLoading)
    // }, [dispatch, toggleLoading])

    // const changeEmail = useCallback(
    //     () => dispatch(F.changeEmail(D.randomEmail())),
    //     [dispatch]
    // )
    const changeEmail = useCallback(() => {
        dispatch<any>(F.changeEmailByFetching())
    }, [dispatch])

    // const changePicture = useCallback(
    //     () => dispatch(F.changePicture({large: D.randomAvatar()})),
    //     [dispatch]
    // )
    const changePicture = useCallback(() => {
        dispatch<any>(F.changePictureByFetching())
    }, [dispatch])

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
            {errorMessage && (
                <div className="p-4 mt-4 bg-red-200">
                    <p className="text-3xl text-red-500 text-bold">{errorMessage}</p>
                </div>
            )}

            <div className="flex justify-center p-4 mt-4">
                <Avatar src={user.picture.large} />
                <div className="ml-4">
                    <p className="text-xl text-bold">
                        {user.name.title} {user.name.first}
                        {user.name.last}
                    </p>
                    <p className="italic text-gray-600">{user?.email}</p>
                </div>
            </div>
        </section>
    )
}

// 코드를 실행해보면 RemoteUserTest 컴포넌트와 똑같이 동작합니다.
// 썽크 액션은 이처럼 복잡한 리액트 훅 코드 호출 부분을 좀 더 간결한 형태로 구현하는 데 도움을 줍니다.

// Q. 이거 어떻게 구동되는 건지 이해가 하나도 안가서 흐름이랑 코드랑 매칭 해서 아주 자세하게 설명해줄 수 있을까?

/*
네, 당연하죠. 아래에서 전체적인 흐름을 설명해드리겠습니다.

1. FetchTest 컴포넌트가 렌더링됩니다. 이 때, useSelector 훅을 사용하여 Redux 스토어의 상태를 가져옵니다. 
    이 상태에는 loading, errorMessage, 그리고 fetchUser 정보가 포함되어 있습니다.
2. useEffect 훅이 getRemoteUser 함수를 호출합니다. 이 함수는 useCallback 훅으로 메모이제이션되어 있어서, 
    이 함수의 의존성이 변경되지 않는 한 항상 동일한 참조를 반환합니다.
3. getRemoteUser 함수는 dispatch 함수를 사용하여 F.getRemoteUser() 액션을 Redux 스토어로 디스패치합니다.
4. F.getRemoteUser() 함수는 비동기 작업을 시작하기 전에 L.setLoading(true) 액션을 디스패치하여 로딩 상태를 true로 설정하고, 
    에러 메시지를 초기화하는 E.setErrorMessage('') 액션을 디스패치합니다.
5. F.getRemoteUser() 함수는 D.fetchRandomUser() 함수를 호출하여 랜덤 사용자 정보를 가져옵니다. 
    이 작업이 성공하면, 가져온 사용자 정보를 setUser(user) 액션으로 Redux 스토어에 저장합니다.
6. F.getRemoteUser() 함수는 비동기 작업이 완료된 후에 L.setLoading(false) 액션을 디스패치하여 로딩 상태를 false로 설정합니다.
7. FetchTest 컴포넌트는 Redux 스토어의 상태가 변경될 때마다 리렌더링됩니다. 
    따라서, 사용자 정보가 업데이트되거나 로딩 상태가 변경되면 컴포넌트가 리렌더링되어 화면에 새로운 상태를 표시합니다.
*/

// Q. 전체적인 흐름을 상세하게 '코드'랑 매칭시켜서 보여줘야지!

/*
1. FetchTest 컴포넌트에서 useSelector 훅을 사용하여 Redux 스토어의 loading, errorMessage, fetchUser 상태를 가져옵니다.
    const {
        loading,
        errorMessage,
        fetchUser: user
    } = useSelector<AppState, AppState>(state => state)

2. 그 다음으로 useEffect 훅을 사용하여 컴포넌트가 마운트될 때 getRemoteUser 함수를 호출합니다. 
    이 함수는 useCallback 훅으로 메모이제이션되어 있습니다.

    useEffect(getRemoteUser, [getRemoteUser])

3. getRemoteUser 함수는 dispatch 함수를 사용하여 F.getRemoteUser() 액션을 Redux 스토어로 디스패치합니다.
    const getRemoteUser = useCallback(() => {
        dispatch<any>(F.getRemoteUser())
    }, [dispatch])

4. F.getRemoteUser() 함수는 Redux 스토어로 L.setLoading(true) 액션을 디스패치하여 로딩 상태를 true로 설정하고, 
    에러 메시지를 초기화하는 E.setErrorMessage('') 액션을 디스패치합니다.

    export const getRemoteUser = () => (dispatch: Dispatch) => {
        dispatch(L.setLoading(true))
        dispatch(E.setErrorMessage(''))
        //...
    }

5. 이어서, F.getRemoteUser() 함수는 D.fetchRandomUser() 함수를 호출하여 랜덤 사용자 정보를 가져옵니다. 
    이 작업이 성공하면, 가져온 사용자 정보를 setUser(user) 액션으로 Redux 스토어에 저장합니다.

    D.fetchRandomUser()
        .then(user => dispatch(setUser(user)))
        //...

6. 마지막으로, F.getRemoteUser() 함수는 비동기 작업이 완료된 후에 
    L.setLoading(false) 액션을 디스패치하여 로딩 상태를 false로 설정합니다.

    .finally(() => dispatch(L.setLoading(false)))

7. 이 모든 작업이 완료되면, FetchTest 컴포넌트는 Redux 스토어의 상태가 변경될 때마다 리렌더링됩니다. 
    따라서, 사용자 정보가 업데이트되거나 로딩 상태가 변경되면 컴포넌트가 리렌더링되어 화면에 새로운 상태를 표시합니다.

    {loading && (
        <div className="flex items-center justify-center">
            <button className="btn-btn-circle loading"></button>
        </div>
    )}
    {errorMessage && (
        <div className="p-4 mt-4 bg-red-200">
            <p className="text-3xl text-red-500 text-bold">{errorMessage}</p>
        </div>
    )}

    <div className="flex justify-center p-4 mt-4">
        <Avatar src={user.picture.large} />
        <div className="ml-4">
            <p className="text-xl text-bold">
                {user.name.title} {user.name.first}
                {user.name.last}
            </p>
            <p className="italic text-gray-600">{user?.email}</p>
        </div>
    </div>

이러한 방식으로 getRemoteUser 함수는 데이터를 가져와서 스토어에 저장하고, 
    FetchTest 컴포넌트는 그 데이터를 화면에 표시하는 역할을 합니다. 
*/

// Q. changeEmail or changePicture도 썽크 액션 쓰는 걸로 바꿔도 돼?

/*

*/
