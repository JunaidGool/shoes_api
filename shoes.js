module.exports = function(){
    
    var shoesData = [
        {brandName : 'Addidas',
         color : 'Red',
         price : 350,
         in_stock : 5
        },
        {brandName : 'Nike',
         color : 'Blue', 
         price : 500,
         in_stock : 8
        },
        {brandName : 'Puma',
         color : 'White', 
         price : 250,
         in_stock : 10
        },
        
    ];
    
    const shoes = function(req, res){
        res.send(shoesData);
    };
    const brands = function(req, res){
        
        
        res.send('List all Brands'); 
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