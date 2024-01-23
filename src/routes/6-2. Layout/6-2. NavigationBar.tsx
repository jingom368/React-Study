// import {Link} from 'react-router-dom'
import {Link as RRLink} from 'react-router-dom'
import {Link} from '../../components'
import {useAuth} from '../../contexts'

export default function NavigationBar() {
    const {loggedUser} = useAuth()

    return (
        <div className="flex justify-between bg-base-100">
            <div className="flex p-2 navbar">
                <Link to="/" className="btn btn-link">
                    Home
                </Link>
                {loggedUser && (
                    <Link to="/board" className="btn btn-link ml-4">
                        Board
                    </Link>
                )}
            </div>
            <div className="flex p-2 items-center">
                {!loggedUser && (
                    <RRLink to="/login" className="btn btn-sm btn-primary">
                        Login
                    </RRLink>
                )}
                {!loggedUser && (
                    <RRLink
                        to="/signup"
                        className="ml-4 btn btn-sm btn-outline btn-primary">
                        Signup
                    </RRLink>
                )}
                {loggedUser && (
                    <RRLink to="/logout" className="ml-4 mr-4">
                        LOGOUT
                    </RRLink>
                )}
            </div>
        </div>
    )
}

/*
    코드에서는 react-router-dom 패키지가 제공하는 Link 컴포넌트를 RRLink라는 이름으로 사용하는데,
    [SIGNUP], [LOGIN] 등의 메뉴를 골랐을 때 해당 메뉴가 활성화된 모습으로 보이는 것은 바람직하지 않기 때문입니다.
*/
