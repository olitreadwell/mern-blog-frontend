import styles from './CommentsList.module.css';

const CommentsList = ({ comments }) => (
    <>
        <h3>Comments:</h3>
        {comments.map((comment) => (
            <div className={styles.comment} key={`${comment.postedBy}:${comment.text}`}>
                <h4>{comment.postedBy}</h4>
                <p>{comment.text}</p>
            </div>
        ))}
    </>
);

export default CommentsList;
            