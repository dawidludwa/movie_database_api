const express = require("express");
const router = express.Router();
const helpers = require("../helpers/movies");

router.route('/:order/:direction')
    .get(helpers.filterMovies)

router.route('/')
    .get(helpers.getMovies)
    .post(helpers.createMovie)


module.exports = router;