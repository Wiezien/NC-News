import React from "react";
import { useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ArticlesList from "./components/ArticlesList";
import ArticleCard from "./components/ArticleCard.jsx";
import DetailedArticle from "./components/DetailedArticle.jsx";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path ="/articles/:article_id" element={<DetailedArticle />} />
      </Routes>
    </div>
  );
}

export default App;
