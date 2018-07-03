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
                res.send('Sorry, no movies in our database. Post new movie to add it.')
            }
            res.json(data);
        }, (data) => {
            res.send('Error while searching movies. ' + data)
        })
}

exports.createMovie = (req, res) => {
    let url = `${api}${req.body.title}`;
    
    if(!req.body.title) {
        res.send(`Missing argument 'title'. Make sure to post it in request body`);

    }
    
    fetch(url)
        .then(request => {
            if(!request.ok) {
                throw Error(request.status);
            }

            request.json()
                .then(data => {
                    if(data.Response === 'False') {
                        res.send('Sorry, there is no such movie in OMDB database. Try another one.')
                    }
                    db.movie.create(data)
                        .then(newMovie => {
                            res.json(newMovie)
                        })
                })
        }, (request)=> {
                        res.send('Sorry, there is no such movie in OMDB database. Try another one.')
        })

}


module.export = exports;