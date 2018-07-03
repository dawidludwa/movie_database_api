const mongoose = require("mongoose");
// mongoose.connect('mongodb://localhost/movies');
mongoose.connect('mongodb://mmicalt:Roka1991@ds125241.mlab.com:25241/movies_api_database')
mongoose.Promise = Promise;
mongoose.set('debug', 'true');

module.exports.movie = require("./movie")
module.exports.comment = require("./comment")