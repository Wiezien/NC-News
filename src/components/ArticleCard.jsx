import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DetailedArticle from "./DetailedArticle";

function ArticleCard({ article }) {
  return (
    <section key={article.article_id} className="article">
      <h2>{article.title}</h2>
      <h3>By {article.author}</h3>
      <p>Topic: {article.topic}</p>
      <Link to={`/articles/${article.article_id}`}>
        <button id="article-btn">Select Article</button>
      </Link>
    </section>
  );
}

export default ArticleCard;
