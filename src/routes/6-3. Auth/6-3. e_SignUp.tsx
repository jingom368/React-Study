import type {ChangeEvent} from 'react'
import {useState, useCallback} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useAuth} from '../../contexts'
import * as D from '../../data'

type SignupFormType = Record<'email' | 'password' | 'confirmPassword', string>
const initialFormState = {email: D.randomEmail(), password: '1', confirmPassword: '1'}

export default function SignUp() {
    const [{email, password, confirmPassword}, setForm] =
        useState<SignupFormType>(initialFormState)

    const changed = useCallback(
        (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
            setForm(obj => ({...obj, [key]: e.target.value}))
        },
        []
    )

    const navigate = useNavigate()
    const {signup} = useAuth()
    const createAccount = useCallback(() => {
        console.log(email, password, confirmPassword)
        if (password === confirmPassword) {
            signup(email, password, () => navigate('/'))
        } else alert('password is not equal to confirmPassword')
    }, [email, password, confirmPassword, navigate, signup])

    return (
        <div className="flex flex-col min-h-screen border-gray-300 rounded-xl shadow-xl bg-gray-100 border">
            <div className="flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
                <div className="w-full px-6 py-8 text-black bg-white rounded shadow-md">
                    <h1 className="mb-8 text-2xl text-center text-primary">Sign Up</h1>
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
                    <input
                        type="password"
                        className="w-full p-3 mb-4 input input-primary"
                        name="confirm_password"
                        placeholder="Confirm_Password"
                        value={confirmPassword}
                        onChange={changed('confirmPassword')}
                    />
                    <button
                        type="submit"
                        className="w-full btn btn-primary"
                        onClick={createAccount}>
                        Create Account
                    </button>
                </div>
                <div className="mt-6 text-grey-dark">
                    Already have an account?
                    <Link className="btn btn-link btn-primary" to="/login">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    )
}

/*
    회원 가입 기능 만들기
    
    이제 다음 그림과 같은 모습의 회원 가입 컴포넌트를 만들어 보겠습니다.

    그런데 이런 폼 형태의 화면에서 <input> 요소들은 다음처럼 번거로운 형태의 코드를 계속 반복해야 합니다.

    const [email, setEmail] = useState<string>(D.randomEmail())
    const [password, setPassword] = useState<string>('1')
    const [confirmPassword, setConfirmPassword] = useState<string>('1')
    const emailChanged = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setEmail(notUsed => e.target.value) 
    }) 
    const passwordChanged = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setPassword(notUsed => e.target.value) 
    }) 
    const confirmPasswordChanged = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(notUsed => e.target.value) 
    }) 

    이보다 좀 더 간결하고 바람직한 구현 방법은 다음처럼 폼에서 <input> 요소의 value 속성에
    설정할 변수 이름을 속성으로 가진 Record 타입을 만드는 것입니다.

    type SignUpFormType = Record<'email' | 'password' | 'confirmPassword', string>

    그리고 SignUpFormType 객체를 useState 훅으로 생성한 뒤, 
    값 부분에 타입스크립트의 비구조화 할당문을 적용하여 email, password 등의 값을 얻습니다.

    const [{email, password, confirmPassword}, setForm] = useState<SignUpFormType>(initialFormState)

    또한 다음처럼 changed 라는 이름의 2차 고차 함수를 구현합니다.

    const changed = useCallback(
        (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
            setForm(obj => ({...obj, [key]: e.target.value }))
        }
    )

    그러면 다음처럼 <input>의 value와 onChange 속성값을 매우 간결하게 구현할 수 있습니다.

    <input value={email} onChange={changed('email')} />

    다음은 <CREATE ACCOUNT> 버튼을 눌렀을 때 호출되는 createAccount 콜백 함수를 구현한 것입니다.

    const navigate = useNavigate()
    const {signup} = useAuth()

    const createAccount = useCall(() => {
        signup(email, password, () => navigate('/'))
    }, [email, password, navigate, signup])

    앞서 AuthContext.tsx 파일에 구현했던 signup 함수의 타입은 다음과 같습니다.
    그리고 이 함수는 세 번째 매개변수 callback이 유효한 값이면 callback 함수를 호출해 주므로,
    회원 가입 뒤 바로 '/' 라우트 경로로 진입할 수 있습니다.

    signup: (email: string, password: string, callback?: callback) => void

    이런 내용을 종합하여 src/routes 디렉터리의 SignUp.tsx 파일을 다음처럼 구현합니다.
*/

// ---------- GPT 4.0 ---------- //

// Q. 위의 부분에 대해서 더 자세하게 설명해줘.
// 특히 Record 부분과 2차 고차 함수의 개념적 부분도 함께 곁들여서 예시에 대한 설명이랑 말이지.

/*

    먼저, 코드에서 사용된 Record와 고차 함수에 대한 개념을 설명하겠습니다.
    
    Record: TypeScript에서 제공하는 유틸리티 타입 중 하나로, 키-값 쌍을 나타내는 객체 타입을 생성합니다. 
    예를 들어, Record<'email' | 'password' | 'confirmPassword', string>은 
    'email', 'password', 'confirmPassword'라는 키에 각각 string 타입의 값을 가지는 객체 타입을 나타냅니다.

    고차 함수: 함수를 인자로 받거나, 함수를 반환하는 함수를 말합니다. 
    '2차 고차 함수'는 함수를 반환하는 함수를 반환하는 함수를 말합니다. 
    예를 들어, changed 함수는 문자열을 인자로 받아, ChangeEvent를 인자로 받는 함수를 반환합니다.

    다음으로, 코드의 각 부분에 대해 설명하겠습니다.
    
    useState<SignUpFormType>(initialFormState): 
        SignUpFormType 타입의 상태와 상태를 설정하는 함수를 선언합니다. 초기 상태는 initialFormState입니다.

    const [{email, password, confirmPassword}, setForm] = useState<SignUpFormType>(initialFormState): 
        이 코드는 상태의 값 부분을 비구조화하여 'email', 'password', 'confirmPassword'라는 변수를 선언합니다.

    const changed = useCallback((key: string) => (e: ChangeEvent<HTMLInputElement>) => {...}, []): 
        'changed' 함수는 문자열을 인자로 받아, ChangeEvent를 인자로 받는 함수를 반환합니다. 
        이 함수는 상태를 업데이트하는데, 새로운 상태는 기존 상태에 key에 해당하는 속성의 값을 변경한 객체입니다.

    <input value={email} onChange={changed('email')} />: 
        이 코드는 'email'이라는 키에 해당하는 입력 필드를 나타냅니다. 
        사용자가 입력을 변경하면, 'changed' 함수가 호출되어 상태가 업데이트됩니다.

    const createAccount = useCall(() => {...}, [email, password, navigate, signup]): 
        'createAccount' 함수는 회원 가입을 처리하고, 성공하면 '/' 라우트로 이동합니다. 
        이 함수는 'email', 'password', 'navigate', 'signup'이 변경될 때마다 새로 생성됩니다.

    signup: (email: string, password: string, callback?: callback) => void: 
        'signup' 함수는 이메일과 비밀번호를 인자로 받아 회원 가입을 처리하고, 세 번째 인자로 전달된 콜백 함수가 있다면 호출합니다. 
        이 콜백 함수는 회원 가입 후에 수행할 추가 작업을 정의하는 데 사용할 수 있습니다.

    이렇게 코드를 작성하면, 각 입력 필드에 대해 상태를 따로 관리하는 대신, 
    하나의 상태로 모든 입력 필드의 값을 관리할 수 있습니다. 이는 코드를 간결하게 만들고, 중복을 줄여주는 효과가 있습니다.
*/

/* 
    Q. 그러니까 내가 궁금한 건 
        '이렇게 하면, key에 해당하는 속성만 새로운 값으로 변경되고, 나머지 속성은 기존의 값이 유지됩니다. 
        이는 전개 연산자가 기존 객체의 속성을 그대로 복사하기 때문입니다. 그리고 이후에 key에 해당하는 속성을 새로운 값으로 설정하면, 
        만약 같은 키가 이미 있다면 그 값이 새로운 값으로 덮어씌워지게 됩니다.' 
    부분에서 어떻게 자바스크립트는 나머지 속성의 기존 값은 유지한 채 새로운 값만 덮어씌우는 건지, 
    근본적인 이유에 대해서 아주 자세하고 상세하게 알려줄래?
*/

/*

네, 좋습니다. 자바스크립트에서 객체의 속성을 복사하거나 변경하는 방법에 대해 설명하겠습니다.

자바스크립트에서 객체는 키-값 쌍의 컬렉션입니다. 객체의 속성에 접근하려면, 해당 키를 사용합니다. 
    키가 같은 속성이 이미 있다면, 그 속성의 값을 새로운 값으로 덮어씌울 수 있습니다.

전개 연산자(...)는 객체의 모든 속성을 새로운 객체에 복사합니다. 
    이 때, 복사된 속성의 키와 값은 원본 객체와 동일합니다. 
    이는 새로운 객체를 생성하고, 그 객체의 속성을 원본 객체의 속성과 동일하게 설정하는 것과 같습니다.

let original = {a: 1, b: 2};
let copy = {...original};  // copy is {a: 1, b: 2}
이후에 새로운 객체에 같은 키를 가진 속성을 추가하면, 해당 속성의 값이 새로운 값으로 덮어씌워집니다.

let original = {a: 1, b: 2};
let updated = {...original, a: 3};  // updated is {a: 3, b: 2}
이는 자바스크립트에서 같은 키를 가진 속성이 여러 개 있을 수 없기 때문입니다. 
    같은 키를 가진 속성을 추가하면, 그 키에 해당하는 원래의 속성은 덮어씌워집니다.

따라서 전개 연산자를 사용하면, 원본 객체의 속성을 새로운 객체에 복사하고, 특정 속성만 새로운 값으로 덮어씌울 수 있습니다. 
    이 방식을 사용하면, 원본 객체는 변경되지 않고, 새로운 객체에는 원본 객체와 동일한 속성과 새로운 속성이 함께 있게 됩니다. 
    이러한 방식은 불변성을 지키는 데 유용하며, React에서 상태를 관리하는 데 자주 사용됩니다.
*/
