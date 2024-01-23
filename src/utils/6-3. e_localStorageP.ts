export const readItemFromStorageP = (key: string) =>
    new Promise<string | null>(async (resolve, reject) => {
        try {
            const value = localStorage.getItem(key)
            resolve(value)
        } catch (e) {
            reject(e)
        }
    })

export const writeItemToStorageP = (key: string, value: string) =>
    new Promise<string>(async (resolve, reject) => {
        try {
            localStorage.setItem(key, value)
            resolve(value)
        } catch (e) {
            reject(e)
        }
    })

export const readStringP = readItemFromStorageP
export const writeStringP = writeItemToStorageP

/* 
    웹 브라우저를 종료해도 지워지지 않는 저장소 이용하기

    이제 로그인 컴포넌트를 만들 차례인데, 그전에 localStorage에 관해 먼저 알아보겠습니다.
    다음 그림에서 왼쪽은 회원 가입 화면이고, 오른쪽은 잠시 후 만들 로그인 화면입니다.
    만약 회원 가입할 때의 이메일 주소가 로그인할 때의 이메인 주소에 반영되지 않는다면 불편할 겁니다.

    회원 가입할 때 입력한 이메일 주소를 로그인할 때 이메일 주소에 표시하도록 해보겠습니다.
    그런데 사용자가 회원 가입을 한 뒤 바로 웹 브라우저를 종료하면 어떨까요?
    이처럼 웹 브라우저를 종료하면 사용자가 입력한 데이터가 바로 사라지므로 
    로그인 화면에서 사용자가 과거에 입력한 데이터를 알 수 있는 방법이 없습니다.
    이런 상황을 고려해 사용자가 회원 가입할 때 입력한 정보를 지워지지 않는 공간에 저장해 둬야 합니다.

    자바스크립트 엔진은 window,localStorage 객체를 기본으로 제공합니다.
    window.localStorage 객체는 간단히 localStorage로 사용하며, 
    이 객체는 웹 브라우저가 접속한 웹 사이트별로 데이터를 저장할 수 있는 공간을 제공합니다. 
    이 저장 공간은 웹 브라우저가 종료했을 때도 그대로 남아있으므로 사용자가 회원 가입할 때 입력한 데이터를 여기에 저장해 두면,
    로그인 화면에서 읽어올 수 있습니다.

    localStorage는 getItem과 setItem 메서드를 제공하여 저장 공간에 데이터를 (키, 값) 형태로 저장하고, 저장한 값을 읽을 수 있습니다.
    다만 이 메서서들은 예외를 일으키므로 때로는 프로그램이 비정상으로 종료될 수 있습니다.
    이런 문제를 예방하도록 다음 명령으로 src/utils 디렉터리에 localSotrageP.ts와 readWriteObjectP.ts 파일을 만들겠습니다.

    그리고 localStorageP.ts 파일을 다음처럼 구현합니다.
    여기에 작성한 두 함수는 데이터를 어떤 저장소를 사용한다는 느낌을 주고자 'read' 'write'와 같은 접두사를 가진 이름으로 지었습니다.
    이 두 함수는 모두 Promise 객체를 반환하는데, 비록 localStorage 객체의 getItem과 setItem은 비동기 함수가 아니지만, 
    이처럼 구현하면 호출하는 쪽 코드를 좀 더 간결한 형태로 만들 수 있습니다.
    localStorage의 getItem은 key에 해당하는 값이 저장되어 있지 않으면 null을 반환하므로 string | null 타입의 Promise 객체를 반환합니다.

    그런데 item이란 단어의 의미가 좀 모호합니다. 
    localStorage에서 값 부분은 항상 문자열이므로 그 의미를 좀 더 분명하게 하고자 
    readItemFromStorageP는 readStringP로, writeItemToStorage는 writeStringP라는 이름으로 사용할 수 있도록 했습니다.
*/
