import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";
import DetailedArticle from "./DetailedArticle";

function ArticleCard({ article, onSelectArticle }) {
  
  return (
    <section className="article">
      <h2> Title: {article.title}</h2>
      <h3>Author: {article.author}</h3>
      <p>Topic: {article.topic}</p>
      <Link to={`/articles/${article.article_id}`}>
      <button id="article-btn" onClick={() => onSelectArticle(article.id)}>Select Article</button>
      </Link>
    </section>
  );
}

export default ArticleCard;
