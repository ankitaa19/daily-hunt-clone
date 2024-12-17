const mongoose = require('mongoose');

// Define the Sport schema
const sportSchema = new mongoose.Schema({
    name: { type: String, required: true },  // Required field for the name of the sport
    category: { type: String, required: false }, // Optional category field
    players: { type: Number, required: false },  // Optional field for number of players
    description: { type: String, required: false }, // Optional description field
    url: { type: String, required: false }, // Optional URL for an image or related content
    publishedAt: { type: Date, default: Date.now } // Date field with default value
});


const Sport = mongoose.model('Sport', sportSchema);


module.exports = Sport;
