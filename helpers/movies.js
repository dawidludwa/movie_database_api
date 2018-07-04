const db = require("../models");
const api = 'https://www.omdbapi.com/?apikey=6dd8de07&t=';
const fetch = require("isomorphic-fetch");


exports.filterMovies = (req, res) => {
    const order = req.params.order;
    const direction = req.params.direction;
    db.movie.find()
        .sort({[order]: [direction]})
        .then(data => {
            if(data.length === 0) {
                res.send('Sorry, no movies in our database. Post new movie to add it.')
            }
            res.json(data);
    })
}

exports.getMovies = (req, res) => {
    db.movie.find()
        .then(data => {
            if(data.length === 0) {
                res.json({
                    Error: 'No such movies in database. Try to add one'
                })
            }
            res.json(data);
        }, (data) => {
            res.send('Error while searching movies. ' + data)
        })
}

exports.createMovie = (req, res) => {
    if(!req.body.Title) {
        res.json({Error: 'No movie title provided'});
        res.end()
    } else {
    
    let url = `${api}${req.body.Title}`;
    console.log('URL: ' + url)
    req.setTimeout(4000, ()=> {
        res.send(503)
    });
    
    fetch(url)
        .then(request => {
            if(!request.ok) {
                throw Error(request.status);
            }
            request.json()
                .then(data => {
                    if(data.Response === 'False' || data.Error || data.Title === undefined) {
                        res.json(data);
                        res.end();
                    }
                    db.movie.create(data)
                        .then(newMovie => {
                            res.json(newMovie)
                        })
                        .catch(err => {
                            throw Error(err)
                        })
                })
        }, (request)=> {
                        res.json({Error: 'Sorry, there is no such movie in OMDB database. Try another one.'})
        })
    }
}


module.export = exports;