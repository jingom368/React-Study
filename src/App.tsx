import './App.css'

// 2.5.
// import DispatchEvent from './pages/2-5. DispatchEvent'
// import DragDrop from './pages/2-5. DragDrop'
// import EventBubbling from './pages/2-5. EventBubbling'
// import EventListener from './pages/2-5. EventListener'
// import FileDrop from './pages/2-5. FileDrop'
// import FileInput from './pages/2-5. FileInput'
// import OnChange from './pages/2-5. OnChange'
// import OnClick from './pages/2-5. OnClick'
// import ReactOnClick from './pages/2-5. ReactOnClick'
// import StopPropagation from './pages/2-5. StopPropagation'
// import VariousInputs from './pages/2-5. VariousInputs'

// 3-1.
// import Bootstrap from './pages/3-1. Bootstrap'
// import Icon from './pages/3-1. Icon'
// import Style from './pages/3-1. Style'
// import UsingIcon from './pages/3-1. UsingIcon'
// import UsingIconWithCSSClass from './pages/3-1. UsingIconWithCSSClass'

// 3-2.
// import TextsTest from './pages/3-2. TextsTest'
// import Color from './pages/3-2. Color'
// import Tailwindcss from './pages/3-2. Tailwindcss'

// 3-3.
// import DivTest from './pages/3-3. DivTest'
// import ViewportTest from './pages/3-3. ViewportTest'
// import HeightTest from './pages/3-3. HeightTest'
// import PaddingTest from './pages/3-3. PaddingTest'
// import MarginTest from './pages/3-3. MarginTest'
// import ImageTest from './pages/3-3. ImageTest'
// import BackgroundImageTest from './pages/3-3. BackgroundImageTest'
// import DisplayTest from './pages/3-3. DisplayTest'
// import DispalyNoneTest from './pages/3-3. DispalyNoneTest'
// import AvatarTest from './pages/3-3. AvatarTest'
// import PositionTest from './pages/3-3. PositionTest'
// // import OverlayTest from './pages/3-3. OverlayTest'

// 3-4.
// import AlignTest from './pages/3-4. AlignTest'
// import CardContainer from './pages/3-4. CardContainer'
// import DirectionTest from './pages/3-4. DirectionTest'
// import JustifyCenterTest from './pages/3-4. JustifyCenterTest'
// import MinMaxTest from './pages/3-4. MinMaxTest'
// import UserContainer from './pages/3-4. UserContainer'
// import WrapTest from './pages/3-4. WrapTest'

// 3-5.
// import ButtonTest from './pages/3-5. ButtonTest'
// import InputTest from './pages/3-5. InputTest'
// import ModalTest from './pages/3-5. ModalTest'

// 4-1.
// import {useEffect, useState} from 'react'
// import {useRef} from 'react'
// import Clock from './pages/4-1. Clock'
// import {useClock} from './hooks'

// 4-2.
// import UseOrCreateTest from './pages/4-2. UseOrCreateTest'
// import Memo from './pages/4-2. Memo'
// import Callback from './pages/4-2. Callback'
// import HighOrderCallback from './pages/4-2. HighOrderCallback'

// 4-3.
// import ArrayState from './pages/4-3. ArrayState'
// import ObjectState from './pages/4-3. ObjectState'
// import BasicForm from './pages/4-3. BasicForm'
// import HigherOrderRadioInputTest from './pages/4-3. HigherOrderRadioInputTest'
// import RadioInputTest from './pages/4-3. RadioInputTest'
// import ShowHideModal from './pages/4-3. ShowHideModal'
// import InputTest from './pages/4-3. InputTest'
// import NumberState from './pages/4-3. NumberState'

// 4-4.
import FetchTest from './pages/4-4. FetchTest'
import WindowResizeTest from './pages/4-4. WindowResizeTest'
import ClassLifeCycle from './pages/4-4. ClassLifecycle'

export default function App() {
    // // let today = useRef(new Date())
    // const [today, setToday] = useState(new Date())
    // useEffect(() => {
    //     // console.log('useEffect called.')
    //     const duration = 1000
    //     const id = setInterval(() => {
    //         // today.current = new Date()
    //         setToday(new Date())
    //         // console.log('today', today.current.toLocaleTimeString())
    //     }, duration)
    //     return () => clearInterval(id)
    // }, [])
    // console.log('today', today)
    // const today = useClock()
    return (
        <main>
            {/* 2.5 */}
            {/* <FileDrop />
            <DragDrop />
            <FileInput />
            <OnChange />
            <VariousInputs />
            <StopPropagation />
            <EventBubbling />
            <DispatchEvent />
            <ReactOnClick />
            <OnClick />
            <EventListener /> */}

            {/* 3.1 */}
            {/* <UsingIconWithCSSClass />
            <UsingIcon />
            <Style />
            <Icon />
            <Bootstrap /> */}

            {/* 3.2 */}
            {/* <TextsTest />
            <Color />
            <Tailwindcss /> */}

            {/* 3.3 */}
            {/* <OverlayTest /> */}
            {/* <PositionTest />
            <DispalyNoneTest />
            <DisplayTest />
            <AvatarTest />
            <BackgroundImageTest />
            <ImageTest />
            <MarginTest />
            <PaddingTest />
            <HeightTest />
            <ViewportTest />
            <DivTest /> */}

            {/* 3.4 */}
            {/* <CardContainer />
            <UserContainer />
            <AlignTest />
            <JustifyCenterTest />
            <MinMaxTest />
            <WrapTest />
            <DirectionTest /> */}

            {/* 3.5 */}
            {/* <ButtonTest />
            <InputTest />
            <ModalTest /> */}

            {/* 4.1 */}
            {/* 컴포넌트 데이터 관리 : 4-2. useMemo/useCallback, 4.3 useState, 7.2 useReducer */}
            {/* 컴포넌트 생명 주기 대응 : 4-4. useEffect/useLayoutEffect */}
            {/* 컴포넌트 메서드 호출 : 4-5. useRef/useImperativeHandle */}
            {/* 컴포넌트 간의 정보 공유 : 4-6. useContext */}

            {/* 매개변수 1개 : useState, useRef, useImperativeHandle, useContext */}
            {/* 1. useState : 함수형 컴포넌트에서 상태를 관리하는 데 사용됩니다. */}
            {/* 2. useRef : DOM 요소를 참조하거나 컴포넌트의 값이 변경되어도 유지할 때 사용됩니다. */}
            {/* 3. useImperativeHandle : 부모 컴포넌트에서 자식 컴포넌트의 메서드를 호출할 수 있도록 설정합니다. 
                일반적으로 리액트 라이브러리와 함께 사용됩니다. */}
            {/* 4. useContext : 컨텍스트 값을 사용할 때 사용됩니다. 
                컨텍스트는 컴포넌트 간에 데이터를 공유하는 데 사용됩니다. */}
            {/* 훅_함수<값의 타입 | null}>(값) */}

            {/* 매개변수 2개 : useMemo, useCallback, useReducer, useEffect, useLayoutEffect */}
            {/* 1. useMemo : 계산 비용이 높은 계산 값을 캐시하고, 
                종속성 배열의 값이 변경될 때만 다시 계산할 때 사용됩니다. */}
            {/* 2. useCallback : 함수를 캐시하고, 
                종속성 배열의 값이 변경될 때만 함수를 다시 생성할 때 사용됩니다. */}
            {/* 3. useReducer : 상태 관리에 복잡한 로직이 필요할 때 사용됩니다. 
                주로 상태와 관련된 액션을 처리하는 데 사용됩니다. */}
            {/* 4. useEffect : 부수 효과를 수행할 때 사용됩니다. 
                예를 들어 데이터 가져오기, DOM 조작, 구독 및 정리 작업 등. */}
            {/* 5. useLayoutEffect : useEffect와 비슷하나, DOM 업데이트 이전에 실행됩니다. */}
            {/* 훅_함수<값의 타입>(콜백_함수, 의존성_목록) */}

            {/* - 커스텀 훅은 개발자가 필요에 맞게 생성할 수 있는 훅으로, 
                재사용 가능한 로직을 캡슐화하여 컴포넌트 간에 공유할 수 있습니다. 
                이러한 커스텀 훅을 작성하면 코드의 가독성과 유지 관리가 개선됩니다. */}
            {/* React Router를 사용하는 경우, 
                useHistory, useLocation, useParams 등의 훅을 사용하여 브라우저의 히스토리, 
                현재 위치 및 URL 매개변수를 관리할 수 있습니다. */}
            {/* useForm : 폼 입력 관리에 도움을 주는 커스텀 훅으로, 폼 입력 상태, 
                유효성 검사, 제출 핸들링 등을 처리하는 데 사용됩니다. */}
            {/* <Clock today={today} /> */}

            {/* 4.2 useMemo, useCallback, 고차함수 */}
            {/* useMemo : 메모이제이션은 과거에 계산한 값을 반복해서 사용할 때 
                과거의 계산한 값을 캐시해 두는 방법으로 전체 계산 속도를 높이는 코드최적화 기법 */}
            {/* const 캐시된_데이터 = useMemo(콜백 함수, [의존성1, 의존성2, ...]) */}
            {/* function useMemo<T>(factory: () => T, deps: DependencyList | undefined): T; */}

            {/* useCallback : useMemo는 데이터를 캐시하는 데 사용되므로 onClick같은 함수를 캐시하지는 못합니다. 
                그래서 함수 몸통을 캐시하는 useCallback 훅을 제공합니다. */}
            {/* const 캐시된_데이터 = useCallback(콜백 함수, [의존성1, 의존성2, ...]) */}
            {/* function useCallback<T extends (...args: any[]) => any>(callback: T, deps: DependencyList): T; */}

            {/* 함수는 다른 함수의 입력 매개변수나 반환값으로도 사용할 수 있습니다. 
                고차함수는 다른 함수를 반환하는 함수를 의미합니다.*/}
            {/* useMemo훅은 데이터나 함수의 반환값을 캐시하지만, useCallback 훅은 콜백 함수를 캐시합니다. */}

            {/* <HighOrderCallback />
            <Callback />
            <Memo />
            <UseOrCreateTest /> */}

            {/* 4.3 useState, 깊은복사/얕은복사 */}
            {/* useMemo 훅은 불변 상태를 캨시하지만,
                useState 훅은 가변 상태를 캐시합니다. */}
            {/* const [값, 값을_변경하는_새터_함수] = useState(초깃값) */}
            {/* function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>]; */}
            {/* type Dispatch<A> = (value: A) => void */}
            {/* type setStateAction<S> = S | ((prevState: S) => S) */}
            {/* useState 훅은 컴포넌트가 자신만의 상태를 유지하려고 할 때 사용하는 중요한 함수입니다. */}

            {/* count에 의존성 문제 발생
            const increment = useCallback(() => {
                setCount(count + 1) // 의존성 목록에 count를 넣지 않으면 count는 항상 0이므로
            }, [count])             // 의존성 목록에 count를 넣어야 함 */}

            {/* count에 의존성 문제 해결
            count increment = useCallback(() => {
                setCount(count => count + 1) // 함수를 입력 변수로 세터 호출
            }, [])                           // 의존성 목록에 count를 넣지 않아도 됨 */}

            {/* 깊은 복사와 얕은 복사 : 값의 타입에 따라 각기 다르게 적용 */}
            {/* number, boolean 등 값의 메모리 크기를 컴파일 타임 때 알 수 있는 타입은 항상 깊은 복사가 일어납니다. */}
            {/* 객체, 배열 등 메모리 크기를 런타임 때 알 수 있는 타입은 얕은 복사가 일어압니다. */}
            {/* 예외) string타입 문자열인데, 타입스크립트에서 문자열을 항상 읽기 전용이므로 메모리 크기를
                컴파일 때 알 수 있습니다. 따라서 문자열은 깊은 복사가 일어납니다. */}

            {/* const onChangeName = usecallback((e:ChangeEvent<HTMLInputElement>) => { 
                const newForm = form // 얕은 복사
                // const newForm = Object.assign({}, form) // 깊은 복사
                const newForm = {...form} // 깊은 복사
                newForm.name = e.target.value

                const newForm = {...form, name: e.target.value} // 깊은 복사와 name 속성값 변경이 동시에 일어남
                setForm(newForm)
                
                setForm(form => {return {...form, name: e.target.value}})
                setForm(form => {...form, name: e.target.value}) // retrun 키워드 필요 없음, 복합 실행문으로 인식
                setForm(form => ({...form, name: e.target.value}) )
                // 타입스크립트에서 객체를 반환하는 구문은 객체를 의미하는 중괄호 {}를 
                    다시 소괄호로 감싼 ({})형태로 사용해야 함.
                }, [form]) */}
            {/* <ArrayState />
            <ObjectState />
            <BasicForm />
            <HigherOrderRadioInputTest />
            <RadioInputTest />
            <ShowHideModal />
            <InputTest />
            <NumberState /> */}

            {/* 4.4 useEffect, useLayoutEffect */}
            {/* 리액트 프레임워크는 컴포넌트를 생성하고 렌더링하다가 어떤 시점이 되면 소멸합니다.
                이런 과정을 컴포넌트의 생명 주기라고 표현합니다. */}
            {/* 리액트 컴포넌트는 가상 DOM 객체 형태로 생성되어 어떤 시점에 물리 DOM 트리의 맴버 객체가 되며,
                이 과정에서 처음 렌더링이 일어나는데 이 시점을 컴포넌트가 마운트 되었다고 표현합니다. */}
            {/* 리액트는 클래스 컴포넌트가 componentDidMount()라는 메서드를 가지면
                마운트 되는 시점에 이 메서드를 호출해 줍니다. */}
            {/* setState() 정의 */}
            {/* setState<K extends keyof S>(
                state: ((prevState: Readonly<S>, props: Readonly<P>) =>
                        (Pick<S, K> | S | null)) | (Pick<S, K> | S | null),
                        callback?: () => void): void; */}
            {/* 예시1)
                const id = setInteval(콜백함수, 시간_간격)
                this.setState({intervalId: id}) */}
            {/* 예시2)
                const intervalId = setInteval(콜백함수, 시간_간격)
                this.setState({ intervalId }) */}
            {/* this.setState<keyof S>( // 예시를 타입 정의로 해석  
                (prevState: Readonly<S>, props: Readonly<P>) => ({ intervalId: id })
                ); */}

            {/* 리액트에서는 컴포넌트가 물리 DOM 객체로 있다가 소멸하는 것을 언마운트(unmount) 되었다고 표현합니다. */}
            {/* 리액트는 클래스 컴포넌트가 componentWillUnmount() 메서드를 구현하고 있으면
                언마운트가 일어나기 직전에 이 메서드를 호출해 줍니다. */}
            {/* 
                export default class ClassLifeCycle extends Component { 
                    state = {
                        today: new Date(),
                        intervalId: new as unknown as NodeJS.Timer
                    }
                    componentDidMount() {
                        const duration = 1000
                        const intervalId = setInterval(() => this.setState({today: new Date()}), duration)
                        this.setState({intervalId})
                    }
            */}

            {/* useEffect, useLayoutEffect */}
            {/* 콜백 함수는 훅이 실행될 때 처음 한 번은 반드시 실행됩니다. 
                이런 특징 때문에 의존성 목록이 빈 배열 []일지라도 한 번은 콜백 함수를 호출합니다. */}
            {/* 이런 설계는 클래스 컴포넌트의 componentDidMount() 메서드를 구현한 것과 사실상 같은 효과를 보입니다. 
                두 훅이 componentDidMount()와 다른 점은 단 한 번 실행되는 componentDidMount()와 달리,
                두 훅은 의존성 목록이 변경될 때마다 콜백 함수를 계속 실행한다는 점입니다. */}
            {/* useEffect(콜백_함수, 의존성_목록) 
                useLayoutEffect(콜백_함수, 의존성_목록) 
                콜백_함수 = () => {} */}
            {/* 두 훅의 콜백 함수는 다음처럼 함수를 반환할 수도 있는데, 이때 반환 함수는 컴포넌트가 언마운트될 때 한번만 호출됩니다.
                콜백함수 = () => {
                    return 반환_함수 // 언마운트될 때 한 번만 호출
                } */}

            {/* useLayoutEffect와 useEffect 훅의 차이점 */}
            {/* 리액트 프레임워크는 useLayoutEffect 훅은 동기로 실행하고, useEffect 훅은 비동기로 실행합니다.
                이 말은 useLayoutEffect 훅은 콜백 함수가 끝날 때까지 프레임워크가 기다린다는 의미입니다.
                반면에 useEffect는 콜백 함수의 종료를 기다리지 않습니다.
                리액트 공식 문서에서는 될 수 있으면 useEffect 훅을 사용하고 useEffect 훅으로 구현이 안 될 때만
                useLayoutEffect 훅을 사용하라고 권합니다. */}
            {/* setInterval처럼 addEventListener() 메서드를 호출하면 반드시 
                removeListener() 메서드를 호출해 주어야 메모리 누수가 발생하지 않습니다. */}

            {/* fetch() 함수와 promise 클래스는 자바스크립트 엔진에서 기본으로 제공하는 API입니다. 
                fetch()는 HTTP 프로토콜의 GET, POST, PUT, DELETE와 같은 HTTP 메서드를 프로그래밍으로 쉽게 사용하게 해줍니다.*/}
            {/* 
                    function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>
                
                    interface Response {
                        blob(): Promise<Blob>;
                        json(): Promise<any>;
                        text(): Promise<string>;
                    }
            */}

            {/* promise의 3가지 메서드 사용 예 
                fetch('https://randomuser.me/api/')
                        .then(res => res.json())
                        .then((data: unknown) => console.log(data))
                        .catch((err: Error) => console.log(err.message))
                        .finally(() => console.log("always called")) */}
            {/* - then() 메서드는 모든 게 정상일 때 설정된 콜백 함수를 호출합니다. 만일 then() 메서드의
                    콜백 함수가 값이나 또 다른 Promise 객체를 반환할 때는 then() 메서드를 다시 호출해 콜백
                    함수가 반환한 값을 얻을 수 있습니다. 
                - catch() 메서드는 오류가 발생할 때 자바스크립트 엔진이
                    기본으로 제공하는 Error 타입의 값을 콜백 함수의 입력 매개변수로 전달해 호출해 줍니다.
                    catch()가 Error 객체를 넘겨 주므로 어떤 오류가 발생했는지 알 수 있습니다. 
                - finally() 메서드는 then()이나 catch()의 콜백 함수가 호출된 다음, 
                    항상 자신에 설정된 콜백 함수를 호출해 줍니다. */}
            <FetchTest />
            <WindowResizeTest />
            <ClassLifeCycle />
        </main>
    )
}
