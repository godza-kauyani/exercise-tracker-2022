const mongoose = require('mongoose');
const exercisesSchema = require('./exercises')

const usernameSchema = mongoose.Schema({
    username: {type: String,required: true},
    exercises:[exercisesSchema]
});

module.exports = mongoose.model("Username",usernameSchema);