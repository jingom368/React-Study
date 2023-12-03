import type {FC} from 'react'
import type {ICard} from '../../data'
import {Div, Avatar} from '../../components'
import {Icon} from '../../theme/daisyui'

export type UserCardProps = {
    card: ICard
    onRemove?: () => void
    onClick?: () => void
}

const ListCard: FC<UserCardProps> = ({card, onRemove, onClick}) => {
    const {image, writer} = card
    const {avatar, name, jobTitle} = writer

    return (
        <Div className="m-2 border shadow-lg rounded-xl" width="10rem" onClick={onClick}>
            <Div src={image} className="relative h-20">
                <Icon
                    name="remove"
                    className="absolute right-1 top-1 btn-primary btn-xs"
                    onClick={onRemove}
                />
            </Div>
            <Div className="flex flex-col p-2">
                <Div minHeight="4rem" height="4rem" maxHeight="4rem">
                    <Div className="flex flex-row items-center">
                        <Avatar src={avatar} size="2rem" />
                        <Div className="ml-2">
                            <p className="text-xs font-bold">{name}</p>
                            <p className="text-xs text-gray-500">{jobTitle}</p>
                        </Div>
                    </Div>
                </Div>
            </Div>
        </Div>
    )
}
export default ListCard

// ListCard 컴포넌트 구현하기
// 이번에는 BoardList에 카드를 추가하는 기능을 구현하겠습니다.

// 이 파일을 열고 다음처럼 작성합니다. 참고로 onClick이란 이벤트 속성은 다음 장을 위해 만들어 두었습니다.