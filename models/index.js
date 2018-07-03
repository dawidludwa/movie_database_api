const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/movies')
mongoose.Promise = Promise;
mongoose.set('debug', 'true');

module.exports.movie = require("./movie")
module.exports.comment = require("./comment")