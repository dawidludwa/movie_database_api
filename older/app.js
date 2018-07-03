const express = require("express");
const mongoose = require("mongoose");
const app = express();      
const port = process.env.PORT || 3000;

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/test');

let testSchema = new mongoose.Schema({
    item: String
})

let Item = mongoose.model('item', testSchema);

Item.find()
.then((data) => console.log(data))




app.get('/', (req, res) => {
    res.send('ok')
})

app.post('/', (req, res)=>{
    res.send('post ok')
})

app.listen(port , () => console.log('server is listening'))