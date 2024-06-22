import { useState } from "react";
import { patchVotesByArticleId } from "../api";

function ArticleVotes({ article, currentVotes }) {
  const [votes, setVotes] = useState(0);
  const [error, setError] = useState(null);
  const [optimisticMsg, setOptimisitcMsg] = useState(null);

  const article_id = article.article_id;

  const handleVote = (vote) => {
    setVotes(votes + vote);
    patchVotesByArticleId(article_id, vote)
      .then(() => {
        setOptimisitcMsg("You've Voted!");
      })
      .catch((error) => {
        setError("Unable to update votes. Please try again.");
      });
  };

  return (
    <div id="article-vote">
      <button
        className="vote-button"
        disabled={votes === 1}
        onClick={() => handleVote(1)}
      >
        +
      </button>
      {article.votes + votes}
      <button
        className="vote-button"
        disabled={votes === -1}
        onClick={() => handleVote(-1)}
      >
        -
      </button>
      {optimisticMsg && <p className="message-alert">{optimisticMsg}</p>}
    </div>
  );
}

export default ArticleVotes;
