import {useCallback, useRef} from 'react'
import {ValidatableInput} from '../theme/daisyui'
import type {ValidatableInputMethods} from '../theme/daisyui'
import {Title} from '../components'

export default function ValidatableInputTest() {
    const methodsRef = useRef<ValidatableInputMethods>(null)

    const validateEmail = useCallback(() => {
        if (methodsRef.current) {
            const [valid, validOrErrorMessage] = methodsRef.current.validate()
            if (valid) alert(`${validOrErrorMessage}는 유효한 이메일 주소입니다.`)
            else alert(validOrErrorMessage)
        }
    }, [])

    // prettier-ignore
    return (
        <section className="mt-4">
            <Title>ValidatableInputTest</Title>
            <div className="flex justify-center mt-4">
                <div className="flex flex-col w-1/3 p-2">
                    <ValidatableInput type='email' ref={methodsRef}
                    className="input-primary" />
                    <button onClick={validateEmail} className="mt-4 btn bg-primary">
                        validate
                    </button>
                </div>
            </div>
        </section>
    )
}

// 아까 코드와 더불어서 이 코드 내에서 forwardRef 함수와 useuimperativeHandle이 돌아가는 원리에 대해서 아주아주 자세하게 설명해줄래?

// 1. const methodsRef = useRef<ValidatableInputMethods>(null): useRef를 사용하여 methodsRef라는 이름의 참조 객체를 생성합니다. 
//      이 참조 객체는 ValidatableInputMethods 타입의 현재 값을 가질 수 있습니다.
// 2. <ValidatableInput type='email' ref={methodsRef} className="input-primary" />: ValidatableInput 컴포넌트를 렌더링하고, 
//      이 컴포넌트에 methodsRef를 ref로 전달합니다. ValidatableInput 컴포넌트는 
//      forwardRef를 사용하여 부모 컴포넌트로부터 ref를 받아올 수 있습니다.
// 3. ValidatableInput 컴포넌트 내부에서는 useImperativeHandle 훅을 사용하여 methodRef 
//      (즉, methodsRef)에 validate 메서드를 할당합니다. 이 메서드는 입력값이 유효한지 검사하고, 유효성 검사 결과를 반환합니다.
// 4. 그런 다음 <button onClick={validateEmail} className="mt-4 btn bg-primary">validate</button>: 
//      버튼을 클릭하면 validateEmail 함수가 실행됩니다. 이 함수는 useCallback을 사용하여 메모이제이션되어 있습니다.
// 5. validateEmail 함수 내부에서는 methodsRef.current가 존재하는지 확인합니다. 
//      존재한다면, methodsRef.current.validate()를 호출하여 이메일 주소의 유효성을 검사합니다. 
//      검사 결과는 valid와 validOrErrorMessage라는 두 개의 변수에 할당됩니다.
// 6. 만약 valid가 true라면, alert를 사용하여 유효한 이메일 주소임을 사용자에게 알립니다. 
//      만약 valid가 false라면, alert를 사용하여 validOrErrorMessage에 담긴 오류 메시지를 사용자에게 보여줍니다.

// 이런 식으로 forwardRef와 useImperativeHandle을 사용하면 부모 컴포넌트가 자식 컴포넌트의 메서드를 직접 호출할 수 있게 됩니다. 
//      이는 부모-자식 컴포넌트 간의 상호작용을 효과적으로 관리할 수 있게 해줍니다.


// 이 참조 객체는 ValidatableInputMethods 타입의 현재 값을 가질 수 있습니다. 이게 정확히 무슨 말이야?

// - "이 참조 객체는 ValidatableInputMethods 타입의 현재 값을 가질 수 있습니다."는 말은 
//      useRef 훅에 의해 생성된 methodsRef라는 참조 객체가 ValidatableInputMethods 타입의 값을 참조하거나 저장할 수 있다는 것을 의미합니다.
// - useRef는 뮤터블한(ref 값이 변경되어도 컴포넌트가 리렌더링되지 않는) 참조 객체를 반환하는데, 
//      이 객체의 .current 프로퍼티가 변경 가능하며, 이 프로퍼티는 useRef에 전달된 인자(이 경우 null)의 초기값으로 설정됩니다.
// - useRef<ValidatableInputMethods>(null)로 methodsRef를 초기화했기 때문에, 
//      methodsRef.current는 null이거나 ValidatableInputMethods 타입의 값을 가질 수 있습니다.
// - ValidatableInputMethods는 validate라는 메서드를 가진 객체의 형태를 정의하는 타입입니다. 
//      따라서 methodsRef.current는 이 validate 메서드를 가진 객체를 참조할 수 있습니다.

// - 이것은 ValidatableInput 컴포넌트에서 useImperativeHandle 훅을 사용하여 
//      methodsRef.current에 validate 메서드를 할당했기 때문에 가능합니다. 
//      이로 인해 ValidatableInputTest 부모 컴포넌트에서 validateEmail 함수 내에서 
//      methodsRef.current.validate()를 호출해 ValidatableInput 컴포넌트의 validate 메서드를 사용할 수 있게 됩니다.