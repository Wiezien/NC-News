import axios from "axios";

const itemsAPI = axios.create({
    baseURL: "https://news-api-project-hnma.onrender.com/"
})

export function getAllArticles(){
    return itemsAPI.get('/api/articles')
}