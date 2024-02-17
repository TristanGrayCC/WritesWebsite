import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './Pages/Main/MainPage';
import reportWebVitals from './reportWebVitals';
import './App.scss'
import { HashRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './Pages/About/AboutPage';
import LanguagePage from './Pages/Language/LanguagePage';
import RecommendationsPage from './Pages/Recommendations/RecommendationsPage';
import OtherWritingPage from './Pages/OtherWriting/OtherWritingPage';
import BlogPage from './Pages/Blog/BlogPage';

const routing = (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/About" element={<AboutPage/>} />
        <Route path="/Blog" element={<BlogPage/>} />
        <Route path="/Languages" element={<LanguagePage/>} />
        <Route path="/Recommendations" element={<RecommendationsPage/>} />
        <Route path="/Writing" element={<OtherWritingPage/>} />
        </Routes>
    </HashRouter>
)

ReactDOM.render(routing, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
