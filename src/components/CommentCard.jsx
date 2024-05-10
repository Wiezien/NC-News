import { useState } from "react";
import { deleteCommentById } from "../api";
import AddCommentForm from "./AddCommentForm";

function CommentCard({ comments, article, setComments }) {
  const [errorMsg, setErrorMsg] = useState(null);

  const handleDelete = (comment_id) => {
    const commentToDelete = comments.find(
      (comment) => comment.comment_id === comment_id
    );

    if (commentToDelete.author !== "jessjelly") {
      setErrorMsg("Not your comment to delete!");
      return;
    }

    const updatedComments = comments.filter(
      (comment) => comment.comment_id !== comment_id
    );

    setComments(updatedComments);

    deleteCommentById(comment_id);
  };

  return (
    <section>
      <h2>Comments:</h2>
      <AddCommentForm article={article} comments={comments} />
      <ul>
        {comments.map((comment) => (
          <li key={comment.comment_id}>
            <h3>By {comment.author}</h3>
            <h4>Votes {comment.votes}</h4>
            <h4>{comment.created_at}</h4>
            <button
              id="delete-button"
              onClick={() => handleDelete(comment.comment_id)}
            >
              Delete
            </button>
            {errorMsg && <p className="message-alert">{errorMsg}</p>}
            <p id="comment-item">{comment.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CommentCard;
