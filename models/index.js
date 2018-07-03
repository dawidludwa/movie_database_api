const mongoose = require("mongoose");

const url = process.env.DATABASEURL || 'mongodb://localhost/movies';
mongoose.connect(url);

mongoose.Promise = Promise;
mongoose.set('debug', 'true');

module.exports.movie = require("./movie")
module.exports.comment = require("./comment")