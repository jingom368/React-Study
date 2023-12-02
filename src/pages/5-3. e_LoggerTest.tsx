import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Title} from '../components'

export default function LoggerTest() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type: 'hello', payload: 'world'})
    }, [dispatch])

    return (
        <section className="mt-4">
            <Title>LoggerTest</Title>
            <div className="mt-4"></div>
        </section>
    )
}

// 이제 로거 미들웨어가 실제 동작하는 모습을 보고 src/pages 디렉터리에 LoggerTest.tsx 파일을 다음처럼 작성합니다.
// 앞서 구현한 로거는 액션이 실제로 리덕스 저장소로 유입돼야 비로소 console.log() 함수가 호출되도록
// 구현되었으므로 테스트용 액션을 만들어 dispatch를 호출해 주어야 로거가 작동합니다.

// 소스를 저장하고 웹 브라우저의 콘솔 창을 확인해 보면 로거 미들웨어의 출력 내용을 확인할 수 있습니다.
// 그런데 사실 이렇게 동작하는 redux-logger라는 패키지가 이미 존재합니다.
// 이제 이 패키지를 설치하고 사용해 보겠습니다.
