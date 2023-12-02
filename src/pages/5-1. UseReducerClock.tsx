import {useReducer} from 'react'
import {AppState1} from '../store'
import {Div, Subtitle, Title} from '../components'
import {useInterval} from '../hooks'
import type {SetTodayAction} from '../store/5-1. e_actions'
// import {useSelector, useDispatch} from 'react-redux'

export default function useReducerClock() {
    // const today = useSelector<AppState, Date>(state => state.today)
    // const dispatch = useDispatch() // 추가

    const [{today}, dispatch] = useReducer(
        (state: AppState1, action: SetTodayAction) => {
            switch (action.type) {
                case 'setToday':
                    // return {...state, today: action.today}
                    return {...state, today: new Date()}
            }
        },
        {
            today: new Date()
        }
    )

    useInterval(() => {
        dispatch({type: 'setToday', today: new Date()})
    })

    return (
        <Div className="flex flex-col items-center justify-center mt-16">
            <Title className="text-5xl">ReduxClock</Title>
            <Title className="mt-4 text-3xl">{today.toLocaleTimeString()}</Title>
            <Subtitle className="mt-4 text-2xl">{today.toLocaleDateString()}</Subtitle>
        </Div>
    )
}
