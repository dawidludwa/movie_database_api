const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const todoRoutes = require("./routes/todoRoutes")


app.use('/api/todos',todoRoutes)

app.get('/', (req, res) => {
    res.send('ok!')
})


app.listen(port, ()=>{
    console.log('listening!')
})