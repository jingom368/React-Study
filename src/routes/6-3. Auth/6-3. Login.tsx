import type {ChangeEvent} from 'react'
import {useState, useCallback, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useAuth} from '../../contexts'
import * as U from '../../utils'

type LoginFormType = Record<'email' | 'password', string>
const initialFormState = {email: '', password: ''}

export default function Login() {
    const [{email, password}, setForm] = useState<LoginFormType>(initialFormState)

    const changed = useCallback(
        (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
            setForm(obj => ({...obj, [key]: e.target.value}))
        },
        []
    )

    const navigate = useNavigate()
    const {login} = useAuth()

    const loginAccount = useCallback(() => {
        login(email, password, () => navigate('/'))
    }, [email, password, navigate, login])

    useEffect(() => {
        U.readObjectP<LoginFormType>('user')
            .then(user => {
                if (user) setForm(user)
            })
            .catch(e => {
                /* 오류 무시 */
            })
    }, [])

    return (
        <div className="flex flex-col min-h-screen border-gray-300 rounded-xl shadow-xl bg-gray-100 border">
            <div className="flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
                <div className="w-full px-6 py-8 text-black bg-white rounded shadow-md">
                    <h1 className="mb-8 text-2xl text-center text-primary">Login</h1>
                    <input
                        type="text"
                        className="w-full p-3 mb-4 input input-primary"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={changed('email')}
                    />
                    <input
                        type="password"
                        className="w-full p-3 mb-4 input input-primary"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={changed('password')}
                    />
                    <button
                        type="submit"
                        className="w-full btn btn-primary"
                        onClick={loginAccount}>
                        Login
                    </button>
                </div>
                <div className="mt-6 text-grey-dark">
                    Create account?
                    <Link className="btn btn-link btn-primary" to="/signup">
                        Signup
                    </Link>
                </div>
            </div>
        </div>
    )
}

/*
    앞서 구현한 readObjectP 함수를 사용하여,
    localStorage에 담긴 'user' 키에 해당하는 값이 있으면 이를 입력 상자의 초깃값으로 사용합니다.

    따라서 실행 결과를 보면 회원 가입할 때 입력한 이메일 주소가 로그인할 때 기본값으로 나타납니다.
*/
