module.exports = function(){
    
    const shoes = function(req, res){
        res.send('List of all Shoes');
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