import React from "react";
import "./Practice02Comment.css";

function Practice02Comment (props) {
    return (
        <div className="comment">
            <div className="comment-name">{props.name}</div>
            <div className="comment-email">{props.email}</div>
            <div className="comment-body">{props.body}</div>
        </div>
    );
}

export default Practice02Comment