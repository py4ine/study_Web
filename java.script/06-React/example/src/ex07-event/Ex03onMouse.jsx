import React, { useState } from 'react';

function Ex03onMouse () {
    const [message, setMessage] = useState("message");

    const handleMouseEnter = () => setMessage("마우스 들어간다");
    const handleMouseLeave = () => setMessage("마우스 이벤트");
    const handleMouseOver = () => setMessage("마우스 올라간다");

    return (
        <div>
            <h1>onMouse... Example</h1>
            <p>{message}</p>
            <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                Button1</button>
            <button onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                Button2</button>
            <h2 onClick={() => setMessage("클릭됨")}
                onMouseOver={handleMouseOver}>여기도 이벤트 등록 가능</h2>
        </div>
    )
}

export default Ex03onMouse;