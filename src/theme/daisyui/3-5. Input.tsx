import type {FC, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import { forwardRef } from 'react'

export type ReactInputProps = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>

export type InputProps = ReactInputProps & {}

// export const Input: FC<InputProps> = ({className: _className, ...inputProps}) => {
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {className: _className, ...inputProps} = props
    const className = ['input', _className].join(' ')
    // return <input {...inputProps} className={className} />
    return <input ref={ref} {...inputProps} className={className} />
})
