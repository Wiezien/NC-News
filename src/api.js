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

export function getCommentsByArticleId(article_id) {
    return newsAPI.get(`api/articles/${article_id}/comments`).then((data) => {
        return data;
    });
}

export function patchVotesByArticleId(article_id, newVote) {
  return newsAPI.patch(`api/articles/${article_id}`, {inc_votes: newVote}).then((data) => {
    return data;
  });
}
