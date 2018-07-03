const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    isDone :{
        type: Boolean,
        default: false
    }
})

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;