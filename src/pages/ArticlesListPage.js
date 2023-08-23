// components
import ArticlesList from "../components/ArticlesList";

// data
import articles from "./article-content";

const ArticlesListPage = () => (
    <>
        <h1>Articles List Page</h1>
        <ArticlesList articles={articles} />
    </>
);

export default ArticlesListPage;
