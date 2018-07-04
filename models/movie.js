const mongoose = require("mongoose");
const Comment = require('./comment');

const movieSchema = new mongoose.Schema(
    {

      Title: {type: String, required: true},
      Year: Number,
      Rated: String,
      Released: Date,
      Runtime: String,
      Genre: String,
      Director: String,
      Writer: String,
      Actors: String,
      Plot: String,
      Language: String,
      Country: String,
      Awards: String,
      Poster: String,
      Ratings: Array,
      Metascore: {},
      imdbRating: {},
      imdbVotes: String,
      imdbID: String,
      Type: String,
      DVD: {},
      BoxOffice: String,
      Production: String,
      Website: String,
      Response: String
    }
)

let Movie = mongoose.model('movie', movieSchema);

module.exports = Movie;