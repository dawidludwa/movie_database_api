const express = require("express");
const router = express.Router();
const db = require("../models")


router.get('/', (req, res) => {
    db.Friend.find()
    .then(data => {
        res.json(data);
    })
    .catch(err=>{
        res.send(err)
    })
})

module.exports = router;