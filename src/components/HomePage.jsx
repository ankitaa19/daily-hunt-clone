// src/components/HomePage.jsx
import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [articles, setArticles] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=e576cb718a2d491ea3a0d053c125c375');

        
        console.log('Response Status:', response.status);

        if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.statusText);
        }
        
        const result = await response.json();
        setArticles(result.articles); 
      } catch (error) {
        console.error('Fetch error:', error); // Log any fetch errors
        setError(error); // Set error state
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    };

    fetchData(); // Call the fetch function
  }, []);

  // Render loading state
  if (loading) return <div>Loading...</div>;

  // Render error state
  if (error) return <div>Error: {error.message}</div>;

  // Render articles
  return (
    <div>
      <h1>For You</h1>
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <div key={index} className="article">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        ))
      ) : (
        <p>No articles available.</p>
      )}
    </div>
  );
}

export default HomePage;
