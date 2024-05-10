import { useState } from "react";
import { getCommentsByArticleId, postCommentByArticleId } from "../api";
import { useParams } from "react-router-dom";

function AddCommentForm() {
  const [newComment, setNewComment] = useState("");
  const [isCommentValid, setIsCommentValid] = useState(true);
  const [message, setMessage] = useState("");

  const { article_id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newComment.length < 1) {
      setIsCommentValid(false);
      return;
    }

    const addComment = {
      body: newComment,
      article_id: article_id,
      username: "jessjelly",
    };

    postCommentByArticleId(addComment)
      .then(() => {
        return getCommentsByArticleId(article_id);
      })
      .then((response) => {
        setNewComment("");
        setIsCommentValid(true);
        setMessage("Thanks for your comment!");
      })
      .catch((error) => {
        setMessage("Sorry. Something went wrong! Please try again.");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newComment" id="add-comment-description">
          Add Comment:
        </label>
        <textarea
          name="newComment"
          id="newComment"
          rows={4}
          cols={50}
          placeholder="please write your comment here..."
          onChange={(e) => {
            setNewComment(e.target.value);
          }}
          value={newComment}
          maxLength={100}
        ></textarea>
        <button id="submit-button" type="submit" disabled={!isCommentValid}>
          Add Comment
        </button>
        {message && <p className="message-alert">{message}</p>}
      </form>
    </div>
  );
}

export default AddCommentForm;
