function filterBrandsAndsizes(shoes, selectedBrand){
    
    var shoesStock = shoes.stock;
    
    for(i=0; i<shoesStock.length; i++){
        
        var brand = shoesStock[i].brand;
        var size = shoesStock[i].size;
        var color = shoesStock[i].color;
        var price = shoesStock[i].price;
        
        if(selectedBrand === brand){
                       
            brands_sizes_array.push({
                brand: brand,
                size: size,
                color: color,
                price: price
            }); 
        };
    };
};
