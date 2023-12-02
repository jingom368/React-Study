import type {Action} from 'redux'
import * as D from '../../data'

export type Card = D.ICard
export type State = Card[]

export type AddCardAction = Action<'@cards/addCard'> & {
    payload: Card
}
export type RemoveCardAction = Action<'@cards/removeCard'> & {
    payload: string 
}

export type Actions = AddCardAction | RemoveCardAction


// 그런 다음 src/store/cards 디렉터리의 types.ts 파일을 다음처럼 작성합니다.
// 멤버 상태를 Card 타입의 배열로 선언합니다.



// 네, 이 코드는 Redux에서 사용하는 상태와 액션을 정의하는 TypeScript 코드입니다. 각 부분에 대해 설명드리겠습니다.

// ---------- GPT 4.0 ---------- //

// import type {Action} from 'redux'
// Redux 라이브러리에서 Action 타입을 가져옵니다. Action 타입은 Redux 액션 객체의 기본적인 구조를 나타냅니다.
// import * as D from '../../data'
// 상위 디렉토리의 'data' 모듈에서 모든 내보낸 값을 가져와 D라는 별칭으로 사용합니다.

// export type Card = D.ICard
// D.ICard 타입을 Card라는 이름으로 내보냅니다. D.ICard는 'data' 모듈에서 정의한 카드 데이터의 타입입니다.
// export type State = Card[]
// 상태의 타입을 Card[]로 정의하고 내보냅니다. 즉, 상태는 Card 객체의 배열입니다.

// export type AddCardAction = Action<'@cards/addCard'> & { payload: Card }
// 카드를 추가하는 액션의 타입을 정의하고 내보냅니다. 
// 이 타입은 Redux의 Action 타입과 추가적으로 payload 속성을 가진 객체의 교집합 타입입니다. payload는 추가할 카드의 데이터입니다.

// export type RemoveCardAction = Action<'@cards/removeCard'> & { payload: string } 
// 카드를 제거하는 액션의 타입을 정의하고 내보냅니다. 
// 이 타입은 Redux의 Action 타입과 추가적으로 payload 속성을 가진 객체의 교집합 타입입니다. payload는 제거할 카드의 ID입니다.

// export type Actions = AddCardAction | RemoveCardAction
// 가능한 모든 액션의 타입을 AddCardAction과 RemoveCardAction의 유니온 타입으로 정의하고 내보냅니다. 
// 이 타입은 리듀서 함수에서 액션의 타입을 체크하는 데 사용됩니다.

// 이 코드는 TypeScript의 타입 시스템을 활용하여 Redux의 상태와 액션을 정확히 정의하고 있습니다.
// 이를 통해 코드의 안정성을 높이고, 개발자의 실수를 줄일 수 있습니다.