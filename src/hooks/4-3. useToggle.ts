import {useState, useCallback} from 'react'

// 초기 상태가 주어지지 않으면 기본적으로 false인 useToggle이라는 커스텀 훅을 정의합니다.
export const useToggle = (initialChecked: boolean = false): [boolean, () => void] => {
    // 'checked'라는 상태 변수와 이를 업데이트하는 'setChecked' 함수를 선언합니다.
    const [checked, setChecked] = useState<boolean>(initialChecked)

    // 'useCallback'을 사용하여 메모이제이션된 'toggleChecked' 콜백 함수를 정의합니다.
    const toggleChecked = useCallback(() => setChecked(prevChecked => !prevChecked), [])

    // 현재 'checked' 상태와 'toggleChecked' 함수를 담은 배열을 반환합니다.
    return [checked, toggleChecked]
}
