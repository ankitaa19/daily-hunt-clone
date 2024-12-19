import React, { useState } from "react";
import './News.css'; // Import the CSS file for the News component

const newsData = [
  {
    title: "Global Economic Outlook for 2024",
    date: "01/10/2024",
    description: "Experts provide insights into the global economic outlook as we approach the end of the year.",
    image: "https://cdn.statcdn.com/Infographic/images/normal/30490.jpeg",
  },
  {
    title: "Startups Leading the Charge in AI Development",
    date: "15/10/2024",
    description: "Startups are playing a key role in advancing AI technologies and applications across various sectors.",
    image: "https://cdn.statcdn.com/Infographic/images/normal/32063.jpeg",
  },
  {
    title: "New Trends in Consumer Behavior",
    date: "05/11/2024",
    description: "Shifts in consumer behavior are impacting businesses, prompting them to adapt their strategies.",
    image: "https://www.consultancy.in/illustrations/news/detail/2019-10-22-192400548-Emerging-consumer-behaviour-in-India.jpg",
  },
  // Add more news items as needed
];

const News = () => {
  const [likes, setLikes] = useState(Array(newsData.length).fill(0));
  const [comments, setComments] = useState(Array(newsData.length).fill([]));

  const handleLike = (index) => {
    const updatedLikes = [...likes];
    updatedLikes[index] += 1;
    setLikes(updatedLikes);
  };

  const handleComment = (index, comment) => {
    const updatedComments = [...comments];
    updatedComments[index] = [...updatedComments[index], comment];
    setComments(updatedComments);
  };

  return (
    <div className="main-content">
      <h1 className="news-title">News Updates</h1>
      {newsData.map((news, index) => (
        <div className="news-post" key={index}>
          <div className="image-container">
            <img src={news.image} alt={news.title} className="news-image" />
          </div>
          <h2 className="news-title">{news.title}</h2>
          <p className="news-date"><strong>Date:</strong> {news.date}</p>
          <p className="news-description">{news.description}</p>
          <div className="news-actions">
            <button
              className="like-button"
              onClick={() => handleLike(index)}
            >
              Like ({likes[index]})
            </button>
            <button
              className="share-button"
              onClick={() => alert("Sharing feature coming soon!")}
            >
              Share
            </button>
          </div>
          <div className="comments-section">
            <h3>Comments</h3>
            <ul>
              {comments[index].map((comment, commentIndex) => (
                <li key={commentIndex}>{comment}</li>
              ))}
            </ul>
            <input
              type="text"
              placeholder="Add a comment"
              className="comment-input"
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.target.value) {
                  handleComment(index, e.target.value);
                  e.target.value = "";
                }
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
