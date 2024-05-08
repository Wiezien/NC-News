function CommentCard({ comments }) {
  return (
    <section>
      <h2>Comments:</h2>
      {comments.map((comment) => (
        <p key={comment.id} id="comment-item">
          {comment.body}
        </p>
      ))}
    </section>
  );
}

export default CommentCard;
