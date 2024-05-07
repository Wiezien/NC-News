import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import ArticleCard from "./ArticleCard";

function DetailedArticle() {
  const { article_id } = useParams();

  const [article, setArticle] = useState(null);

  useEffect(() => {
    getArticleById(article_id).then((response) => {
      setArticle(response.data.article);
    });
  }, [article_id]);

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <div id="single-article">
      <h2 id="article-title">{article.title}</h2>
      <ul id="article-list">
        <li>* Author: {article.author}</li>
        <li>* Topic: {article.topic}</li>
        <li id="article-body">{article.body}</li>
        <li>* Created At: {article.created_at}</li>
        <li>* Votes: {article.votes}</li>
      </ul>
      <img src={article.article_img_url} alt="article.title" id="article-image" />
    </div>
  );
}

export default DetailedArticle;
