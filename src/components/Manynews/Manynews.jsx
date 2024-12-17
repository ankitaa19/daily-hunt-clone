import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation for route checking
import './Manynews.css';

const Manynews = () => {
    const [news, setNews] = useState([]);
    const location = useLocation(); // Get the current location

    const fetchNews = async () => {
        try {
            const response = await fetch('http://localhost:5005/api/sports');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setNews(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        if (location.pathname === '/sports') { // Fetch news only if we are on the sports route
            fetchNews();
        }
    }, [location.pathname]); // Run the effect whenever the path changes

    // Only render news if on the sports route
    if (location.pathname !== '/sports') {
        return null; // Hide if not on the sports page
    }

    return (
        <div className="container">
            {news.length > 0 ? (
                news.map((item, index) => (
                    <div key={index} className="news-item">
                        <h3>{item.name}</h3>
                        <p>Date: {new Date(item.publishedAt).toLocaleDateString() || 'Invalid Date'}</p>
                    </div>
                ))
            ) : (
                <p>No sports news available.</p> // Message when no news is present
            )}
        </div>
    );
};

export default Manynews;
