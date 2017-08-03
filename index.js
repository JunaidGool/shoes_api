const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const Shoes = require('./shoesApi/api/models/shoesModel');
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json 
app.use(bodyParser.json());


//import module from shoes.js
const routes = require('./shoesApi/api/routes/shoesRoutes');

// Stantiate appliciation instance
const app = express();

//Stantiate instance of ShoesRoutes
const shoesRoutes = routes(app);

//create deafult route
app.get('/', function(req, res){
    res.send('Home')
});

//configure express handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// allocate port number
const port = process.env.PORT || 3007;

// listen for port
app.listen(port, function(){
    console.log("Shoe API started on port: " + port)
});