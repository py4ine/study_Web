import Practice01Comment from "./Practice01Comment";

const comments = [
    {
        author: "김",
        text: "123",
        regdate: "2024"
    },
    {
        author: "이",
        text: "456",
        regdate: "2023"
    }
];

function Quiz02CommentList(props) {
    return (
        <div>
            {comments.map((comment, index) => (
                <Practice01Comment
                key={index}
                author={comment.author}
                text={comment.text}
                regdate={comment.regdate}
                />
            ))}
        </div>
    );
}

export default Quiz02CommentList