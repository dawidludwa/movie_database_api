const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res)=> {
    res.send(`Try route - /api/todos`)
})

app.use('/api/todos', todoRoutes)

app.listen(port, ()=>{
    console.log(`I'm listening, lord..`)
})