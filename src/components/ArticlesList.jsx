import React from "react";
import { useEffect, useState } from "react";
import { getAllArticles } from "../api";
import ArticleCard from "./ArticleCard.jsx";

function ArticlesList() {
  const [allArticles, setAllArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getAllArticles()
      .then((response) => {
        setLoading(false);
        setAllArticles(response.data.articles);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);

  if (error) {
    return <p>Oh no we can't find your article!</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {allArticles.map((article) => (
        <ArticleCard key={article.title} article={article} />
      ))}
    </div>
  );
}

export default ArticlesList;
