const AddCommentForm = () => {
    return (
        <div className="add-comment-form">
            <h3>Add a Comment</h3>
            <label>
                Name:
                <input type="text" />
            </label>
            <label>
                Comment:
                <textarea rows="4" cols="50" />
            </label>
            <button>Add Comment</button>
        </div>
    );
};
