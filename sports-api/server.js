const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const sportsRouter = require('./routes/sports.js');

const app = express();
const PORT = process.env.PORT || 5005;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev')); // Logging middleware

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/daily-hunt', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));


// API Routes
app.use('/api/sports', sportsRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
