const express = require("express");
const router = express.Router();
const helpers = require("../helpers/comments");

router.route('/')
    .get(helpers.getComments)
    .post(helpers.addComment)

router.route('/:id')
    .get(helpers.filterComments)

module.exports = router;