const mongoose = require('mongoose');

//create schema

const moduleSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true,
        trim: true
    },
    contents: [{
        contentName: {
            type: String,
            trim: true
        },
        contentUrl: {
            type: String,
            required: true
        },
        description: {
            type: String,
            trim: true
        }
    }]
});

//exports
module.exports = moduleSchema;