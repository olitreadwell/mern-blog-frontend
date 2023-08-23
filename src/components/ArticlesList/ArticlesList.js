import styles from './ArticlesList.module.css';

import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => (
    <>
        {articles.map((article) => (
            <Link
                className={styles["article-list-item"]}
                to={`/articles/${article.name}`}
                key={article.name}>
                <h3>{article.title}</h3>
                <p>{article.content[0].substring(0, 150)} ...</p>
            </Link>
        ))}
    </>
);

export default ArticlesList;