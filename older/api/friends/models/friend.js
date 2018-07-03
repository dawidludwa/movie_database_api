const mongoose = require("mongoose");

var friendSchema = new mongoose.Schema({
    name: String
})



var Friend = mongoose.model('friend', friendSchema);

module.exports = Friend;