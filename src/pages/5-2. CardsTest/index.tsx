import {useCallback, useEffect, useMemo} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Icon} from '../../theme/daisyui'
import type {AppState2} from '../../store'
import * as D from '../../data'
import * as C from '../../store/5-2. cards'
import {Title} from '../../components'
import Card from './5-2. Card'

const makeCard = () =>
    D.makeCard(
        D.randomUUID(),
        D.makeRandomUser(),
        D.randomImage(200, 100),
        '',
        '',
        '',
        ''
    )

export default function CardsTest() {
    const dispatch = useDispatch()
    const cards = useSelector<AppState2, C.State>(({cards}) => cards)

    const addCard = useCallback(() => {
        dispatch(C.addCard(makeCard()))
    }, [dispatch])

    const removeCard = useCallback(
        (id: string) => () => dispatch(C.removeCard(id)),
        [dispatch]
    )

    const children = useMemo(
        () =>
            cards.map(card => (
                <Card key={card.uuid} card={card} onRemove={removeCard(card.uuid)} />
            )),
        [cards, removeCard]
    )
    useEffect(addCard, [addCard])

    return (
        <section className="mt-4">
            <Title>CardTest</Title>
            <div className="flex justify-center mt-4">
                <Icon name="add" className="btn-primary" onClick={addCard} />
            </div>
            <div className="flex flex-wrap mt-4">{children}</div>
        </section>
    )
}

// ---------- GPT 4.0 ---------- //

// Q. 이거 어떻게 구동되는 건지 이해가 하나도 안가서 흐름이랑 코드랑 매칭 해서 아주 자세하게 설명해줄 수 있을까?

/*
네, 이 코드는 Redux와 React를 이용한 애플리케이션을 구현한 것입니다. 
여기서는 카드를 추가하거나 제거하는 기능을 갖는 애플리케이션을 만들었습니다. 각 부분의 코드는 다음과 같이 동작합니다:

1. 액션 타입 정의: 액션 타입은 애플리케이션의 상태를 어떻게 변경할지를 결정하는 정보를 담고 있습니다. 
    이 코드에서는 카드를 추가하는 AddCardAction과 카드를 제거하는 RemoveCardAction이라는 두 가지 액션 타입을 정의하였습니다.
2. 액션 생성자 함수: addCard와 removeCard 함수는 각각 카드를 추가하고 제거하는 액션을 생성하는 함수입니다. 
    이들은 각각의 액션에 필요한 정보를 받아 액션 객체를 반환합니다.
3. 리듀서 함수: 리듀서 함수는 현재 상태와 디스패치된 액션을 받아 새로운 상태를 반환하는 함수입니다. 
    이 코드에서는 카드를 추가하거나 제거하는 액션에 따라 상태를 어떻게 업데이트할지를 정의하였습니다.
4. 컴포넌트: Card 컴포넌트는 각 카드의 UI를 렌더링하는 함수형 컴포넌트입니다. 
    각 카드는 이미지, 저자의 아바타, 이름, 직업 등의 정보를 보여주며, 카드를 제거하는 버튼을 갖습니다.
5. 컨테이너 컴포넌트: CardsTest 컴포넌트는 애플리케이션의 상태와 UI를 연결하는 컨테이너 컴포넌트입니다. 
    이 컴포넌트는 Redux 스토어로부터 카드의 목록을 가져와 Card 컴포넌트를 이용해 렌더링하며, 
    카드를 추가하거나 제거하는 액션을 디스패치합니다.

이렇게 각 부분의 코드가 결합되어 애플리케이션은 다음과 같은 흐름으로 동작합니다:

1. 사용자가 "add" 버튼을 클릭하면, addCard 함수가 호출되어 임의의 카드 데이터를 생성하고, 
    이를 payload로 갖는 AddCardAction 액션을 디스패치합니다.
2. Redux는 디스패치된 액션을 받아 리듀서 함수를 호출하며, 리듀서 함수는 현재 상태와 디스패치된 액션을 인자로 받습니다.
3. 리듀서 함수는 디스패치된 액션의 타입에 따라 상태를 업데이트합니다. 여기서는 AddCardAction 액션에 따라 새 카드를 상태에 추가합니다.
4. 상태가 업데이트되면, useSelector 훅이 새로운 상태를 받아 CardsTest 컴포넌트를 다시 렌더링합니다. 
    새로 렌더링된 CardsTest 컴포넌트는 업데이트된 상태를 반영하여 새 카드를 화면에 보여줍니다.
5. 사용자가 카드의 "remove" 버튼을 클릭하면, removeCard 함수가 호출되어 
    해당 카드의 ID를 payload로 갖는 RemoveCardAction 액션을 디스패치합니다.
6. 이후의 과정은 AddCardAction 액션을 디스패치했을 때와 동일하나, 리듀서 함수는 RemoveCardAction 액션에 따라
    해당 카드를 상태에서 제거하고, CardsTest 컴포넌트는 제거된 카드를 화면에서 제거합니다.
*/

// Q. 아주아주 자세하고 상세하게 흐름이랑 코드랑 매칭시켜서 알려줄 수 있을까?

/*
네, 좀 더 자세히 설명드리겠습니다.

1. 액션 타입 정의 (5-2. e_types 파일)
AddCardAction과 RemoveCardAction 두 가지 액션 타입을 정의합니다. 각 액션은 type과 payload라는 두 가지 필드를 가지게 됩니다. 
type은 액션의 종류를 나타내며, payload는 해당 액션을 처리하는 데 필요한 추가 데이터를 담습니다.
2. 액션 생성자 함수 (5-2. e_types 파일)
각 액션 타입에 해당하는 액션 객체를 생성하는 함수입니다. addCard 함수는 새 카드 데이터를 payload로 가지는 AddCardAction 액션을 생성하며, 
removeCard 함수는 제거할 카드의 ID를 payload로 가지는 RemoveCardAction 액션을 생성합니다.
3. 리듀서 함수 (5-2. e_types 파일)
현재 상태와 디스패치된 액션을 인자로 받아 새로운 상태를 반환하는 함수입니다. 
AddCardAction 액션이 디스패치되면 새 카드를 상태의 맨 앞에 추가하고, 
RemoveCardAction 액션이 디스패치되면 특정 카드를 상태에서 제거합니다.
4. Card 컴포넌트 (Card.tsx 파일)
각 카드의 UI를 렌더링하는 함수형 컴포넌트입니다. 카드 데이터를 props로 받아 화면에 표시하며, 카드를 제거하는 버튼을 포함합니다.
5. CardsTest 컴포넌트 (CardsTest.tsx 파일)
애플리케이션의 상태와 UI를 연결하는 컨테이너 컴포넌트입니다. 
Redux 스토어로부터 카드의 목록을 가져와 Card 컴포넌트를 이용해 렌더링하며, 카드를 추가하거나 제거하는 액션을 디스패치합니다.
이렇게 각 부분의 코드가 결합되어 애플리케이션은 다음과 같은 흐름으로 동작합니다:

1. CardsTest 컴포넌트가 마운트되면 useEffect 훅에 의해 addCard 함수가 호출됩니다. 
    이 함수는 임의의 카드 데이터를 생성하고, 이를 payload로 갖는 AddCardAction 액션을 디스패치합니다.
2. Redux는 디스패치된 액션을 받아 리듀서 함수를 호출합니다. 리듀서 함수는 현재 상태와 디스패치된 액션을 인자로 받습니다.
3. 리듀서 함수는 디스패치된 액션의 타입에 따라 상태를 업데이트합니다. 여기서는 AddCardAction 액션에 따라 새 카드를 상태에 추가합니다.
4. 상태가 업데이트되면, useSelector 훅이 새로운 상태를 받아 CardsTest 컴포넌트를 다시 렌더링합니다. 
    새로 렌더링된 CardsTest 컴포넌트는 업데이트된 상태를 반영하여 새 카드를 화면에 보여줍니다.
5. 사용자가 카드의 "remove" 버튼을 클릭하면, removeCard 함수가 호출되어 
    해당 카드의 ID를 payload로 갖는 RemoveCardAction 액션을 디스패치합니다.
6. 이후의 과정은 AddCardAction 액션을 디스패치했을 때와 동일하나, 
    리듀서 함수는 RemoveCardAction 액션에 따라 해당 카드를 상태에서 제거하고, CardsTest 컴포넌트는 제거된 카드를 화면에서 제거합니다.
이것이 이 코드의 전체적인 동작 흐름입니다. 이해가 되셨나요? 혹시 추가로 궁금하신 점이 있으시다면 언제든지 질문해주세요.

*/

// Q. 이건 도대체 무슨 원리로 구동되는거야? cards를 선언했는데 어떻게 안에 cards를 넣어?

/*

useSelector는 Redux의 Hook 중 하나로, Redux 스토어의 상태를 가져오는 역할을 합니다. 
이 Hook은 인자로 선택자 함수를 받는데, 이 선택자 함수의 역할은 전체 상태에서 필요한 부분만을 선택해서 반환하는 것입니다.

useSelector<AppState, C.State>(({cards}) => cards)에서 ({cards}) => cards가 바로 이 선택자 함수입니다. 
이 함수는 전체 상태를 인자로 받아서 그 중에서 cards 부분만을 반환합니다.

여기서 ({cards}) => cards는 ES6의 구조 분해 할당(destructuring assignment) 문법을 사용한 것입니다. 
({cards})는 전체 상태 객체에서 cards 프로퍼티만을 추출하는 역할을 합니다.

즉, const cards = useSelector<AppState, C.State>(({cards}) => cards) 코드는 
전체 상태에서 cards 부분만을 선택해서 cards라는 상수에 할당하는 것입니다.

이 코드가 실행되면, cards 상수는 Redux 스토어의 cards 상태를 가리키게 됩니다. 
따라서 스토어의 cards 상태가 업데이트되면 useSelector Hook에 의해 cards 상수도 함께 업데이트되어 
해당 컴포넌트는 새로운 cards 상태를 반영하여 다시 렌더링하게 됩니다.
*/

// 이게 먼 소리야.. 코드랑 연관지어서 설명해줘...

/*
죄송합니다. 좀 더 쉽게 설명해드리겠습니다.

useSelector는 Redux의 Hook으로, 스토어의 상태를 가져오는 역할을 합니다. 
이를 이용해 const cards = useSelector<AppState, C.State>(({cards}) => cards)라고 선언하면, 
cards라는 상수에 Redux 스토어의 cards 상태가 저장됩니다.

여기서 useSelector<AppState, C.State>(({cards}) => cards)의 (({cards}) => cards) 부분이 중요합니다. 
이것은 전체 상태 객체를 인자로 받아 cards라는 프로퍼티만 반환하는 함수입니다. 
이 함수는 Redux 스토어의 전체 상태를 파라미터로 받아, 그 중에서 cards 프로퍼티만을 반환합니다.

간단히 말해, 이 코드는 "전체 상태 객체에서 cards라는 부분만 꺼내서 cards라는 상수에 저장해주세요."라는 의미입니다.

그래서 이 코드 아래에서 cards 상수를 사용하면, 그것은 Redux 스토어의 cards 상태를 참조하게 됩니다. 
따라서 스토어의 cards 상태가 업데이트되면, 이 cards 상수도 함께 업데이트됩니다.

이해가 되셨나요? 혹시 추가로 궁금하신 점이 있으시다면 말씀해주세요.
*/

// Q. AppState에 ~ 이렇게 정의했으면 Cards.State 프로퍼티 부분만 가져온다는 거야?

/*
네, 맞습니다. AppState 타입은 여러 서브 상태들로 이루어져 있고, 그 중 cards는 Cards.State 타입을 가지는 프로퍼티입니다.

useSelector<AppState, C.State>(({cards}) => cards)에서 (({cards}) => cards)는 AppState에서 cards 프로퍼티 부분만을 가져옵니다. 
즉, cards 상수는 Cards.State 타입의 값을 가지게 됩니다.

따라서 const cards = useSelector<AppState, C.State>(({cards}) => cards)는 Redux 스토어의 전체 상태(AppState) 중에서 
cards 상태(Cards.State)만을 선택하여 cards라는 상수에 할당하는 것입니다.

이 코드 아래에서 cards를 사용하면, 그것은 Redux 스토어의 cards 상태를 참조하게 됩니다. 
이 cards 상태가 변경될 때마다 useSelector는 새로운 cards 상태를 반환하므로, 그에 따라 컴포넌트가 다시 렌더링됩니다.
*/
