// src/components/news/News.jsx
import React from "react";

const News = ({ title, content, author, category, date }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>
        <strong>Author:</strong> {author}
      </p>
      <p>
        <strong>Category:</strong> {category}
      </p>
      <p>
        <strong>Date:</strong> {new Date(date).toLocaleDateString()} {/* Format the date */}
      </p>
    </div>
  );
};

export default News;
