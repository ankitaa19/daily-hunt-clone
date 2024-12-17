import axios from 'axios';

const apiUrl = 'http://localhost:5005/api/sports'; // Your sports API URL

// Fetch all sports articles
export const fetchSportsArticles = async () => {
  try {
    const response = await axios.get(apiUrl); // GET request to fetch articles
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch sports articles: ' + error.message);
  }
};

// Send a new sports article
export const sendSportsArticle = async (articleData) => {
  try {
    const response = await axios.post(apiUrl, articleData); // POST request to add a new article
    return response.data;
  } catch (error) {
    throw new Error('Failed to send sports article: ' + error.message);
  }
};
