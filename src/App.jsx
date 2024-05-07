import React from "react";
import { useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ArticlesList from "./components/ArticlesList";
import ArticleCard from "./components/ArticleCard.jsx";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <ArticlesList />
    </div>
  );
}

export default App;
