const express = require('express');
const exphbs = require('express-handlebars');


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

//configure express handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//create routes
app.get('/api/shoes', shoesRoutes.shoes);
app.get('/api/shoes/brands/:brandname', shoesRoutes.brands);
app.get('/api/shoes/sizes/:size', shoesRoutes.sizes);
app.get('/api/shoes/brands/:brandname/sizes/:size', shoesRoutes.brandsAndSizes);


// allocate port number
const port = 3007;

// listen for port
app.listen(port, function(){
    console.log("Web App started on port: " + port)
});