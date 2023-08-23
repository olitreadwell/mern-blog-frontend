// external imports
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// internal imports
import NotFoundPage from "./NotFoundPage";
import CommentsList from "../components/CommentsList/CommentsList";
import AddCommentForm from "../components/AddCommentForm";

// Data
import articles from "./article-content";

const ArticlePage = () => {
    // get the articleId from the URL
    const { articleId } = useParams();

    // set the articleInfo state to an object with upvotes and comments
    const [articleInfo, setArticleInfo] = useState({
        upvotes: 0,
        comments: [],
    });

    useEffect(() => {
        const loadArticleInfo = async (articleId) => {
            const response = await axios.get(`/api/v1/articles/${articleId}`);
            const newArticleInfo = response.data;
            setArticleInfo(newArticleInfo);
        };

        loadArticleInfo(articleId);
    }, [articleId]);

    const article = articles.find((article) => article.name === articleId);

    const addUpvote = async () => {
        const response = await axios.put(
            `/api/v1/articles/${articleId}/upvote`
        );
        const updatedArticleInfo = response.data;
        setArticleInfo(updatedArticleInfo);
    };

    if (!article) return <NotFoundPage />;

    return (
        <>
            <h1>{article.title}</h1>
            <div className="upvotes-section">
                <button onClick={() => addUpvote()}>Add Upvote</button>
                <p>This post has been upvoted {articleInfo.upvotes} times</p>
            </div>
            {article.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
            <AddCommentForm
                articleId={articleId}
                onUpdatedArticle={(updatedArticleInfo) =>
                    setArticleInfo(updatedArticleInfo)
                }
            />

            <CommentsList comments={articleInfo.comments} />
        </>
    );
};

export default ArticlePage;
