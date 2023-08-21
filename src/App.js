import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import NavBar from "./NavBar";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesListPage from "./pages/ArticlesListPage";
import ArticlePage from "./pages/ArticlePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />
            <Route
              path="/about"
              element={<AboutPage />}
            />
            <Route
              path="/articles"
              element={<ArticlesListPage />}
            />
            <Route
              path="/articles/:articleId"
              element={<ArticlePage />}
            />
            <Route
              path="*"
              element={<NotFoundPage />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
