import "./App.css";
import { Routes, Route } from "react-router-dom";

// Components
import NavBar from "./components/NavBar";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesListPage from "./pages/ArticlesListPage";
import ArticlePage from "./pages/ArticlePage";
import NotFoundPage from "./pages/NotFoundPage";
import CreatAccountPage from "./pages/CreateAccountPage";
import LoginPage from "./pages/LoginPage";

function App() {
    return (
        <main className="App">
            <NavBar />
            <section id="page-body">
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
                        path="/login"
                        element={<LoginPage />}
                    />
                    <Route
                        path="/create-account"
                        element={<CreatAccountPage />}
                    />
                    <Route
                        path="*"
                        element={<NotFoundPage />}
                    />
                </Routes>
            </section>
        </main>
    );
}

export default App;
