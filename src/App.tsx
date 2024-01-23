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
// import FetchTest from './pages/4-4. FetchTest'
// import WindowResizeTest from './pages/4-4. WindowResizeTest'
// import ClassLifeCycle from './pages/4-4. ClassLifecycle'

// 4-5.
// import ClickTest from './pages/4-5. ClickTest'
// import FileDrop from './pages/4-5. e_FileDrop'
// import InputFocusTest from './pages/4-5. InputFocusTest'
// import InputValueTest from './pages/4-5. InputValueTest'
// import ForwardRefTest from './pages/4-5. ForwardRefTest'
// import ValidatableInputTest from './pages/4-5. ValidatableInputTest'

// 4-6.
// import {ResponsiveProvider} from './contexts'
// import ResponsiveContextTest from './pages/4-6. ResponsiveContextTest'

// 5-1.
// import ReduxClock from './pages/5-1. e_ReduxClock'
// import UseReducerClock from './pages/5-1. UseReducerClock'
// import {Provider as ReduxProvider} from 'react-redux'
// import {useStore1} from './store'
// import type {Action} from 'redux'
// import { configureStore } from '@reduxjs/toolkit'

// const initialAppstate = {
//     today: new Date()
// }
// const rootReducer = (state: AppState = initialAppstate, action: Action) => state
// const store = configureStore({reducer: rootReducer, middleware: []})

// 5-2.
// import {Provider as ReduxProvider} from 'react-redux'
// import {useStore2} from './store'
// import ClockTest from './pages/5-2. e_ClockTest'
// import CounterTest from './pages/5-2. e_CounterTest'
// import RemoteUserTest from './pages/5-2. e_RemoteUserTest'
// import CardsTest from './pages/5-2. CardsTest'

// 5-3.
// import {Provider as ReduxProvider} from 'react-redux'
// import {useStore3} from './store'
// import LoggerTest from './pages/5-3. e_LoggerTest'
// import LoadingTest from './pages/5-3. e_LoadingTest'
// import ErrorMessageTest from './pages/5-3. e_ErrorMessageTest'
// import FetchTest from './pages/5-3. e_FetchTest'

// 5-4.
// import {Provider as ReduxProvider} from 'react-redux'
import {useStore4} from './store'
// import {DndProvider} from 'react-dnd'
// import {HTML5Backend} from 'react-dnd-html5-backend'
import Board from './pages/5-4. Board'

// 6-1.
import {Provider as ReduxProvider} from 'react-redux'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {BrowserRouter} from 'react-router-dom'
import RoutesSetup from './routes/6-1. RoutesSetup'
import {useStore1} from './store'
import {combineReducers, legacy_createStore as createStore} from 'redux'
import {AuthProvider} from './contexts'

// prettier-ignore
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

    // 5-1.
    // const store = useStore1()
    
    // 5-2.
    // const store = useStore2()

    // 5-3.
    // const store = useStore3()

    // 5-4.
    const store4 = useStore4()

    // 6-1.
    // const store1 = useStore1()

    const rootReducer = combineReducers({
        store4: useStore4,
        store1: useStore1
      });
      
    const store = createStore(rootReducer);
      

    return (
        // 4-6.
        // <ResponsiveProvider>
        // <ReduxProvider store={store}>
        // <main>
        
        // 5-2. 5-3. 5-4. 6-1.
        <ReduxProvider store = {store4}> 
        <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
        <AuthProvider>
        {/* <main className='p-8'> */}

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

            {/* 4.4 useEffect, useLayoutEffect, fetch/promise */}
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
            {/* 조건이 있는 JSX 문을 만들 때는 {조건 && ()} 형태의 코드를 먼저 만든 다음,
                소괄호 안에 화면 UI를 구성하면 오류 없이 쉽게 만들 수 있습니다. */}
            {/* <FetchTest />
            <WindowResizeTest />
            <ClassLifeCycle /> */}

            {/* 4.5 useRef, FileList 클래스와 Array.from() 함수, forwardRef(), useImperativeHandle  */}

            {/* useRef - ref라는 속성에 적용하는 값을 만들어 주는 훅
                리액트와 리액트 네이티브가 제공하는 컴포넌트는 모두 ref라는 이름의 속성을 가지고 있습니다. */}
            {/* 모든 리액트 컴포넌트는 reference의 앞 3글자를 딴 ref 속성을 제공합니다. 그런데 ref 속성값은
                사용자 코드에서 설정하는 것이 아니라 어떤 시점에 리액트 프레임워크 내부에서 설정해 줍니다.
                ref 속성은 초기에는 null이었다가 마운트되는 시점에서 물리 DOM 객체의 값이 됩니다. 
                즉, ref는 물리 DOM 객체의 참조입니다. */}
            {/* HTML 요소들은 자바스크립트로는 DOM 타입 객체입니다. 예를 들어 <div>, <button>과 같은 요소는 
                모두 HTMLElement 상속 타입인 HTMLDivElement, HTMLButtonElement 타입 객체입니다.
                그리고 HTMLElement 타입은 click(), blur(), focus() 메서드를 제공합니다. 
                이 메서드들은 리액트 요소가 가상 DOM 상태일 때는 호출할 수 없고, 물리 DOM 상태일 때만 호출할 수 있습니다.
                ref 속성값은 물리 DOM 상태일 때의 값이므로 
                ref로 얻은 값(즉, DOM 객체)을 사용해 click()과 같은 메서드를 호출할 수 있습니다.*/}
            {/* ref 속성의 정의에서 타입이 Ref<T>임을 알 수 있습니다. 여기서 타입 변수 T는 HTMLElement와 같은 DOM 타입을 뜻합니다. */}
            {/* ref 속성 정의 
                interface RefAttributes<T> extends Attributes {
                    ref?: Ref<T> | undefined;
                }
            */}
            {/* Ref<T>는 다시 current라는 읽기 전용 속성을 가진 RefObject<T> 타입입니다. current는 null일 수 있습니다.
                이는 리액트 요소가 마운트되기 전인 가상 DOM 타입일 때는 null이기 때문입니다.
                또한 current는 리액트 내부에서 설정해 주는 값이므로 사용자 코드에서 리액트가 설정한 값을
                임의로 다른 값으로 바꿀 수 없어야 합니다. 따라서 current는 읽기 전용 속성입니다. */}
            {/* RefObject<T> 타입 정의
                interface RefObject<T> {
                    readonly current: T | null;
                }
                type Ref<T> = RefObject<T> | null;
            */}

            {/* const divRef = useRef<HTMLDivElement | null>(null) 
                <div ref={divRef} */}
            {/* 이 줄은 useRef 훅을 호출하여 div 요소에 대한 참조를 생성하고, 그 참조를 divRef라는 변수에 할당합니다. 
                <HTMLDivElement | null>은 TypeScript의 타입 표기법으로, divRef.current가 HTMLDivElement 객체 또는 
                null이 될 수 있음을 나타냅니다. 초기값으로 null을 설정합니다. */}
            {/* 이 줄은 생성된 참조(divRef)를 실제 div 요소에 연결합니다. 
                이렇게 하면 divRef.current를 통해 해당 div 요소를 직접 조작할 수 있게 됩니다. 
                예를 들어, DOM API를 사용하여 요소의 스타일을 변경하거나, 요소의 크기와 위치 정보를 얻는 등의 작업이 가능합니다. */}

            {/* function useRef<T>(initialValue: T): MutableRefObject<T> */}
            {/* 이 줄은 useRef 훅의 함수 시그니처를 나타냅니다. T는 참조가 가리킬 요소의 타입을 나타내는 제네릭 파라미터입니다. */}
            {/* interface MutableRefObject<T> {
                    current T;
            } */}
            {/* 이 줄은 useRef 훅이 반환하는 참조 객체의 타입을 나타냅니다. 참조 객체는 current라는 속성을 가지고 있으며, 
            이 속성은 참조가 가리키는 실제 요소를 나타냅니다. T는 참조가 가리킬 요소의 타입을 나타내는 제네릭 파라미터입니다. */}

            {/* const onClick = useCallback(() => {
                    const input = inputRef.current
                    if(!input) return
                    input.click()
                },[]) 
                const onClick = useCallback(() => inputRef.current?.click(), []) */}

            {/* FileList와 같은 클래스들을 유사배열객체(array-like objects)라고 부릅니다. */}
            {/* 유사 배열 객체를 배열로 변환 const fileArray: File[] = Array.from(files) */}
            {/* 자바스크립트 엔진은 File 타입 객체를 읽을 수 있도록 FileReader라는 클래스를 기본으로 제공합니다. */}
            {/* FileReader 클래스는 다음처럼 readAsDataUrl() 메서드를 제공합니다. */}
            {/* // const file : File
                const FileReader = new FileReader
                fileReader.readAsDataURL(file) */}
            {/* const fileREADER = new FileReader()
                fileReader.onload = (e: ProgressEvent<FileReader>) => {
                    if (e.target) {
                        const result = e.target.result // base64 인코딩 결과
                    }
                fileReader.readAsDataURL(file)
                } */}

            {/* 리액트는 항상 <input>의 value 속성과 관련해서 다음과 같은 패턴으로 코드를 작성하라고 요구합니다.
                그런데 이런 패턴으로 코드를 작성하는 것은 조금 번거롭습니다. */}
            {/* 
                const [value, setValue] = useState<string>('') 
                const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => 
                setValue(notUsed => e.target.value) 
                
                <input value={value} onChange={onChangeValue} /> 
            */}
            {/* 리액트가 이런 패턴의 코드를 요구하는 것은 가상 DOM 환경에서 빠른 리렌더링을 위해서입니다.
                하지만 ref 속성이 유효한 값, 즉 물리 DOM 객체가 만들어지면 이 객체의 value 속성값을 곧바로 얻을 수 있습니다. */}

            {/* forwardRef 함수는 이름대로 부모 컴포넌트에서 생성한 ref를 자식 컴포넌트로 전달해 주는 역할을 합니다. */}
            {/* daisyui/Input.tsx 다음처럼 Input 컴포넌트의 ref 속성에 inputRef를 설정할 수 있을까요?
                즉, 리액트가 제공하는 기본 컴포넌트인 <input>은 ref 속성에 값을 설정할 수 있지만,
                Input과 같은 사용자 컴포넌트에도 똑같이 ref 속성에 값을 설정할 수 있을 지 궁금합니다. 
                ref는 물리 DOM객체를 얻으려고 사용하는 건데, Input은 사용자 컴포넌트이므로
                물리 DOM 객체를 얻을 수 없기 때문입니다. */}
            {/* 그런데 실행 결과를 보면 앞에서와 다르게 사용자 입력값 표시 부분이 
                undefined로 표시됩니다. 그 이유에 대해 알아보겠습니다. */}
            
            {/* <input {...inputProps} className={className} /> */}
            {/* Input.tsx 파일에서는 <input>에 전달되는 속성들을 다음과 같은 형태로 구현했습니다.
                그런데 Input의 ref 속성은 inputProps로 전달하지 않고 forwardRef 함수로 전달해야 합니다. */}

            {/* forwardRef 함수의 타입 */}
            {/* function forwardRef<T, P = {}>(render: ForwardRefRenderFunction<T, P>): 반환_타입 */}
            {/* 타입 변수 T는 ref 대상의 컴포넌트(여기서는 input의 타입인 HTMLInputElement)의 타입이고,
                P는 컴포넌트의 속성 타입입니다. */}
            {/* 앞서 Input의 속성 타입은 InputProps였습니다. 따라서 forwardRef 타입 정보에서 
                타입 변수 P는 InputProps 타입입니다. */}

            {/* T는 ref에 연결된 DOM 요소나 컴포넌트의 타입을, P는 컴포넌트가 받아들이는 props의 타입을 나타냅니다. 
                P = {}는 기본값으로 아무런 props도 받지 않는다는 의미입니다. */}
            {/* render는 실제 컴포넌트를 렌더링하는 함수로, 두 개의 매개변수를 받습니다. 
                첫 번째 매개변수는 props, 두 번째 매개변수는 ref입니다. */}
            {/* ForwardRefRenderFunction<T, P>는 forwardRef 함수의 render 매개변수의 타입입니다. 
                이는 (props: P, ref: Ref<T>) => ReactElement | null의 형태를 가집니다. */}
            {/* "forwardRef는 render라는 함수를 매개변수로 받아서 반환 타입을 가지는 함수입니다. 
                render 함수는 P 타입의 props와 Ref<T> 타입의 ref를 매개변수로 받아 React 요소를 반환합니다. 
                여기서 T는 ref가 가리키는 대상의 타입, P는 컴포넌트가 받아들이는 props의 타입입니다." */}
            {/* 반환 타입은 React.ForwardRefExoticComponent<P & React.RefAttributes<T>>입니다. 
                이는 고차 컴포넌트(Higher Order Component, HOC)를 반환하는데, 
                이 컴포넌트는 P 타입의 props와 T 타입의 ref를 받아들입니다. */}

            {/* React.ForwardRefExoticComponent<P & React.RefAttributes<T>>는 React의 타입 정의 중 하나로, 
                forwardRef가 반환하는 컴포넌트의 타입을 나타냅니다. */}
            {/* React.ForwardRefExoticComponent는 고차 컴포넌트(Higher Order Component, HOC)로서, 
                다른 컴포넌트를 감싸는 역할을 합니다. 여기서 'Exotic'이라는 단어는 React의 고급 기능을 사용하는 컴포넌트를 의미합니다. */}
            {/* P & React.RefAttributes<T> 부분은 이 HOC가 받아들이는 props의 타입을 나타냅니다. 
                & 기호는 TypeScript에서 사용하는 교차 타입(Cross Type)을 의미하며, 두 개 이상의 타입을 합쳐 새로운 타입을 생성합니다. */}
            {/* P는 컴포넌트가 받아들이는 props의 타입을 나타냅니다. 
                React.RefAttributes<T>는 ref 속성의 타입을 나타냅니다. 여기서 T는 ref가 가리키는 대상의 타입을 의미합니다. */}
            {/* 따라서, React.ForwardRefExoticComponent<P & React.RefAttributes<T>>는 "props의 타입이 P이고, 
                ref의 타입이 T인 대상을 가리키는 forwardRef에 의해 생성된 고차 컴포넌트의 타입"을 의미합니다. 
                이 컴포넌트는 P 타입의 props와 T 타입의 ref를 받아들일 수 있습니다. */}

            {/* useImperativeHandle 훅이란? */}
            {/* useImperativeHandle 훅은 컴포넌트 기능을 JSX가 아니라 타입스크립트 코드에서 사용합니다. */}
            {/* const textInputRef = useRef<TextInput | null>(null)
                const setFocus = () => textInputRef.current?.focus() */}
            {/* 다음 코드가 성립할 수 있는 이유는 TextInput 코어 컴포넌트가 focus라는 메서드를 제공한다는
                사실을 우리가 미리 알고 있기 때문입니다. */}
            {/* export type TextInputMethods = {
                focus: () => void
                dismiss: () => void
            } */}
            {/* 그런데 다음과 같은 타입의 객체가 있다고 가정해 보겠습니다. */}
            {/* const methodsRef = useRef<TextInputMethods | null(null) 
                const setFocus = () => methodsRef.current?.focus() 
                const dismissKeyboard = () => methodsRef.current?.dismiss() */}
            {/* 이떄 앞선 코드에서 useRef<TextInput | null>(null) 부분을 다음처럼 TextInput 대신 
                TextInputMethods를 사용하면 어떨까 하는 것이 useImperativeHandle 훅의 탄생 배경입니다. */}

            {/* useImperativeHandle 훅 타입 정의 */}
            {/* function useImpoerativeHandle<T, R extends T>(ref: Ref<T> | undefined, 
                init:() => R, deps?: DependencyList): void; */}
            {/* 타입 정의에서 첫 번째 매개변수 ref는 forwardRef 호출로 얻은 값을 입력하는 용도이고, 
                두 번째 매개변수 init은 useMemo 훅 때와 유사하게 '() => 메서드_객체' 형태의 함수를 입력하는 용도입니다.
                다음 코드는 useMemo 훅과 useImperativeHandle 훅의 코드 사용법이 유사하다는 것을 보여 줍니다. */}
            {/* const object = useMemo(() => ({}), []) */}
            {/* const handle = useImperativeHandle(ref, () => ({}), []) */}
            {/* 그런데 useImperativeHandle의 첫 번째 매개변수인 ref는 forwardRef 함수를 호출해 얻은 ref를 사용해야 합니다.
                이는 useImperativeHandle 훅은 다른 훅과 달리 앞서 만든 Input과 같은 컴포넌트 내부에서만 사용해야 한다는 것을 의미합니다. */}

            {/* T와 R extends T: 여기서 T는 사용자가 정의한 타입을 의미하며, R은 T의 확장된 타입을 의미합니다.
                즉, R은 T를 포함하며, 추가적으로 더 많은 속성을 가질 수 있습니다. */} 
            {/* ref: Ref<T> | undefined: 이 매개변수는 React의 ref 객체 또는 undefined를 받습니다. 
                ref 객체를 통해 자식 컴포넌트의 인스턴스나 DOM 요소에 접근할 수 있습니다.  */}
            {/* init:() => R: 이 매개변수는 함수를 받습니다. 이 함수는 아무런 인자를 받지 않고 R 타입의 값을 반환합니다. 
                이 함수가 반환하는 값이 부모 컴포넌트에서 ref를 통해 접근할 수 있는 인스턴스 값입니다. */}
            {/* deps?: DependencyList는 선택적 매개변수로, 의존성 목록을 나타냅니다. 
                이 목록에 포함된 값이 변경될 때마다 init 함수가 다시 실행됩니다.  */}
            {/* void는 이 Hook이 아무런 값을 반환하지 않음을 나타냅니다. */}
            {/* 결국, useImperativeHandle는 "함수 init을 통해 생성된 R 타입의 인스턴스 값을 T 타입의 ref에 연결하고, 
                이 연결은 deps에 명시된 값들의 변경에 따라 업데이트됩니다"라는 의미입니다. 
                이 Hook을 통해 부모 컴포넌트는 자식 컴포넌트의 특정 인스턴스 값에 직접 접근할 수 있습니다. */}
            {/* <ValidatableInputTest />
            <ForwardRefTest />
            <InputValueTest />
            <InputFocusTest />
            <FileDrop />
            <ClickTest /> */}

            {/* 4-6. createContext - Provider, useContext */}
            {/* 컨텍스트란? */}
            {/* 컨텍스트의 속성은 부모 컴포넌트가 자식 컴포넌트로 어떤 정보를 전달하려고 할 때 사용하는 메커니즘입니다.
                그런데 부모 컴포넌트가 직계 자식이 아닌, 손자나 증손자 컴포넌트에 정보를 전달하려고 하면
                다음 그림처럼 번거로운 속성 전달을 해야 합니다. */}
            {/* 리액트는 이런 속성 전달의 번거로움을 해소하고자 컨텍스트라는 메커니즘을 구현해 놓았습니다.
                리액트나 리액트 네이티브에서 컨텍스트는 createContext와 useContext 훅으로 이뤄지며,
                이 둘의 관계는 다음 그림처럼 표현할 수 있습니다. - p.364 */}
            {/* 컨텍스트 기능을 사용하는 리액와 리액트 네이티브 코드는 항상 이름에 'Provider'가 있는 컴포넌트와
                'use컨텍스트_이름()' 형태의 커스텀 훅을 사용합니다.
                컨텍스트 기능을 구현한 react-native-paper와 같은 패키지 또한 항상 Provider란 이름이 있는 컴포넌트와
                Provider가 제공하는 정보를 사용할 수 있게 하는 useTheme과 같은 커스텀 훅을 제공합니다. */}

            {/* createContext 함수 탐구 */}
            {/* 타입스크립트에서 createContext 함수 호출은 다음과 같은 코드 패턴으로 작성해야 합니다. */}
            {/* 
                type ContextType = {
                    // 공유할 데이터 속성
                } 
                const defaultContextValue: ContextType = {
                    // 공유할 데이터 속성 초깃값
                }
                const SomeContext = createContext<ContextType>(defaultContextValue)
            */}

            {/* 컨텍스트 객체가 제공하는 Provider 컴포넌트 */}
            {/* createContext 함수 호출로 생성된 컨텍스트 객체는 Provider와 Consumer라는 컴포넌트를 제공합니다.
                여기서 Provider는 컨텍스트의 기능을 제공할 컴포넌트이고, 
                Consumer는 Provider가 제공한 기능을 사용하고 싶은 클래스 컴포넌트입니다. 
                그런데 이 책은 대부분 컴포넌트를 함수 형태로 구현하므로 Consumer는 무시해도 됩니다.
                함수 컴포넌트는 클래스 컴포넌트와 달리 Consumer보다 훨씬 사용법이 단순한 useContext 훅을 사용하면 되기 때문입니다.*/}
            {/* Provider 컴포넌트는 다음처럼 value와 Children 속성이 있는 ProviderProps 속성을 제공합니다.
                여기서 타입 변수 T는 createContext<T>와 같아야 하고, children은 컴포넌트의 children 속성과 같습니다.
                그리고 value 속성에 설정하는 값이 Provider 컨텍스트가 제공하는 기능이 됩니다. */}
            {/* interface ProviderProps<T> {
                value: T;
                children?: ReactNode;
            } */}

            {/* ResponsiveProvider 컴포넌트 만들기 */}
            {/* 다음 코드는 ResponsiveContext.Provider를 감싸는 RepsonsiveProvider 컴포넌트의 초기 구현 모습입니다.
                ResponsiveContext.provider는 value와 children 속성을 제공한다는 것을 착안해 코드를 작성합니다. */}

            {/* useContext */}
            {/* useContext 훅은 컨텍스트 객체가 제공하는 
                Provider 컴포넌트의 value 속성값을 얻을 수 있게 하는 목적으로 사용되는 훅입니다.  */}
            {/* 
                export const useResponsive = () => {
                    const value = useContext(ResponsiveContext)
                    return value.breakpoint
                } 
            */}
            {/* useContext는 항상 컨텍스트 제공자의 value 속성값을 반환하므로 앞서 본 컨텍스트 제공자의
                value 속성에 설정해 놓았던 breakpoint 멤버 속성값을 반환하고 있습니다. */}
            
            {/* 이처럼 컨텍스트는 최상위 부모 컴포넌트가 컨텍스트 제공자 컴포넌트를 통해 제공하는 기능을
                자식뿐만 아니라 자손 컴포넌트들도 useContext 훅으로 사용할 수 있게 하는 기능입니다.
                다음 장부터 설명하는 리덕스, 리액트 라우터 등 대부분의 리액트 기반 패키지들은
                이 컨텍스트 기능으로 구현되었습니다. */}
            {/* <ResponsiveContextTest /> */}

            {/* 5-1. useReducer | 앱 수준 상태 - Provider/store, configureStore | useSelector - action/reducer |
                useDispatch - dispatch <-> reducer | useReducer */}
            {/* useState 훅은 컴포넌트가 유지해야 할 상태를 관리하는 용도로 사용됩니다.
                그런데 여러 컴포넌트가 상태들을 함께 공유하는 형태로 만들 때가 많은데,
                이처럼 앱을 구성하는 모든 컴포넌트가 함께 공유할 수 있는 상태를 
                앱 수준 상태(app-level states) 줄여서 '앱 상태'라고 합니다. */}

            {/* Provider 컴포넌트와 store 속성 */}
            {/* 리덕스는 이랙트 컨텍스트에 기반을 둔 라이브러리입니다. 즉, 리덕스 기능을 사용하려면 리액트 컨텍스트의 
                Provider 컴포넌트가 최상위로 동작해야 합니다. 따라서 react-redux 패키지는 다음처럼 Provider 컴포넌트를 제공합니다.*/}

            {/* 리덕스 저장소와 리듀서, 액션 알아보기 */}
            {/* 타입스크립트 언어로 리덕스 기능을 사용할 때는 먼저 다음처럼 앱 수준 상태를 표현하는
                Appstate와 같은 타입을 선언해야 합니다. */}
            {/* 리덕스 저장소(redux-store)는 AppState 타입 데이터를 저장하는 공간입니다. 그런데 리덕스 저장소를 생성하려면
                리듀서라는 함수를 알아야 합니다. 리덕스에서 리듀서(reducer)는 현재 상태와 액션이라는 2가지 매개변수로
                새로운 상태를 만들어서 반환합니다. */}
            {/* Reducer 선언문
                export type Reducer<S= any, A extends Action = AnyAction> = (
                    state: S | undefined,
                    action: A
                ) => S
            */}
            {/* S: 상태(state)의 타입을 나타냅니다. 기본값으로 any가 지정되어 있어서 임의의 타입을 사용할 수 있습니다. 
                주로 애플리케이션의 전체 상태 객체 타입이 할당됩니다.
                A extends Action: 액션(action)의 타입을 나타냅니다. Action 타입을 상속하는 제네릭 타입으로 지정되어 있어서, 
                Redux 액션 객체와 호환되는 타입을 사용할 수 있습니다.
                (state: S | undefined, action: A) => S: Reducer 함수의 시그니처를 나타냅니다. 
                state 매개변수는 이전 상태를 나타내며, action 매개변수는 디스패치된 액션 객체를 나타냅니다. 
                이 함수는 현재 상태와 액션을 기반으로 새로운 상태를 계산하고 반환합니다.

                Reducer 함수의 역할은 현재 상태와 액션을 받아서 새로운 상태를 반환하는 것입니다. 
                이를 통해 Redux 스토어의 상태를 업데이트하고, 이후 컴포넌트들이 업데이트된 상태를 구독하여 사용할 수 있게 됩니다. 
                Redux는 이러한 Reducer 함수들을 조합하여 애플리케이션의 전체 상태를 관리하고 업데이트하는 역할을 수행합니다. */}
        
            {/* 리듀서 선언문에 나오는 액션(action)은 플럭스에서 온 용어로서 
                type이란 이름의 속성이 있는 평범한 자바스크립트 객체를 의미합니다.
                redux 패키지는 다음처럼 액션 객체의 타입을 선언하고 있습니다. 
                이 액션 선언문은 type 속성이 반드시 있어야 한다는 의미입니다. */}
            {/* Action 선언문
                export interface Action<T = any> {
                    type: T
                } */}
            {/* T: 액션의 type 속성의 타입을 나타냅니다. 기본적으로 any 타입으로 지정되어 있어서 임의의 타입을 사용할 수 있습니다. 
                주로 문자열이나 상수 열거형(enum) 타입이 할당됩니다. */}
            {/* type: T: 액션의 유형을 식별하는 속성입니다. Redux에서 액션 객체를 디스패치할 때 
                이 type 속성을 기반으로 리듀서(Reducer) 함수가 어떤 동작을 수행할지 결정합니다. 
                type 속성은 액션의 유형을 나타내는 값이어야 합니다. */}
            {/* {
                    type: 'INCREMENT',
                    payload: 10
                } */}
            {/* 위 예시에서 type 속성은 'INCREMENT'이고, payload 속성은 10입니다. 이 액션 객체를 디스패치하면, 
                Redux는 type 속성을 기반으로 해당되는 리듀서 함수를 호출하고, 상태를 업데이트합니다. */}
            {/* Action 인터페이스는 Redux에서 액션 객체의 구조를 정의하기 위해 사용됩니다. 
            액션 객체는 애플리케이션의 상태 변화를 설명하는 정보를 담고 있으며, 이를 통해 Redux 스토어의 상태를 업데이트합니다. */}

            {/* 스토어 객체 관리 함수 */}
            {/* RTK 패키지는 리듀서에서 반환한 새로운 상태를 스토어라는 객체로 정리해 관리하는 configureStore 함수를 제공합니다. */}
            {/* configureStore 함수 선언문
                export declare function configureStore<S, A, M>(options: ConfigureStoreOptions<S, A, M>):
                EnhancedStore<S, A, M>; */}
            {/* S는 Redux store의 상태(state) 타입을 의미합니다.
                A는 Redux store에서 처리할 액션(action)의 타입을 의미합니다.
                M는 Redux store에서 사용하는 미들웨어(middleware)의 타입을 의미합니다.
                
                options: ConfigureStoreOptions<S, A, M>: 이 함수는 ConfigureStoreOptions 타입의 options 파라미터를 받습니다. 
                options 객체는 Redux store의 설정을 담고 있습니다. 
                ConfigureStoreOptions 타입은 Redux store의 상태, 액션, 미들웨어 등의 타입을 포함하며, 
                reducer, middleware, devTools 등의 설정을 담고 있습니다.
                
                EnhancedStore<S, A, M>: 이 함수는 EnhancedStore 타입의 값을 반환합니다. 
                EnhancedStore는 Redux Toolkit에서 제공하는 Redux store의 확장된 버전입니다. 
                이는 기본 Redux store에 추가적인 기능들을 제공합니다. 
                EnhancedStore의 타입 파라미터는 Redux store의 상태, 액션, 미들웨어의 타입입니다. */}

            {/* 따라서 이 configureStore 함수는 주어진 options를 사용하여 Redux store를 생성하고 설정하며, 
                생성된 Redux store를 반환합니다. 이 반환된 store는 애플리케이션의 상태를 관리하고, 
                액션을 디스패치하고, 미들웨어를 적용하는 등의 역할을 합니다.. */}
            
            {/* export interface ConfigureStoreOptions<S, A, M> {
                    reducer
                    middleware?
                    devTools?
                    reloadedState?
                    enhancers?
                } */}
            {/* - reducer: 이 속성은 Redux store의 리듀서를 설정하는 데 사용됩니다. 
                    리듀서는 액션에 따라 상태를 어떻게 변경할지를 결정하는 함수입니다. 이 속성은 반드시 설정되어야 합니다.
                - middleware?: 이 속성은 Redux store에 적용할 미들웨어를 설정하는 데 사용됩니다. 
                    미들웨어는 액션이 디스패치되어 리듀서에서 처리되기 전에 수행되는 작업들을 정의합니다. 이 속성은 선택적입니다.
                - devTools?: 이 속성은 Redux DevTools의 사용 여부를 설정하는 데 사용됩니다. 
                    Redux DevTools는 Redux의 상태 변화를 시각적으로 확인할 수 있게 도와주는 개발 도구입니다. 이 속성은 선택적입니다.
                - reloadedState?: 이 속성은 Redux store의 초기 상태를 설정하는 데 사용됩니다. 이 속성은 선택적입니다.
                - enhancers?: 이 속성은 Redux store에 적용할 enhancer를 설정하는 데 사용됩니다. 
                    enhancer는 Redux store의 기능을 확장하거나 변경하는 데 사용됩니다. 이 속성은 선택적입니다. */}
            {/* 따라서 이 ConfigureStoreOptions 인터페이스는 configureStore 함수에 전달되는 옵션 객체의 형태를 정의합니다. 
            이 옵션 객체를 통해 Redux store의 리듀서, 미들웨어, DevTools 사용 여부, 초기 상태, enhancer 등을 설정할 수 있습니다. */}

            {/* useSelector 훅 사용하기 */}
            {/* 이제 리덕스 저장소에 어떤 내용이 저장되었는지 알고자 스토어의 상탯값을 반환해 주는 useSelector 훅을 살펴보겠습니다. */}

            {/* useSelector 선언문
                export function useSelector<TState, TSelected> (
                    selector: (state: TState) => TSelected
                ): TSelected;
            */}
            {/* TState는 Redux Store의 상태(state) 타입을 의미합니다. TSelected는 선택된 상태의 타입을 의미합니다.
                selector: (state: TState) => TSelected: 이 함수는 selector 함수를 파라미터로 받습니다. 
                selector 함수는 Redux Store의 상태를 파라미터로 받아 TSelected 타입의 값을 반환합니다. 
                이 selector 함수는 Redux Store의 전체 상태에서 필요한 부분만을 선택하여 반환하는 역할을 합니다.
                TSelected: 이 함수는 TSelected 타입의 값을 반환합니다. 이 값은 selector 함수가 반환하는 값입니다. 
                즉, Redux Store의 상태 중에서 선택된 부분의 상태입니다.*/}
            {/* 따라서 이 useSelector 함수는 주어진 selector 함수를 사용하여 Redux Store의 상태를 선택하고 반환합니다. 
                이 반환된 상태는 React 컴포넌트 내에서 사용될 수 있습니다. 
                예를 들어, 다음과 같이 useSelector를 사용하여 Redux Store의 user 상태를 선택할 수 있습니다.
                const user = useSelector((state) => state.user);
                여기서 state.user는 Redux Store의 user 상태를 선택하는 selector 함수입니다. 
                이 selector 함수가 반환하는 user 상태는 useSelector 훅이 반환하는 값이며, 
                이 user 상태는 React 컴포넌트 내에서 사용될 수 있습니다. */}

            {/* const today = useSelector<AppState, Date>(state => state.today) */}

            {/* 리덕스 액션 알아보기 */}
            {/* 앞서 구현한 ReduxClock 컴포넌트가 시계로서 동작하려면 리덕스 저장소의 today값을 현재 시각으로 변경해 줘야 합니다. 
                이와 동시에 ReduxClock 컴포넌트를 다시 렌더링하여 바뀐 today값을 화면에 반영해야 합니다. */}
            {/* 비록 샘플 코드는 리덕스 저장소에 today란 이름의 속성밖에 없지만, 좀 더 일반적인 관점으로 보면 today 외에
                다른 멤버 속성들이 있을 수 있습니다. 그리고 시계를 만드는 코드는 리덕스 저장소의 다른 멤버 속성들의 값은
                건드리지 않고, 오직 today 속성값만 변경해 줘야 합니다. */}
            {/* 리덕스에서 액션은 저장소의 특정 속성값(여기서는 today)만 변경하고 싶을 때 사용하는 방법입니다. */}
            {/* 액션의 type 속성은 리듀서에 switch-case문 같은 분기문을 써서 type 속성에 따라 적절하게 분기하도록 합니다. */}

            {/* 리덕스 리듀서 알아보기 */}
            {/* rootReducer.ts 파일에서 변수 이름만 다음처럼 바꿔보겠습니다. 
                "첫 번째 매개변수에 담긴 과거 상탯값(prevState)을 바탕으로 새로운 상탯값(newState)를 반환한다"는
                리듀서 함수의 목적이 분명해집니다.*/}
            {/* 리덕스에서 리듀서를 구현할 때는 prevState, newState라는 이름 대신 그냥 state를 주로 사용합니다. */}

            {/* useDispatch  */}
            {/* dispatch() 함수를 사용하여 다음 코드 형태로 리덕스 저장소에 저장된 Appstate 객체의 멤버 전부나 일부를 변경할 수 있습니다. 
                다음은 type 속성값이 'setToday'인 액션을 dispatch() 함수를 통해 리덕스 저장소로 보내는 코드입니다. */}
            {/* dispatch({type: 'setToday', today: new Date()}) */}

            {/* 리덕스 저장소와 리듀서 그리고 액션과 dispatch() 함수를 알아보았는데, 이들의 관계를 그림으로 표현하면 다음과 같습니다.
                dispatch(액션) --> 리듀서 --> 리덕스 저장소 : 리덕스 저장소, 리듀서, 액션, dispatch 간의 관계*/}
            {/* 이 그림은 리덕스 저장소에 저장된 앱 수준 상태의 일부 속성값을 변경하려면 일단 액션을 만들어야 한다는 것을 의미합니다.
                그리고 액션은 반드시 dispatch() 함수로 리덕스 저장소에 전달해야 합니다.
                그리고 액션이 리덕스 저장소에 전달될 때 리듀서가 관여합니다. */}
            {/* 또한 다음 그림은 리듀서에 전달되는 두 매개변수 state와 action이 어떻게 만들어지는지를 보여 줍니다.
                리덕스 저장소는 앱 수준 상태를 저장하는 것이 목적이므로 첫 번쩨 메게변숫값을 만들 수 있습니다. 
                또한 액션은 반드시 dispatch() 함수로 전달되므로 dispatch(액션) 코드가 실행되면
                두 번째 매개변수 action이 리듀서로 전달됩니다. 
                function reducer(state: 리덕스 저장소, action : dispatch(액션)) : 리듀서에 전달되는 state와 action 매개변수 생성 주체*/}
            
            {/* 시계 완성하기 */}
            {/* 이제 useDispatch 훅을 호출하여 dispatch() 함수를 얻고, dispatch(액셩)를 1초에 한 번씩 호출하여 시계를 완성해 보겠습니다. */}
            {/* 앞서 구현한 useInterval 커스텀 훅을 사용해 현재 시각을 rootReducer에 보내는 방식으로 시계를 구현합니다. */}

            {/* useReducer 훅 사용하기 */}
            {/* useReducer 훅은 이름에서 알 수 있듯이 리덕스의 리듀서와 사실상 똑같은 기능을 수행합니다. 
                useReducer 훅은 04장에서 본 다른 훅 함수들처럼 ReduxProvider와 같은 컨텍스트 없이 사용합니다. 
                이 떄문에 리덕스의 상태는 앱의 모든 컴포넌트에서 접근할 수 있지만(즉, 전역 상태), 
                useReducer 훅의 상태는 다른 훅 함수들처럼 useReducer 훅을 호출한 컴포넌트 안에서만 유효하다는(즉, 지역상태)
                차이가 있습니다. */}
            {/* useReducer 훅을 사용하면 여러 번의 useState와 useCallback 훅 호출 코드를 간결하게 구현할 수 있습니다. */}
            {/* useReducer 훅 사용법 
                const [상태, dispatch] = useReducer(리듀서, 상태_초깃값) */}

            {/* Q. const [상태, dispatch] = useReducer(리듀서, 상태_초깃값)
            이걸 지금까지 설명한 부분이랑 연결지어서 자세하게 설명해줄래? 어떻게 이렇게 쓸 수 있는 건지에 대해서? */}

            {/* 네, useReducer 훅은 Redux의 기본 개념과 매우 유사하며, 상태 관리를 좀 더 간결하게 할 수 있는 React의 내장 훅입니다.
                useReducer는 두 개의 인자를 받습니다: reducer와 initialState. reducer는 함수로, 
                    현재 상태와 디스패치된 액션을 인자로 받아 새로운 상태를 반환합니다. initialState는 초기 상태값입니다.

                useReducer는 두 개의 값을 튜플 형태로 반환합니다: 현재 상태와 디스패치 함수. 
                    디스패치 함수는 액션을 인자로 받아 reducer를 실행시킵니다.

                Redux에서 스토어가 액션을 받아 리듀서를 실행하는 것과 비슷한 역할을 합니다.

                이를 지금까지 설명한 Redux와 연결지어 보면 다음과 같습니다.

                1. 3. 상태와 액션 정의: AppState와 SetTodayAction처럼 상태와 액션의 타입을 정의합니다. 
                    이는 useReducer의 initialState와 디스패치할 액션에 해당합니다.
                4. 리듀서 정의: rootReducer처럼 액션의 타입에 따라 상태를 어떻게 변경할지 정의하는 리듀서를 정의합니다. 
                    이는 useReducer의 reducer에 해당합니다.
                5. 6. 상태 사용과 액션 디스패치: useSelector로 상태를 가져오고 useDispatch로 액션을 디스패치하는 것 대신, 
                    useReducer는 상태와 디스패치 함수를 한 번에 제공합니다. 
                    따라서 ReduxClock 컴포넌트에서 today 상태를 가져오는 것은 useReducer에서 반환받은 상태를 사용하는 것과 같으며, 
                    'setToday' 액션을 디스패치하는 것은 useReducer에서 반환받은 디스패치 함수를 사용하는 것과 같습니다.
                
                따라서 useReducer를 사용하면 Redux와 비슷한 상태 관리를 좀 더 간결하게 할 수 있습니다. 
                    하지만 useReducer는 컴포넌트 내부 상태를 관리하는 데에 주로 사용되며, 
                    전역 상태 관리나 미들웨어 지원 등 Redux의 고급 기능은 제공하지 않습니다. 
                    이런 경우에는 여전히 Redux를 사용하는 것이 더 적절할 수 있습니다. */}

            {/* 그런데 리덕스의 리듀서와 useReducer 훅은 초기 상탯값을 설정하는 부분에 차이가 있습니다.
                리덕스의 리듀서는 다음처럼 리듀서의 첫 번째 매개변수에 기본값을 설정합니다. */}
            {/* 리덕스의 리듀서 기본값 설정 방법 
                const initialState: AppState = {
                    today: new Date()
                }
                export const rootReducer = (state: AppState = initialState, action: AppActions) => {}
            */}
            {/* 반면에 useReducer 훅은 두 번째 매개변수에 초깃값을 설정합니다. */}
            {/* useReducer 훅 초기 상탯값 설정 방법
                useReducer((state: AppState, action: AppActions) => {}, {today: new Date()}) */}         
            {/* <UseReducerClock />
            <ReduxClock /> */}

            {/* <div /> */}
            {/* 5-2. 리듀서 활용하기 type, dispatch(action) => reducer(state, action), 
                useSelector<AppState, C.State>({AppState} => C.State) 
                '@이름/' 접두사와 payload라는 변수 이름을 사용하는 이유 알기 
                리듀서는 순수 함수여야 한다.*/}
            {/* react-redux 패키지가 버전 8이 되면서 리액트 버전 18에서는 ReduxProvider에 반드시 1개 이상의
                자식 요소를 가져야 합니다. 따라서 <div /> 요소를 추가했습니다. */}

            {/* 리듀서 합치기 */}
            {/* combineReducers() 함수는 여러 리듀서를 통합하여 새로운 리듀서를 만들어 줍니다. */}
            {/* combineReducers() 함수는 다음처럼 ReducerMapObject 타입 객체를 입력 매개변수로 받는 함수입니다.
                여기서 타입 변수 S는 상태를 의미하며 이 절에서는 AppState가 이에 해당합니다. */}
            {/* combineReducers 함수 선언문 
                export function combine Reducers<S>(reducers: ReducerMapObject<S, any>):
                Reducer<CombineState<S>>
            */}
            {/* 
                combineReducers는 여러 개의 리듀서 함수를 하나로 묶어주는 Redux의 함수입니다. 
                이렇게 하면 각 리듀서가 관리하는 상태를 하나의 큰 상태 객체로 조합할 수 있습니다. 
                이 함수의 타입 정의를 자세히 살펴보겠습니다.
                
                export function combineReducers<S>(reducers: ReducerMapObject<S, any>): Reducer<CombineState<S>>
                
                <S>: 제네릭 변수로, 상태의 타입을 나타냅니다. 각 리듀서가 관리하는 상태의 타입을 정의합니다.
                reducers: ReducerMapObject<S, any>: 매개변수로, 각 상태 키와 대응하는 리듀서 함수를 가진 객체입니다. 
                ReducerMapObject는 { [K in keyof S]: Reducer<S[K]> }의 타입을 가지므로, 
                각 상태 키에 대응하는 리듀서가 상태의 해당 부분을 처리하도록 정의됩니다.
                Reducer<CombineState<S>>: 반환값으로, 조합된 리듀서 함수입니다. 
                CombineState<S>는 { [K in keyof S]: S[K] }의 타입을 가지므로, 
                각 상태 키에 대한 상태를 담은 하나의 큰 상태 객체를 반환합니다.

                따라서 combineReducers는 각 상태 키와 대응하는 리듀서 함수를 가진 객체를 받아, 
                하나의 큰 상태 객체를 반환하는 리듀서 함수를 반환합니다. 
                이 반환된 리듀서 함수는 디스패치된 액션을 받아, 각 리듀서를 호출하여 상태를 업데이트하고, 
                업데이트된 상태를 조합하여 반환합니다. 
            */}
            
            {/* combineReducers() 함수의 매개변수 reducers는 ReducersMapObject 타입 객체입니다.
                이 객체의 선언문을 보면 상태 타입의 키에 설정되는 값은
                Reducer<State[Key], Action> 타입의 함수여야 한다는 것을 알 수 있습니다. */}
            {/* ReducersMapObject 타입 선언문
                export type ReducersMapObject<State = any, A extends Action = Action> = {
                    [Key in keyof State]: Reducer<State[Key], A>
                } 
            */}
            {/* 
                ReducersMapObject는 Redux에서 여러 개의 리듀서를 하나의 객체로 묶을 때 사용하는 타입입니다. 
                이 객체는 상태의 각 키에 대응하는 리듀서를 가지고 있습니다.

                export type ReducersMapObject<State = any, A extends Action = Action> = { [Key in keyof State]: Reducer<State[Key], A> }

                <State = any, A extends Action = Action>: 제네릭 변수로, State는 상태의 타입을, 
                A는 액션의 타입을 나타냅니다. 디폴트 값으로는 모든 상태와 액션을 받을 수 있습니다.
                { [Key in keyof State]: Reducer<State[Key], A> }: 객체의 타입 정의로, 상태의 각 키(Key)에 대응하는 리듀서를 가집니다. 
                Reducer<State[Key], A>는 State[Key] 타입의 상태와 A 타입의 액션을 받아 State[Key] 타입의 상태를 반환하는 함수입니다.

                즉, ReducersMapObject는 주어진 상태의 각 키에 대응하는 리듀서 함수를 가진 객체의 타입을 나타냅니다. 
                이 리듀서 함수는 해당 키의 상태와 액션을 받아 새로운 상태를 반환합니다. 
                이를 통해 각각의 리듀서가 상태의 특정 부분을 관리하도록 할 수 있습니다.

                예를 들어, { user: userReducer, posts: postsReducer }와 같은 형태의 리듀서 객체가 있다면, 
                userReducer는 'user' 상태를, postsReducer는 'posts' 상태를 각각 관리하게 됩니다.
            */}

            {/* '@이름/' 접두사와 payload라는 변수 이름을 사용하는 이유 알기 */}
            {/* 앞서 알아보았듯이 combineReducers()는 여러 개의 리듀서를 하나로 결합해 주는 함수입니다.
                그런데 이 리듀서에 @clock/setClock이나 @counter/setCounter 타입의 액션이 유입되면,
                특정 리듀서뿐만 아니라 combineReducers()가 결합한 모든 리듀서에 액션이 전송됩니다. */}
            {/* 즉, @clock/setClock 액션은 clock/reducers.ts 파일에 구현된 리듀서뿐만 아니라, 
                counter/reducers.ts 파일에 구현된 리듀서에도 전송됩니다. 
                즉, 앱에 구현된 아무 리듀서에나 다음처럼 console.log 코드로 출력해 보면 앱에서 
                dispatch 함수로 전송되는 모든 액션을 콘솔 창에서 확인해 볼 수 있습니다. */}
            {/* export const reducer = (state: T.State = initialState, action: T.Actions) => {
                console.log(action) // 모든 액션이 유입
            } */}
            {/* 따라서 액션 타입을 평범하게 setClock, setCounter 등 접두사가 없는 이름으로 지으면 type 값이 겹칠수 있으며, 
                의도하지 않은 리듀서가 자신의 것이 아닌 액션을 처리하다가 오류가 발생할 수 있습니다.
                이런 이름 충돌을 방지하는 효과적인 방법이 @이름/접두사를 type 이름 앞에 붙이는 것입니다.
                그러면 액션의 행선지가 분명해져서 이름 충돌이 발생하는 코드를 미연에 방지할 수도 있고 가독성도 좋아집니다. */}
            {/* 그리고 payload라는 이름을 사용한 이유는 규모가 큰 앱을 개발하다 보면 
                AppState를 구성하는 멤버 상태의 타입들이 수시로 변하기 때문입니다. 
                즉, 개발 초기에는 Date, number 등의 단순한 타입이었지만, 개발 후반에는 다른 속성들이 추가되어 
                좀 더 복잡한 상태로 변경될 수 있습니다.
                
                이럴 때 상태의 이름을 clock, operand 등으로 지으면, 나중에 clock.clock, operand.operand처럼 의미가 이상한 이름이 됩니다.
                반면에 payload는 payload.clock, payload,operand처럼 훨씬 더 자연스러운 이름이 됩니다.*/}
            
            {/* 리듀서는 순수 함수여야 한다. */}
            {/* 리덕스는 리덕스 저장소에 저장된 과거 상태와 리듀서 함수가 반환하는 현재 상태를 
                if(과거_상태!== 현재_상태) 방식으로 비교합니다.
                그런데 04장에서 알아보았듯이 이런 형태의 비교가 가능하려면 리듀서 함수 내부에서 현재 상태는 
                과거 상태를 깊은 복사해야 하며, 이 때문에 리덕스이 리듀스는 반드시 순수 함수여야 합니다.
                
                함수형 언어 분야에서 순수 함수(pure function)는 다음 요건을 만족해야 합니다.
                만약 다음 요건을 만족하지 않으면 불순 함수(impure function)라고 하며,
                다음 요건을 만족하지 않는 경우를 부작용(side-effect)이라고 합니다. */}
            {/* 
                - 함수 몸통에서 입력 매개변수의 값을 변경하지 않는다.(즉, 입력 매개변수는 상수나 읽기 전용으로만 사용한다.)
                - 함수는 함수 몸통에서 만들어진 결과를 즉시 반영한다.
                - 함수 내부에 전역 변수(global variable)나 정적 변수(static variable)를 사용하지 않는다.
                - 함수가 예외(exception)를 발생시키지 않는다.
                - 함수가 콜백 함수 형태로 구현되어 있거나, 함수 몸통에 콜백 함수를 사용하는 코드가 없다.
                - 함수 몸통에 Promise처럼 비동기(asynchronous) 방식으로 동작하는 코드가 없다.
            */}
            {/* 예를 들어 다음 add() 함수는 add(1, 2)처럼 호출할 때 항상 3을 반환하므로 순수 함수입니다. */}
            {/* const add = (a: number, b: number) => a + b */}
            {/* 여기서 리덕스 리듀스를 구현할 때 가장 흔히 하는 실수는 입력 매개변숫값을 변경하는 것입니다.
            */}

            {/* 
                // 예를 들어 다음처럼 리듀서를 구현한 코드에서 매개변수 state 값을 변경하므로 이 리듀서는 불순 함수가 됩니다.
                - 불순 함수 예 1)
                const impureReducer = (state, action) => {
                    state += action.payload
                    return state
                }

                // 반면에 다음 코드는 입력 매개변수 state의 값을 유지하므로 리듀서를 정상으로 구현한 예입니다.
                - 순수 함수 예 1)
                const puerReducer = (state, action) => {
                    return state + action.payload
                }

                다음 리듀서는 입력 매개변수 state 값을 변경하므로 리듀서를 불순 함수로 만드는 또 다른 예입니다.
                - 불순 함수 예 2)
                const impureReducer2 = (state, action) => {
                    state.name = 'Jack'
                    return state
                }

                // 반면에 다음 리듀서는 전개 연산자로 과거 state를 깊은 복사하여 새로운 state 객체를 만들고,
                    이 새로운 state 객체의 name 속성만 바꾸므로 정상으로 구현한 예입니다.
                - 순수 함수 예 2)
                const pureReducer2 = (state, action) => {
                    return { ...state, name: 'Jack' }
                }

                다음 리듀서는 입력 매개변수 state의 값을 변경하므로 리듀서를 불순 함수로 만드는 또 다른 예입니다.
                - 불순 함수 예 3)
                const impureReducer3 = (state, action) => {
                    state.push({name: 'Jack', age: 32})
                    return state
                }

                // 반면에 다음 리듀서는 전개 연산자로 과거 state를 깊은 복사하여 새로운 state 배열을 만들고,
                    이 새로운 state 배열 객체에 새 아이템을 추가하므로 정상으로 구현한 예입니다<div className=""></div>
                - 순수 함수 예 3)
                const pureReducer3 = (state, action) => {
                    return [ ...state, {name: 'Jack', age: 32} ]
                }

                다음 리듀서는 입력 매개변수 state의 값을 변경하므로 리듀서를 불순 함수로 만드는 예입니다.
                - 불순 함수 예 4)
                const impureReducer4 = (state, action) => {
                    const index = 0
                    state.splice(index, 1)
                    return state
                }

                // 반면에 다음 리듀서는 배열의 filter() 메서드를 사용하여 index값이 0인 아이템을 제거한 
                    새로운 배열을 반환하므로 정상으로 구현한 예입니다.
                - 순수 함수 예 4)
                const pureReducer4 = (state, action) => {
                    return state.filter((item, index) => index != 0)
                }
            */}
            {/* <CardsTest />
            <RemoteUserTest />
            <CounterTest />
            <ClockTest /> */}

            {/* 5-3. 리덕스 미들웨어 이해하기 */}
            {/* 리덕스 미들웨어란? 앞 절에서 알아본 것처럼 리듀서 함수 몸통에서는 
                부작용(side effect)을 일으키는 코드를 사용할 수 없습니다. 
                그런데 이 점은 앞서 구현한 RemoteUserTest 컴포넌트처럼 리덕스 기능을 사용하는 컴포넌트를 복잡하게 만듭니다. */}
            {/* 다음 그림처럼 보듯 리덕스 미들웨어는 리듀서 앞 단에서 부작용이 있는 코드들을 실행하여 얻은 결과를
                리듀서 쪽으로 넘겨주는 역할을 합니다. */}
            {/* dispatch(액션) --> 미들웨어 --> 리듀서 --> 리덕스 저장소 */}

            {/* 리덕스 미들웨어는 다음 형태의 2차 고차 함수입니다. */}
            {/* 리덕스 미들웨어
                import {Action, Dispatch} from 'redux'
                
                export function someMiddleware<S = any>({dispatch: Dispatch, getState}: {getState: () => S}) {
                    return (next: Dispatch) => (action: Action) => {
                        const returnValue = next(action)
                        return returnValue
                    }
                }
            */}
            {/* 네, 이 코드는 Redux의 미들웨어를 정의하는 코드입니다. 
                미들웨어는 액션을 디스패치하면서 그 과정에 개입하여 추가적인 작업을 수행할 수 있게 해주는 기능입니다.

                someMiddleware 함수는 미들웨어를 생성하는 함수입니다. 
                이 함수는 dispatch와 getState 두 가지 파라미터를 객체 형태로 받습니다.

                dispatch: 액션을 디스패치하는 함수입니다.
                getState: 현재 스토어의 상태를 가져오는 함수입니다.
                someMiddleware 함수는 다시 함수를 반환하는 높은 차수의 함수(higher-order function)입니다. 
                이렇게 반환된 함수는 next라는 파라미터를 받습니다.

                next: 다음 미들웨어에 액션을 전달하는 함수입니다. 만약 다음 미들웨어가 없다면 리듀서에 액션을 전달합니다.
                이렇게 반환된 함수는 또 다시 함수를 반환하는데, 이 함수는 action이라는 파라미터를 받습니다.

                action: 디스패치된 액션 객체입니다.
                이렇게 반환된 마지막 함수 내부에서는 next(action)을 호출하여 액션을 다음 미들웨어 혹은 리듀서로 전달합니다. 
                그리고 그 결과를 returnValue에 저장하여 반환합니다.
                현재 이 someMiddleware는 액션을 디스패치하는 과정에 별도로 개입하는 로직이 없는 상태입니다. 
                대신 미들웨어의 기본 틀을 갖추고 있어, 필요한 로직을 추가하면 됩니다.

                예를 들어 특정 액션에 대해 추가적인 로그를 남기거나, 비동기 작업을 수행하거나, 
                액션을 조건에 따라 취소하는 등의 작업을 수행할 수 있습니다.

                이해가 되셨나요? 혹시 추가로 궁금하신 점이 있으시다면 언제든지 말씀해주세요.
             */}

            {/* 여기서 Dispatch는 다음처럼 선언된 타입으로 useDispatch 훅으로 얻을 수 있는 dispatch() 함수의 타입과 같습니다. */}
            {/* Dispatch 타입 
                export interface Dispatch<A extends Action = AnyAction> {
                    <T extends A>(action: T): T
                }
            */}
            {/* 
                이 코드는 TypeScript를 사용하여 Redux의 Dispatch 인터페이스를 정의하고 있습니다. 
                Dispatch는 액션을 디스패치하는 함수의 타입을 설명합니다.

                Dispatch<A extends Action = AnyAction>에서 A extends Action = AnyAction 부분은 
                Dispatch가 처리할 수 있는 액션의 타입을 의미합니다. 
                이 타입 A는 Action의 서브타입이어야 하며, 기본값으로 AnyAction을 가집니다. 
                AnyAction은 모든 가능한 액션 타입을 포함하는 Redux의 내장 타입입니다.

                <T extends A>(action: T): T 이 부분은 Dispatch 함수의 시그니처를 정의합니다. 
                이 함수는 T 타입의 action을 인자로 받고, T 타입의 값을 반환합니다. 
                여기서 T는 A 타입, 즉 Action의 서브타입을 상속받는 타입입니다.

                즉, 이 Dispatch 인터페이스는 "액션 타입 A의 서브타입인 T 타입의 액션을 인자로 받아 
                T 타입의 결과를 반환하는 함수"를 의미합니다.

                이렇게 정의된 Dispatch 인터페이스를 사용하면, 액션을 디스패치하는 함수의 타입을 보다 명시적으로 표현할 수 있습니다. 
                따라서 TypeScript의 타입 체킹 기능을 활용하여 디스패치 함수의 사용에 대한 안정성을 높일 수 있습니다.
            */}

            {/* 그리고 리덕스 미들웨어는 항상 다음처럼 action을 매개변수로 받는 함수를 반환해야 합니다. */}
            {/* 액션을 매개변수로 받는 함수 반환
                (dispatch: Dispatch) => (action: Action) => {} 
            */}
            {/* 이 코드는 고차 함수(higher-order function)를 사용하여 Redux 미들웨어의 일반적인 패턴을 나타냅니다.
                
                (dispatch: Dispatch) => (action: Action) => {} 이 함수는 먼저 dispatch를 인자로 받는 함수를 반환하며, 
                이 반환된 함수는 다시 action을 인자로 받는 함수를 반환합니다.
                
                (dispatch: Dispatch) => ...: 이 부분은 dispatch라는 인자를 받는 함수를 정의합니다. 
                dispatch는 Redux의 Dispatch 타입으로, 액션을 디스패치하는 함수입니다.
                
                (action: Action) => {}: 이 부분은 action이라는 인자를 받는 함수를 정의합니다. 
                action은 Redux의 Action 타입으로, 디스패치된 액션 객체입니다.

                즉, 이 함수는 dispatch를 인자로 받아서, 그 결과로 action을 인자로 받는 새로운 함수를 반환합니다. 
                이러한 패턴은 미들웨어에서 자주 사용되며, 이를 통해 미들웨어는 디스패치 과정에 개입하여 추가적인 작업을 수행할 수 있습니다.

                각각의 함수가 어떤 작업을 수행하는지는 {} 부분에 작성되는 코드에 따라 달라집니다. 
                현재는 {} 부분이 비어 있으므로, 아무런 추가 작업을 수행하지 않습니다. 
                필요한 로직을 추가하여 미들웨어의 기능을 구현할 수 있습니다. 
            */}

            {/* 그런데 만일 미들웨어가 아무런 일도 안 한다면, 리덕스 저장소로 유입되는 모든 액션이 저장소로 유입되지 못하므로,
                리덕스는 자신의 기능을 정상으로 수행할 수 없습니다.
                따라서 미들웨어는 다음 코드처럼 next의 반환값을 다시 반환해 다른 미들웨어도 함께 동작할 수 있게 해야 합니다.
                결국 미들웨어를 사용하는 기본형태는 다음과 같습니다. */}
            {/* 미들웨어 기본 형태
                (next: Dispatch) => (action: Action) => {
                    return next(action)
                }
            */}
            {/* 이 코드도 Redux 미들웨어의 일반적인 패턴을 나타내는 고차 함수(higher-order function)입니다.

                (next: Dispatch) => ...: 이 부분은 next라는 인자를 받는 함수를 정의합니다. next는 Redux의 Dispatch 타입으로, 
                다음 미들웨어에 액션을 전달하는 함수입니다. 만약 더이상 처리할 미들웨어가 없다면, next는 리듀서에 액션을 전달합니다.
                (action: Action) => ...: 이 부분은 action이라는 인자를 받는 함수를 정의합니다. 
                action은 Redux의 Action 타입으로, 디스패치된 액션 객체입니다.
                
                이 함수는 next를 인자로 받아서, 그 결과로 action을 인자로 받는 새로운 함수를 반환합니다. 
                이런 패턴은 미들웨어에서 자주 사용되며, 이를 통해 미들웨어는 액션의 디스패치 과정에 개입하여 
                추가적인 작업을 수행할 수 있습니다.

                (action: Action) => { return next(action) }: 이 부분은 action을 받아서 next(action)을 호출하는 함수를 정의합니다. 
                즉, 받은 액션을 그대로 다음 미들웨어 혹은 리듀서로 전달합니다.

                따라서 이 코드는 "액션을 받아서 그대로 다음 단계로 전달하는" 미들웨어의 기본 틀을 나타냅니다. 
                이 틀 위에 필요한 로직을 추가하여 미들웨어의 기능을 구현할 수 있습니다.
            */}

            {/* 썽크 미들웨어 알아보기 */}
            {/* 앞서 리덕스 미들웨어가 2차 고차 함수라고 설명한 적이 있는데, 썽크는 다음처럼 action의
                타입이 함수면 acton을 함수로서 호출해 주는 기능을 추가한 미들웨어입니다. */}
            {/* 
                import {Action, Dispatch} from 'redux'
                
                export function someMiddleware<S = any>({dispatch: Dispatch, getState}: {getState: () => S}) {
                    return (next: Dispatch) => (action: Action) => {
                        if (typeof action === 'function')
                            return action(dispatch, getState)
                        return next(action)
                        //  const returnValue = next(action)
                        //  return returnValue
                    }
                }
            */}
            {/* 이 코드는 Redux 미들웨어인 someMiddleware를 정의하는 코드입니다. 
                이 미들웨어는 액션을 디스패치하는 과정에서 특정 조건에 따라 다른 작업을 수행하도록 합니다.

                export function someMiddleware<S = any>({dispatch: Dispatch, getState}: 
                {getState: () => S}) {...}: someMiddleware 함수를 정의하고, 외부로 공개합니다. 
                이 함수의 인자는 dispatch 함수와 getState 함수를 포함하는 객체입니다. 
                dispatch는 액션을 디스패치하는 함수이며, getState는 현재 스토어의 상태를 가져오는 함수입니다.

                return (next: Dispatch) => ...: someMiddleware 함수는 함수를 반환합니다. 
                이 반환된 함수는 next라는 인자를 받습니다. next는 다음 미들웨어에 액션을 전달하는 함수입니다. 
                만약 다음 미들웨어가 없다면, next는 리듀서에 액션을 전달합니다.

                (action: Action) => {...}: next를 인자로 받는 함수는 다시 함수를 반환합니다. 
                이 반환된 함수는 action이라는 인자를 받습니다. action은 디스패치된 액션 객체입니다.

                이제 이 함수 내부에서 실제 작업을 수행합니다.
                if (typeof action === 'function') return action(dispatch, getState): 디스패치된 액션이 함수라면, 
                이 함수를 호출하고 그 결과를 반환합니다. 이 때, dispatch와 getState를 인자로 전달합니다. 
                이는 thunk 패턴을 구현한 것으로, 액션 생성자가 비동기 작업을 수행하거나, 
                현재 스토어 상태에 따라 다른 액션을 디스패치해야 할 경우에 유용합니다.

                return next(action): 디스패치된 액션이 함수가 아니라면, next(action)을 호출하여 
                액션을 다음 미들웨어 혹은 리듀서로 전달하고 그 결과를 반환합니다.
                따라서, 이 someMiddleware 미들웨어는 디스패치된 액션이 함수인 경우와 그렇지 않은 경우에 따라 다른 작업을 수행합니다.
            */}

            {/* 이에 따라 썽크 미들웨어를 장착하면 다음처럼 dispatch 함수를 매개변수로 수신하는 함수 형태로
                액션 생성기를 만들 수 있습니다. */}
            {/* const function Action = (dispatch: Dispatch) => {
                dispatch(someAction)
            } */}
            {/* 앞 절에서 알아본 바와 같이 리듀서는 순수 함수여야 하지만 리덕스 미들웨어는 순수 함수일 필요가 없습니다.
                사실상 미들웨어는 부작용이 있는 코드를 마치 리듀서에서 동작하는 것처럼 만들어 주는 역할을 합니다.
                loading 멤버 상태를 구현하면서 이 의미를 알아보겠습니다. */}
            {/* <FetchTest />
            <ErrorMessageTest />
            <LoadingTest />
            <LoggerTest /> */}

            {/* 5-4. */}
            {/* 지금까지 배운 내용을 토대로 아틀라시안 사가 공급하는 트렐로 처럼 동작하는 앱을 만들어 보겠습니다.
                트렐로는 많은 개발자가 사용하는 웹 기반의 프로젝트 관리 소프트웨어로서, 드래그 앤 드롭 방식의
                칸반 보드를 기반으로 동작합니다. */}
            {/* 칸반 보드란? */}
            {/* 칸반은 '시각 신호'를 뜻하는 일본어로서 도요타 자동차 창업주가 처음 고안했습니다.
                칸반 보드는 작업을 시각적으로 표시해 주어 프로젝트 관리를 쉽게 할 수 있도록 돕습니다. 
                카드 목록을 수직 방향으로 구성하며 각 목록이나 카드는 드래그 앤 드롭으로 소속이나 순서를 자유롭게 변경할 수 있습니다. */}
            {/* <Board /> */}

            {/* 6-1. 처음 만나는 리액트 라우터 */}
            {/* Home, Link, useNavigate, 라우트 변수(:cardid), useLocation, useParams, useSearchParams 
                Card 컴포넌트에 리액트 라우터 훅 적용하기, 카드 상세 페이지 만들기 */}
            {/* 6-2. Outlet 컴포넌트와 중첩 라우팅 */}
            {/* Outlet, 색인 라우트, navbar/footer, Landing Page(Hero, Promotion) 
                Custom Link, useResolvedPath, useMatch */}
            {/* 6-3. 공개 라우트와 비공개 라우트 구현하기 */}
            {/* 공개 라우트와 비공개 라우트 : 사용자 인증 컨텍스트 만들기, 로그인 여부에 따라 내비게이션 메뉴 구분하기 */}
            {/* 회원 가입 기능 만들기 : 웹 브라우저를 종료해도 지워지지 않는 저장소 이용하기 */}
            {/* 로그인 기능 만들기, 로그아웃 기능 만들기, 로그인한 사용자만 접근하도록 막기 */}
            <RoutesSetup />

        {/* </main> */}
        {/* 5-2. 5-3. 5-4. */}
        </AuthProvider >
        </BrowserRouter>
        </ DndProvider>
        </ReduxProvider>

        // 5-1.
        // </ReduxProvider>
        // 4-6.
        // </ResponsiveProvider>
    )
}
