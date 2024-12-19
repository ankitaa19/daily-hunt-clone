const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
    imagePath: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    uploadedAt: {
        type: Date,
        default: Date.now,
    },
});

const Upload = mongoose.model('Upload', uploadSchema);

module.exports = Upload;
