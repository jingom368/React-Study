import {ReactInputProps} from './3-5. Input'
import {forwardRef, useImperativeHandle, useMemo, useRef} from 'react'

/* 
    export type ReactInputProps = DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > 
    export type InputProps = ReactInputProps & {}
*/

export type ValidatableInputMethods = {
    validate: () => [boolean, string]
}

// 여기에 const methodRef = useRef<TextInputMethods | null>(null) 이 정의 되어 있는거야?

// 아니요, 코드에서 methodRef는 forwardRef 함수의 두 번째 인자로 전달되는 ref를 받아오는 매개변수입니다.
// useRef<TextInputMethods | null>(null)로 methodRef가 미리 정의되어 있는 것은 아닙니다.

// forwardRef는 React의 함수로, 부모 컴포넌트에서 생성된 ref를 자식 컴포넌트로 전달하는 역할을 합니다.
// forwardRef의 첫 번째 인자는 자식 컴포넌트의 타입이고, 두 번째 인자는 부모 컴포넌트의 props와 ref를 인자로 받는 함수입니다.

// 따라서, forwardRef<ValidatableInputMethods, ReactInputProps>는
// 부모 컴포넌트에서 전달받은 ref를 ValidatableInputMethods 타입으로,
// props를 ReactInputProps 타입으로 받는 자식 컴포넌트를 생성합니다.
// ({className: _className, ...inputProps}, methodRef)는 이 자식 컴포넌트 함수의 매개변수로,
// inputProps는 부모 컴포넌트로부터 전달받은 속성들을, methodRef는 부모 컴포넌트로부터 전달받은 ref를 가리킵니다.

// export const Input: FC<InputProps> = ({className: _className, ...inputProps}) => {
// export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
export const ValidatableInput = forwardRef<ValidatableInputMethods, ReactInputProps>(
    // (props, ref) => {
    ({type, className: _className, ...inputProps}, methodRef) => {
        // const {className: _className, ...inputProps} = props
        const className = useMemo(() => ['input', _className].join(' '), [_className])
        const inputRef = useRef<HTMLInputElement>(null)

        useImperativeHandle(
            methodRef,
            () => ({
                validate: (): [boolean, string] => {
                    const value = inputRef.current?.value
                    if (!value || !value.length)
                        return [false, '사용자가 입력한 내용이 없습니다']

                    switch (type) {
                        case 'email': {
                            const regEx =
                                /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
                            const valid = regEx.test(value)
                            return valid
                                ? [true, value]
                                : [false, '틀린 이메일 주소입니다.']
                        }
                    }
                    return [true, value]
                }
            }),
            [type]
        )
        // return <input {...inputProps} className={className} />
        return <input {...inputProps} className={className} ref={inputRef} />
    }
)

// 이 코드 내에서 forwardRef 함수와 useuimperativeHandle이 돌아가는 원리에 대해서 아주아주 자세하게 설명해줄래?

// 물론입니다. 먼저 forwardRef 함수와 useImperativeHandle이 각각 어떤 역할을 하는지부터 설명하겠습니다.

// forwardRef: React의 forwardRef는 부모 컴포넌트로부터 받은 ref를 자식 컴포넌트로 전달하는 역할을 합니다. 
//     이를 통해 부모 컴포넌트는 자식 컴포넌트의 DOM에 접근할 수 있게 됩니다. 
//     forwardRef는 함수 컴포넌트의 두 번째 인자로 ref를 받을 수 있게 해주는데, 이 ref는 부모 컴포넌트로부터 전달받은 ref입니다.

// useImperativeHandle: React의 useImperativeHandle 훅은 부모 컴포넌트가 자식 컴포넌트의 인스턴스 메서드를 사용할 수 있게 해줍니다. 
//     첫 번째 인자로는 ref를 받고, 두 번째 인자로는 ref를 통해 노출하고자 하는 함수들을 반환하는 함수를 받습니다.
//     이제 이 두 함수가 어떻게 함께 작동하는지 살펴보겠습니다.

// 1. 부모 컴포넌트에서 ValidatableInput 컴포넌트를 사용할 때 ref를 전달합니다. 
//     이 ref는 forwardRef를 통해 ValidatableInput 컴포넌트로 전달됩니다.
// 2. ValidatableInput 컴포넌트에서는 이 ref를 methodRef로 받아옵니다.
// 3. useImperativeHandle 훅을 사용해 methodRef에 특정 메서드를 할당합니다. 
//     여기서는 validate라는 메서드를 할당하고 있습니다.
// 4. 이제 부모 컴포넌트에서는 ref.current.validate()와 같은 방식으로 validate 메서드를 호출할 수 있게 됩니다. 
//     이를 통해 부모 컴포넌트는 자식 컴포넌트의 메서드를 직접 호출할 수 있습니다.

// 이러한 방식은 부모 컴포넌트가 자식 컴포넌트의 내부 메서드나 DOM에 접근해야 하는 특별한 상황에서 유용하게 사용됩니다. 
//     그러나 overuse는 컴포넌트 간의 강한 coupling을 초래하므로, 필요한 경우에만 사용하는 것이 좋습니다.