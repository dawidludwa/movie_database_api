const mongoose = require("mongoose");
mongoose.set('debug', 'true')
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/friends-api');


module.exports = require('./friend')
