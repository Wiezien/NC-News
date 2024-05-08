import React from "react";

function CommentCard({ comments }) {
  return (
    <section>
      <h2>Comments:</h2>

      {comments.map((comment) => (
        <li key={comment.comment_id}>
          <h3>By {comment.author}</h3>
          <h4>Votes {comment.votes}</h4>
          <h4>{comment.created_at}</h4>
          <p id="comment-item">{comment.body}</p>
        </li>
      ))}
    </section>
  );
}

export default CommentCard;
