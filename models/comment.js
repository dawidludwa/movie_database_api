const mongoose = require("mongoose");
const db = require("../models");


const commentSchema = new mongoose.Schema({
    text: {
        type: String, 
        required: true
    },
    references: {
        type: String, 
        required: true}
})

const Comment = mongoose.model('comment', commentSchema);

module.exports = Comment;