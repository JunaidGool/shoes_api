const express = require('express');


// Stantiate appliciation instance
const app = express();

//create deafult route
app.get('/', function(req, res){
    res.send('Home')
})

// allocate port number
const port = 3007;

// listen for port
app.listen(port, function(){
    console.log("Web App started on port: " + port)
});