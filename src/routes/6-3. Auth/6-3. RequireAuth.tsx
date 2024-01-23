import type {FC, PropsWithChildren} from 'react'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useAuth} from '../../contexts'

type RequireAuthProps = {}

const RequireAuth: FC<PropsWithChildren<RequireAuthProps>> = ({children}) => {
    const {loggedUser} = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!loggedUser) navigate(-1) // 허가 되지 않은 사용자 : 이전 페이지로 돌아감
    }, [loggedUser, navigate])

    return <>{children}</>
}

export default RequireAuth

/*
    로그인한 사용자만 접근하도록 막기

    클라이언트 측 라우팅은 웹 브라우저의 주소 창을 이용하므로 사용자가 주소 창에서
    'http://localhost:3000/logout'을 직접 입력하면 로그인하지 않았는데도 로그아웃 페이지에 진입할 수 있습니다.
    이 때문에 '/logout' 등의 경로가 로그인하지 않으면 절대로 진입할 수 없는 비공개 라우트가 되려면
    useAuth 훅 호출로 얻은 loggedUser 값이 undefined인지를 검사하는 로직을 
    모든 비공개 라우트와 연결된 컴포넌트에 구현해 주어야 합니다.

    그런데 이 작업은 똑같은 로직을 모든 컴포넌트에 구현해 줘야 하므로 상당히 번거롭습니다.
    RequireAuth 컴포넌트는 모든 비공개 라우트에 구현해 줘야 하는 기능을 한군데에 구현해 놓아 중복되는 코드를 줄이는 역할을 합니다.

    다음은 잠시 후 구현할 RoutesSetup.tsx 코드에서 RequireAuth 컴포넌트 사용 예를 가져온 것입니다.
    RequireAuth의 구현 목적이 비공개 라우트에 설정된 컴포넌트마다 구현할 로직을 한 군데에서 처리하는 것이므로
    <Board />가 비공개 라우트가 되도록 <Board />를 RequireAuth로 감싸는 방식으로 구현합니다.

    <Route path="/board"
        element={
            <RequiredAuth>
                <Board />
            </RequiredAuth>
        }
    />
    
    이제 src/routes 디렉터리의 RequireAuth.tsx 파일을 열고 다음과 같은 코드를 작성합니다.
    코드는 loggeduser 값이 undefined일 때는 이전 페이지로 돌아가고, 아니면 <Board />와 같은 
    children 속성에 담긴 요소가 화면에 나타나게 합니다.
    <>{children}</> 부분은 02장에서 알아본 것처럼 {children}을 직접 반환할 수 없으므로
    React.Fragment 컴포넌트의 단축형인 <></>로 {children}을 감싼 것입니다.
*/
