const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const movies = require("./routes/movies");
const comments = require("./routes/comments");


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send(
    `               Welcome to my API.
    
        To see all movies in database, GET: '/movies'
        
        to sort movies GET: '/movies/[order_by]/[direction]' 
                WHERE:      [order_by] = one of movie parameters, eg. Title, Year, imdbRating
                            [direction] = asc || desc   OR 1 || -1
                            
        
        to find and add a movie, POST to: '/movies' , sending in body '{title: [movie_title]}'
        
        to see all comments, GET: '/comments'
        
        to see all comments to specified movie, GET: '/comments/[movie_id] WHERE movie_id is included inside each movie object'
        
        to add a comment to movie, POST to '/comments' sending in body '{text: [your_comment], references: [movie_id]}'
    `)
})


app.use('/movies', movies);
app.use('/comments', comments);


app.listen(port, ()=> {
    console.log('Server is listening')
})