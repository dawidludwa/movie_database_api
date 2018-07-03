const db = require("../models")

exports.getComments = (req, res) => {
    db.comment.find()
        .then(data => {
            if(data.length === 0) {
                res.send('Sorry, no comments in our database. Post new comment to add it.')
            }
            res.json(data)
        })
}

exports.addComment = (req, res) => {
    if(!req.body.references || !req.body.text) {
        res.send('Missing argument. Required pattern for adding comments: {text: [your_comment], references: [movie_id]}')
    }
    const movieId = req.body.references;
    db.movie.findById(movieId)
        .then(foundMovie => {
            db.comment.create({
                text: req.body.text,
                references: req.body.references
            })
            .then(newComment => {
                res.json(newComment)
            })
            
        },
        ()=> {
            res.send('Sorry, no such movie in our database. Try again');
        })
    

}

exports.filterComments = (req, res) => {
    db.comment.find({references: req.params.id})
        .then(results => {
            if(results.length === 0 ){
                res.json('No such movie id. Try again');
            }
            res.json(results);
        })
}

module.export = exports;