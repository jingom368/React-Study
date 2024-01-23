import type {AppState4} from '../store'
import type {Card as CardType} from '../store/5-4. e_commonTypes'
import * as CE from '../store/5-4. cardEntities'

import {useCallback, useState, useEffect} from 'react'
import {useLocation, useParams, useNavigate, useSearchParams} from 'react-router-dom'
import {useSelector} from 'react-redux'

import {Div, Avatar} from '../components'

export default function Card() {
    const location = useLocation()
    const params = useParams()
    const navigate = useNavigate()
    const [search] = useSearchParams()
    const goBack = useCallback(() => {
        navigate(-1)
    }, [navigate])

    const [card, setCard] = useState<CardType | null>(null)
    const {cardid} = params
    const cardEntities = useSelector<AppState4, CE.State>(
        ({cardEntities}) => cardEntities
    )

    useEffect(() => {
        if (!cardEntities || !cardid) return

        cardEntities[cardid] && setCard(notused => cardEntities[cardid])
    }, [cardEntities, cardid])

    if (!card) {
        return (
            <div>
                <p>location : {JSON.stringify(location, null, 2)}</p>
                <p>params : {JSON.stringify(params, null, 2)}</p>
                <p>cardid : {params['cardid']}</p>
                <p>
                    from: {search.get('from')}, to: {search.get('to')}
                </p>
                <button className="mt-4 btn btn-primary btn-xs" onClick={goBack}>
                    go Back
                </button>
            </div>
        )
    }

    return (
        <div className="p-4">
            <Div src={card.image} className="w-full" minHeight="10rem" height="10rem" />
            <Div className="flex flex-row items-center mt-4">
                <Avatar src={card.writer.avatar} size="2rem" />
                <Div className="ml-2">
                    <p className="text-xs font-bold">{card.writer.name}</p>
                    <p className="text-xs text-gray-500">{card.writer.jobTitle}</p>
                </Div>
            </Div>
            <button className="mt-4 btn btn-primary btn-xs" onClick={goBack}>
                go Back
            </button>
        </div>
    )
}


// ---------- GPT 4.0 ---------- //

// Q. 이거 한 줄 한 줄 아주 자세하게 해석해줄래? 음 조금 이해하기 어려운 것 같아서

/*
    const cardEntities = useSelector<AppState4, CE.State>(({cardEntities}) => cardEntities)
    - Redux store에서 cardEntities 상태를 가져옵니다.

    useEffect(
        () => { if (!cardEntities || !cardid) return; 
            cardEntities[cardid] && setCard(notused => cardEntities[cardid]) }, [cardEntities, cardid])
    - cardEntities나 cardid가 없다면 아무것도 하지 않고, 둘 다 있다면 해당 카드 정보를 상태에 설정합니다.

    if (!card) { return (...)}
    - card 상태가 없다면 현재 위치 정보, 파라미터, 검색 매개변수를 표시하고 뒤로 가기 버튼을 출력합니다.
*/