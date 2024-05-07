import React from "react";

function ArticleCard({ article }) {
  return (
    <section>
      <h2> Title: {article.title}</h2>
      <h3>Author: {article.author}</h3>
      <p>Topic: {article.topic}</p>
    </section>
  );
}

export default ArticleCard;
