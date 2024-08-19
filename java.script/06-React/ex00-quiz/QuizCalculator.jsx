import React, { useState } from 'react';
import QuizCalculatorCounter from './QuizCalculatorCounter';

function QuizCalculator () {

    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("");
    const [count, setCount] = useState(0);



    const changeNum1 = (e) => {
        setNum1(parseFloat(e.target.value));
    }

    const changeNum2 = (e) => {
        setNum2(parseFloat(e.target.value));
    }

    const add = () => {
        setResult(num1 + num2);
        setCount(count + 1);  //setCount(prevCount => prevCount + 1);
    }

    const sub = () => {
        setResult(num1 - num2);
        setCount(count + 1);  //setCount(prevCount => prevCount + 1);
    }

    const mul = () => {
        setResult(num1 * num2);
        setCount(count + 1);  //setCount(prevCount => prevCount + 1);
    }

    const div = () => {
        if ( num2 != 0 ) {
            setResult(num1 / num2);
            setCount(count + 1);  //setCount(prevCount => prevCount + 1);
        } else {
            setResult("0으로는 나눌 수 없습니다.")
        }
        
    }

    return (
        <div>
            <h1>간단 계산기</h1>
            <input type="number" id="value1" value={num1} onChange={changeNum1}></input>
            <input type="number" id="value2" value={num2} onChange={changeNum2}></input>
            <div>
                <button onClick={add}>+</button>
                <button onClick={sub}>-</button>
                <button onClick={mul}>*</button>
                <button onClick={div}>/</button>
            </div>
            <div>
                <h2>결과: {result}</h2>
            </div>
            <div>
                <h2>횟수: {count}</h2>
                {/* <QuizCalculatorCounter count={count} /> */}
            </div>
        </div>
    )
}

export default QuizCalculator