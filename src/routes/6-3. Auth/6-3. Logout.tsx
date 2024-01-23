import {useCallback} from 'react'
import {useNavigate} from 'react-router-dom'
import {Modal, ModalContent, ModalAction} from '../../theme/daisyui'
import {useToggle} from '../../hooks'
import {useAuth} from '../../contexts'

export default function Logout() {
    const [open, toggleOpen] = useToggle(true)

    const navigate = useNavigate()
    const {logout} = useAuth()
    const onAccept = useCallback(() => {
        logout(() => {
            toggleOpen() // 대화 상자 닫기
            navigate('/') // 홈 페이지로 이동
        })
    }, [navigate, toggleOpen, logout])
    const onCancel = useCallback(() => {
        toggleOpen() // 대화 상자 닫기
        navigate(-1) // 이전 페이지로 돌아감
    }, [navigate, toggleOpen])

    return (
        <Modal open={open}>
            <ModalContent
                closeIconClassName="btn-primary btn-outline"
                onCloseIconClicked={onCancel}>
                <p className="text-xl text-center">Are you sure you want to log out?</p>
                <ModalAction>
                    <button className="btn btn-primary btn-sm" onClick={onAccept}>
                        Logout
                    </button>
                    <button className="btn btn-primary btn-sm" onClick={onCancel}>
                        Cancel
                    </button>
                </ModalAction>
            </ModalContent>     
        </Modal>
    )
}

/*
    다음은 04-3 절에서 만든 daisyui의 모달 컴포넌트를 사용하여 사용자의 로그아웃 의사를
    다시 한 번 묻는 대화 상자입니다. 이런 형태롤 로그아웃 컴포넌트를 만들겠습니다.
*/