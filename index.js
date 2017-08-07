const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//setup express app
const app = express();

//connect to mongoDB
// mongoose.connect('mongodb://localhost/shoesDB');

const mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/shoesDB";
mongoose.connect(mongoURL);

//overide mongoode promise with global promis
//because mongoose promise is depracated
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());

//initialise routes
app.use('/api', routes);

app.get('/', function(req,res){
  res.send('home')
})

//error handling middlware
app.use(function(err,req,res,next){
    res.status(422).send({error: err.message})
});
//setup port
const port = process.env.port || 3000;

//listen for requests
app.listen(port, function(){
    console.log('Now listening to Port Number: ' + port)
});
