/*
함수 컴포넌트에서 상태를 관리하는데 사용
상태 변수 및 상태 변수를 업데이트하는 함수를 반환
const [state, setState] = useState(초기값);
*/

import {useState} from 'react';

function Ex01useState() {
    const [count, setCount] = useState(0);

    console.log('컴포넌트 생성함수 호출');

    const increment = () => {
        // count++;  // 직접 수정 불가
        setCount(count + 1);
    }

    return(
        <div>
            <h1>useState Example</h1>
            <p>카운트: {count}</p>
            <button type="button" onClick={increment}>증가</button>
            <button type="button" onClick={() => setCount(count -1)}>감소</button>
        </div>
    )
}

export default Ex01useState