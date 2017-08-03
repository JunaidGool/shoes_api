'use strict'
module.exports = function(app){
    
    var shoes = require('../controllers/shoesController')
    
// shoe app Routes
    app.get('/api/shoes', shoes.list_all_shoes);
    app.get('/api/shoes/brands/:brandname', shoes.list_all_brands);
    app.get('/api/shoes/sizes/:sizes', shoes.list_all_sizes);
    app.get('/api/shoes/brands/:brandname/sizes/:size', shoes.list_all_brands_and_sizes)
    
};