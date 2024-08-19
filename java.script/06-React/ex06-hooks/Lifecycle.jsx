import React, { useState, useEffect } from "react";

const Lifecycle = () => {
    const [data, setData] = useState(null);
    const [count, setCount] = useState(0);

    console.log("😃1. Lifecycle 컴포넌트 함수가 호출 되었습니다.");

    useEffect( () => {
        console.log("😃3. componentDidMount: 컴포넌트가 마운트되었습니다.");
        
        // 네트워크 요청
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((data) => {
            console.log("😃3-n. 외부 요청 결과 응답을 통해 data state 변경 감지");
            setTimeout( () => {
                setData(data);  // jsonplaceholder에서 받은 data?
                console.log("😃3-n. 3초 후 data state 변경");
            }, 3000);
        });

        // componentWillUnmount 언마운트 단계, return을 생략하여 이 단계를 거치지 않을 수도 있음
        return () => {
            console.log("😃5. componentWillUnmount: 컴포넌트가 언마운트될 준비가 되었습니다.");
        };
    }, [])  // []를 사용하여, 업데이트 되었을때 시행되는 부분을 없앰

    useEffect( () => {
        console.log("😃4. componentDidUpdate: 컴포넌트가 업데이트되었습니다.");
    }, [data, count]);  // count를 조작하여 업데이트가 발행하였을때 실행

    console.log("😃2. Render: 컴포넌트를 렌더링합니다.");

    const countup = () => {
        setCount(count+1);
    }

    return (
        <div>
            <h1>Example Component</h1>
            <p>Data: {data ? JSON.stringify(data) : "Loading..."}</p>
            <p>Count: {count}</p>
            <button type="button" onClick={countup}>카운트 증가</button>
        </div>
    );
}

export default Lifecycle;