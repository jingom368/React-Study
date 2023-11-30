import {useCallback, useEffect, useRef} from 'react'
import {Title} from '../components'
import {Input} from '../theme/daisyui'

export default function ForwardRefTest() {
    const inputRef = useRef<HTMLInputElement>(null)

    // prettier-ignore
    const getValue = useCallback(
        () => 
            alert(`input value: ${inputRef.current?.value}`),
        []
    )

    useEffect(() => inputRef.current?.focus(), [])

    // prettier-ignore
    return (
        <section className="mt-4">
            <Title>InputValueTest</Title>
            <div className="flex justify-center mt-4">
                <div className='flex flex-col w-1/3 p-2'>
                    <Input ref={inputRef} className='input input-primary' />
                    <button onClick={getValue} className="mt-4 btn bg-primary">
                        get value
                    </button>
                </div>
            </div>
        </section>
    )
}
