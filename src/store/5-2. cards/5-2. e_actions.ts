import type * as T from './5-2. e_types'

export const addCard = (payload: T.Card): T.AddCardAction => ({
    type: '@cards/addCard',
    payload
})

export const removeCard = (payload: string): T.RemoveCardAction => ({
    type: '@cards/removeCard',
    payload
})
// 그리고 src/store/cards 디렉터리의 actions.ts 파일에는 배열에 새로운 카드를 추가하는 것과

// 특정 카드를 배열에서 삭제하는 내용의 액션 생성기를 만듭니다.

// ---------- GPT 4.0 ---------- //

// 이 코드는 앞서 정의한 AddCardAction과 RemoveCardAction 타입에 따라 액션 생성자 함수를 정의하고 있습니다. 
// 액션 생성자 함수는 특정 액션을 생성하는 함수입니다.

// import type * as T from './5-2. e_types'
// 상대 경로 './5-2. e_types'의 모듈에서 모든 타입을 가져와서 T라는 이름으로 사용합니다.

// export const addCard = (payload: T.Card): T.AddCardAction => ({ type: '@cards/addCard', payload })
// addCard라는 액션 생성자 함수를 만들고 내보냅니다. 이 함수는 T.Card 타입의 payload를 인자로 받아, 
// type 속성이 '@cards/addCard'이고 payload 속성이 인자로 받은 payload인 객체를 반환합니다. 
// 반환하는 객체의 타입은 T.AddCardAction입니다.

// export const removeCard = (payload: string): T.RemoveCardAction => ({ type: '@cards/removeCard', payload })
// removeCard라는 액션 생성자 함수를 만들고 내보냅니다. 이 함수는 string 타입의 payload를 인자로 받아, 
// type 속성이 '@cards/removeCard'이고 payload 속성이 인자로 받은 payload인 객체를 반환합니다. 
// 반환하는 객체의 타입은 T.RemoveCardAction입니다.

// 이렇게 액션 생성자 함수를 사용하면, 액션 객체를 생성하는 로직을 한 곳에서 관리할 수 있습니다. 
// 따라서 코드의 중복을 줄이고, 코드의 가독성과 유지보수성을 높일 수 있습니다.




