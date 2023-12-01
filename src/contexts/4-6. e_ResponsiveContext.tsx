import type {FC, PropsWithChildren} from 'react'
import {createContext, useContext} from 'react'
import { useWindowResize } from '../hooks'

type ContextType = {
    breakpoint: string // 공유할 데이터 속성
}
const defaultContextValue: ContextType = {
    breakpoint: '' // 공유할 데이터 속성 초깃값
}
export const ResponsiveContext = createContext<ContextType>(defaultContextValue)

type ResponsiveProviderProps = {}
export const ResponsiveProvider: FC<PropsWithChildren<ResponsiveProviderProps>> = ({
    children,
    ...props
}) => {
    const [width] = useWindowResize()
    // prettier-ignore
    const breakpoint = width < 640 ? 'sm' :
                       width < 768 ? 'md' :
                       width < 1024 ? 'lg' :
                       width < 1280 ? 'xl' : '2xl'
    const value = {
        breakpoint // breakpoint : breakpoint 코드를 간결하게 표현
    }

    // <ResponsiveContext.Provider value={value} children={children} />: 
    // ResponsiveContext.Provider 컴포넌트를 반환합니다. 이 컴포넌트는 value와 children을 props로 받습니다. 
    // value는 위에서 정의한 value 객체이고, children은 ResponsiveProvider 컴포넌트의 자식 요소입니다. 
    // 이렇게 함으로써 ResponsiveContext를 통해 value를 하위 컴포넌트에게 전달합니다.
    return <ResponsiveContext.Provider value={value} children={children} />
}

export const useResponsive = () => {
    const {breakpoint} = useContext(ResponsiveContext)
    return breakpoint
}