import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://news-api-project-hnma.onrender.com/",
});

export function getAllArticles() {
  return newsAPI.get("/api/articles");
}

export function getArticleById(article_id) {
  return newsAPI.get(`/api/articles/${article_id}`).then((data) => {
    return data;
  });
}
