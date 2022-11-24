const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    description: String,
    duration: Number,
    date: {type: Date, default: new Date()},
    
})

exports.default = exerciseSchema;