const express = require("express");
const router = express.Router();
// automatically requires index.js from folder models
const db = require('../models');
const helpers = require("../helpers/todos")

router.get('/' )

router.route('/')
.get(helpers.getTodos)
.post(helpers.createTodo)


router.route('/:todoId')
.get(helpers.getTodo)
.put(helpers.updateTodo)
.delete(helpers.deleteTodo);

module.exports = router;