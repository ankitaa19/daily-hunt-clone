
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ForYouPage.css'; 

const ForYouPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=tesla&from=2024-11-11&sortBy=publishedAt&apiKey=e576cb718a2d491ea3a0d053c125c375');
      setArticles(response.data.articles);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  if (loading) {
    return <div>Loading articles...</div>;
  }

  if (error) {
    return <div>Error loading articles: {error.message}</div>;
  }

  return (
    <div className="for-you-page">
      <h2>For You</h2>
      {articles.map((article, index) => (
        <div key={index} className="article">
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      ))}
    </div>
  );
};

export default ForYouPage;
