// export const imageFileReaderP = (file: Blob) => : imageFileReaderP라는 함수를 선언하고, 
//     이 함수는 Blob 객체를 인자로 받습니다. export 키워드는 이 함수를 다른 모듈에서도 임포트하여 사용할 수 있게 합니다.

    // new Promise<string>((resolve, reject) => {...}) : 새로운 Promise 객체를 반환합니다.
    //     이 Promise는 비동기 작업의 성공 결과를 나타내는 resolve 함수와
    //     실패 결과를 나타내는 reject 함수를 인자로 받는 콜백 함수를 실행합니다.

    // const fileReader = new FileReader() : FileReader 객체를 생성합니다.
    //     FileReader는 웹 애플리케이션에서 비동기적으로 데이터를 읽기 위한 객체입니다.

        // fileReader.onload = (e: ProgressEvent<FileReader>) => {...} : FileReader 객체의 onload 이벤트 핸들러를 설정합니다.
        //     이 핸들러는 FileReader가 파일 읽기를 완료했을 때 호출됩니다.

            // const result = e.target?.result : onload 이벤트 객체의 target 속성에서 result 속성을 가져옵니다. 
            //     result 속성은 FileReader가 읽은 파일의 내용을 담고 있습니다.

            // if (result && typeof result === 'string') resolve(result) : result가 존재하고 그 타입이 문자열인 경우, 
            //     resolve 함수를 호출하여 Promise를 성공 상태로 마무리하고 읽은 파일 내용을 반환합니다.
            // else reject(new Error(...)) : result가 없거나 그 타입이 문자열이 아닌 경우, 
            //     reject 함수를 호출하여 Promise를 실패 상태로 마무리하고 에러 메시지를 반환합니다.
        
        // fileReader.readAsDataURL(file) : FileReader에게 Data URL 형태로 파일을 읽도록 명령합니다. 
        //     이 작업은 비동기적으로 이루어집니다.

export const imageFileReaderP = (file: Blob) =>

    new Promise<string>((resolve, reject) => {
        const fileReader = new FileReader()

        fileReader.onload = (e: ProgressEvent<FileReader>) => {
            const result = e.target?.result

            if (result && typeof result === 'string') resolve(result)
            else reject(new Error(`imageFileReaderP: can't read image file`))
        }

        fileReader.readAsDataURL(file)
    })
