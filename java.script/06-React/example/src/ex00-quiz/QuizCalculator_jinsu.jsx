import React, { useState } from 'react';

export default function QuizCalculator_jinsu () {

    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [result, setResult] = useState('');
    const [count, setCount] = useState(0);

    let getValue1 = (e) => {
        setValue1(parseFloat(e.target.value))
    }

    let getValue2 = (e) => {
        setValue2(parseFloat(e.target.value))
    }

    let click = (e) => {

        setCount(parseInt(count) +1);
        if (e.target.innerHTML === '+') {
            setResult(value1 + value2);
        } else if (e.target.innerHTML === '-') {
            setResult(value1 - value2);
        } else if (e.target.innerHTML === '*') {
            setResult(value1 * value2);
        } else if (e.target.innerHTML === '/') {
            if (value2 !== 0) {
                setResult(value1 / value2)
            } else {
                setResult("0으로 나눌 수 없습니다.");
            }
        }
    }

    return (
        <div>
            <h1>간단한 계산기</h1>
            <input onChange={getValue1} />
            <input onChange={getValue2} />
            <br />
            <button onClick={click}>+</button>
            <button onClick={click}>-</button>
            <button onClick={click}>*</button>
            <button onClick={click}>/</button>
            <br />
            <h1>결과: {result}</h1>
            <h2>계산횟수: {count}</h2>
        </div>
    )
}