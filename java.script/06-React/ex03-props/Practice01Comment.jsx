// 리스트를 만들어 보세요.

import React from "react";
import './Practice01Comment.css';

function Practice01Comment(props) {
    return (
        <div className="comment">
            <div className="commnet-author">{props.author}</div>
            <div className="comment-text">{props.text}</div>
            <div className="comment-date">
                {new Date(props.regdate).toLocaleString()}
            </div>
        </div>
    );
}

export default Practice01Comment;