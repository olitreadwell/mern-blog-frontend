import { Link } from "react-router-dom";

import articles from "./article-content";

const ArticlesListPage = () => {
  return (
    <div>
      <h1>Articles List Page</h1>
      {articles.map((article) => (
        <Link
          className="article-list-item"
          to={`/articles/${article.name}`}
          key={article.name}>
          <h3>{article.title}</h3>
          <p>{article.content[0].substring(0, 150)} ...</p>
        </Link>
      ))}
    </div>
  );
};

export default ArticlesListPage;
