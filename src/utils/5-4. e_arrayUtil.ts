export const swapItemsInArray = <T>(array: T[], index1: number, index2: number) => 
    array.map((item, index) => 
    index === index1 ? array[index2] : index === index2 ? array[index1] : item
    )

export const removeItemAtIndexInArray = <T>(array: T[], removeIindex: number) =>
    array.filter((notused, index) => index !== removeIindex)

export const insertItemAtIndexInArray = <T>(array: T[], insertIndex: number, item: T) => {
    const before = array.filter((item, index) => index < insertIndex)
    const after = array.filter((item, index) => index >= insertIndex)
    return [...before, item, ...after]
}

/* 배열 관련 유틸리티 함수 구현하기
이제 DragDropContext 컴포넌트가 요구하는 onDragEnd 속성에 콜백 함수를 구현할 차례인데,
잠시 이 콜백 함수를 구현할 때 필요한 유틸리티 함수들을 src/utils 디렉터리에 구현하겠습니다.

먼저 다음 명령으로 src/utils 디렉터리에 arrayUtil.ts 파일을 생성합니다.

그리고 arrayUtils 파일에 다음처럼 함수 3개를 구현합니다.
이 함수들은 순수 함수 형태로 배열에서 아이템의 순서를 변경하거나 제거, 삽입하는 기능을 수행합니다.
*/


// ---------- GPT 4.0 ---------- //

// Q. 이거 한줄한줄 명확하고 정확하고 상세하고 자세하게 설명해줄 수 있겠어?

/*
네, 각 코드 라인에 대해 자세하게 설명드리겠습니다.

export const swapItemsInArray = <T>(array: T[], index1: number, index2: number) => 
    array.map((item, index) => index === index1 ? array[index2] : index === index2 ? array[index1] : item) 
이 함수는 배열 내의 두 항목을 서로 교환하는 역할을 합니다. T는 제네릭을 의미하며, 어떤 타입이든 될 수 있습니다. 
    array는 이 함수가 작업할 배열을 나타내고, index1과 index2는 교환하려는 두 항목의 인덱스를 나타냅니다. 
    array.map 함수를 사용하여 배열의 각 항목을 순회하며, 
    현재 항목의 인덱스가 index1이면 array[index2]를 반환하고, index2이면 array[index1]를 반환하고, 
    그 외의 경우에는 원래 항목을 그대로 반환합니다. 
    이렇게 하면 index1 위치의 항목과 index2 위치의 항목이 서로 교환되는 새 배열이 반환됩니다.

export const removeItemAtIndexInArray = <T>(array: T[], removeIndex: number) => 
    array.filter((notused, index) => index !== removeIndex) 
이 함수는 배열에서 특정 인덱스의 항목을 제거하는 역할을 합니다. 
    array.filter 함수를 사용하여 배열의 각 항목을 순회하며, 
    현재 항목의 인덱스가 removeIndex와 같지 않은 항목만 새 배열에 포함시킵니다. 
    이렇게 하면 removeIndex 위치의 항목이 제거된 새 배열이 반환됩니다.

export const insertItemAtIndexInArray = <T>(array: T[], insertIndex: number, item: T) => 
    { ... }
    이 함수는 배열의 특정 인덱스에 항목을 삽입하는 역할을 합니다. 
    before 배열은 insertIndex보다 작은 인덱스의 항목만 포함하고, 
    after 배열은 insertIndex 이상의 인덱스의 항목만 포함합니다. 
    return [...before, item, ...after]를 통해 before 배열, 삽입하려는 item, 그리고 after 배열을 합쳐서 새 배열을 반환합니다. 
    이렇게 하면 insertIndex 위치에 item이 삽입된 새 배열이 반환됩니다.
*/


// Q. 이게 왜 스왑하는 건지 한줄한줄 아주 자세하고 상세하게 해석해줄래....
// 특히 index === index1 ? array[index2] : index === index2 ? array[index1] : item
// 이부분이 어떻게 해석해야 하는 건지 이해가 잘 안가

/*
index === index1 ? array[index2] : index === index2 ? array[index1] : item
이 부분은 삼항 연산자를 사용하여 각 항목을 처리하는 로직입니다. 삼항 연산자는 '조건 ? 참일 때의 값 : 거짓일 때의 값' 형태로 사용됩니다.

이 부분을 좀 더 자세히 살펴보겠습니다.
index === index1 ? array[index2] :
현재 인덱스가 'index1'과 같으면, 'array[index2]'를 반환합니다. 즉, 'index1' 위치의 요소를 'index2' 위치의 요소로 교체합니다.
index === index2 ? array[index1] :
현재 인덱스가 'index2'와 같으면, 'array[index1]'를 반환합니다. 즉, 'index2' 위치의 요소를 'index1' 위치의 요소로 교체합니다.
item
위의 두 조건이 모두 만족하지 않으면, 원래 항목을 그대로 반환합니다. 즉, 교환 대상이 아닌 항목들은 그대로 유지됩니다.
결과적으로, 이 함수는 'index1'과 'index2' 위치의 요소를 서로 교환한 새 배열을 반환합니다. 
    이는 원본 배열을 변경하지 않고, 교환된 요소를 포함한 새로운 배열을 생성하는 순수 함수(pure function)의 특성을 가지고 있습니다.

*/