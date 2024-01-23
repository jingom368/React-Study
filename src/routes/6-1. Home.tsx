import React from 'react'
import type {FC} from 'react'
import {Link} from 'react-router-dom'

type HomeProps = {
    title?: string
}

const Home: FC<HomeProps> = ({title}) => {
    return (
        <div>
            <div className="flex bg-gray-200 p-4">
                <Link to="/">Home</Link>
                <Link to="/welcome" className="ml-4">
                    Welcome
                </Link>
                <Link to="/board" className="ml-4">
                    Board
                </Link>
            </div>
            <p className="text-bold text-center text-xl">{title ?? 'Home'}</p>
        </div>
    )
}

export default Home

/*
    이번에는 경로가 '/'일 때 Home.tsx 파일이 화면에 나타나도록 하겠습니다.
    먼저 src/routes 디렉터리의 Home.tsx 파일을 다음처럼 작성합니다.
    코드는 앞서 Nomatch와는 다르게 title이란 이름의 선택 속성을 제공합니다.

    그런 다음 RoutesSetup.tsx 파일에서 Home 컴포넌트의 라우트 경로를 설정합니다.
    이 코드는 왜 Route 컴포넌트가 component 라는 이름이 아닌 element 라는 이름의 속성을 제공하는지 힌트를 줍니다.
    즉, 만일 component={Home} 처럼 사용하도록 설계했다면 라우트 경로에 맞는 컴포넌트가 제공하는 속성을 사용할 수 없지만,
    element는 element={<Home title="hello"} 형태로 컴포넌트의 속성에 적절한 값을 설정할 수 있기 때문입니다.

    이제 웹 브라우저에서는 '/'와 '/welcome' 경로로 접속했을 때 각기 다른 내용을 보여 줍니다.
*/
