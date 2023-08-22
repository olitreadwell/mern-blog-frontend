import { useState } from "react";

import axios from "axios";

const AddCommentForm = ( {articleId, onUpdatedArticle }) => {
    const [username, setUsername] = useState("");
    const [commentText, setCommentText] = useState("");

    const addComment = async () => {
        const response = await axios.post(`/api/v1/articles/${articleId}/comments/create`, {
            postedBy: username,
            text: commentText,
        });

        const updatedArticle = response.data;
        onUpdatedArticle(updatedArticle);
        setUsername("");
        setCommentText("");
    };

    return (
        <div className="add-comment-form">
            <h3>Add a Comment</h3>
            <label>
                Name:
                <input
                    type="text"
                    placeholder="Your name"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </label>
            <label>
                Comment:
                <textarea
                    rows="4"
                    cols="50"
                    placeholder="Leave a comment"
                    value={commentText}
                    onChange={(event) => setCommentText(event.target.value)}
                />
            </label>
            <button
                onClick={addComment}
            >Add Comment</button>
        </div>
    );
};

export default AddCommentForm;