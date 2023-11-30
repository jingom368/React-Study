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
import ClickTest from './pages/4-5. ClickTest'
import FileDrop from './pages/4-5. e_FileDrop'
import InputFocusTest from './pages/4-5. InputFocusTest'
import InputValueTest from './pages/4-5. InputValueTest'
import ForwardRefTest from './pages/4-5. ForwardRefTest'
import ValidatableInputTest from './pages/4-5. ValidatableInputTest'

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
            {/* const [value, setValue] = useState<string>('') 
                const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => 
                setValue(notUsed => e.target.value) 
                
                <input value={value} onChange={onChangeValue} /> */}
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
            <ValidatableInputTest />
            <ForwardRefTest />
            <InputValueTest />
            <InputFocusTest />
            <FileDrop />
            <ClickTest />
        </main>
    )
}
