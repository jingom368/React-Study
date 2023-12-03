import type {ChangeEvent, FC} from 'react'
import {useCallback, useEffect, useState} from 'react'
import * as D from '../../data'
import {Icon} from '../../theme/daisyui'

export type CreateListFormProps = {
    onCreateList: (uuid: string, title: string) => void
}
const CreateListForm: FC<CreateListFormProps> = ({onCreateList}) => {
    const [value, setValue] = useState<string>(D.randomTitleText())
    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(() => e.target.value)
    }, [])
    const addList = useCallback(() => {
        onCreateList(D.randomUUID(), value)
        setValue(() => D.randomTitleText())
    }, [value, onCreateList])

    // prettier-ignore
    return (
        <div className='flex p-2'>
            <input placeholder='title' 
                value={value} onChange={onChange}
                className='input-xs input-bordered input input-primary' />
            <Icon name='add' onClick={addList} disabled={!value.length} 
                className='ml-2 btn-primary btn-xs' />
        </div>
    )
}
export default CreateListForm

// ---------- GPT 4.0 ---------- //

// Q. 무슨 뜻인지 아주 자세하게 알려주겠어?

/*
네, 당연하죠. 이 코드는 리스트를 생성하는 폼 컴포넌트를 정의하는 코드입니다.

1. 일단, CreateListForm 컴포넌트는 onCreateList라는 함수를 props로 받아옵니다. 
    이 함수는 리스트를 생성할 때 호출되며, 생성한 리스트의 uuid와 제목을 인자로 받습니다.

export type CreateListFormProps = {
    onCreateList: (uuid: string, title: string) => void
}

2. useState 훅을 사용하여 value라는 상태를 만들고, 초기값으로 랜덤한 제목 텍스트를 설정합니다. 
    이 value는 입력 필드의 값을 관리하는 데 사용됩니다.

const [value, setValue] = useState<string>(D.randomTitleText())

3. useCallback 훅을 사용하여 onChange라는 함수를 만듭니다. 
    이 함수는 입력 필드의 값이 변경될 때 호출되며, 입력 필드의 새 값을 value 상태에 저장합니다.

const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(() => e.target.value)
    console.log(value)
}, [])

4. 또 다른 useCallback 훅을 사용하여 addList라는 함수를 만듭니다. 
    이 함수는 추가 버튼을 클릭할 때 호출되며, onCreateList 함수를 호출하여 새 리스트를 생성하고, 
    value 상태를 랜덤한 제목 텍스트로 재설정합니다.

const addList = useCallback(() => {
    onCreateList(D.randomUUID(), value)
    setValue(() => D.randomTitleText())
}, [value, onCreateList])

5. 마지막으로, CreateListForm 컴포넌트는 입력 필드와 추가 버튼을 렌더링합니다. 
    입력 필드의 값은 value 상태로, 값이 변경될 때는 onChange 함수를 호출하고, 
    추가 버튼은 addList 함수를 호출합니다. 추가 버튼은 value의 길이가 0일 때 비활성화됩니다.

return (
    <div className='flex p-2'>
        <input placeholder='title' 
            value={value} onChange={onChange}
            className='input-xs input-bordered input input-primary' />
        <Icon name='add' onClick={addList} disabled={!value.length} 
            className='ml-2 btn-primary btn-xs' />
    </div>
)

*/

/*
이 코드는 React와 TypeScript를 사용하여 만들어진 생성 폼 컴포넌트입니다. 이제 한 줄씩 살펴보겠습니다.

1. import type {ChangeEvent, FC} from 'react': React에서 제공하는 타입인 
    ChangeEvent와 FC (Functional Component의 줄임말)를 불러옵니다.
2. import {useCallback, useState} from 'react': React의 Hook인 useCallback과 useState를 불러옵니다.
3. import * as D from '../../data': 상위 디렉토리에 있는 'data' 파일에서 모든 export를 D라는 이름으로 불러옵니다.
4. import {Icon} from '../../theme/daisyui': 'daisyui'라는 UI 라이브러리에서 Icon 컴포넌트를 불러옵니다.
5. export type CreateListFormProps = {onCreateList: (uuid: string, title: string) => void}: 
    이 컴포넌트에서 사용할 props의 타입을 정의해줍니다. onCreateList는 uuid와 title를 인자로 받아서 실행되는 함수입니다.
6. const CreateListForm: FC<CreateListFormProps> = ({onCreateList}) => { : 
    CreateListForm이라는 함수 컴포넌트를 선언하고, 이 컴포넌트는 CreateListFormProps라는 타입의 props를 받습니다.
7. const [value, setValue] = useState<string>(D.randomTitleText()): 
    value라는 상태를 선언하고 초기값으로 D.randomTitleText()의 반환값을 설정합니다.
8. const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => 
    {setValue(() => e.target.value); console.log(value)}, []): onChange라는 콜백 함수를 선언합니다. 
    이 함수는 이벤트 객체를 인자로 받아서, 그 이벤트의 타겟 값으로 value 상태를 업데이트합니다.
9. const addList = useCallback(() => {onCreateList(D.randomUUID(), value); 
    setValue(() => D.randomTitleText())}, [value, onCreateList]): addList라는 콜백 함수를 선언합니다. 
    이 함수는 onCreateList 함수를 호출하고, 그 후에 value 상태를 업데이트합니다.
10. 마지막으로, 컴포넌트가 렌더링하는 JSX를 반환합니다. 
    이 JSX는 제목을 입력할 수 있는 입력 필드와, 리스트를 추가하는 아이콘 버튼을 포함하고 있습니다.
11. export default CreateListForm: 마지막으로, 이 컴포넌트를 default로 내보냅니다. 
    이 컴포넌트는 다른 파일에서 불러와서 사용할 수 있습니다.
*/



// Q1. const CreateListForm: FC<CreateListFormProps> = ({onCreateList}) => { 
//    이거 onCreateList가 함수니까 위에 함수가 고차함수인거야?
// Q2. const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => 
// { setValue(() => e.target.value) console.log(value) }, [])
// 여기서 value값 키보드로 치면 value값 왜 바로 바뀌어서 안뜨는 거야?

/*
1. const CreateListForm: FC<CreateListFormProps> = ({onCreateList}) => { 
    이 부분에서, onCreateList는 고차 함수(higher-order function)가 아닙니다. 
    고차 함수는 다른 함수를 인자로 받거나, 함수를 결과로 반환하는 함수를 말합니다. 
    여기서 onCreateList는 단지 함수를 인자로 받는 컴포넌트의 props일 뿐입니다.

2. console.log(value)가 setValue(() => e.target.value) 바로 뒤에 위치하고 있기 때문에, 
    상태가 업데이트되기 전의 value가 출력됩니다. useState로 상태를 관리할 때, 
    상태 업데이트 함수(setValue)가 호출된 직후에 상태가 바로 업데이트되지 않습니다. 
    대신, React는 성능 최적화를 위해 상태 업데이트를 일괄 처리합니다. 
    따라서, setValue를 호출한 직후에는 아직 상태가 업데이트되지 않았기 때문에 이전 상태 값이 출력됩니다. 
    상태가 실제로 업데이트된 후의 값을 확인하려면, 예를 들어 useEffect를 사용할 수 있습니다.
*/

// Q3. onCreateList(D.randomUUID(), value) 여기서 무슨 일이 일어나는 거야?

/*
onCreateList는 CreateListForm 컴포넌트의 props로 전달되는 함수입니다. 이 함수는 두 개의 매개변수 uuid와 title을 받습니다.
addList 콜백 함수가 호출되면, onCreateList 함수가 호출되는데, 이 때 D.randomUUID()의 결과값과 value 상태값이 매개변수로 전달됩니다.
D.randomUUID()은 고유한 문자열을 생성하는 함수일 것으로 보입니다. 이 문자열은 생성될 리스트 항목의 고유 식별자로 사용될 것입니다.
value는 사용자가 입력한 텍스트입니다. 이 값은 생성될 리스트 항목의 제목으로 사용될 것입니다.

따라서 onCreateList(D.randomUUID(), value) 코드가 실행되면, 
onCreateList 함수는 고유 식별자와 제목을 매개변수로 받아 새로운 리스트 항목을 생성하는 작업을 수행하게 됩니다.

그러나 이 함수의 정확한 동작은 CreateListForm 컴포넌트의 부모 컴포넌트에서 정의되므로, 
    그 세부 내용은 바로 이 코드만으로는 알 수 없습니다. 일반적으로 이런 패턴에서 onCreateList 함수는 새 리스트 항목을 상태에 추가하거나, 
    서버에 새 리스트 항목을 생성하라는 요청을 보내는 등의 작업을 수행하는 것이 일반적입니다.
*/

// 그런데 이 파일에 컴파일 오류가 발생합니다.
// 이제 useLists 커스텀 훅을 수정하여 Board 쪽에 발생하는 컴파일 오류를 해결하겠습니다.
// DraggableList가 추가한 onMoveList 속성을 Board로부터 얻으려면 useLists 훅의 코드를 다음처럼 수정해야 합니다.
