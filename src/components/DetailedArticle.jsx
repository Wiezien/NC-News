import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getCommentsByArticleId } from "../api";
import CommentCard from "./CommentCard";
import ArticleVotes from "./ArticleVotes";

function DetailedArticle() {
  const { article_id } = useParams();

  const [article, setArticle] = useState(null);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    getArticleById(article_id).then((response) => {
      setArticle(response.data.article);
    });
    getCommentsByArticleId(article_id).then((response) => {
      setComments(response.data.comments);
    });
  }, [article_id]);

  if (!article) {
    return <p>Loading...</p>;
  }

  if (!comments) {
    return <p>Loading...</p>;
  }

  return (
    <div id="single-article">
      <h2 id="article-title">{article.title}</h2>
      <ul key={article.id} id="article-list">
        <li>* By: {article.author}</li>
        <li>* Topic: {article.topic}</li>
        <li id="article-body">{article.body}</li>
        <li>* Timestamp: {article.created_at}</li>
        <li>* Votes: {article.votes}</li>
      </ul>
      <ArticleVotes article={article} currentVotes={article.votes} />
      <img
        src={article.article_img_url}
        alt={article.title}
        id="article-image"
      />
      <CommentCard key={comments.id} comments={comments} />
    </div>
  );
}

export default DetailedArticle;
