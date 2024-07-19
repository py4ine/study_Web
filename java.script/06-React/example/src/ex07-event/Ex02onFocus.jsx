import React, { useState } from 'react';

function Ex02onFocus () {
    const [message, setMessage] = useState("포커스");

    const handleFocus = () => {
        console.log("Focus");
    }

    const handleBlur = () => {
        console.log("Blur");
    }

    return (
        <div>
            <h1>onFocus Example</h1>
            <input type="text" onFocus={handleFocus} onBlur={handleBlur} />
            <p>{message}</p>
        </div>
    )
}

export default Ex02onFocus;