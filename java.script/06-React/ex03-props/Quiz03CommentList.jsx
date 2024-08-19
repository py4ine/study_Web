import React, {useEffect, useState} from 'react'
import Practice02Comment from './Practice02Comment';

function Quiz03CommentList() {
    const [comments, setComments] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(data => {
                const fetchedComments = data.slice(0,5).map(comment => ({
                    id: comment.id,
                    name: comment.name,
                    email: comment.email,
                    body: comment.body
                }));
                setComments(fetchedComments);
            })
            .catch(error => console.error('Error fetching comments:', error));
    }, []);

    return (
        <div>
            {comments.map( (comment, index) => (
                <Practice02Comment
                key={comment.id}
                name={comment.name}
                email={comment.email}
                body={comment.body}
                />
            ))}
        </div>
    );
}

export default Quiz03CommentList