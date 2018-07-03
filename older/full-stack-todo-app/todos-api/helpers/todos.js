const db = require("../models")

exports.getTodos = (req, res)=>{
    db.Todo.find()
    .then(data => {
        res.json(data);
    })
    .catch(err=>{
        res.send(err)
    })
}

exports.createTodo = (req, res) => {
    db.Todo.create(req.body)
    .then(newTodo => {
        res.json(newTodo)
    })
    .catch(err=>{
        res.send(err)
    })
}

exports.getTodo = (req, res)=> {
    db.Todo.findById(req.params.todoId)
    .then(todo=>res.json(todo))
    .catch(err=>res.send(err))
}

exports.updateTodo = (req, res)=> {
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then(todo => res.json(todo))
    .catch(err => res.send(err))
}

exports.deleteTodo = (req, res) => {
    db.Todo.remove({_id: req.params.todoId})
    .then(()=> res.send('deleted!'))
    .catch(err => res.send(err))
}

module.exports = exports;
