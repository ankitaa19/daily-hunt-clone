const express = require('express');
const Sport = require('/Users/ankitalokhande/Desktop/Mern-Project/backend/sports-api/models/Sports.js'); // Ensure this path is correct
const router = express.Router();

// Get all sports news
router.get('/', async (req, res) => {
    try {
        const sports = await Sport.find();
        console.log('Fetched sports data:', sports); 
        res.status(200).json(sports);
    } catch (error) {
        console.error('Error fetching sports:', error);
        res.status(500).json({ message: error.message });
    }
});

// Create a new sport
router.post('/', async (req, res) => {
    console.log(req.body); 

    const { name, category, players, description, url, publishedAt } = req.body;

    const sport = new Sport({
        name, // Required
        category, // Optional
        players, // Optional
        description, // Optional
        url, // Optional
        publishedAt // Optional
    });

    try {
        await sport.save();
        res.status(201).send(sport);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

module.exports = router;
