const express = require('express'); //start requiring express (This is needed).
const app = express();  //Define the app as express invocated
const cors = require('cors'); //allows us to make requests from defferent devices w.o compromise

const PORT = process.env.PORT || 8000; // process.env.PORT is a requirement when we want to deploy the app to heroku our another place
                                       // they will tell us which PORT to deploy on. OR  run on PORT 8000

app.use(cors());
app.use(express.json()) // returns middleware that passes JSON as a response 

app.get('/', (req, res) => {  // first param is the path we are covering. // in the CB the first param is req 2nd res
    res.send("Hello from Nodemon"); //sends a response(res) saying the string given.
    req.send("ERROR :(")
})

app.listen(PORT, () => {                // telling the app which PORT to listen out for, either one provided to us or the default port
    console.log(`App is listening on PORT: ${PORT}`)
})