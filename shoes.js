module.exports = function(){
    //import shoesData from shoesData.js
    const ShoesData = require('./shoesData');
    //import BrandNames from brandNames.js
    const BrandNames = require('./brandNames');
    
    //Stantiate ShoesData
    const shoesData = ShoesData();
    
    //Stantiate BrandNames
    const brandNames = BrandNames(shoesData);
       
    const shoes = function(req, res){
        res.send(shoesData);
    };
    const brands = function(req, res){

        res.send(brandNames); 
    };
    const sizes = function(req, res){
        res.send('List all Sizes');
    };
    
    return{
        shoes,
        brands,
        sizes
    } 
};