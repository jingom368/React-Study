import type { ICard } from "../data";

export type UUID = string
export type List = {
    uuid: UUID
    title: string
}

export type Card = ICard
export type CardidListid = {
    cardid: UUID
    listid: UUID
}

export type ListidCardid = CardidListid
export type ListidCardidS = {listid: UUID; cardids: UUID[]}
export type CardidListidIndex = CardidListid & {
    index: number
}

/* 배열 대신 ids와 entities로 상태 구현하기

이 절에서 만들 앱은 N개의 목록(list)이 있고, 각 목록은 여러 개의 카드를 가질 수 있습니다.
그리고 각 목록은 드래그 앤 드롭으로 위치를 자유롭게 옮길 수 있습니다.
그런데 목록을 다음처럼 배열에 담으면 이러한 기능을 구현하기가 어렵습니다.
list = [list1, list2, ...]

앵귤러 프레임워크에서는 리덕스 기능을 구현하면서 @ngrx/entity라는 패키지를 사용할 때가 있습니다.
이 패키지는 배열에 들어갈 아이템은 모두 서로를 구분할 수 있는 고유 ID값을 가진다고 가정합니다.
그리고 entities란 객체를 하나 만들어, id_값: 아이템 형태로 여러 개의 아이템을 저장합니다.
다음은 redux-toolkit.js.org 사이트에서 인용한 ids와 entities의 역할을 보인 것입니다.

ids와 entities의 역할
{
    ids: []         // 각 항목의 고유 ID. 문자열 또는 숫자
    entities: {}    // 엔티티 ID를 해당 엔티티 객체에 매핑하는 조회(lookup) 테이블
}

이제 이런 주로를 가지는 타입을 단순히 엔티티(entity)라고 부르겠습니다.
그런데 타입스크립트로 엔티티를 구현할 때는 타입스크립트가 기본적으로 제공하는 Record 제네릭 타입을 이해해야 합니다.
*/

/* 타입스크립트와 Record 타입

자바스크립트는 다음 코드에서 보듯 색인 연산자(index operator)[]를 사용하여 객체의 속성값을 얻을 수 있습니다.

- 객체의 속성값을 색인 연산자로 얻기
import {makeRandomCard} '../../data'
const card = makeRandomCard()
const uuid = card['uuid'] // 색인 연산자로 객체의 'uuid' 속성값 얻기

그런데 자바스크립트로 이런 형태의 코드를 작성할 때는 card['id']처럼 속성 이름을 잘못 작성하는 실수를 할 수 있습니다.
이러너 오류는 코드가 실행되고 나서야 비로소 알게 됩니다.
이 때문에 타입스크립트는 기본적으로 객체의 속성값을 색인 연산자로 얻을 수 없게 합니다.
대신 Record란 이름의 특별한 타입을 제공합니다.

다음은 Record 타입의 선언문에서 코드에 사용된 keyof는 타입스크립트 키워드이고, 
[P in K] 부분은 색인 연산자로 객체의 특정 속성에 접근할 수 있게 하는 타입스크립트의 색인 타입(indexed access type) 구문입니다.
Record 타입을 사용하려면 Record<키_타입, 값_타입> 형태로 2개의 타입 변수를 지정해야 합니다.
Record 타입은 색인 연산자를 사용하여 객체의 특정 속성값을 설정하거나 얻어올 수 있게 합니다.

이제 앞서 src/store 디렉터리에 만들어 놓은 listidOrders와 listEntities 멤버 상태를 다음처럼 엔티티 방식으러 구현해 보겠습니다.
type Record<K extends key of any, T> = {
    [P in K]: T;
}
*/

/*
Record는 TypeScript에서 제공하는 유틸리티 타입 중 하나입니다. 이 타입은 객체의 키와 값의 타입을 정의할 때 사용합니다.

Record<K extends keyof any, T>는 K라는 타입의 키를 가지고, T라는 타입의 값을 가지는 객체를 나타냅니다.

K extends keyof any에서 K는 keyof any의 서브타입이어야 하며, 즉 K는 모든 가능한 키 타입에 확장될 수 있습니다.

[P in K]: T는 K 타입에 속하는 각 키 P에 대해, 그 키에 해당하는 값의 타입이 T임을 나타냅니다.

예를 들어, Record<string, number>는 모든 키가 문자열이고 모든 값이 숫자인 객체를 나타냅니다. 이런 객체는 다음과 같습니다:

{
  "key1": 1, // P in K = String : T = number
  "key2": 2,
  "key3": 3
}
Record<'a' | 'b' | 'c', number>는 키가 'a', 'b', 'c' 중 하나이고 값이 숫자인 객체를 나타냅니다. 이런 객체는 다음과 같습니다:

{
  "a": 1,
  "b": 2,
  "c": 3
}
*/