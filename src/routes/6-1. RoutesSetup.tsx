import React from 'react'
import {Routes, Route} from 'react-router-dom'
import NoMatch from './6-1. NoMatch'
import Board from '../pages/5-4. Board'
// 6-1.
// import Home from './6-1. Home'
// import Card from './6-1. Card'

// 6-2.
import Layout from './6-2. Layout'
import LandingPage from './6-2. LandingPage'

// 6-3.
import SignUp from './6-3. Auth/6-3. e_SignUp'
import Login from './6-3. Auth/6-3. Login'
import Logout from './6-3. Auth/6-3. Logout'
import RequireAuth from './6-3. Auth/6-3. RequireAuth'

export default function RoutesSetup() {
    return (
        <Routes>
            {/* 6-1 */}
            {/* <Route path="/" element={<Home />} />
            <Route path="/welcome" element={<Home title="welcome to our site" />} />
            <Route path="/board" element={<Board />} />
            <Route path="/board/card/:cardid" element={<Card />} />
            <Route path="*" element={<NoMatch />} /> */}
            {/* 6-2 */}
            <Route path="/" element={<Layout />}>
                <Route index element={<LandingPage />} />
                <Route
                    path="/board"
                    element={
                        <RequireAuth>
                            <Board />
                        </RequireAuth>
                    }
                />
                <Route path="*" element={<NoMatch />} />
            </Route>
            {/* 6-3 */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route
                path="/logout"
                element={
                    <RequireAuth>
                        <Logout />
                    </RequireAuth>
                }
            />
        </Routes>
    )
}

/*
    리액트 라우터 패키지를 사용하려면 Routes와 Route, 그리고 Link라는 이름의 컴포넌트를 알아야 합니다.
    리액트 라우터는 다음처럼 Routes와 Route 컴포넌트를 제공합니다.

    import {Routes, Route} from 'react-router-dom'

    Route 컴포넌트는 path와 element라는 속성을 제공하며, 다음 코드는 주소 창에 경로 '/'가 있을 때,
    Home이란 이름의 컴포넌트를 화면에 보이게 설정(라우틴)하는 예입니다.

    경로 '/'를 Home 컴포넌트로 라우팅하기
    import Home from './Home'
    <Route path ="/" element={<Home />} />

    만일 모든 경로를 element 속성에 설정한 컴포넌트로 라우팅하고 싶다면 다음처럼 path 경로에 "*"을 설정합니다.
    
    모든 경로를 NoMatch 컴포넌트로 라우팅하기
    import NoMatch from './NoMatch'
    <Route path="*" element={<NoMatch />} />

    그런데 Route 컴포넌트는 단독으로 사용할 수 없고 항상 Routes 컴포넌트의 자식 컴포넌트로 사용해야 합니다.
    다음 src/routes 디렉터리의 RoutesSetup.tsx 파일은 모든 경로에 대해 NoMatch 컴포넌트가 화면에 나타나도록 설정합니다.
    그런데 Route는 독립적일 수 없으므로 Routes 컴포넌트의 자식 컴포넌트로 사용되고 있습니다.
*/

/*
    앞서 언급한대로 Outlet 컴포넌트는 다른 컴포넌트가 렌더링되는 위치를 지정해 주는 용도이므로
    Outlet에 보이기 원하는 컴포넌트는 Outlet을 사용하는 컴포넌트(예에서는 Layout 커머포넌트)의 자식 라우터로 구성합니다.
    따라서 Board와 NoMatch의 Route는 Layout의 자식으로 설정합니다.

    다음 그림은 'http://localhost:3000' 주소로 접속한 웹 브라우저의 화면으로, 오른쪽 개발 도구 창의
    [Elements] 탭 내용을 보면 Layout 컴포넌트 내부의 <Outlet> 컴포넌트가 현재는 존재하는지조차 알 수가 없습니다.

    하지만 주소 창에 'http://localhost:3000/board' 경로를 직접 입력해 보면 다음 그림처럼 Board 컴포넌트가 화면에 나타납니다.

    웹 브라우저의 호마녀과 RoutesSetup.tsx 파일 내용을 비교해 보면, Layout 내부의 Outlet 컴포넌트는 자신의 자식 라우트 경로에
    설정된 컴포넌트를 화면에 나타나게 하는 역할을 하고 있음을 알 수 있습니다.

    <Route path="/" element={<Layout />}>
        <Route path="/board" element={<Board />} />
        <Route path="*" element={<NoMatch />} />
    </Route>

    앞 절에서 본 라우터 설정은 다음처럼 Home과 NoMatch 컴포넌트가 형제 관계로 이루어졌습니다.

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoMatch />} />
    </Routes>

    반면에 앞서 본 Outlet 컴포넌트를 사용하면 NoMatch는 Outlet의 자식 라우터로 설정되는데, 
    리액트 라우터에서는 이를 중첩 라우트 설정이라고 합니다.
    리액트에서 부모 컴포넌트는 자식 컴포넌트 안에서 렌더링될 수 없습니다.
    또한 형제 컴포넌트가 다른 형제 컴포넌트 안에서 렌더링될 수도 없습니다.
    따라서 NoMatch가 Outlet 안에서 렌더링 되려면 라우터 설정은 부모/자식 관계의 라우팅, 즉 중첩 라우팅 형태로 설정해야 합니다.
*/

/*
    색인 라우트 알아보기

    앞서 라우트 설정 코드에서 한 가지 문제는 경로가 '/'일 때 Outlet을 채울 컴포넌트를 지정하지 않았으므로
    'http://localhost:3000' 주소로 접속하면 화면에 아무것도 나타나지 않는다는 점입니다.
    이제 경로가 '/'일 때 Outlet에 자동으로 기본 컴포넌트를 나타나게 하는 방법을 알아보겠습니다.

    Route 컴포넌트는 index란 이름의 boolean 타입 속성을 제공하는데 
    <Route index /> 형태로 사용하는 Route를 색인 라우트라고 합니다.
    다음 RouteSetup.tsx 파일은 색인 라우트 형태로 LandingPage라는 컴포넌트의 경로를 설정합니다.
*/

/*
    로그인 여부에 따라 내비게이션 메뉴 구분하기
    
    코드에서 LandingPage나 Board 같은 컴포넌트는 Layout 컴포넌트 내부의 Outlet에 나타나게 하지만,
    SignUp 등은 Outlet 바깥에 나타나게 합니다. 이는 Signup이나 Login, Logout 등의 컴포넌트가 나타날 때는
    내비게이션 메뉴가 나타나지 않는 것이 바람직하기 때문입니다.
*/
