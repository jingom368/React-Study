import type {FC} from 'react'
import type {LinkProps as RRLinkProps} from 'react-router-dom'
import {useResolvedPath, useMatch} from 'react-router-dom'
import {Link as RRLink} from 'react-router-dom'

export type LinkProps = RRLinkProps & {}

export const Link: FC<LinkProps> = ({className: _className, to, ...props}) => {
    const resolved = useResolvedPath(to)
    console.log('resolved ', resolved)
    const match = useMatch({path: resolved.pathname, end: true})
    console.log('match', match)
    const className = [_className, match ? 'btn-active' : ''].join(' ')
    return <RRLink {...props} to={to} className={className} />
}

/*
    useResolvedPath와 useMatch 훅 알아보기

    이제 Link 컴포넌트가 현재 페이지에 해당하는 메뉴에만 밑줄을 표시하도록 만들어 보겠습니다.
    여기서는 useResolvedPath와 useMatch 훅을 사용합니다. 
    Link.tsx 파일에 이 두 훅을 구현한 모습을 먼저 보이겠습니다.
*/
