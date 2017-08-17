function filterBrands(shoes){
    
    for(i = 0; i < shoes.length; i++){
        
        var brandList = shoes[i].brand;
        
        var foundBrand = false;
        
        if(brandMap[brandList] === undefined){
            
            brandMap [brandList] = brandList;
            
            uniqueBrands.push(brandList);
            
        };
    };
};