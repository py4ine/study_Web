import React, { useState } from 'react'

function Ex01Cal () {
    
   const [v1, setV1] = useState("");
   const [v2, setV2] = useState("");
   const [result, setResult] = useState("");
    
    const sumV = () => {
    const add = (Number(v1) + Number(v2));  // Number 데이터타입 숫자로
        setResult(add);
    }
    
    const subV = () => {
    const sub = (Number(v1) - Number(v2));
        setResult(sub);
    }

    const mulV = () => {
        const mul = (Number(v1) * Number(v2));
        setResult(mul);
    }

    const divV = () => {
        if (v2 != 0) {
            const div = (Number(v1) / Number(v2));
            setResult(div);
        } else {
            setResult("0으로 나눌 수 없습니다.");
        }}
        

    return (
        <div>
            <h1>간단 계산기</h1>
            <input type="number" id="v1" value={v1} onChange={(e) => setV1(e.target.value)}></input>
            <input type="number" id="v2" value={v2} onChange={(e) => setV2(e.target.value)}></input><br />
            <button onClick={sumV}>+</button>
            <button onClick={subV}>-</button>
            <button onClick={mulV}>*</button>
            <button onClick={divV}>/</button>
            <hr></hr>
            <h1>결과: {result}</h1>
        </div>
        
    )

}

export default Ex01Cal