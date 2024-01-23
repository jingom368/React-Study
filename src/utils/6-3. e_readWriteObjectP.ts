import * as L from './6-3. e_localStorageP'

export const readObjectP = <T extends object>(key: string) =>
    new Promise<T | null>((resolve, reject) => {
        L.readStringP(key)
            .then(value => resolve(value ? JSON.parse(value) : null))
            .catch(reject)
    })

export const writeObjectP = (key: string, value: object) =>
    L.writeStringP(key, JSON.stringify(value))

/*
    그런데 localStorage 객체의 getItem과 setItem은 모두 문자열 타입의 값을 다루므로 자바스크립트 객체를 저장해야 할 때
    JSON.stringify와 JSON.parse 함수를 호출해야 하는 번거로움이 생깁니다.

    이제 이런 번거로움을 줄이고자 readWriteObjectP.ts 파일을 다음처럼 작성합니다.
*/
