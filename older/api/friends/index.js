const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const routes = require("./routes/friendsRoutes");
const bodyParser = require("body-parser")

app.use('/api/friends', routes);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.get('/', (req, res) => 
    res.send('Welcome to home page!')
)

app.listen(port, ()=> console.log('listening!'))

