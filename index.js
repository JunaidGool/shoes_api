const express = require('express');
//import module from shoes.js
const ShoesRoutes = require('./shoes');

//Stantiate instance of ShoesRoutes
const shoesRoutes = ShoesRoutes();

// Stantiate appliciation instance
const app = express();

//create deafult route
app.get('/', function(req, res){
    res.send('Home')
});

//create routes
app.get('/api/shoes', shoesRoutes.shoes);
app.get('/api/shoes/brands', shoesRoutes.brands);
app.get('/api/shoes/sizes', shoesRoutes.sizes);

// allocate port number
const port = 3007;

// listen for port
app.listen(port, function(){
    console.log("Web App started on port: " + port)
});