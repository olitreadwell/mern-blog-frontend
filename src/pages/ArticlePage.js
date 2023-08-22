// external imports
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// internal imports
import NotFoundPage from "./NotFoundPage";
import CommentsList from "../components/CommentsList";

// Data
import articles from "./article-content";

const ArticlePage = () => {
  // get the articleId from the URL
  const { articleId } = useParams();
  
  // set the articleInfo state to an object with upvotes and comments
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
  
  
  useEffect(() => {
    const loadArticleInfo = async (articleId) => {
      const response = await axios.get(`/api/v1/articles/${articleId}`);
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    };

    loadArticleInfo(articleId);

  }, [articleId]);
  

  const article = articles.find(article => article.name === articleId);
 
  if (!article) return (<NotFoundPage />);
  
  return (
    <>
      <h1>{article.title}</h1>
      <p>This post has been upvoted {articleInfo.upvotes} times</p>
      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <CommentsList comments={articleInfo.comments} />
    </>
  );
}

export default ArticlePage;