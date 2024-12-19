import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Manynews.css';

const Manynews = () => {
    const { news } = useParams();
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const newsEndpoints = {
        sports: 'http://localhost:5005/api/sports-news',
        business: 'http://localhost:5005/api/business',
        technology: 'http://localhost:5005/api/technology',
        entertainment: 'http://localhost:5005/api/entertainment',
        education: 'http://localhost:5005/api/education',
        crimes: 'http://localhost:5005/api/crimes',
        travel: 'http://localhost:5005/api/travel', // Example for additional category
    };

    const fetchNews = async () => {
        setLoading(true);
        setError(null);

        const endpoint = newsEndpoints[news];

        if (!endpoint) {
            setLoading(false);
            setError('Invalid news type');
            return;
        }

        try {
            const response = await fetch(endpoint);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setNewsData(data);
        } catch (error) {
            setError(`Error fetching news: ${error.message}`);
            console.error("Fetch error: ", error); // Log error for debugging
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNews();
    }, [news]);

    return (
        <div className="container">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && newsData.length === 0 && <p>No news available.</p>}
            {newsData.length > 0 && !loading && 
                newsData.map((item, index) => (
                    <div key={index} className="news-item">
                        <h3>{item.title}</h3>
                        <p>{item.description || 'No description available.'}</p>
                        <p>Date: {new Date(item.publishedAt).toLocaleDateString() || 'Invalid Date'}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Manynews;