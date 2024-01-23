import type {FC, PropsWithChildren} from 'react'
import {createContext, useContext, useState, useCallback} from 'react'
import * as U from '../utils'

export type LoggedUser = {email: string; password: string}
type Callback = () => void

type ContextType = {
    loggedUser?: LoggedUser
    signup: (email: string, password: string, callback?: Callback) => void
    login: (email: string, password: string, callback?: Callback) => void
    logout: (callback?: Callback) => void
}

export const AuthContext = createContext<ContextType>({
    signup: (email: string, password: string, callback?: Callback) => {},
    login: (email: string, password: string, callback?: Callback) => {},
    logout: (callback?: Callback) => {}
})
type AuthProviderProps = {}

export const AuthProvider: FC<PropsWithChildren<AuthProviderProps>> = ({children}) => {
    const [loggedUser, setLoggedUser] = useState<LoggedUser | undefined>(undefined)

    const signup = useCallback((email: string, password: string, callback?: Callback) => {
        const user = {email, password}
        setLoggedUser(notUsed => ({email, password}))
        U.writeObjectP('user', user).finally(() => callback && callback())
        // callback && callback()
    }, [])
    const login = useCallback((email: string, password: string, callback?: Callback) => {
        setLoggedUser(notUsed => ({email, password}))
        callback && callback()
    }, [])
    const logout = useCallback((callback?: Callback) => {
        setLoggedUser(undefined)
        callback && callback()
    }, [])

    const value = {
        loggedUser,
        signup,
        login,
        logout
    }

    return <AuthContext.Provider value={value} children={children} />
}

export const useAuth = () => {
    return useContext(AuthContext)
}

/*
    이제 src/context/AuthContext.tsx 파일에 앞서 구현한 writeObjectP 함수를 사용하여
    localStorage에 사용자가 회원 가입할 때 입력한 정보를 저장합니다.
    'user' 라는 키로 사용자 정보를 localStorage에 저장하는 코드를 추가했습니다.
    참고로 Promise 객체는 항상 finally 메서드를 호출하므로 굳이 then이나 catch 메서드를 호출하는 코드가 필요하지 않습니다.
*/
