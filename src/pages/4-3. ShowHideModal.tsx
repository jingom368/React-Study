import {useCallback} from 'react'
import {useToggle} from '../hooks'
import {Title, Subtitle} from '../components'
import {Button, Modal, ModalAction, ModalContent} from '../theme/daisyui'
import * as D from '../data'

// toggleOpen 함수는 useToggle 커스텀 훅에서 생성된 함수이며,
// 해당 함수는 내부적으로 setChecked 함수를 사용하여 상태를 업데이트합니다.
// 이때, React에서 상태를 업데이트하면 해당 컴포넌트가 리렌더링됩니다.
// 그러므로 toggleOpen이 변경되는 것은 setChecked 함수가 변경되고,
// 이로 인해 컴포넌트가 리렌더링되는 것과 동일합니다.

export default function ShowHideModal() {
    // 'useToggle' 커스텀 훅에서 나온 결과를 비구조화하여 'open' 상태와 'toggleOpen' 함수를 얻습니다.
    const [open, toggleOpen] = useToggle(false)

    const onAccept = useCallback(() => {
        toggleOpen()
    }, [toggleOpen])

    return (
        <section className="mt-4">
            <Title>ShowHideModal</Title>
            <div className="flex justify-center p-4">
                <Button className="btn-primary" onClick={toggleOpen}>
                    open modal
                </Button>
            </div>
            <Modal open={open}>
                <ModalContent
                    closeIconClassName="btn-primary btn-outline"
                    onCloseIconClicked={toggleOpen}>
                    <Subtitle>Modal</Subtitle>
                    <p>{D.randomParagraphs()}</p>
                </ModalContent>
                <ModalAction>
                    <button className="btn btn-primary" onClick={onAccept}>
                        Accept
                    </button>
                    <button className="btn" onClick={toggleOpen}>
                        Close
                    </button>
                </ModalAction>
            </Modal>
        </section>
    )
}
