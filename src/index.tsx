import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./pages/Main/MainPage";
import reportWebVitals from "./reportWebVitals";
import "./App.scss";
import { HashRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/About/AboutPage";
import LanguagePage from "./pages/Language/LanguagePage";
import RecommendationsPage from "./pages/Recommendations/RecommendationsPage";
import OtherWritingPage from "./pages/OtherWriting/OtherWritingPage";
import BlogPage from "./pages/Blog/BlogPage";
import PaymentCompletePage from "./pages/Payment Complete/PaymentComplete";
import EdNoWriMo from "./pages/EdNoWriMo/EdNoWriMo";
import ConsultationResponsePage from "./pages/AIConsultation/ConsultationResponsePage";
import { createRoot } from "react-dom/client";

const routing = (
  <HashRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/Blog" element={<BlogPage />} />
      <Route path="/Languages" element={<LanguagePage />} />
      <Route path="/Recommendations" element={<RecommendationsPage />} />
      <Route path="/Writing" element={<OtherWritingPage />} />
      <Route path="/Payment" element={<PaymentCompletePage />} />
      <Route path="/EdNoWriMo" element={<EdNoWriMo />} />
      <Route path="/AIConsultation" element={<ConsultationResponsePage />} />
    </Routes>
  </HashRouter>
);

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(routing);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
