import Practice01Comment from "./Practice01Comment";

function Quiz01CommentList(props) {
    return (
        <div>
            <Practice01Comment
            author="홍길도"
            text="아싸1"
            regdate="2024-03-04T12:34:56Z"
            />
            <Practice01Comment
            author="이순신"
            text="아싸2"
            regdate="2024-04-02"
            />
            <Practice01Comment
            author="강감찬"
            text="아싸3"
            regdate="2024-05-01"
            />
        </div>
    );
}

export default Quiz01CommentList