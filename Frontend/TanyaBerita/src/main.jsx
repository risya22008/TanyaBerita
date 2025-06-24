// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/variables.css'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ArticleList from './pages/ArticleList.jsx'
import Home from './pages/Home.jsx'
import Article from './pages/Article.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="*" element={<Home />} />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)