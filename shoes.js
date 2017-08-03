module.exports = function(){
    //import shoesData from shoesData.js
    const ShoesData = require('./shoesData');
    //import BrandNames from brandNames.js
//    const BrandNames = require('./brandNames')

    //Stantiate ShoesData
    const shoesData = ShoesData();
    
    //Stantiate brandNames
//    const brandNames = BrandNames();
    
    const shoes = function(req, res){
        res.send(shoesData);
    };
     
    const brands = function(req, res){
        var selectedBrand = req.params.brandname;
        
        //loop through array
        var foundBrands = shoesData.find(function(brand){
            
            return selectedBrand === brand.brandName;     
        });
        
        if (!foundBrands){
            console.log("Invalid Brand")
        }
        
        //stringify shoesData
         var shoeString = (JSON.stringify(foundBrands));
        
        res.send("You have selected brand: " + selectedBrand + "" + shoeString);
    };
    
    
    const sizes = function(req, res){
        var selectedSize = req.params.size;
        // loop through array
        var foundSizes = shoesData.find(function(size){
            
            return size.size == selectedSize;
        });  
        
        if(!foundSizes){
            console.log("Invalid Size");
        }
        //stringify shoesData
        var shoeString = (JSON.stringify(foundSizes));
        
        res.send("You have selected size: " + selectedSize + "" + shoeString)
    };
    
    const brandsAndSizes = function(req, res){
        var selectedBrand = req.params.brandname;
        var selectedSize = req.params.size;
        
        shoesData.find(function(shoesData){
            if (shoesData.brandName != selectedBrand && shoesData.size != selectedSize){
                console.log("Invalid Selection");
            } 
            else if(shoesData.brandName == selectedBrand && shoesData.size == selectedSize){
                
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