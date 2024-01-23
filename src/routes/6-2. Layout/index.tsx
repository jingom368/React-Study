import {Outlet} from 'react-router-dom'
import NavigationBar from './6-2. NavigationBar'
import Footer from './6-2. Footer'

export default function Layout() {
    return (
        <>
            <NavigationBar />
            <Outlet />
            <Footer />
        </>
    )
}

// 코드에서 Outlet 컴포넌트는 RoutesSetup.tsx 파일에서 설정한 라우트 경로의 컴포넌트가 여기에 위치하게하는 역할을 합니다.
