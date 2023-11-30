import type {ChangeEvent, DragEvent} from 'react'
import {useState, useRef, useCallback, useMemo} from 'react'
import {useToggle} from '../hooks'
import {Title, Div} from '../components'
import {imageFileReaderP} from '../utils'

export default function FileDrop() {
    const [imageUrls, setImageUrls] = useState<string[]>([])
    const [error, setError] = useState<Error | null>(null)
    const [loading, toggleLoading] = useToggle(false)

    const inputRef = useRef<HTMLInputElement>(null)
    const onDivClick = useCallback(() => inputRef.current?.click(), [])

    const makeImageUrls = useCallback(
        (files: File[]) => {
            // Array.from(files).map(imageFileReaderP)가 Promise 객체의 배열을 반환하는 이유는
            //     imageFileReaderP 함수가 Promise를 반환하기 때문입니다. map 함수는 배열의 각 요소에 함수를 적용하고,
            //     그 결과를 배열로 만드는데, 여기서 적용하는 함수가 imageFileReaderP이므로 결과 배열은 Promise 객체들로 이루어집니다.
            //     이렇게 생성된 Promise 객체의 배열은 Promise.all 함수의 인자로 사용될 수 있습니다.
            const promises = Array.from(files).map(imageFileReaderP)
            toggleLoading()
            Promise.all(promises)
                .then(urls => setImageUrls(imageUrls => [...urls, ...imageUrls]))
                .catch(setError)
                .finally(toggleLoading)
        },
        [toggleLoading]
    )

    const onInputChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setError(null)
            // 이 때의 이벤트 객체는 ChangeEvent<HTMLInputElement> 타입이며, 
            //     이 객체의 target.files 속성에 사용자가 선택한 파일 객체가 들어 있습니다.
            const files = e.target.files
            files && makeImageUrls(Array.from(files))
        },
        [makeImageUrls]
    )

    const onDivDragOver = useCallback((e: DragEvent) => e.preventDefault(), [])
    const onDivDrop = useCallback(
        (e: DragEvent) => {
            e.preventDefault() // 떨어뜨린 이미지가 새 창에 나타나는 것을 방지
            setError(null)
            // 이 때의 이벤트 객체는 DragEvent 타입이며, 
            //     이 객체의 dataTransfer.files 속성에 드롭된 파일 객체가 들어 있습니다.
            const files = e.dataTransfer?.files
            files && makeImageUrls(Array.from(files))
        },
        [makeImageUrls]
    )

    // prettier-ignore
    const images = useMemo(() =>
        imageUrls.map((url, index) => (
            <Div key={index} src={url}
                className = "m-2 bg-transparent bg-center bg-no-repeat bg-contain"
                width='5rem' height='5rem' />
        )), [imageUrls])

    // prettier-ignore
    return (
        <section className='mt-4'>
            <Title>FileDrop</Title>
            {error && (
                <div className='p-4 mt-4 bg-red-200'>
                    <p className='text-3xl text-red-500 text-bold'>{error.message}</p>
                </div>
            )}

            <div onClick={onDivClick}
                className='w-full mt-4 bg-gray-200 border border-gray-500'>
                {loading && (
                    <div className='flex items-center justify-center'>
                        <button className='btn btn-circle loading'></button>
                    </div>
                )}

                <div onDragOver={onDivDragOver} onDrop={onDivDrop}
                    className='flex flex-col items-center justify-center h-40 cursor-pointer'>
                    <p className='text-3xl font-bold'>drop images or click me</p>
                </div>
                <input ref={inputRef} onChange={onInputChange}
                    multiple className='hidden' type='file' accept='image/*' />
            </div>

            <div className='flex flex-wrap justify-center'>{images}</div>
        </section>
    )
}
