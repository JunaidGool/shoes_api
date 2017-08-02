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
        
        var selectedBrand = req.params.brandname;
        
        //loop through array
        shoesData.find(function(shoesData){
            if(shoesData.brandName == selectedBrand){
                //stringify shoesData
                var shoeString = (JSON.stringify(shoesData));
                
                res.send("You have selected brand: " + selectedBrand + shoeString);
            }
        
        });
    };
    
    
    const sizes = function(req, res){
        var selectedSize = req.params.size;

        shoesData.find(function(shoesData){
            if(shoesData.size == selectedSize){
                //stringify shoesData
                var shoeString = (JSON.stringify(shoesData));
                
               res.send("You have selected shoe size: " + selectedSize + shoeString);
            }
        });  
    };
    
    const brandsAndSizes = function(req, res){
        var selectedBrand = req.params.brandname;
        var selectedSize = req.params.size;
        
        shoesData.find(function(shoesData){
            if(shoesData.brandName == selectedBrand && shoesData.size == selectedSize){
                //stringify shoesData
                var shoeString = (JSON.stringify(shoesData));
                
                 res.send("You have selected shoe size: " + selectedSize + "and brand: " + selectedBrand + shoeString);
            }
            
        });
    };
    
    return{
        shoes,
        brands,
        sizes,
        brandsAndSizes
    } 
};