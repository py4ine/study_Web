import React, { useState } from "react";

export default function QuizCalculator_hanyoung () {

    /*
    계산 버튼 onclick 이벤트 발생 시점에서 변경되어야 하는 값
    1) 결과
    2) 계산 횟수
    */

    /*사칙연산 작성
    1) input text 값을 정수형으로 변환하여 각 사칙연산 수행
    2) 연산 결과 값을 result로 업데이트
    3) 연산 1회 수행마다 계산 횟수 +1 처리
    */

    const [result, setResult] = useState(0);
    const [count, setCount] = useState(0);

    let val1 = 0;
    let val2 = 0;

    const setVal1 = () => {
        val1 = parseInt(document.getElementById('inputValue2').value);
        console.log(val1);
    }
    const setVal2 = () => {
        val2 = parseInt(document.getElementById('inputValue2').value);
        console.log(val2);
    }

    return (
        <div>
            <h1>간단한 계산기</h1>
            <br />

            <input type='text' id='inputValue1' onChange={setVal1} />
            <input type='text' id='inputValue2' onChange={setVal2} />
            <br />

            <button onClick={() => {setResult(val1+val2); setCount(count +1)}}>+</button>
            <button onClick={() => {setResult(val1-val2); setCount(count +1)}}>-</button>
            <button onClick={() => {setResult(val1*val2); setCount(count +1)}}>*</button>
            <button onClick={() => { if (val2 === 0) {
                window.alert("0으로 나누기 불가");
            } else {
                setResult(val1/val2); setCount(count +1)}}}>/</button>
            <br />

            <h1>결과: {result}</h1>
            <br />

            <h1>계산 횟수: {count}</h1>

        </div>
    )

}