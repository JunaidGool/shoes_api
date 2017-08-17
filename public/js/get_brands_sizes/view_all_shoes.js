function view_all_shoes(){
    
      $.ajax({
    type: 'GET',
          
    url: 'http://localhost:9001/api/shoes',
          
    success: function(shoes){
        
        var shoesStock = shoes.stock;
        
       var filterSizeForBrand = filterSizeBrand(shoesStock);
        
        var filterBrandData = filterBrands(shoesStock);
        
        var filterSizeData = filterSizes(shoesStock);
         
        allShoes.innerHTML = allShoesTemplateInstance({stock: shoesStock});
        
        allBrands.innerHTML = allBrandsTemplateInstance({brandname: uniqueBrands});
        
        allSizes.innerHTML = allSizesTemplateInstance({size: uniqueSizes});
        
        brandList.innerHTML = brandListTemplateInstance({stock: shoesStock});
        
    },
    error: function(){
        
      alert:('Error Finding Shoes')
    }
  });
};
